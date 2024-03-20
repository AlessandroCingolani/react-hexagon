import {
  increment,
  decrement,
  incrementStageLevel,
} from "../../redux/counterSlice";
import {
  generateTotal,
  addUserSelection,
  selectedCell,
  resetBoard,
  gamePhase,
  generateRandom,
} from "../../redux/boardSlice";
import { useEffect, useState } from "react";
import "./GameBoard.scss";
import Countdown from "../Countdown/Countdown";
import { useSelector, useDispatch } from "react-redux";

function GameBoard() {
  // selectors
  const points = useSelector((state) => state.counter.value);
  const stage = useSelector((state) => state.counter.stage);
  const board = useSelector((state) => state.board.value);
  const phase = useSelector((state) => state.board.gamePhase);
  const isStart = useSelector((state) => state.board.startGame);
  const isEnd = useSelector((state) => state.board.endGame);
  const sumNumber = useSelector((state) => state.board.sumNumber);
  const selection = useSelector((state) => state.board.selectionPhase);
  const clickedData = useSelector((state) => state.board.clickedData);
  let userSelected = useSelector((state) => state.board.userSelections);
  // dispatch
  const dispatch = useDispatch();

  // array structure
  function arrayStructure(cell, rowIndex, cellIndex) {
    return [cell, rowIndex, cellIndex];
  }

  // message
  const [messageDisplay, setMessage] = useState("");

  // take local storage points
  const lastPoints = localStorage.getItem("endPoints");

  // converted storage into int
  const intLastPoints = parseInt(lastPoints, 10);

  // string display in selection phase
  const characters = "abcdefghijklmnopqrs";
  const splitCharacters = characters.toLocaleUpperCase().split("");

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

  // use effect when change clicked data
  useEffect(() => {
    if (clickedData.length === 3) {
      const result = clickedData.reduce((accumulator, clickedData) => {
        return accumulator + clickedData[0];
      }, 0);

      if (result === sumNumber) {
        if (!isDuplicateArray(clickedData, userSelected)) {
          dispatch(addUserSelection(clickedData));
          dispatch(increment());
          setMessage("Combinazione corretta");
          dispatch(selectedCell("DELETE"));
        } else {
          dispatch(decrement());
          dispatch(selectedCell("DELETE"));

          setMessage("Combinazione già esistente");
          console.log("EXIST");
        }
      } else {
        dispatch(decrement());
        dispatch(selectedCell("DELETE"));
        setMessage("Combinazione errata");
        console.log("WRONG");
      }
    }
  }, [clickedData]);

  // at click create an array with cell row and cell index
  function handleClick(event, cell, rowIndex, cellIndex) {
    // phase selection no active so you cant click
    if (!selection) {
      event.preventDefault();
      console.log("INATTIVO");
    } else {
      const newData = arrayStructure(cell, rowIndex, cellIndex);
      console.log(cell, rowIndex, cellIndex);
      // method some at click check if cicled item are inside at cicled data
      const isAlreadyClicked = clickedData.some(
        (item) =>
          item[0] === newData[0] &&
          item[1] === newData[1] &&
          item[2] === newData[2]
      );

      // if not already clicked push data
      if (!isAlreadyClicked && clickedData.length < 3) {
        dispatch(selectedCell([newData]));
      }
    }
  }

  // timer to display numberSum
  useEffect(() => {
    // reset at start
    if (phase === "END_LEVEL" || phase === "MEMORIZE") {
      setMessage("");
      dispatch(selectedCell("DELETE"));
      dispatch(generateTotal("RESET"));
      dispatch(addUserSelection("DELETE"));
      let cells = document.querySelectorAll(".cell");
      const flattenedArray = board.reduce((acc, curr) => acc.concat(curr), []);
      cells.forEach((cell, index) => {
        // replace text content with array concat board only graphics
        cell.textContent = cell.textContent.replace(
          /^.+/,
          flattenedArray[index]
        );
      });
    }

    // select class cell and add d-none after the timeout
    // if (phase === "SELECTION") {
    //   let splitCharapters = characters.split("");
    //   console.log(splitCharapters);
    //   let cells = document.querySelectorAll(".cell");
    //   cells.forEach((cell) => {
    //     cell.classList.add("d-none");
    //   });
    if (phase === "SELECTION") {
      let cells = document.querySelectorAll(".cell");
      cells.forEach((cell, index) => {
        // replace text span with characters
        cell.textContent = cell.textContent.replace(
          /^.+/,
          splitCharacters[index]
        );
      });
    }
    // }
  }, [board, phase]);

  // save local storege points
  useEffect(() => {
    if (isEnd) {
      if (points < intLastPoints) {
        localStorage.setItem("endPoints", intLastPoints);
      } else {
        localStorage.setItem("endPoints", points);
      }
    }
  }, [isEnd]);

  return (
    <main>
      {phase === "MEMORIZE" ? (
        <Countdown
          time={2}
          phase={phase}
          isStart={isStart}
          phaseSelect={selection}
        />
      ) : null}
      {isStart && phase === "SELECTION" && (
        <Countdown
          time={30}
          stage={stage}
          phase={phase}
          isStart={isStart}
          phaseSelect={selection}
        />
      )}
      <button onClick={() => dispatch(resetBoard())}> ResetGame</button>
      {!isNaN(intLastPoints) && !isStart && <h4>Best Score:{intLastPoints}</h4>}
      {isStart && !isEnd ? (
        <div id="game-board" className="hex-container">
          <h1>
            {sumNumber > 0
              ? "Somma dei tre numeri:" + sumNumber
              : phase === "END_LEVEL"
              ? `Fine livello ${stage}`
              : "Memorizza i numeri"}
          </h1>
          <h2>Punteggio: {points}</h2>
          <h3>Livello :{stage}</h3>
          {selection && messageDisplay.length > 0 ? (
            <h3
              className={
                messageDisplay === "Combinazione corretta"
                  ? "text-white bg-success w-25 text-center py-3"
                  : "text-white  bg-danger w-25 text-center py-3"
              }
            >
              {messageDisplay}
            </h3>
          ) : null}
          {phase === "END_LEVEL" && (
            <button
              onClick={() => {
                dispatch(generateRandom());
                dispatch(incrementStageLevel());
                dispatch(gamePhase("MEMORIZE"));
              }}
            >
              Next level
            </button>
          )}
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
                    onClick={() =>
                      handleClick(event, cell, rowIndex, cellIndex)
                    }
                    className={cellClassName}
                  >
                    <span className="cell">{cell}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ) : isEnd ? (
        <h1>Il tuo punteggio finale è: {points}</h1>
      ) : null}
    </main>
  );
}

export default GameBoard;
