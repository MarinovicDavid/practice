//Storing elements in variables
const list = document.getElementById('list')
const clearList = document.getElementById('clear')
const addItem = document.getElementById('add')
const input = document.getElementById('input')

//Adds functionality to "Add Item" button,
//Checks if the item word is too short,
//Adds the item along with plus and minus buttons,
//Clears the input field
addItem.addEventListener('click', () => {
  const item = input.value
  const itemPlus = `<button id="more">+</button>`
  const itemMinus = `<button id="less">-</button>`
  if (item.length < 2) {
    alert("Item too short")
    input.value = ''
  } else {
    if (list.innerHTML += `<li>${itemPlus}${item}${itemMinus}</li>`) {
      input.value = ''
    }
  }
})

//Clears the entire list
clearList.addEventListener('click', () => {
  list.innerHTML = ''
})
