describe("Conways Game Of Life", function(){
  var game = null
  var board = {height:3, width:3}
  var eventsFired = []
  beforeEach(function(){
    eventsFired = []
  })

  function tick(){
    eventsFired = []
    game.tick(function(cell){
      eventsFired.push(cell)
    })
  }
  describe("A living cell", function(){
    it("should die when no neighbors", function(){
      game = new GameOfLife(board, [[1,1]])
      
      tick()

      expect(eventsFired[0]).toEqual({status:false, location:[1,1]})
    })
    it("should die when it has one neighbor", function(){
      game = new GameOfLife(board, [[0,0], [0,1]])
      
      tick()
      
      expect(eventsFired[0]).toEqual({status:false, location:[0,0]})
      expect(eventsFired[1]).toEqual({status:false, location:[0,1]})
      
    })
    it("should die if it has 4 nieghbors", function(){
      game = new GameOfLife(board, [ 
        [0,0], [0,1], [0,2], [1,1], [2,1]])
      
      tick()
      
      expect(eventsFired[0]).toEqual({status:false, location:[1,1]})
      //expect(eventsFired[1]).toEqual({status:false, location:[2,1]})
      
    })
    it("should not die if it has 2 neighbors", function(){
      game = new GameOfLife(board, [[0,0], [0,1], [1,0],[1,1]])
      
      tick()

      expect(eventsFired.length).toEqual(0)
      
    })
    
  })
  describe("A dead cell", function(){
    it("should come to life if three neighbord", function(){
      game = new GameOfLife(board, [[0,0], [0,2], [2,1]])
      
      tick()
      
      expect(eventsFired[0]).toEqual({status:false, location:[0,0]})
      expect(eventsFired[1]).toEqual({status:false, location:[0,2]})
      expect(eventsFired[2]).toEqual({status:true, location:[1,1]})
      expect(eventsFired[3]).toEqual({status:false, location:[2,1]})
    })
    
  })
  describe("Neighbor Counting", function(){
    it("should count number of Neighbors", function(){
      // given an array of living cells
      var cells = [[0,0], [2,2]]
      // when provided with a cell axis
      expect(numberOfNeighbors(cells, [1,1])).toEqual(2)
      
    })
    it("should count all neighbors", function(){
      var cells = [
        [0,0], [0,1],[0,2],
        [1,0], [1,2],
        [2,0], [2,1], [2,2]
      ]
    
      expect(numberOfNeighbors(cells, [1,1])).toEqual(8)
      
    })
  })

  describe("Multiple iterations", function(){
    it("should evolve to the expected state", function(){
      game = new GameOfLife(board, [ [0,1], [1,1], [2,1] ])
    
      tick()
      
      expect(eventsFired).toEqual([
        {status:false, location:[0,1]},
        {status:true, location:[1,0]},
        {status:true, location:[1,2]},
        {status:false, location:[2,1]}
      ])
      
      tick()
      
      expect(eventsFired).toEqual([
        {status:true, location:[0,1]},
        {status:false, location:[1,0]},
        {status:false, location:[1,2]},
        {status:true, location:[2,1]}
      ])
    })
    
  })
 
    describe("UI Components", function(){
      var cellSize = 10
      var ctx = new FakeContext()
      var board = new VisualBoard(ctx, cellSize)
      describe("Filling a spot in", function(){
        board.toggle([1,2], true)
        it("should fill a spot black when turned on", function(){
          expect(ctx.fillStyle).toEqual('rgb(0,0,0)')
        })
        it("should fill the spot at the specified coordinates", function(){
          expect(ctx.filledRect).toEqual([10,20,cellSize, cellSize])
        })
      })

      describe("'Unfilling' a spot", function(){
        it("should fill it in as white", function(){
          board.toggle([3,3], false)
          expect(ctx.fillStyle).toEqual('rgb(255,255,255)')
        })
        
      })
      
      
      
      
   })
   
})

function FakeContext(){
  this.fillStyle = ''
  this.filledRect = []
  this.fillRect = function(x,y,a,b){
    this.filledRect = [x,y,a,b]
  }
}

