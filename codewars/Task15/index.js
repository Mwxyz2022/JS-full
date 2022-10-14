// Rock Paper Scissors
// Let's play! You have to return
//  which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  const w1 = 'Player 1 won!';
  const w2 = 'Player 2 won!';
  const p = 'paper';
  const r = 'rock';
  const s = 'scissors';
  if (p1 === p && p2 === s) return w2;
  if (p1 === s && p2 === p) return w1;
  if (p1 === p && p2 === r) return w1;
  if (p1 === r && p2 === p) return w2;
  if (p1 === r && p2 === s) return w1;
  if (p1 === s && p2 === r) return w2;
};
