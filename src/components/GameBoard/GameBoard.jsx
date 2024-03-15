import { increment } from "../../redux/counterSlice";
import { decrement } from "../../redux/counterSlice";
import { generateRandom } from "../../redux/boardSlice";
import { generateTotal } from "../../redux/boardSlice";
import { useEffect } from "react";
import "./GameBoard.scss";
import { useSelector, useDispatch } from "react-redux";

function GameBoard() {
  // selectors
  const points = useSelector((state) => state.counter.value);
  const board = useSelector((state) => state.board.value);
  const isStart = useSelector((state) => state.board.startGame);
  const sumNumber = useSelector((state) => state.board.sumNumber);
  // dispatch
  const dispatch = useDispatch();

  // array structure
  function arrayStructure(cell, rowIndex, cellIndex) {
    return [cell, rowIndex, cellIndex];
  }

  // empty array data
  let clickedData = [];

  // at click create an array with cell row and cell index
  function handleClick(cell, rowIndex, cellIndex) {
    const newData = arrayStructure(cell, rowIndex, cellIndex);

    // method some at click check if cicled item are inside at cicled data
    const isAlreadyClicked = clickedData.some(
      (item) =>
        item[0] === newData[0] &&
        item[1] === newData[1] &&
        item[2] === newData[2]
    );

    // if not already clicked push data
    if (!isAlreadyClicked && clickedData.length < 3) {
      clickedData.push(newData);
      // when selected 3 different options reduce to sum first value cell number
      if (clickedData.length === 3) {
        const result = clickedData.reduce((accumulator, clickedData) => {
          return accumulator + clickedData[0];
        }, 0);
        if (result === sumNumber) {
          dispatch(increment());
        } else {
          dispatch(decrement());
        }
      }
    }
  }
  // timer to display numberSum
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(generateTotal());
    }, 2000);

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
                  onClick={() => handleClick(cell, rowIndex, cellIndex)}
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
