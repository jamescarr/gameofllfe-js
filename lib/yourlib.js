var createNewGame = function(board){
  return new Board(buildBoardOfCells(board))
}

function Board(board){
  this.evolve= function(){
    board.forEach(function(row, i){
      row.forEach(function(cell, j){ 
        var totalNeighbors = 0
        totalNeighbors += squareIsPopulated(i-1, j-1)
        totalNeighbors += squareIsPopulated(i-1, j)
        totalNeighbors += squareIsPopulated(i-1, j+1)
        totalNeighbors += squareIsPopulated(i,j+1)
        totalNeighbors += squareIsPopulated(i,j-1)
        totalNeighbors += squareIsPopulated(i+1, j+1)
        totalNeighbors += squareIsPopulated(i+1, j)
        totalNeighbors += squareIsPopulated(i+1, j-1)
        
        if (totalNeighbors == 3){
          cell.state = 'x'
        }
      })
    })
  }
  
  var squareIsPopulated = function(x,y){
    return board[x] && board[x][y]  && board[x][y].state =='x'?1:0
  }
  this.at = function(x,y){
    return board[x][y].state
  } 
}


function buildBoardOfCells(boardOfCells){
  return boardOfCells.map(function(row, x){
    return row.map(function(state, y){
      return new Cell(state)
    })
  })
}

function Cell(intialState){
  this.state = intialState
  this.toString = function() { return this.state } 
}
