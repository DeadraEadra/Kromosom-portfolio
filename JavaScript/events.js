// Declare variables and select all the elements with the class "slide" & "dot"
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;

function prevSlide(n){
  index+=n;
  console.log("prevSlide is called");
  changeSlide();
}

function nextSlide(n){
  index+=n;
  changeSlide();
}

changeSlide();

function changeSlide(){
  
  // if the index value is bigger than the slideshow nr. of images (length)
  if(index>slides.length-1)
  index=0; // then show the first image in the slideshow

  // if the index value is less than the slideshow nr. of pages (length)
  if(index<0)
  index=slides.length-1; // then show the last image in the slideshow

  // as the value of "i" increases until it reaches the value of the slides length (nr. of images in the slideshow)
  // then execute this "for"
  for(let i=0;i<slides.length;i++){
  slides[i].style.display = "none"; // hide the previous image
  dots[i].classList.remove("active"); // remove the active status of the specific dot of the previous image
  }

  slides[index].style.display = "block"; // show the actual image
  dots[index].classList.add("active"); // add the active status of the specific dot of the actual image
}