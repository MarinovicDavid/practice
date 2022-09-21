const display = document.getElementById('display')

const buttons = Array.from(document.getElementsByClassName('button'))

const clear = document.getElementById('clear')
const equal = document.getElementById('equal')
const back = document.getElementById('back')

buttons.map(button => {
  button.addEventListener('mousedown', (e) => {
    switch (button) {
      case clear:
        display.innerText = ''
        break
      case back:
        display.innerText = display.innerText.slice(0, -1)
        break
      case equal:
        try {
          display.innerText = eval(display.innerText)
          break
        } catch {
          display.innerText = "ERROR!"
          break
        }
      default:
        display.innerText += e.target.innerText
    }
  })
})