"use strict";

var rules = require("./game.js");
var moves = [0, 1, 2, 4, 3, 5, 7, 6, 8];
var state = rules.createGame();

moves.slice(0, 8).forEach(function (index) {
  state = rules.applyMove(state, index);
});

if (state.over || state.winner !== null) {
  throw new Error("The attempted draw ended before the board was full.");
}

if (rules.winningLine(state.board, "X") || rules.winningLine(state.board, "O")) {
  throw new Error("The attempted draw unexpectedly contains a winning line.");
}

state = rules.applyMove(state, moves[8]);

if (rules.threatCount(state.board, "X") <= rules.threatCount(state.board, "O")) {
  throw new Error("The attempted draw should give X more threats than O.");
}

if (!state.over || state.winner !== "X" || state.currentPlayer !== null) {
  throw new Error("A full board without a line must award the win to the higher threat count.");
}

console.log("No-draw case passed: X wins with the higher threat count instead of producing a draw.");
