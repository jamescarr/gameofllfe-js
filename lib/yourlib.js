var createNewGame = function(board){
    return new Board(board)
}

function Board(board){
  this.evolve= function(){
  }
  this.at = function(x,y){
    return board[x][y]
  } 
}

