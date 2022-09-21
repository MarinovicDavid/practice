const slides = document.querySelectorAll('.slide')
const left = document.getElementById('left')
const right = document.getElementById('right')

let activeSlide = 0

right.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  setActiveSlide()
})

left.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }
  setActiveSlide()
})


showSlides();

const jet = document.querySelector('.jet')
jet.addEventListener('click', () => {
  jet.classList.toggle('active')
})

const jet2 = document.querySelector('.jet2')
jet2.addEventListener('click', () => {
  jet2.classList.toggle('active')
})

const toggle = document.querySelector('.toggle')
const menu = document.querySelector('.side-menu')
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  menu.classList.toggle('active')
})


const droneText = document.querySelector('.drone')
window.addEventListener('scroll', textAnimation)
textAnimation()

function textAnimation() {
  const trigger = window.innerHeight * 1.2

  const textTop = droneText.getBoundingClientRect().top

  if (textTop < trigger) {
    droneText.classList.add('text')
  } else {
    droneText.classList.remove('text')
  }
}

function setActiveSlide() {
  slides.forEach(slide => slide.classList.remove('active'))
  slides[activeSlide].classList.add('active')
}


function showSlides() {
  let i;

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  activeSlide++;
  if (activeSlide > slides.length) { activeSlide = 1 }
  slides[activeSlide - 1].classList.add('active');
  setTimeout(showSlides, 4000);
}

