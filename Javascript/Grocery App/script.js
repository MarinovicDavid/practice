//Storing elements in variables
const list = document.getElementById('list')
const clearList = document.getElementById('clear')
const add = document.getElementById('add')
const input = document.getElementById('input')

add.addEventListener('click', addItem)

//Clears the entire list
clearList.addEventListener('click', () => { list.innerHTML = '' })

//Adds a desired item on the list

function addItem() {
  const item = input.value
  if (item.length < 2) {
    alert("Item too short")
  } else {
    list.innerHTML += `<li>${item}</li>`
  }
  input.value = ''
}