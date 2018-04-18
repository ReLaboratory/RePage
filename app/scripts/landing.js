window.onload = function() {
  
  var scrollDownIcon = document.querySelector('.header__scroll-down-button');
  scrollDownIcon.onclick = function() {
    document.querySelector('.section').scrollIntoView({behavior: 'smooth'});
  }

  window.onscroll = function() {
    // if(window.scrollY >=)
    // console.log(document.querySelector('.section').)
  }
}