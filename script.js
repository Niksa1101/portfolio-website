function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = imageSrc;
  lightbox.classList.remove('hidden');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.add('hidden');
}

function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  const isEnglish = document.documentElement.lang === 'en';
  elements.forEach(el => {
    el.textContent = el.getAttribute(isEnglish ? 'data-sr' : 'data-en');
  });
  document.documentElement.lang = isEnglish ? 'sr' : 'en';
}
