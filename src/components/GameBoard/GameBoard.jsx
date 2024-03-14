import { increment } from "../../redux/counterSlice";
import { decrement } from "../../redux/counterSlice";
import { generateRandom } from "../../redux/boardSlice";
import "./GameBoard.scss";
import { useSelector, useDispatch } from "react-redux";

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
      <button onClick={() => dispatch(generateRandom())}> Genera random</button>
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
