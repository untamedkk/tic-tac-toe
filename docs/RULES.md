# Last Mark Tic-Tac-Toe

## Setup

Use a normal 3×3 tic-tac-toe grid. One player uses **X** and the other uses
**O**. X goes first.

## Play

Players alternate turns. On a turn, place your mark in any empty square.

- If your move creates three of your marks in a straight row, column, or
  diagonal, you win immediately.
- If the board becomes full and nobody has made three in a row, count each
  player's threat lines. A threat line contains exactly two of that player's
  marks and one opponent mark. The player with more threat lines wins.
- If both players have the same number of threat lines, the player who placed
  the ninth and final mark wins.

There are no draws. The game ends as soon as either winning condition occurs.
