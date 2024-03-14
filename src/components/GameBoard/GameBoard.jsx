import "./GameBoard.scss";

function generateRandom() {
  const randomNumber = Math.floor(Math.random() * 12) + 1;
  return randomNumber;
}

function GameBoard() {
  return (
    <main>
      <div id="game-board" className="hex-container">
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
        </div>
      </div>
    </main>
  );
}

export default GameBoard;
