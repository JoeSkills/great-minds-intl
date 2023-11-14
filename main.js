import './style.css';
import Swiper, { Autoplay } from 'swiper';
import 'swiper/css';

feather.replace();

const menuToggleBtn = document.querySelector('.mobile-nav-menu');
const menuIcon = document.querySelector('.feather-menu');
const closeIcon = document.querySelector('.feather-close');
const navigationMenu = document.querySelector('.navigation');
const toTop = document.querySelector('.to-top');

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
  grabCursor: true,
  loop: true,
});

menuToggleBtn.addEventListener('click', () => {
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
  navigationMenu.classList.toggle('hidden');
});

const accordion = document.getElementsByClassName('contentBx');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', () => {
    accordion[i].classList.toggle('active');
  });
}

document.addEventListener('scroll', () => {
  const navigationBar = document.querySelector('.navbar');
  const mobileMenuNav = document.querySelector('.mobile-nav-menu');

  if (window.scrollY > 0) {
    navigationBar.classList.add('scrolled');
    mobileMenuNav.classList.add('scrolled');
  } else {
    navigationBar.classList.remove('scrolled');
    mobileMenuNav.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});
