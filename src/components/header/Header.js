import "./Header.css";
export default function Header({ handleRestart, scoreval }) {
  console.log(scoreval.current);
  return (
    <div className="header-container">
      <div className="header-container-headings">
        <h1 className="heading">
          2048<span className="sub-heading">.vd</span>
        </h1>

        <p className="description">Join the numbers to get the 2048 tile !</p>
      </div>
      <div className="new-game">
        <div className="score">
          Score <br />
          {scoreval.current !== null ? scoreval.current : 0}
        </div>
        <button onClick={() => handleRestart(true)}>New Game</button>
      </div>
    </div>
  );
}
