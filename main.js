'use strict';

// Make navbar transparent to dark color
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link, target);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Home Contact me
const homeContact = document.querySelector('.home__contact');
homeContact.addEventListener('click', (e) => {
  const hmeContact = document.querySelector('#home_contact');
  const target = hmeContact;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link, target);
  addRemoveActive(target);
});

//  Make home slowly fade to transparent
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show 'arrow up' button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
  const target = document.getElementById('nav_main');
  scrollIntoView('#home', target);
});

function scrollIntoView(selector, target) {
  const scrollTo = document.querySelector(selector);
  addRemoveActive(target);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

function addRemoveActive(target) {
  const navMenuItem = document.querySelectorAll('.navbar__menu__item');
  navMenuItem.forEach((el) => el.classList.remove('active'));
  target.classList.add('active');
}
