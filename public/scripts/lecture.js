(function() {
  // ui
  const mainElement = document.querySelector('.lecture');
  document.querySelector('.show-aside-button').onclick = () => mainElement.classList.add('main--active-show-aside');
  document.querySelector('.close-aside-button').onclick = () => mainElement.classList.remove('main--active-show-aside');
  document.querySelector('.shadow-opacity').onclick = () => mainElement.classList.remove('main--active-show-aside');

  // data
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

  const paramStr = decodeURI(location.hash).split('?')[1];
  const paramArr = paramStr.split('&');
  const paramObject = {};
  paramArr.forEach((str) => {
    const [ key, value ] = str.split('=');
    paramObject[key] = value;
  })

  const requestUrl = `/edu/${paramObject.lec}/${paramObject.page}`;
  get(requestUrl).then((res) => {
    const {
      index,
      titles,
      content,
      src,
    } = JSON.parse(res);
    
    const lectureElement = document.querySelector('.lecture-list-item')
    const copyable = lectureElement.querySelector('.lecture-link');
    lectureElement.innerHTML = '';
    titles.forEach((title, index) => {
      const el = copyable.cloneNode();
      el.innerHTML = title;
      el.href = `#edu?lec=${paramObject.lec}&page=${index}`;
      lectureElement.appendChild(el);
    })

    console.log(document.querySelector('.youtube-iframe').src);
    document.querySelector('.article-title').innerHTML = titles[index];
    document.querySelector('.article-contents').innerHTML = content;
    document.querySelector('.youtube-iframe').src = src;
  })
})();