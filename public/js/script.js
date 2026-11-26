const appearance = window.portfolioAppearance;
appearance.apply();
document.querySelectorAll('[data-theme-choice]').forEach(button => button.addEventListener('click', () => appearance.set(button.dataset.themeChoice)));
const photographs = [
  { path: 'images/outreach/health-awareness-group.webp', title: 'Health awareness, in the community', description: 'A photograph from community health outreach, with participants sharing health education posters.', alt: 'Community health outreach group gathered outdoors with health education posters' },
  { path: 'images/community/orphanage-group.webp', title: 'City of Refuge F & G Orphanage Home', description: 'A group photograph from a community visit.', alt: 'A group visiting City of Refuge F and G Orphanage Home' },
  { path: 'images/education/unilorin-centre-visit.webp', title: 'At the University of Ilorin', description: 'A visit to the Technical and Entrepreneurship Centre.', alt: 'Visitors at the University of Ilorin Technical and Entrepreneurship Centre' },
  { path: 'images/community/orphanage-visit-group.webp', title: 'Another moment from the visit', description: 'Outside City of Refuge F & G Orphanage Home.', alt: 'Three visitors outside City of Refuge F and G Orphanage Home' },
  { path: 'images/outreach/health-awareness-wide.webp', title: 'A shared commitment to health education', description: 'Another photograph from the supplied outreach collection.', alt: 'Community health awareness group with posters beneath trees' }
];
const gallery = document.querySelector('#gallery');
let currentPhoto = 0;
let galleryOpener;
function renderPhoto(index) {
  currentPhoto = (index + photographs.length) % photographs.length;
  const photo = photographs[currentPhoto];
  const image = document.querySelector('#gallery-image');
  image.src = 'assets/' + photo.path; image.alt = photo.alt;
  document.querySelector('#gallery-title').textContent = photo.title;
  document.querySelector('#gallery-description').textContent = photo.description;
  document.querySelector('#gallery-count').textContent = `${currentPhoto + 1} / ${photographs.length}`;
}
function openGallery(index, opener) { galleryOpener = opener; renderPhoto(index); gallery.showModal(); document.body.classList.add('modal-open'); }
document.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', () => openGallery(Number(button.dataset.photo), button)));
document.querySelector('#open-gallery').addEventListener('click', event => openGallery(0, event.currentTarget));
document.querySelector('.gallery-close').addEventListener('click', () => gallery.close());
document.querySelector('.gallery-prev').addEventListener('click', () => renderPhoto(currentPhoto - 1));
document.querySelector('.gallery-next').addEventListener('click', () => renderPhoto(currentPhoto + 1));
gallery.addEventListener('keydown', event => { if (event.key === 'ArrowLeft') { event.preventDefault(); renderPhoto(currentPhoto - 1); } if (event.key === 'ArrowRight') { event.preventDefault(); renderPhoto(currentPhoto + 1); } });
gallery.addEventListener('click', event => { if (event.target !== gallery) return; const rect = gallery.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) gallery.close(); });
gallery.addEventListener('close', () => { document.body.classList.remove('modal-open'); galleryOpener?.focus(); });
let toastTimer;
document.querySelector('#copy-email').addEventListener('click', async () => {
  const toast = document.querySelector('#toast');
  try { await navigator.clipboard.writeText('naseefabdulquadri533@gmail.com'); toast.textContent = 'Email address copied.'; } catch { toast.textContent = 'Please use the email link to get in touch.'; }
  clearTimeout(toastTimer); toast.classList.add('show'); toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
});
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('.personal-video').addEventListener('toggle', event => { if (!event.currentTarget.open) event.currentTarget.querySelector('video').pause(); });
if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver(entries => { for (const entry of entries) { if (!entry.isIntersecting) continue; navLinks.forEach(link => { if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }); } }, { rootMargin: '-15% 0px -50% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
