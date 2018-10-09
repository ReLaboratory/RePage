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
    ''() {
      get('/data/landing.html').then(render);
    },
    'select'() {
      get('/data/select.html').then(render);
    },
    'lecture'() {
      get('/data/lecture.html').then(render);
    },
    otherwise(hash) {
      app.innerHTML = `${hash} Not Found`;
    }
  };

  function router() {
    const hash = location.hash.substr(1);
    (routes[hash] || routes.otherwise)(hash);
  }

  window.addEventListener('hashchange', router);
  window.addEventListener('DOMContentLoaded', router);
})();