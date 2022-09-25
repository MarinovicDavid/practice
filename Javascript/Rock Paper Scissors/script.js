const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

let enemy


Game()


function checkWinner() {
  if (player === "rock") {
    if (enemy === "paper") {
      alert("You Lose!")
    } else if (enemy === "rock") {
      alert("Draw!")
    } else {
      alert("You Win!")
    }
  }
  if (player === "paper") {
    if (enemy === "scissors") {
      alert("You Lose!")
    } else if (enemy === "paper") {
      alert("Draw")
    } else {
      alert("You Win!")
    }
  }
  if (player === "scissors") {
    if (enemy === "rock") {
      alert("You Lose!")
    } else if (enemy === "paper") {
      alert("You Win!")
    } else {
      alert("Draw!")
    }
  }
}

function enemyPick() {
  var num = Math.random()
  if (num < 0.333) {
    enemy = "rock"
  } else if (num > 0.666) {
    enemy = "scissors"
  } else {
    enemy = "paper"
  }
  return enemy
}

function Game() {
  rock.addEventListener('click', () => {
    player = "rock"
    enemyPick()
    checkWinner()
  })
  paper.addEventListener('click', () => {
    player = "paper"
    enemyPick()
    checkWinner()
  })
  scissors.addEventListener('click', () => {
    player = "scissors"
    enemyPick()
    checkWinner()
  })
}
