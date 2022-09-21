const bg = document.querySelector('.container')
const button = document.getElementById('button')
const gold = document.querySelector('.gold')
const diamond = document.querySelector('.diamond')

let chance

button.addEventListener('mousedown', () => {
  let one = Math.floor(Math.random() * 16777215).toString(16);
  let two = Math.floor(Math.random() * 16777215).toString(16);
  let three = Math.floor(Math.random() * 16777215).toString(16);
  let four = Math.floor(Math.random() * 16777215).toString(16);
  let five = Math.floor(Math.random() * 16777215).toString(16);
  let six = Math.floor(Math.random() * 16777215).toString(16);
  let seven = Math.floor(Math.random() * 16777215).toString(16);
  let eight = Math.floor(Math.random() * 16777215).toString(16);
  let nine = Math.floor(Math.random() * 16777215).toString(16);
  let ten = Math.floor(Math.random() * 16777215).toString(16);
  let eleven = Math.floor(Math.random() * 16777215).toString(16);
  let twelve = Math.floor(Math.random() * 16777215).toString(16);

  let random = `#${check(one)} 0%, #${check(two)} 25%, #${check(three)} 37%,#${check(four)} 44%, #${check(five)} 52%, #${check(six)} 60%,#${check(seven)} 66%, #${check(eight)} 72%, #${check(nine)} 80%,#${check(ten)} 86%, #${check(eleven)} 93%, #${check(twelve)} 100%`

  bg.style.backgroundImage = `radial-gradient(${random})`
})

function check(num) {
  if (num.length != 6) {
    num = Math.floor(Math.random() * 16777215).toString(16);
    console.log(`${num} Level 1`)
    if (num.length != 6) {
      num = Math.floor(Math.random() * 16777215).toString(16);
      console.log(`${num} Level 2`)
      if (num.length != 6) {
        alert("0.2% chance!")
        num = Math.floor(Math.random() * 16777215).toString(16);
        console.log(`${num} Level 3`)
        if (num.length != 6) {
          alert("UNREAL! 0.0001% chance! Go to casino!")
        }
      }
    }
  }

  return num
}