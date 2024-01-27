import { useEffect, useRef, useState } from "react";
import "./App.css";
import Board from "./components/board/Board";
import Instructions from "./components/instructions/Instructions";
import traversal from "./utils/Traversal";
import Header from "./components/header/Header";
import GameOver from "./components/gameOver/Gameover";

const INITIAL_BOARD = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
const row = Math.floor(Math.random() * INITIAL_BOARD.length);
const col = Math.floor(Math.random() * INITIAL_BOARD.length);
INITIAL_BOARD[row][col] = 2;

function App() {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [gameOver, setGameOver] = useState(false);
  
  let rowval = useRef(null);
  let colval = useRef(null);
  let scoreval = useRef(null);
  useEffect(() => {
    const handleKeyDown = (e) => {
      let dir = "";
      switch (e.key) {
        case "ArrowUp":
          dir = "top";
          break;
        case "ArrowDown":
          dir = "bottom";
          break;
        case "ArrowLeft":
          dir = "left";
          break;
        case "ArrowRight":
          dir = "right";
          break;
        default:
          break;
      }
      if (dir !== "") {
        setBoard((prev) => {
          const { updatedGrid, row, col, score } = traversal(
            prev,
            dir,
            handleRestart
          );
          rowval.current = row;
          colval.current = col;
          scoreval.current = score;
          console.log(scoreval);
          return updatedGrid;
        });
      }
    };
    // setInitialBoard();
    window.addEventListener("keydown", (e) => {
      handleKeyDown(e);
    });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // useEffect(() => {
  //   if (clickedButton) {
  //     const updatedBoard = traversal(board, clickedButton);
  //     setBoard(updatedBoard);
  //   }
  // }, [board, clickedButton]);
  const handleRestart = (val) => {
    if (!val) setGameOver((prev) => !prev);
    setBoard(INITIAL_BOARD);

    scoreval.current = null;
  };
  return (
    <div className="game-container">
      {gameOver ? (
        <GameOver handleRestart={handleRestart} />
      ) : (
        <>
          <Header handleRestart={handleRestart} scoreval={scoreval} />
          <Board board={board} rowval={rowval} colval={colval} />
          <Instructions />
        </>
      )}
    </div>
  );
}

export default App;
