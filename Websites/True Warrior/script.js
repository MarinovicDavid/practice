const button = document.querySelector('.button')

button.addEventListener('click', (e) => {
  const main = document.querySelector('.main')
  const container = document.querySelector('.main-container')

  if (main.classList.contains('dark')) {
    main.classList.remove('dark')
    container.classList.remove('dark')
  } else {
    main.classList.add('dark')
    container.classList.add('dark')
  }
})

const menu = document.getElementById('btn')
const nav = document.getElementById('ul')
const main = document.querySelector('.main')

menu.addEventListener('click', (e) => {
  menu.classList.toggle('active')
  nav.classList.toggle('active')
  main.classList.toggle('active')

})