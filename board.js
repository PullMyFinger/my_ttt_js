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
