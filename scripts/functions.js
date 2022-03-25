function showSlides() {

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captions = document.getElementsByClassName("myCaptions");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    captions[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  captions[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000);
}

function toggleMobile() {

  var x = document.getElementById("mobileSidebar");
  var y = document.getElementById("mobilePaypal");

  if (x.className === "navbar") {
    x.className += " responsive";
    y.className += " responsive";
  } else {
    x.className = "navbar";
    y.className = "mobileSidebar";
  }
}

function openYear(evt, year) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(year).style.display = "block";
  evt.currentTarget.className += " active";
}
