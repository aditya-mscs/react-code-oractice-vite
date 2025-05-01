//@ts-nocheck
import { useState } from 'react';
import GoBackToHome from './GoBacktoHome';


const checkWinner = (board) => {
  // Rows
  for (let i = 0; i < 3; i++) {
    const [a, b, c] = board[i];
    if (a && a === b && a === c) return a;
  }

  // Columns
  for (let i = 0; i < 3; i++) {
    const a = board[0][i], b = board[1][i], c = board[2][i];
    if (a && a === b && a === c) return a;
  }

  // Diagonals
  const center = board[1][1]; //_______ center is the middle element
  if (center) {
    if (center === board[0][0] && center === board[2][2]) return center;
    if (center === board[0][2] && center === board[2][0]) return center;
  }

  return null;
};




// Tic Tac Toe component
export const TicTacToe = () => {
  const [board, setBoard] = useState(Array(3).fill(null).map(() => Array(3).fill(null))); //IMP 3x3 array. _____ 0th array will be shown as 1st row
  const [isXNext, setIsXNext] = useState(true);

  const winner = checkWinner(board);

  const handleClick = (row, col) => {
    if (board[row][col] || winner) return;
    // const newBoard = board.map(row => [...row]); // shallow copy
    const newBoard = [...board]; // shallow copy
    newBoard[row][col] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };
  console.log('board', board, board.flat());
  return (
    <div>
      <GoBackToHome />
      <h2>Tic Tac Toe</h2>


      <div style={{ display: 'inline-block' }}>
        {board.map((_, row) => (
          <div key={row} style={{ display: 'flex' }}>



            {board[row].map((_, col) => (
              <button
                type="button"
                key={`${row}-${col}`}
                onClick={() => handleClick(row, col)}
                style={{
                  width: 200,
                  height: 60,
                  border: '1px solid #ccc',
                }}
              >

                {board[row][col]}-({row}-{col})
              </button>


            ))}
          </div>
        ))}
      </div>

      {winner && <h3>Winner: {winner}</h3>}
    </div>
  );
};