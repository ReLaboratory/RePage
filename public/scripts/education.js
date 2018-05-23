window.onload = function() {

  const showAsideButton = document.querySelector('.show-aside-button');
  const closeAsideButton = document.querySelector('.close-aside-button')
  const shadow = document.querySelector('.shadow-opacity');
  const mainElement = document.querySelector('.main');
  // click button to show aside
  showAsideButton.onclick = () => mainElement.classList.add('main--active-show-aside');
  // click button to close aside
  closeAsideButton.onclick = () => mainElement.classList.remove('main--active-show-aside');
  // click shadow background to close aside
  shadow.onclick = () => mainElement.classList.remove('main--active-show-aside');
}