(function () {
  "use strict";

  var game = TicTacToe.createGame();
  var boardElement = document.getElementById("board");
  var statusElement = document.getElementById("status");
  var resetElement = document.getElementById("reset");

  function statusText() {
    return game.over
      ? game.winner + " wins!"
      : game.currentPlayer + "'s turn";
  }

  function render() {
    statusElement.textContent = statusText();
    boardElement.replaceChildren();

    game.board.forEach(function (mark, index) {
      var cell = document.createElement("button");
      cell.className = "cell";
      cell.type = "button";
      cell.textContent = mark || "";
      cell.disabled = game.over || mark !== null;
      cell.setAttribute("aria-label", mark ? "Cell " + (index + 1) + ": " + mark : "Cell " + (index + 1) + ": empty");
      cell.addEventListener("click", function () {
        game = TicTacToe.applyMove(game, index);
        render();
      });
      boardElement.appendChild(cell);
    });
  }

  resetElement.addEventListener("click", function () {
    game = TicTacToe.createGame();
    render();
  });

  render();
}());
