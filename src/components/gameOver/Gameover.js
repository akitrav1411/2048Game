import "./GameOver.css";
export default function GameOver({ handleRestart }) {
  return (
    <div id="game-over">
      <h1>Gameover</h1>
      <button onClick={()=>handleRestart()}>Play again ?</button>
    </div>
  );
}
