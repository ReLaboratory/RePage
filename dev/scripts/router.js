(() => {
  const app = document.querySelector('#app');
  const navigation = document.querySelector('.top-nav');

  const render = html => {
    app.innerHTML = html;
    eval(document.querySelector('script').innerText);
  };

  function get(url) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('GET', url);
      req.send();

      req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) resolve(req.response);
          else reject(req.statusText);
        }
      };
    });
  }

  const routes = {
    '/'() {
      get('/data/landing.html').then(render);
    },
    '/select'() {
      get('/data/select.html').then(render);
    },
    '/lecture'() {
      get('/data/lecture.html').then(render);
    },
    otherwise(path) {
      app.innerHTML = `${path} Not Found`;
    }
  };

  function router(path) {
    (routes[path] || routes.otherwise)(path);
  }

  window.addEventListener('popstate', e => {
    console.log('[popstate]', e.state);
    // 이전페이지 / 다음페이지 button이 클릭되면 router를 호출
    router(e.state.path);
  });

  navigation.addEventListener('click', e => {
    if (!e.target || !e.target.classList.contains('link')) return;
    e.preventDefault();
    console.log('hello');
    const path = e.target.getAttribute('href');

    history.pushState({ path }, null, path);
    router(path);
  });

  // 웹페이지가 처음 로딩되었을 때
  router('/');
})();