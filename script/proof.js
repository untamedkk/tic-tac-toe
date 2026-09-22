"use strict";

var rules = require("./game.js");
var terminalGames = 0;
var longestGame = 0;

function inspect(state) {
  if (state.over) {
    terminalGames += 1;
    if (state.moveCount > longestGame) {
      longestGame = state.moveCount;
    }
    if (!state.winner || state.currentPlayer !== null) {
      throw new Error("Invalid terminal state.");
    }
    return;
  }

  if (state.moveCount === 9) {
    throw new Error("Non-terminal full board found.");
  }

  var legalMoves = state.board.reduce(function (moves, mark, index) {
    if (mark === null) moves.push(index);
    return moves;
  }, []);

  if (legalMoves.length === 0) {
    throw new Error("Non-terminal state has no legal moves.");
  }

  legalMoves.forEach(function (index) {
    inspect(rules.applyMove(state, index));
  });
}

inspect(rules.createGame());

if (longestGame !== 9) {
  throw new Error("Expected at least one nine-move line.");
}

console.log("Exhaustive proof passed: " + terminalGames + " legal games checked; every game ends with a winner within " + longestGame + " moves.");
