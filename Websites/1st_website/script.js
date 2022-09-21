const light = document.querySelector('.button')

light.addEventListener('click', (e) => {
  const html = document.querySelector('html')

  if (html.classList.contains('light')) {
    html.classList.remove('light')
    e.target.innerHTML = 'LIGHT'
  } else {
    html.classList.add('light')
    e.target.innerHTML = 'DARK'
  }
})

light.addEventListener('click', (e) => {
  const body = document.querySelector('body')

  if (body.classList.contains('light')) {
    body.classList.remove('light')
    e.target.innerHTML = 'LIGHT'
  } else {
    body.classList.add('light')
    e.target.innerHTML = 'DARK'
  }
})
