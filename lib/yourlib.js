function events(){
}

var createNewGame = function(board){
  return new Board(buildBoardOfCells(board))
}

function Board(board){
  this.evolve= function(fn){
    var fn = fn || function(){}
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
        
        if (totalNeighbors == 3  && cell.state == '.'){
          cell.state = 'x'
          fn(cell)
        }else if (cell.state == 'x' && totalNeighbors < 2 || totalNeighbors > 3){
          cell.state = '.'
          fn(cell)
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
      return new Cell(state, [x,y])
    })
  })
}

function Cell(intialState, location){
  this.state = intialState
  this.location = location
  this.toString = function() { return this.state } 
}
