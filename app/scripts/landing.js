window.onload = function() {

  var scrollDownIcon = document.getElementsByClassName('header__scroll-down-icon');
  var mainEl= document.getElementsByClassName('main');
  scrollDownIcon[0].onclick = function() {
    mainEl[0].scrollIntoView({behavior: 'smooth'});
  }
}