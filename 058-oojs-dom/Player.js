class Player {
  constructor(name, piece="X"){
    this.name = name;
    this.piece = piece;
  }

  makeMove(position, board){
    board.layout[position] = this
    //update the DOM to make that move
    document.querySelector(`#square-${position}`).innerText = this.piece
  }
}