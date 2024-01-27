import "./Board.css";

const colorCells = [
  `rgb(238, 228, 218)`,
  `rgb(237, 224, 200)`,
  `rgb(242, 177, 121)`,
  `rgb(245, 149, 99)`,
  `rgb(246, 124, 95)`,
  `rgb(246, 94, 59)`,
  `rgb(237, 207, 114)`,
  `rgb(237, 204, 97)`,
  `rgb(237, 200, 80)`,
  `rgb(237, 197, 63)`,
  `rgb(237, 194, 46)`,
];
const powTwo = {};
for (let i = 1; i <= 11; i++) {
  powTwo[Math.pow(2, i)] = colorCells[i - 1];
}
// console.log(powTwo);
export default function Board({ board, rowval, colval }) {
  return (
    <ol id="game-board">
      {board.map((row, ri) => (
        <div key={ri} className="game-board-container">
          {row.map((col, ci) => (
            <div
              className={
                ri === rowval.current && ci === colval.current ? "active" : null
              }
              style={{ backgroundColor: powTwo[col] }}
              key={ci}
            >
              {col === 0 ? "" : col}
            </div>
          ))}
        </div>
      ))}
    </ol>
  );
}
