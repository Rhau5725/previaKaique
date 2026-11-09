const modal = document.querySelector('#booking-modal');
const form = document.querySelector('#booking-form');
const menuButton = document.querySelector('.menu-toggle');
const openBooking = () => { modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); document.body.classList.add('menu-open'); modal.querySelector('input').focus(); };
const closeBooking = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); document.body.classList.remove('menu-open'); };
document.querySelectorAll('[data-open-booking]').forEach((button) => button.addEventListener('click', openBooking));
document.querySelector('.modal-close').addEventListener('click', closeBooking);
modal.addEventListener('click', (event) => { if (event.target === modal) closeBooking(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeBooking(); });
form.addEventListener('submit', (event) => { event.preventDefault(); form.hidden = true; modal.querySelector('.form-success').hidden = false; });
const dateInput = document.querySelector('input[type="date"]');
dateInput.min = new Date().toISOString().split('T')[0];
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  document.querySelector('.desktop-nav').classList.toggle('mobile-nav', !open);
});
document.querySelectorAll('.desktop-nav a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false'); document.querySelector('.desktop-nav').classList.remove('mobile-nav');
}));
