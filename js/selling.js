var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-card");
  if (n > slides.length - 2) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length - 2}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = slideIndex; i < slideIndex + 2; i++) {
    slides[i].style.display = "block";
  }
}