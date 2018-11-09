(function () {
  // data rendering
  const remembers = [{
    name: '김원준',
    major: 'Web',
    githubLink: 'https://github.com/KimWonJun',
    facebookLink: 'https://www.facebook.com/kim1jun',
  },{
    name: '나승채',
    major: 'Computer Architecture',
    githubLink: 'https://github.com/TikaWorld',
    facebookLink: 'https://www.facebook.com/profile.php?id=100015172599499',
  }, {
    name: '박준현',
    major: 'Forensic',
    githubLink: 'https://github.com/JunHyunJunHyun',
    facebookLink: 'https://www.facebook.com/m1o2l3e',
  }, {
    name: '연준모',
    major: 'Web',
    githubLink: 'https://github.com/Yeondooo',
    facebookLink: 'https://www.facebook.com/profile.php?id=100009246228971',
  }, {
    name: '윤효상',
    major: 'Network',
    githubLink: 'https://github.com/yhs7496',
    facebookLink: 'https://www.facebook.com/profile.php?id=100006513853017',
  }, {
    name: '이석진',
    major: 'Game Server',
    githubLink: 'http://github.com/Othereum',
    facebookLink: 'https://www.facebook.com/profile.php?id=100011656855934',
  }, {
    name: '이성현',
    major: 'IOT',
    githubLink: 'https://github.com/joooosan',
    facebookLink: 'https://www.facebook.com/profile.php?id=100012909600203',
  }, {
    name: '정지우',
    major: 'Design',
    githubLink: 'https://github.com/KingSpongebob',
    facebookLink: 'https://www.facebook.com/profile.php?id=100014038693137',
  }, {
    name: '차태민',
    major: 'System',
    githubLink: 'https://github.com/HubCodes',
    facebookLink: 'https://www.facebook.com/profile.php?id=100015559397224',
  }];
  const remembersEl = document.querySelector('.remembers');
  const rememberEl = document.querySelector('.remember');
  rememberEl.remove();

  remembers.forEach(({ name, major, githubLink, facebookLink }, i) => {
    const targetEl = rememberEl.cloneNode(true);
    targetEl.querySelector('[data-name]').innerText = name;
    targetEl.querySelector('[data-major]').innerText = major;
    targetEl.querySelector('[data-github]').href = githubLink;
    targetEl.querySelector('[data-facebook]').href = facebookLink;
    remembersEl.appendChild(targetEl);
  })

  // ui
  const scrollDownIcon = document.querySelector('.header__scroll-down-button');
  scrollDownIcon.onclick = function scrollDownToScrollTarget() {
    document.querySelector('.scroll-target').scrollIntoView({ behavior: 'smooth' });
  }

  // animation
  const intro = document.querySelector('.intro');
  const header = document.querySelector('.header');
  const CLASS_NAME = 'active-header';
  const naviColorAni = (e) => {
    const method = (window.scrollY >= intro.offsetTop - 60) ? 'remove' : 'add';
    document.body.classList[method](CLASS_NAME);
  }
  const remembersSection = document.querySelector('.intro-remembers');
  const remembersSlideAni = (e) => {
    if (remembersSection.getBoundingClientRect().top <= 400) {
      window.removeEventListener(e.type, remembersSlideAni);
      remembersSection.classList.add('animation--remembers');
    }
  }
  window.addEventListener('scroll', naviColorAni);
  window.addEventListener('scroll', remembersSlideAni);

  // first loaded
  naviColorAni();

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
})();