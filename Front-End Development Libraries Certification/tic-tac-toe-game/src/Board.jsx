import { useState } from "react";

export default function Board() {
  const initialBoard = Array(9).fill("");

  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for (const [a, b, c] of winningCombinations) {
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";

    setBoard(newBoard);

    const gameWinner = calculateWinner(newBoard);

    if (gameWinner) {
      setWinner(gameWinner);
    } else if (!newBoard.includes("")) {
      setWinner("Draw");
    } else {
      setIsXNext(!isXNext);
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="container">
      <h1>Tic-Tac-Toe</h1>
      {winner ? (
        winner === "Draw" ? (
          <h5 className="draw">It's a Draw!</h5>
        ) : (
          <h5 className="winner">Winner: {winner}</h5>
        )
      ) : (
        <h5>Next Player: {isXNext ? "X" : "O"}</h5>
      )}

      <div className="board">
        {board.map((value, index) => (
          <button
            key={index}
            className={`square ${
              value === "X" ? "x" : value === "O" ? "o" : ""
            }`}
            onClick={() => handleClick(index)}
            disabled={!!winner || value !== ""}
          >
            {value}
          </button>
        ))}
      </div>

      <button className="reset-btn" id="reset" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}
