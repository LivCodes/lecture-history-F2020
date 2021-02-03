class Board {
  constructor(){
    this.winner = null;
    this.layout = ["", "", "", "", "", "", "", "", ""]
  }

  reset(){
    this.layout = ["", "", "", "", "", "", "", "", ""]
    this.winner = null;
    document.querySelectorAll("td").forEach(td => {
      td.innerText = ""
    })
  }

  isFull(){
    //return true if all spaces on the board are occupied
    //return false if any of the spaces are still ""
    return !this.layout.includes("")
  }

  checkSpaceEmpty(position){
    //return true if that space is empty, otherwise return false
    return this.layout[position] === "";
  }

  checkWinner(currentPlayer){
    if(!this.winner){
      if(
        this.checkRCD(0, 1, 2) ||
        this.checkRCD(3, 4, 5) ||
        this.checkRCD(6, 7, 8) ||
        this.checkRCD(0, 3, 6) ||
        this.checkRCD(1, 4, 7) ||
        this.checkRCD(2, 5, 8) ||
        this.checkRCD(0, 4, 8) ||
        this.checkRCD(2, 4, 6)
      ){
        console.log("we have a wiener")
        this.winner = currentPlayer
        document.querySelector("h3").innerText = `${this.winner.name} has won!`
      }
    }
  }

  checkRCD(index1, index2, index3){
    const space1 = this.layout[index1];
    const space2 = this.layout[index2];
    const space3 = this.layout[index3];
    return space1 === space2 && space2 === space3 && space1 !== "";
  }
}

