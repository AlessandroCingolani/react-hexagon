import { increment } from "../../redux/counterSlice";
import { decrement } from "../../redux/counterSlice";
import { generateRandom } from "../../redux/boardSlice";
import { generateTotal } from "../../redux/boardSlice";
import { addUserSelection } from "../../redux/boardSlice";
import { selectionPhase } from "../../redux/boardSlice";
import { useEffect } from "react";
import "./GameBoard.scss";
import Countdown from "../Countdown/Countdown";
import { useSelector, useDispatch } from "react-redux";

function GameBoard() {
  // selectors
  const points = useSelector((state) => state.counter.value);
  const board = useSelector((state) => state.board.value);
  const isStart = useSelector((state) => state.board.startGame);
  const sumNumber = useSelector((state) => state.board.sumNumber);
  const selection = useSelector((state) => state.board.selectionPhase);
  let userSelected = useSelector((state) => state.board.userSelections);
  // dispatch
  const dispatch = useDispatch();

  // array structure
  function arrayStructure(cell, rowIndex, cellIndex) {
    return [cell, rowIndex, cellIndex];
  }

  // functions for check array is inside userSelected
  function checkArray(arr1, arr2) {
    const sortedArr1 = arr1.map((subArr) => subArr.slice().sort().join());
    const sortedArr2 = arr2.map((subArr) => subArr.slice().sort().join());
    sortedArr1.sort();
    sortedArr2.sort();
    const str1 = sortedArr1.join();
    const str2 = sortedArr2.join();
    return str1 === str2;
  }

  function isDuplicateArray(arr, arrList) {
    for (const existingArr of arrList) {
      if (checkArray(arr, existingArr)) {
        return true;
      }
    }
    return false;
  }
  //

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

        // first condition
        if (result === sumNumber) {
          // use function to check array duplicated with for of and parse string sorted with function checkArray
          if (!isDuplicateArray(clickedData, userSelected)) {
            dispatch(addUserSelection(clickedData));
            dispatch(increment());
            console.log("CORRECT");
            // exist combination
          } else {
            dispatch(decrement());
            console.log("EXIST");
          }
          // wrong selection
        } else {
          dispatch(decrement());
          console.log("WRONG");
        }
      }
    }
  }

  // timer to display numberSum
  useEffect(() => {
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.classList.remove("d-none");
    });
    const timer = setTimeout(() => {
      dispatch(generateTotal());
      dispatch(selectionPhase(true));
      // select class cell and add d-none after the timeout
      let cells = document.querySelectorAll(".cell");
      cells.forEach((cell) => {
        cell.classList.add("d-none");
      });
    }, 10000);

    return () => clearTimeout(timer);
  }, [board]);

  return (
    <main>
      {/* COUNTDOWN COMPONENT */}
      {isStart && !selection ? (
        <Countdown
          board={board}
          isStart={isStart}
          selectionPhase={selection}
          ciao={10}
        ></Countdown>
      ) : selection ? (
        <Countdown
          board={board}
          isStart={isStart}
          selectionPhase={selection}
          ciao={20}
        ></Countdown>
      ) : null}
      <button onClick={() => dispatch(generateRandom())}> Genera random</button>
      {isStart ? (
        <div id="game-board" className="hex-container">
          <h1>
            {sumNumber > 0
              ? "Somma dei tre numeri:" + sumNumber
              : "Memorizza i numeri"}
          </h1>
          <h2>Punteggio: {points}</h2>
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, cellIndex) => {
                const isCellClicked = clickedData.some(
                  (item) =>
                    item[0] === cell &&
                    item[1] === rowIndex &&
                    item[2] === cellIndex
                );
                const cellClassName = `hexagon d-flex justify-content-center align-items-center ${
                  isCellClicked ? "active" : ""
                }`;

                return (
                  <div
                    key={cellIndex}
                    onClick={() => handleClick(cell, rowIndex, cellIndex)}
                    className={cellClassName}
                  >
                    <span className="cell">{cell}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}

export default GameBoard;
