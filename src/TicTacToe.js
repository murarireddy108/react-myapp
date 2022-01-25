import { useState } from 'react';
import Button from '@mui/material/Button';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import ReplayIcon from '@mui/icons-material/Replay';

export function TicTacToe() {
  const { width, height } = useWindowSize();
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner is", board[a]);
        return board[a];
      }
    }
    return null;
  };

  const Winner = decideWinner(board);
  const [isXTurn, setIsXTurn] = useState(true);
  const handleClick = (index) => {
    //create copy a board & then update the clicked box
    //update only untouched box
    if (Winner === null && board[index] === null) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      //  Toggle X turn
      setIsXTurn(!isXTurn);
    }
  };
  return (
    <div className="game-page">
      {Winner ? <Confetti width={width} height={height} gravity={0.1} /> : ""}
      <h1>Welcome to Tic Tac Toe Game Let's Play </h1>
      <h3>To Start Click on the Box Below </h3>
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {Winner ? <h1>Winner is :{Winner}</h1> : ""}
      <Button style={{ margin: "20px" }} onClick={() => window.location.reload(false)} variant="outlined" startIcon={<ReplayIcon />}> Let's Play Again
      </Button>
    </div>
  );
}
function GameBox({ onPlayerClick, val }) {
  // const [val , setVal] = useState(null);
  const styles = { color: val === "X" ? "green" : "red" };
  return <div style={styles} onClick={onPlayerClick} className="game-box">{val}</div>;
}
