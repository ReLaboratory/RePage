(() => {
  const app = document.querySelector('#app');
  const navigation = document.querySelector('.top-nav');

  function rendered() {
    document.body.className = '';
  }

  const renderHtml = (html) => {
    app.innerHTML = html;
    rendered();
  };

  const routes = {
    ''() {
      get('/view/landing.html').then(renderHtml);
      loadScript('/scripts/landing.js');
    },
    'select'() {
      get('/view/select.html').then(renderHtml);
      loadScript('/scripts/select.js');
    },
    'edu'() {
      get('/view/lecture.html').then(renderHtml);
      loadScript('/scripts/lecture.js');
    },
    otherwise(hash) {
      app.innerHTML = `${hash} Not Found`;
    }
  };

  function router() {
    const hash = location.hash.substr(1).split('?')[0];
    (routes[hash] || routes.otherwise)(hash);
  }

  window.addEventListener('hashchange', router);
  window.addEventListener('DOMContentLoaded', router);
})();