const boton = document.querySelector('#button');
const menuS = document.querySelector('#menuSmall');
const closes = document.querySelector('#close');
const newM = document.querySelector('#new');
const newMenu = document.querySelector('#newMenu');

boton.addEventListener('click', () => {
    console.log('hiciste click')
    menuS.classList.toggle('hidden');
});

newM.addEventListener('click', () => {
    newMenu.classList.toggle('hidden')
});

function nextSlide(){
    let activeSlide = document.querySelector('.slide.translate-x-0');
    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add('-translate-x-full');
    
    let nextSlide = activeSlide.nextElementSibling;
    nextSlide.classList.remove('translate-x-full');
    nextSlide.classList.add('translate-x-0');
}

function previousSlide(){
    let activeSlide = document.querySelector('.slide.translate-x-0');
    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add('translate-x-full');
    
    let previousSlide = activeSlide.previousElementSibling;
 
};

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


let slideImage = 1;
showImages(slideImage);

function next(n) {
  showImages(slideImage += n);
}

function current(n) {
  showImages(slideImage = n);
}

function showImages(n) {
  let im;
  let images = document.getElementsByClassName("imageSlides");   
  if (n < 1) {slideImage = images.length}
  for (im = 0; im < images.length; im++) {
    images[im].style.display = "none";  
  }
  
  images[slideImage-1].style.display = "block";  
 
}