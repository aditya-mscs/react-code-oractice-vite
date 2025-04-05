import { useState } from "react";
import GoBackToHome from "./GoBacktoHome";

// Connect Four Game Component

// Using a union type for both Cell and Player since they represent the same concept
type Player = 'Red' | 'Yellow';
type Cell = Player | null;
type Board = Cell[][]; // 2D array representing the game board
type Winner = Player | null;

export const ConnectFour = () => {
  // State to manage the game board (6 rows by 7 columns), initialized with null values
  const [board, setBoard] = useState<Board>(Array(6).fill(null).map(() => Array(7).fill(null)));
  console.log(board);
  
  // State to keep track of the current player (Red starts first)
  const [currentPlayer, setCurrentPlayer] = useState<Player>('Red');
  
  // State to store the winner (null means no winner yet)
  const [winner, setWinner] = useState<Winner>(null);

  // Handles click on a column to place a piece
  const handleClick = (col: number) => {
    // If there's already a winner, clicking should do nothing
    if (winner) return;

    // Start checking from the bottom row upwards to find the first empty slot
    for (let row = 5; row >= 0; row--) {
      // Check if the current cell is empty
      if (!board[row][col]) {
        // Create a deep copy of the current board to avoid mutating state directly
        const newBoard = board.map(r => [...r]);

        // Place the current player's piece in the first available row in the clicked column
        newBoard[row][col] = currentPlayer;

        // Update the board state
        setBoard(newBoard);

        // Check for a winning condition after the move
        checkWinner(newBoard, row, col);

        // Switch to the next player (toggle between Red and Yellow)
        setCurrentPlayer(currentPlayer === 'Red' ? 'Yellow' : 'Red');
        break;
      }
    }
  };

  // Function to check for a winner after each move
  const checkWinner = (board: Board, row: number, col: number) => {
    // Directions to check for four-in-a-row (horizontal, vertical, diagonal)
    const directions = [
      { x: 0, y: 1 },   // Horizontal
      { x: 1, y: 0 },   // Vertical
      { x: 1, y: 1 },   // Diagonal /
      { x: 1, y: -1 }   // Diagonal \
    ];

    // Loop through each direction to check for four connected pieces
    for (const { x, y } of directions) {
      let count = 1; // Initialize count for consecutive pieces

      // Check in the positive direction (right or down)
      for (let i = 1; i < 4; i++) {
        const newRow = row + i * x;
        const newCol = col + i * y;
        // Break if out of bounds or not matching the current player
        if (newRow < 0 || newRow >= 6 || newCol < 0 || newCol >= 7 || board[newRow][newCol] !== currentPlayer) break;
        count++;
      }

      // Check in the negative direction (left or up)
      for (let i = 1; i < 4; i++) {
        const newRow = row - i * x;
        const newCol = col - i * y;
        // Break if out of bounds or not matching the current player
        if (newRow < 0 || newRow >= 6 || newCol < 0 || newCol >= 7 || board[newRow][newCol] !== currentPlayer) break;
        count++;
      }

      // If four or more consecutive pieces are found, set the current player as the winner
      if (count >= 4) {
        setWinner(currentPlayer);
        return;
      }
    }
  };

  // Reset the game to the initial state
  const resetGame = () => {
    setBoard(Array(6).fill(null).map(() => Array(7).fill(null))); // Empty board
    setCurrentPlayer('Red'); // Reset to Red as the starting player
    setWinner(null); // Clear the winner
  };

  const jsCode = `
    const [board, setBoard] = useState<Board>(Array(6).fill(null).map(() => Array(7).fill(null)));
  `;

  return (
    <div>
      <GoBackToHome />
      <h1>Connect Four</h1>
      <pre className="code-wrapper">
          <code>{jsCode}</code>
      </pre>
      {winner && <h2 style={{ color: "green" }}>{winner} wins!</h2>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 50px)', gap: '5px' }}>
        {board.map((row, rowIndex) => (
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleClick(colIndex)} // Handle cell click
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: cell || 'white', // Set color based on player or empty
                border: '1px solid black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {cell}
            </div>
          ))
        ))}
      </div>
      <button type="button" onClick={resetGame}>Reset Game</button>
    </div>
  );
}