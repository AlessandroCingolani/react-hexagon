import "./GameBoard.scss";

// function generateRandom() {
//   const randomNumber = Math.floor(Math.random() * 12) + 1;
//   return randomNumber;
// }

function takeValue(e) {
  console.log(e);
}

function GameBoard() {
  let board = [
    [1, 3, 4],
    [2, 4, 6, 7],
    [1, 3, 4, 6, 4],
    [2, 4, 6, 7],
    [2, 4, 6],
  ];
  return (
    <main>
      <div id="game-board" className="hex-container">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                onClick={(e) =>
                  takeValue(e.target.textContent, rowIndex, cellIndex)
                }
                className="hexagon d-flex justify-content-center align-items-center"
              >
                <span>{cell}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default GameBoard;

{
  /* <div className="row">
          <div
            onClick={(e) => takeValue(e.target.textContent)}
            className="hexagon d-flex justify-content-center align-items-center"
          >
            <span>{generateRandom()}</span>
          </div>
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
        </div>
        <div className="row">
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
        </div>
        <div className="row">
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
        </div>
        <div className="row">
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
        </div>
        <div className="row">
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
          <div className="hexagon d-flex justify-content-center align-items-center">
            <span>{generateRandom()}</span>
          </div>
        </div> */
}
