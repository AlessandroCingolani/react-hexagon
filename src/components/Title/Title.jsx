import "./Title.scss";
import { useSelector, useDispatch } from "react-redux";
import { startGame } from "../../redux/boardSlice";
import { generateRandom } from "../../redux/boardSlice";
import { selectionPhase } from "../../redux/boardSlice";

function Title() {
  const isStart = useSelector((state) => state.board.startGame);
  const dispatch = useDispatch();

  return (
    <header>
      <h1>Hexagon</h1>
      {!isStart ? (
        <div className="start-game">
          <p className="instructions">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            labore commodi placeat quas. Nobis suscipit soluta est tenetur
            obcaecati, optio vel sed, nostrum consectetur aspernatur architecto,
            totam ipsum consequuntur. Porro.
          </p>
          <button
            onClick={() => {
              dispatch(startGame());
              dispatch(generateRandom());
              dispatch(selectionPhase(false));
            }}
            className="btn btn-success"
          >
            Start game
          </button>
        </div>
      ) : null}
    </header>
  );
}

export default Title;
