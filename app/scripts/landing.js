window.onload = function() {

  var scrollDownIcon = document.getElementsByClassName('header__scroll-down-icon');
  var main= document.getElementsByClassName('main');
  scrollDownIcon[0].onclick = function() {
    main[0].scrollIntoView({behavior: 'smooth'});
  }
}