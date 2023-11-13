import './style.css';

const menuToggleBtn = document.querySelector('.mobile-nav-menu');
const menuIcon = document.querySelector('.feather-menu');
const closeIcon = document.querySelector('.feather-close');
const navigationMenu = document.querySelector('.navigation');

feather.replace();

menuToggleBtn.addEventListener('click', () => {
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
  navigationMenu.classList.toggle('hidden');
});

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
