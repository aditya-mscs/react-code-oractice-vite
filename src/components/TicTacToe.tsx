//@ts-nocheck
import { useState } from 'react';
import GoBackToHome from './GoBacktoHome';


const checkWinner = (board) => {
  let winner = null;
  // Rows
  [0, 1, 2].forEach((i) => {
    const [a, b, c] = board[i]; // destructuring ___________IMP
    if (a && a === b && a === c) winner = a;
  });

  // Columns
  [0, 1, 2].forEach((i) => {
    const a = board[0][i], b = board[1][i], c = board[2][i];
    if (a && a === b && a === c) winner = a;
  });

  // Diagonals
  const center = board[1][1]; //_______ center is the middle element
  if (center) {
    if (center === board[0][0] && center === board[2][2]) winner = center;
    if (center === board[0][2] && center === board[2][0]) winner = center;
  }

  return winner;
};




// Tic Tac Toe component
export const TicTacToe = () => {
  const emptyGrid = Array(3).fill(null).map(() => Array(3).fill(null));  //IMP 3x3 array. _____ 0th array will be shown as 1st row
  const [board, setBoard] = useState(emptyGrid);
  const [turnX, setTurnX] = useState(true);

  const winner = checkWinner(board);
  const isDraw = board.flat().every((cell) => cell !== null); // Check if all cells are filled

  const handleClick = (row, col) => {
    if (board[row][col] || winner) return;

    const newBoard = [...board]; // shallow copy
    newBoard[row][col] = turnX ? 'X' : 'O';

    setBoard(newBoard);
    setTurnX(!turnX);
  };

  const resetGame = () => {
    setBoard(emptyGrid);
    setTurnX(true);
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

      {winner && (
        <h3 style={{ color: 'green' }}>Winner: {winner}</h3>
      )}
      {isDraw && !winner && (
        <h3 style={{ color: 'red' }}>It's a Draw!</h3>
      )}
      {!winner && !isDraw && (
        <h3 style={{ color: 'blue' }}>Next Turn: {turnX ? 'X' : 'O'}</h3>
      )}



      <button
        type="button"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
};