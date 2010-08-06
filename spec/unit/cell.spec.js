describe 'Game of Life'

  describe 'Evolving a live cell'
    it 'should continue living with 2 neighbors'
      var board = createNewGame([
        ['x','.','.'],
        ['x','x','.'],
        ['.','.','.']            
      ])
      
      board.evolve()
      
      board.at(1,1).should.be 'x'        
    end
    it 'should continue living with 3 neighbors'
      var board = createNewGame([
        ['x','.','.'],
        ['x','x','x'],
        ['.','.','.']            
      ])
      
      board.evolve()
      
      board.at(1,1).should.be 'x'        
    end
    it 'should die if only one neighbor'
      var board = createNewGame([
        ['.','.','.'],
        ['.','x','x'],
        ['.','.','.']            
      ])
      
      board.evolve()
      
      board.at(1,1).should.be '.'
    end
    it 'should die if zero neighbors'
      var board = createNewGame([
        ['.','.','.'],
        ['.','x','.'],
        ['.','.','.']            
      ])
      
      board.evolve()
      
      board.at(1,1).should.be '.'
    end
    it 'should die with 4 neighbors by overpopulation'
      var board = createNewGame([
        ['.','.','.'],
        ['x','x','x'],
        ['x','x','.']            
      ])
      
      board.evolve()
      
      board.at(1,1).should.be '.'
    end
    it 'should die with 5 neighbors by overpopulation'
      var board = createNewGame([
        ['.','.','x'],
        ['x','x','x'],
        ['x','x','.']            
      ])
      
      board.evolve()
      
      board.at(1,1).should.be '.'
    end
  end
  describe 'Evolving a dead cell'
    it 'Dead cell with 0 neighbors stays dead'
      var board = createNewGame([
        ['.','.','.'],
        ['.','.','.'],
        ['.','.','.']            
      ])
      
      board.evolve()
      
      board.at(1,1).should.be '.'        
    end

    it 'Dead cell with 1 neighbor stays dead'
      var board = createNewGame([
        ['.','x','.'],
        ['.','.','.'],
        ['.','.','.']            
      ])
      
      board.evolve()
      
      board.at(1,1).should.be '.'        
    end
    
    it 'Dead cell with 2 neighbor stays dead'
      var board = createNewGame([
        ['.','x','x'],
        ['.','.','.'],
        ['.','.','.']            
      ])
      
      board.evolve()
      
      board.at(1,1).should.be '.'        
    end
    
    it 'Dead cell with 3 neighbors comes to life'
      var board = createNewGame([
        ['x','x','.'],
        ['x','.','.'],
        ['.','.','.']            
      ])
      
      board.evolve()
      
      board.at(1,1).should.be 'x'        
    end
    
    it 'Dead cell with 4 neighbors remains dead'
      var board = createNewGame([
        ['x','x','.'],
        ['x','.','.'],
        ['x','.','.']            
      ])
      
      board.evolve()
      
      board.at(1,1).should.be '.'        
    end
    
    it 'should evolve dead cell in corner with 3 neighbors'
      print('running dead cell in corner with 3 neighbors');
      var board = createNewGame([
        ['.','x','.'],
        ['x','x','.'],
        ['.','.','.']            
      ])
      
      board.evolve()
      
      board.at(0,0).should.be 'x'        
    end
    
    it 'Dead cell with 5 neighbors remain dead'
      var board = createNewGame([
        ['x','x','x'],
        ['x','.','x'],
        ['.','.','.']            
      ])
      
      board.evolve()
      
      board.at(1,1).should.be '.'        
    end
    
    it 'Dead cell with 6 neighbors remain dead'
      var board = createNewGame([
        ['x','.','x'],
        ['x','.','x'],
        ['.','x','x']            
      ])
      
      board.evolve()
      
      board.at(1,1).should.be '.'        
    end
    
    it 'Dead cell with 7 neighbors remain dead'
      var board = createNewGame([
        ['x','x','x'],
        ['x','.','x'],
        ['.','x','x']            
      ])
      
      board.evolve()
      
      board.at(1,1).should.be '.'        
    end
  end
end
