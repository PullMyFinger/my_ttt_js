function Player(isHuman, board){
  this.isHuman = isHuman;
  this.board = board;
}

Player.prototype.getCoors = function(){
  var row;
  var col;
  var coors;
  if(this.isHuman){
    do{
      row = parseInt(prompt("enter row #"));
      col = parseInt(prompt("enter col #"));
      coors = [row, col];
    }while(this.board.isValidMove(coors) === false);
  }else{
    coors = this.aiCalc()
  }

  return coors;
};

Player.prototype.aiCalc = function(){
  function generateCoors(){
    return [Math.floor(Math.random()*3),Math.floor(Math.random()*3)];
  }
  var coors = generateCoors();
  while (this.board.isValidMove(coors) === false) {
    coors = generateCoors()
  }
  return coors;
};
