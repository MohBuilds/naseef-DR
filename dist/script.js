const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.journal-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  cards.forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
}));
const gallery = document.querySelector('#gallery');
cards.forEach(card => card.addEventListener('click', () => {
  const image = document.querySelector('#dialog-image');
  image.src = 'assets/' + card.dataset.image;
  image.alt = card.querySelector('img').alt;
  document.querySelector('#dialog-title').textContent = card.dataset.title;
  document.querySelector('#dialog-description').textContent = card.dataset.description;
  gallery.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => gallery.close());
gallery.addEventListener('click', event => { if (event.target === gallery) { const rect = gallery.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) gallery.close(); } });
document.querySelector('#copy-email').addEventListener('click', async () => {
  const toast = document.querySelector('#toast');
  try { await navigator.clipboard.writeText('naseefabdulquadri533@gmail.com'); toast.textContent = 'Email address copied'; }
  catch { toast.textContent = 'Please use the email link to get in touch.'; }
  toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3500);
});
document.querySelector('#year').textContent = new Date().getFullYear();
