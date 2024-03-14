import { increment } from "../../redux/counterSlice";
import { decrement } from "../../redux/counterSlice";
import "./GameBoard.scss";
import { useSelector, useDispatch } from "react-redux";

// function generateRandom() {
//   const randomNumber = Math.floor(Math.random() * 12) + 1;
//   return randomNumber;
// }

function GameBoard() {
  const points = useSelector((state) => state.counter.value);
  const board = useSelector((state) => state.board.value);
  const dispatch = useDispatch();

  function takeValue(cell, rowIndex, cellIndex) {
    console.log("valore:", cell, "riga:", rowIndex, "cella:", cellIndex);
    if (cell > 5) {
      dispatch(increment());
    } else {
      dispatch(decrement());
    }
  }

  return (
    <main>
      <h2 className="text-center">punteggio:{points}</h2>
      <div id="game-board" className="hex-container">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                onClick={() => takeValue(cell, rowIndex, cellIndex)}
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
