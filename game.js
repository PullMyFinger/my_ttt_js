function Game(){
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
  }while(response !== "y" && response !== "n");

  return response === "y";
};

Game.prototype.startGame = function(){

  var p1coors;
  var p2coors;
  while (true){
    //p1 turn
    p1coors = this.p1.getCoors();
    this.board.mark(p1coors, 'X');
    //check game over?
      //if true: break
    //p2 turn
    p2coors = this.p2.getCoors();
    this.board.mark(p2coors, 'O');
    //check game over?
      //if true: break

  }
};
//print game over







debugger;
