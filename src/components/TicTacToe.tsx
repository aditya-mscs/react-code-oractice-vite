import { useState } from 'react';
import GoBackToHome from './GoBacktoHome';

// Generate lines dynamically
const generateLines = () => {
  const lines = [];

  // Rows
  for (let row = 0; row < 3; row++) {
    lines.push([[row, 0], [row, 1], [row, 2]]);
  }

  // Columns
  for (let col = 0; col < 3; col++) {
    lines.push([[0, col], [1, col], [2, col]]);
  }

  // Diagonals
  lines.push([[0, 0], [1, 1], [2, 2]]); // Top-left to bottom-right
  lines.push([[0, 2], [1, 1], [2, 0]]); // Top-right to bottom-left

  return lines;
};

const calculateWinner = (board: string[][]): { winner: string | null, line: number[][] | null } => {
  const lines = generateLines();

  for (const line of lines) {
    const [a, b, c] = line;
    if (board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
      return { winner: board[a[0]][a[1]], line };
    }
  }
  return { winner: null, line: null };
};

const getLineStyle = (line: number[][]) => {
  const [[x1, y1], [x2, y2]] = [line[0], line[2]];
  const isRow = x1 === x2;
  const isCol = y1 === y2;
  const isDiag = !isRow && !isCol;
  const lineStyles = {
    top: `${x1 * 60 + 30}px`,
    left: `${y1 * 60 + 30}px`,
  };

  if (isRow) {
    return { ...lineStyles, width: '180px', height: '5px' };
  }
  if (isCol) {
    return { ...lineStyles, width: '5px', height: '180px' };
  }
  if (isDiag) {
    return { ...lineStyles, width: '180px', height: '5px', transform: x1 < x2 ? 'rotate(45deg)' : 'rotate(-45deg)' };
  }
  return {};
};

export const TicTacToe = () => {
  const [board, setBoard] = useState(Array(3).fill(null).map(() => Array(3).fill(null)));
  const [isXNext, setIsXNext] = useState(true);
  const { winner, line } = calculateWinner(board);
  const isDraw = !winner && board.flat().every(cell => cell !== null);

  const handleClick = (row: number, col: number) => {
    if (board[row][col] || winner) return;

    const newBoard = board.map((r) => r.slice());
    newBoard[row][col] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(3).fill(null).map(() => Array(3).fill(null)));
    setIsXNext(true);
  };

  return (
    <div className="game">
      <GoBackToHome />
      <h1>Tic Tac Toe</h1>
      <div className={`status ${winner ? 'winner' : isDraw ? 'draw' : ''}`}>
        {winner ? `Winner: ${winner}` : isDraw ? "It's a Draw!" : `Next Player: ${isXNext ? 'X' : 'O'}`}
      </div>
      <div className="board">
        {line && <div className="line" style={getLineStyle(line)} />}
        {board.map((_, row) =>
          board[row].map((_, col) => (
            <button type="button" key={`${row}-${col}`} className="square" onClick={() => handleClick(row, col)}>
              {board[row][col]}
            </button>
          ))
        )}
      </div>
      <button type="button" className="reset-button" onClick={resetGame}>Reset Game</button>
    </div>
  );
};