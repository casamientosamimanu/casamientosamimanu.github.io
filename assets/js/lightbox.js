var slideIndex = 1;

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "flex";
  document.body.style.overflow = 'hidden';
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.body.style.overflow = 'auto';
}

// Next/previous controls
function plusSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = parseInt(n);
  showSlides(slideIndex);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0) return;
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "flex";
  }
}