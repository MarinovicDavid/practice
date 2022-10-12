button.addEventListener('click', () => {
  let one = generateRandomColor()
  let two = generateRandomColor()
  let three = generateRandomColor()
  let four = generateRandomColor()
  let five = generateRandomColor()
  let six = generateRandomColor()
  let seven = generateRandomColor()
  let eight = generateRandomColor()
  let nine = generateRandomColor()
  let ten = generateRandomColor()
  let eleven = generateRandomColor()
  let twelve = generateRandomColor()

  let randomColors = `${one} 0%, ${two} 25%, ${three} 37%,${four} 44%, ${five} 52%, ${six} 60%,${seven} 66%, ${eight} 72%, ${nine} 80%,${ten} 86%, ${eleven} 93%, ${twelve} 100%`

  bg.style.backgroundImage = `radial-gradient(${randomColors})`
})

function generateRandomNumber(low, high) {
  let random = Math.floor(Math.random() * (high - low + 1)) + low
  return random
}

function generateRandomColor() {
  let characters = '0123456789ABCDEF'
  let color = '#'

  for (let i = 0; i < 6; i++) {
    color += characters[generateRandomNumber(0, 15)]
  }
  return color
}