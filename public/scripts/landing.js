(function () {
  // data rendering
  const data = {
    paragraph1: 'Re는 다양한 분야의 구성원들이 각자의 연구와 계발을 하는 단체입니다. Re라는 접두사는 다른 단어와 조합해 새로운 단어가 만들어지듯이, 구성원들은 서로 융합하고 협력한다는 뜻을 가지고 있습니다.',
    paragraph2: '단순히 개인만의 연구 성과를 도출하기 위한 단체가 아니며 개인의 발전 뿐만 아니라 서로의 기술을 융합하여 함께 발전하는 것이 목적입니다. 자신이 배우고자 하는 부분을 연구하며 개인 프로젝트를 진행하고, 융합하고 싶은 멤버끼리 함께 융합 프로젝트를 진행합니다.',
    introRemember: '구성원들은 Re의 멤버, \'Remember\'라고 호칭합니다.<br/>우리는 연령대, 출신, 성별 등의 요소들을 고려하지 않습니다.<br>그저 자신이 특정 분야에 관심이 있고, 그 관심 분야를 공부할 때 즐거움을 느끼기만 한다면 누구나 Remember가 될 수 있습니다.',
    remembers: [{
      name: '김원준',
      major: 'Web',
      githubLink: 'https://github.com/KimWonJun',
      facebookLink: 'https://www.facebook.com/kim1jun',
      profileImgPath: '/images/profile1.png',
    },{
      name: '나승채',
      major: 'Computer Architecture',
      githubLink: 'https://github.com/TikaWorld',
      facebookLink: 'https://www.facebook.com/profile.php?id=100015172599499',
      profileImgPath: '/images/profile2.png',
    }, {
      name: '박준현',
      major: 'Forensic',
      githubLink: 'https://github.com/JunHyunJunHyun',
      facebookLink: 'https://www.facebook.com/m1o2l3e',
      profileImgPath: '/images/profile3.png',
    }, {
      name: '연준모',
      major: 'Web',
      githubLink: 'https://github.com/Yeondooo',
      facebookLink: 'https://www.facebook.com/profile.php?id=100009246228971',
      profileImgPath: '/images/profile4.png',
    }, {
      name: '윤효상',
      major: 'Network',
      githubLink: 'https://github.com/yhs7496',
      facebookLink: 'https://www.facebook.com/profile.php?id=100006513853017',
      profileImgPath: '/images/profile5.png',
    }, {
      name: '이석진',
      major: 'Game Server',
      githubLink: 'http://github.com/Othereum',
      facebookLink: 'https://www.facebook.com/profile.php?id=100011656855934',
      profileImgPath: '/images/profile6.png',
    }, {
      name: '이성현',
      major: 'IOT',
      githubLink: 'https://github.com/joooosan',
      facebookLink: 'https://www.facebook.com/profile.php?id=100012909600203',
      profileImgPath: '/images/profile7.png',
    }, {
      name: '정지우',
      major: 'Design',
      githubLink: 'https://github.com/KingSpongebob',
      facebookLink: 'https://www.facebook.com/profile.php?id=100014038693137',
      profileImgPath: '../images/profile8.png',
    }, {
      name: '차태민',
      major: 'System',
      githubLink: 'https://github.com/HubCodes',
      facebookLink: 'https://www.facebook.com/profile.php?id=100015559397224',
      profileImgPath: '../images/profile9.png',
    }],
  };

  const renderReSection = () => {
    document.querySelector('[data-paragraph-1]').innerHTML = data.paragraph1;
    document.querySelector('[data-paragraph-2]').innerHTML = data.paragraph2;
  }

  const renderRememberSection = () => {
    document.querySelector('[data-intro-remember]').innerHTML = data.introRemember;

    const remembersEl = document.querySelector('.remembers');
    const rememberEl = remembersEl.querySelector('.remember');
    rememberEl.remove();

    data.remembers.forEach(({ name, major, githubLink, facebookLink, profileImgPath }, i) => {
      const targetEl = rememberEl.cloneNode(true);
      targetEl.style.animationDelay = `${0.5 + (i * 0.2)}s`;
      targetEl.querySelector('[data-name]').innerText = name;
      targetEl.querySelector('[data-major]').innerText = major;
      targetEl.querySelector('[data-github]').href = githubLink;
      targetEl.querySelector('[data-facebook]').href = facebookLink;
      targetEl.querySelector('[data-profile]').style.backgroundImage = `url('${profileImgPath}')`;
      targetEl.querySelector('[data-profile]').style.backgroundRepeat = 'no-repeat';
      targetEl.querySelector('[data-profile]').style.backgroundPosition = 'center center';
      targetEl.querySelector('[data-profile]').style.backgroundSize = '70px';
      remembersEl.appendChild(targetEl);
    })
  }
  // excute
  renderReSection();
  renderRememberSection();

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

  // add event listener
  window.addEventListener('scroll', naviColorAni);
  window.addEventListener('scroll', remembersSlideAni);

  // first loaded
  naviColorAni();

  // particles library
  loadScript('/scripts/particles.min.js', () => {
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
  })
})();