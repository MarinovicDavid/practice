const banner = document.querySelectorAll('.banner')
const message = document.getElementById('message')
const chat = document.getElementById('chat')

let count = 0

setInterval(function () { changeSlide() }, 5000)

function changeSlide() {
  if (count === 2) {
    banner[0].classList.add('active')
    banner[count].classList.remove('active')
    count = 0
  } else {
    banner[count + 1].classList.add('active')
    banner[count].classList.remove('active')
    count++
  }
}

message.addEventListener('click', () => {
  document.querySelector('.send').classList.toggle('on')
  document.getElementById('msgbtn').classList.toggle('on')
})

chat.addEventListener('click', () => {
  document.querySelector('.send').classList.toggle('on')
  document.getElementById('msgbtn').classList.toggle('on')
})
