function GameOfLife(dimensions, initialCells){
  var livingCells = initialCells

  this.tick = function(cb){
    var newCells = from(livingCells)
    for(var i = 0; i < dimensions.width; i++){
      for(var j = 0; j < dimensions.height; j++){
        var isLiving = _(livingCells).contains([i,j])
        var n = _numberOfNeighbors([i,j])
        if(isLiving && (n < 2 || n > 3))
          send({status:false, location:[i,j]})
            .to(cb).to(update(newCells))
        else if(!isLiving && n == 3)
          send({status:true, location:[i,j]})
            .to(cb).to(update(newCells))
      }
    }
    livingCells = newCells
  }
  var from = function(arr){
    var newArr = []
    arr.forEach(function(el){
      newArr.push(el)
    })
    return newArr
  }
  var update = function(newCells){
    return function(evt){
      var cell = evt.location
      if(evt.status) newCells.push(cell)
      else {
        // lame
        for(var i = 0; i < newCells.length; i++){
          if(newCells[i][0] == cell[0] && newCells[i][1] == cell[1])
            return newCells.splice(i, 1)
        }
      }
    }

  }
  var send = function(data){
    return {to:function(cb){
      cb(data);
      return this;
      }
    }
  }
  var _numberOfNeighbors  = function(cell){
    return numberOfNeighbors(livingCells, cell)
  }
}

  var _ = function(arr){
    return {contains:function(expected){
        for(var i = 0; i < arr.length; i++){
          if(arr[i][0] == expected[0] && arr[i][1] == expected[1])
            return true
        }
        return false
      }
    }
  }
  var numberOfNeighbors = function(cells,currentCell){
    var cells = _(cells);
    var total = [
      [-1,-1], [-1, 0], [-1,1],
      [0,-1], [0,1],
      [1,-1], [1,0], [1,1] ].reduce(function(sum,c){
      var cell = [currentCell[0]+c[0], currentCell[1]+c[1]]
      return sum += cells.contains(cell)?1:0
    }, 0)
    return total
  }

function VisualBoard(ctx, cellSize){
  this.toggle = function(point, cameToLife){
    ctx.fillStyle = cameToLife?'rgb(0,0,0)':'rgb(255,255,255)'
    ctx.fillRect(
    point[0]*cellSize, point[1]*cellSize, cellSize, cellSize)
  }
}
