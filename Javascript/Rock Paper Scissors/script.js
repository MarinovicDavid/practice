const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const score = document.getElementById('score')
const winner = document.getElementById('winner')
const again = document.getElementById('again')

let enemy
var playerScore = 0
var enemyScore = 0

Game()

function checkWinner() {
  if (player === "rock") {
    if (enemy === "paper") {
      winner.innerText = `You Lose!`
      enemyScore++
    } else if (enemy === "rock") {
      winner.innerText = `Draw!`
    } else {
      winner.innerText = `You Win!`
      playerScore++
    }
  }
  if (player === "paper") {
    if (enemy === "scissors") {
      winner.innerText = `You Lose!`
      enemyScore++
    } else if (enemy === "paper") {
      winner.innerText = `Draw!`
    } else {
      winner.innerText = `You Win!`
      playerScore++
    }
  }
  if (player === "scissors") {
    if (enemy === "rock") {
      winner.innerText = `You Lose!`
      enemyScore++
    } else if (enemy === "paper") {
      winner.innerText = `You Win!`
      playerScore++
    } else {
      winner.innerText = `Draw!`
    }
  }
  gameOver()
  inactive()
  score.innerHTML = `<span class="player">${playerScore}</span> : <span class="enemy">${enemyScore}</span></h3>`
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

function inactive() {
  if (player === "rock") {
    paper.classList.add('inactive')
    scissors.classList.add('inactive')
  } else if (player === "paper") {
    rock.classList.add('inactive')
    scissors.classList.add('inactive')
  } else {
    rock.classList.add('inactive')
    paper.classList.add('inactive')
  }
  again.classList.remove('inactive')
  again.addEventListener('click', () => {
    rock.classList.remove('inactive')
    paper.classList.remove('inactive')
    scissors.classList.remove('inactive')
  })
}

function playAgain() {
  playerScore = 0
  enemyScore = 0
}

function gameOver() {
  if (playerScore === 3 || enemyScore === 3) {
    if (playerScore === 3) { winner.innerText = `Player Wins!` }
    if (enemyScore === 3) { winner.innerText = `Enemy Wins!` }
    rock.classList.add('inactive')
    paper.classList.add('inactive')
    scissors.classList.add('inactive')
    again.classList.remove('inactive')
    again.innerText = `New Game`
  }

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