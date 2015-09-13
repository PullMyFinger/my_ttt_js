function Board(){
  function convertToArray(htmlCollection) {
    var newCopy = Array.prototype.slice.call(htmlCollection);
    return newCopy;
  }
  var board = this.board = [
    [{},{},{}],
    [{},{},{}],
    [{},{},{}]
  ];

  var rows = convertToArray(document.getElementById("board").children)
  rows.forEach(function(row, rowI){
    var cols = convertToArray(row.children)
    cols.forEach(function(cell, colI){
      board[rowI][colI].htmlRef = cell;
      board[rowI][colI].value = null;

      // board[rowI][colI].htmlRef.textContent = "";
    });
  });

}

Board.prototype.isValidMove = function(coors){
  var row = coors[0];
  var col = coors[1];
  var isValidInts = Number.isInteger(row) && Number.isInteger(col);
  var inBounds = 0 <= row && row <= 2 && 0 <= col && col <= 2;
  return isValidInts && inBounds && this.board[row][col].value === null;
};

Board.prototype.mark = function(coors, char){
  var row = coors[0];
  var col = coors[1];
  var lowercase = char.toLowerCase();
  this.board[row][col].value = char;
  this.board[row][col].htmlRef.textContent = char;
  this.board[row][col].htmlRef.classList.add(lowercase);
};
