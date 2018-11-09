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
function loadScript(url, callback) {  
  const scriptEl = document.createElement('script');
  scriptEl.type = 'text/javascript';
  scriptEl.onload = callback
  scriptEl.src = url;
  document.body.appendChild(scriptEl);
}