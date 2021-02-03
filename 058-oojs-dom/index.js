let board = new Board()
let player1 = new Player("Reuben", "🍖");
let player2 = new Player("Maya", "🍵");
let currentPlayer = player1
let h3

document.addEventListener("DOMContentLoaded", ()=>{
  h3 = document.querySelector("h3")
  h3.innerText = `${currentPlayer.name}'s turn!`

  document.querySelectorAll("td").forEach(tdEl => {
    tdEl.addEventListener("click", handleClick)
  })

  document.querySelector("button").addEventListener("click", handleReset)
})

function handleClick(event){
  let position = event.target.id.split("-")[1];
  if(board.checkSpaceEmpty(position) && !board.winner){
    currentPlayer.makeMove(position, board)
    board.checkWinner(currentPlayer)
    if(!board.isFull() && !board.winner){
      currentPlayer = currentPlayer === player1 ? player2 : player1
      h3.innerText = `${currentPlayer.name}'s turn!`
    }
    if(board.isFull() && !board.winner) {
      //board is full!
      h3.innerText = `Draw!`
    }
  }
}

function handleReset(){
  board.reset()
  let currentPlayer = player1
  h3.innerText = `${currentPlayer.name}'s turn!`
}