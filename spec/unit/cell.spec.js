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

  it 'Dead cell with 2 neighbors stays dead'
    var board = createNewGame([
      ['.','.','.'],
      ['.','.','.'],
      ['.','.','.']            
    ])
    
    board.evolve()
    
    board.at(1,1).should.be '.'        
  end
end