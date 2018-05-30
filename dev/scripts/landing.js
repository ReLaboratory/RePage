window.onload = () => {

  // scroll down button event
  // in header
  const scrollDownIcon = document.querySelector('.header__scroll-down-button');
  scrollDownIcon.onclick = () => {
    document.querySelector('.scroll-target').scrollIntoView({behavior: 'smooth'});
  }
  
  // navigation color animation
  // in introduce-reliablers section
  const reliablersSection = document.querySelector('.section--introduce-reliablers');
  const navAni = document.querySelector('.for-bg-ani');
  const navigationStyle = (e) => {
    if(window.scrollY >= reliablersSection.offsetTop - 60
       && window.scrollY <= reliablersSection.offsetHeight + reliablersSection.offsetTop) {
      navAni.classList.add('introduce-reliablers-navigation');
    } else {
      navAni.classList.remove('introduce-reliablers-navigation');
    }
  }

  // visual animation
  // in introduce-remembers section
  const remembersSection = document.querySelector('.section--introduce-remembers');
  const remembersAnimation = (e) => {
    if(remembersSection.getBoundingClientRect().top <= 400) {
      window.removeEventListener(e.type, remembersAnimation);
      remembersSection.classList.add('animation--remembers');
    }
  }

  // add scroll event
  window.addEventListener('scroll', navigationStyle);
  window.addEventListener('scroll', remembersAnimation);

  // particles library
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
}