function Game(){
  //initialize board
  this.board = new Board();
  //get input for players
  var p1isHuman = this.isPlayerHuman();
  var p2isHuman = this.isPlayerHuman();

  //initialize players
  this.p1 = new Player(p1isHuman, this.board)
  this.p2 = new Player(p2isHuman, this.board)
}

Game.prototype.isPlayerHuman = function(){
  var response;
  do{
    response = prompt("Is player human?(y/n)");
  }while(response !== "y" && response !== "n");

  return response === "y";
}


//start game loop.
  //p1 turn
  //check game over?
    //if true: break
  //p2 turn
  //check game over?
    //if true: break
//print game over
