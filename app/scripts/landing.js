window.onload = function() {
  
  var scrollDownIcon = document.getElementsByClassName('header__scroll-down-icon');
  scrollDownIcon[0].onclick = function() {
    document.getElementsByClassName('section--introduce')[0].scrollIntoView({behavior: 'smooth'});
  }

}