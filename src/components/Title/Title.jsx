import "./Title.scss";
import { useSelector, useDispatch } from "react-redux";
import { startGame } from "../../redux/boardSlice";

function Title() {
  const isStart = useSelector((state) => state.board.startGame);
  const dispatch = useDispatch();

  return (
    <header>
      <h1>Hexagon</h1>
      <p className="spiegazione">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi labore
        commodi placeat quas. Nobis suscipit soluta est tenetur obcaecati, optio
        vel sed, nostrum consectetur aspernatur architecto, totam ipsum
        consequuntur. Porro.
      </p>
      {!isStart ? (
        <button
          onClick={() => dispatch(startGame())}
          className="btn btn-success"
        >
          Inizia partita
        </button>
      ) : null}
    </header>
  );
}

export default Title;
