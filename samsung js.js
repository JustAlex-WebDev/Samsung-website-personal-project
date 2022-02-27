var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var bms = document.getElementsByClassName("bm");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  /*makes the other slides disappear after clicking on a dot for example*/
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  /*decreases the dot's opacity after not beign active*/
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  for (i = 0; i < bms.length; i++) {
      bms[i].className = bms[i].className.replace(" active2", "");
  }

  /*makes the slides appear*/
  slides[slideIndex-1].style.display = "block";

  /*increases the opacity of the active dot to see where you are*/
  dots[slideIndex-1].className += " active";

  bms[slideIndex-1].className += " active2";
} 































