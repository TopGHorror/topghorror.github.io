function setFeatured() {

  var currentFeatured = [23, 24, 25, 26];

  getPosters(currentFeatured);
  getCaptions(currentFeatured);
  showSlides();
}

function getPosters(current) {

  for(i = 0; i < featured.length; i++) {

    if(current.indexOf(i+1) > -1) {

      var poster = document.createElement("div");
      poster.classList.add("mySlides", "fade");

      var postLink = document.createElement("a");
      postLink.href = featured[i].Link;

      var postImg = document.createElement("img");
      postImg.classList.add("featuredImg");
      postImg.src = "img/featured/featured" + featured[i].ImgRef + ".jpg";
      postLink.appendChild(postImg);

      poster.appendChild(postLink);

      document.getElementsByClassName("slideshow-container")[0].appendChild(poster);
    }
  }
}

function getCaptions(current) {

  for(i = 0; i < featured.length; i++) {

    if(current.indexOf(i+1) > -1) {

      var caption = document.createElement("div");
      caption.classList.add("myCaptions");

      var capTitle = document.createElement("h3");
      capTitle.innerHTML = featured[i].Title;
      caption.appendChild(capTitle);

      var capSummary = document.createElement("p");
      capSummary.innerHTML = featured[i].Summary;
      caption.appendChild(capSummary);

      document.getElementsByClassName("slideshow-caption")[0].appendChild(caption);
    }
  }
}

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

function pswd(input) {

  var cs = "raimi";
  var cd = "carpenter";
  var td = "cronenberg";

  if(input.toLowerCase() === cs || input.toLowerCase() === cd || input.toLowerCase() === td) {
    return true;
  } else {
    return false;
  }
}
