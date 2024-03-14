import { increment } from "../../redux/counterSlice";
import { decrement } from "../../redux/counterSlice";
import { generateRandom } from "../../redux/boardSlice";
import { generateTotal } from "../../redux/boardSlice";
import { useEffect } from "react";
import "./GameBoard.scss";
import { useSelector, useDispatch } from "react-redux";

function GameBoard() {
  const points = useSelector((state) => state.counter.value);
  const board = useSelector((state) => state.board.value);
  const isStart = useSelector((state) => state.board.startGame);
  const sumNumber = useSelector((state) => state.board.sumNumber);
  const dispatch = useDispatch();

  function takeValue(cell, rowIndex, cellIndex) {
    console.log("valore:", cell, "riga:", rowIndex, "cella:", cellIndex);
    if (cell > 5) {
      dispatch(increment());
    } else {
      dispatch(decrement());
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(generateTotal());
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <h1>{sumNumber}</h1>
      <button onClick={() => dispatch(generateRandom())}> Genera random</button>
      {isStart ? (
        <div id="game-board" className="hex-container">
          <h2>Punteggio: {points}</h2>
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
      ) : null}
    </main>
  );
}

export default GameBoard;
