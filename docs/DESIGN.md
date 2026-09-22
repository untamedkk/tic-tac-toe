# Design

## Reading of the brief

This is a browser-only, human-vs-human variant of recognizable tic-tac-toe:
the board is 3×3, X and O alternate, and the normal three-in-a-row win
condition remains intact. The brief allows the variant rules to be invented, so
the ambiguity around avoiding draws is resolved with a finite threat-count
tiebreaker.

The implementation is static HTML, CSS, and JavaScript. `script/game.js`
contains state transitions and validation without DOM access. `script/ui.js`
only creates and updates DOM elements and delegates moves to
`script/game.js`. `script/proof.js` imports the same rule module and
exhaustively walks every legal move sequence.

## Rules considered

The chosen rule is: a full board with no line is scored by counting threat
lines. A threat line contains exactly two marks from one player and one mark
from the opponent. The player with more such lines wins; an equal score is
resolved by the ninth mover. This preserves normal play while making the
non-line outcome depend primarily on the completed board.

An alternative was to remove marks or change the board after a fixed number of
turns. That would also avoid draws, but would make the familiar placement
version harder to learn and prove. A random tiebreaker was rejected because it
would make the outcome depend on chance rather than the players' moves. The
original unconditional last-move rule was rejected because it made the board
position irrelevant whenever no line was formed.

## Why every game has a winner and terminates

After every move, `script/game.js` checks all eight possible winning lines.
Therefore, any line-making move ends the game with that player as winner. If
no line is made, each move fills one previously empty square. There can be at
most nine such moves. On the ninth move the board is full; the finite threat
count produces a winner, and equal scores use the ninth mover. Thus no
terminal state is a draw, and no line of play can continue past nine moves.

Run `node script/proof.js` to exhaustively enumerate every legal game tree from the
empty board. The proof checks that every leaf is terminal, every terminal leaf
has a winner, and that the maximum observed game length is nine moves.

## Known limitations

There is no computer opponent, persistent score, backend, or network
dependency. Those are outside the requested scope. The UI is intended for
current Chrome.
