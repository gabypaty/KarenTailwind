const boton = document.querySelector('#button');
const menuS = document.querySelector('#menuSmall');
const closes = document.querySelector('#close');
const newM = document.querySelector('#new');
const newMenu = document.querySelector('#newMenu');
const menuStick = document.querySelector('#sticky2');


document.getElementById('container').onscroll = function () {
  console.log("scrolling");
  menuStick.classList.toggle('hidden')
};

boton.addEventListener('click', () => {
  console.log('hiciste click')
  menuS.classList.toggle('hidden');
});

newM.addEventListener('click', () => {
  newMenu.classList.toggle('hidden')
});

// Slider 1
function nextSlide() {
  let activeSlide = document.querySelector('.slide.translate-x-0');
  activeSlide.classList.remove('translate-x-0');
  activeSlide.classList.add('-translate-x-full');

  let nextSlide = activeSlide.nextElementSibling;
  nextSlide.classList.remove('translate-x-full');
  nextSlide.classList.add('translate-x-0');
}

function previousSlide() {
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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


// Scroll

window.onscroll = function () {
  // Obtenemos la posicion del scroll en pantall
  var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  console.log(scroll);
  // Realizamos alguna accion cuando el scroll este entre la posicion 300 y 400
  if (scroll > 300 && scroll < 400) {
      console.log("Pasaste la posicion 300 del scroll");
  }
}

//Slider 1 termina

//Slider 2 

let image = 0;
showS();

function showS() {
  let i;
  let images = document.getElementsByClassName("mySlider");
  let dots = document.getElementsByClassName("dot");
  console.log('img', images.length)
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  image++;
  if (image > images.length) { image = 1 }

  images[image - 1].style.display = "block";
  setTimeout(showS, 2000); // Change image every 2 seconds
}
//FIN SLIDER 2


