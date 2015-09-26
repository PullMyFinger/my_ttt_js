function Game(){
  debugger;
  //initialize board
  this.board = new Board();
  //get input for players
  var p1isHuman = this.isPlayerHuman();
  var p2isHuman = this.isPlayerHuman();

  //initialize players
  this.p1 = new Player(p1isHuman, this.board);
  this.p2 = new Player(p2isHuman, this.board);
  //start game loop.
  this.startGame();
}

Game.prototype.isPlayerHuman = function(){
  var response;
  do{
    response = prompt("Is player human?(y/n)");
    // response = "n";
  }while(response !== "y" && response !== "n");

  return response === "y";
};

Game.prototype.startGame = function(){
  var gameOverType;
  var playerWon;
  var p1coors;
  var p2coors;
  while (true){
    //p1 turn
    p1coors = this.p1.getCoors();
    this.board.mark(p1coors, 'X');
    //check game over?
    gameOverType = this.gameOver();
    if(gameOverType){
      playerWon = "one";
      break;
    }
      //if true: break
    //p2 turn
    p2coors = this.p2.getCoors();
    this.board.mark(p2coors, 'O');
    //check game over?
    gameOverType = this.gameOver();
    if(gameOverType){
      playerWon = "two";
      break;
    }
  }
  if(gameOverType === 's'){
    alert('Stalemate');
  }else{
    alert('player ' + playerWon + ' won by ' + gameOverType);
  }
};


Game.prototype.gameOver = function(){


  var grid = this.board.board;
  var horizontalWin = false;
  var verticalWin = false;
  var diagonalWin = false;
  var staleMate;
  var allEqual;
  var notNull;

  // check for full horizontal rows
  for(var rowIndex = 0; rowIndex < 3; rowIndex++){
    allEqual = (grid[rowIndex][0].value === grid[rowIndex][1].value) &&
               (grid[rowIndex][1].value === grid[rowIndex][2].value);
     notNull = grid[rowIndex][0].value !== null;
     horizontalWin = horizontalWin || (allEqual && notNull);
  }


  // check for full vertical rows
  for(var colIndex = 0; colIndex < 3; colIndex++){
     allEqual = (grid[0][colIndex].value === grid[1][colIndex].value) &&
                (grid[1][colIndex].value === grid[2][colIndex].value);
     notNull = grid[0][colIndex].value !== null;
     verticalWin = verticalWin || (allEqual && notNull);
  }
  // check diagonals

  allEqual = (grid[0][0].value === grid[1][1].value) &&
             (grid[1][1].value === grid[2][2].value);
  notNull = grid[0][0].value !== null;

  diagonalWin = diagonalWin || (allEqual && notNull);

  allEqual = (grid[0][2].value === grid[1][1].value) &&
             (grid[1][1].value === grid[2][0].value);
  notNull = grid[0][2].value !== null;

  diagonalWin = diagonalWin || (allEqual && notNull);

  staleMate = this.board.cellsLeft === 0;
  if(horizontalWin) return 'h';
  if(verticalWin) return 'v';
  if(diagonalWin) return 'd';
  if(staleMate) return 's';
  return false;
};

//print game over
