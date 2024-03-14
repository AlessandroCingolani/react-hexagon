import { useState } from "react";
import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title/Title";
import GameBoard from "./components/GameBoard/GameBoard";

function App() {
  const [startGame, setGame] = useState(false);

  return (
    <div className="main-container">
      <div className="container">
        <Title startGame={setGame}></Title>
        <GameBoard></GameBoard>
        <button
          onClick={() => setGame((startGame) => (startGame = !startGame))}
        >
          cliccaaa
        </button>
      </div>
    </div>
  );
}

export default App;
