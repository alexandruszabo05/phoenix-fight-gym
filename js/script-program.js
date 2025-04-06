'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnModal = document.querySelector('.btn--modal');
const formInput = document.querySelectorAll('.form-input');
const form = document.querySelector('.modal-form');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnModal.addEventListener('click', function (e) {
  e.preventDefault();
  if (form.checkValidity()) {
    closeModal();
    setTimeout(() => {
      alert('Îți mulțumim! Te vom contacta în curând.');
    }, 500);
  } else {
    e.preventDefault();
    alert('Te rugăm să completezi formularul în mod corespunzător!');
  }
  form.reset();
});

///////////////////////////////////////
// Reveal sections

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

///////////////////////////////////////
// Display message before header
const nav = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('message');
message.innerHTML =
  '<i class="fa-solid fa-envelope email-icon"></i> contact@phoenix-team.ro';
nav.before(message);

///////////////////////////////////////
// Accordion Component
const items = document.querySelectorAll('.item');

const openContent = function (e) {
  e.preventDefault();
  const item = e.currentTarget.closest('.item');
  item.classList.toggle('open');
};

items.forEach(btn => btn.addEventListener('click', openContent));

///////////////////////////////////////////////////////////
// Mobile nav

const btnNavEl = document.querySelector('.btn-mobile-nav');

btnNavEl.addEventListener('click', function () {
  nav.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////
// Colored nav links
const links = document.querySelectorAll('.nav-link--link');
const currentPage = window.location.pathname;

links.forEach(link => {
  if (link.pathname === currentPage) {
    link.classList.add('red-link');
  }
});
