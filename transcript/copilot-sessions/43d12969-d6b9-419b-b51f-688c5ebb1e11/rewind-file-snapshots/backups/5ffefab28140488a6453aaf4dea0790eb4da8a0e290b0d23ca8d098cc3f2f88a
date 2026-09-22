(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.TicTacToe = factory();
  }
}(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  var LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  function createGame() {
    return {
      board: [null, null, null, null, null, null, null, null, null],
      currentPlayer: "X",
      winner: null,
      over: false,
      moveCount: 0
    };
  }

  function winningLine(board, player) {
    return LINES.some(function (line) {
      return line.every(function (index) {
        return board[index] === player;
      });
    });
  }

  function applyMove(state, index) {
    if (state.over) {
      throw new Error("The game is over.");
    }
    if (!Number.isInteger(index) || index < 0 || index > 8) {
      throw new Error("Move must name a board cell from 0 to 8.");
    }
    if (state.board[index] !== null) {
      throw new Error("That cell is already occupied.");
    }

    var board = state.board.slice();
    var player = state.currentPlayer;
    board[index] = player;
    var moveCount = state.moveCount + 1;
    var won = winningLine(board, player);
    var fullBoard = moveCount === 9;
    var over = won || fullBoard;

    return {
      board: board,
      currentPlayer: over ? null : (player === "X" ? "O" : "X"),
      winner: over ? player : null,
      over: over,
      moveCount: moveCount
    };
  }

  function getLines() {
    return LINES.map(function (line) {
      return line.slice();
    });
  }

  return {
    createGame: createGame,
    applyMove: applyMove,
    getLines: getLines,
    winningLine: winningLine
  };
}));
