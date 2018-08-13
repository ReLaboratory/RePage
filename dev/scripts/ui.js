window.onload = () => {
  // landing ui script start
  const scrollDownIcon = document.querySelector('.header__scroll-down-button');
  scrollDownIcon.onclick = function scrollDownToScrollTarget() {
    document.querySelector('.scroll-target').scrollIntoView({behavior: 'smooth'});
  }
  // landing ui script end

  // landing animation start
  const intro = document.querySelector('.intro');
  const header = document.querySelector('.header');
  const particles = document.querySelector('#particles-js');
  const CLASS_NAME = 'active-intro';
  const naviColorAni = function ifScrollYIsBiggerThanIntroChangeColorAndDeleteParticles(e) {
    if(window.scrollY >= intro.offsetTop - 60) {
      document.body.classList.add(CLASS_NAME);
      header.removeChild(particles);
    } else {
      document.body.classList.remove(CLASS_NAME);
      if (!document.querySelector('#particles-js')) header.appendChild(particles);
    }
  }

  const remembersSection = document.querySelector('.intro-remembers');
  const remembersSlideAni = function ifScrollYisBiggerThanRemembersSectionAddAnimationClass(e) {
    if(remembersSection.getBoundingClientRect().top <= 400) {
      window.removeEventListener(e.type, remembersAnimation);
      remembersSection.classList.add('animation--remembers');
    }
  }

  window.addEventListener('scroll', naviColorAni);
  window.addEventListener('scroll', remembersSlideAni);
  // landing animation end

  // particles library start
  particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }
  );
  // particles library end

  // lecture ui script start
  const mainElement = document.querySelector('.main');
  // click button to show aside
  document.querySelector('.show-aside-button').onclick = () => mainElement.classList.add('main--active-show-aside');
  // click button to close aside
  document.querySelector('.close-aside-button').onclick = () => mainElement.classList.remove('main--active-show-aside');
  // click shadow background to close aside
  document.querySelector('.shadow-opacity').onclick = () => mainElement.classList.remove('main--active-show-aside');
  // lecture ui script end
}