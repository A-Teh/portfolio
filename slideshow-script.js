let current = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

document.getElementById('slideshow').addEventListener('click', () => {
    nextSlide()
  });

// Show first slide
showSlide(current);
