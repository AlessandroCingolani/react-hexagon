import "./Countdown.scss";
import { useEffect, useState } from "react";
import {
  selectionPhase,
  generateTotal,
  gamePhase,
} from "../../redux/boardSlice";
import { useSelector, useDispatch } from "react-redux";
function Countdown({ isStart, phaseSelect, phase }) {
  const [seconds, setSeconds] = useState(5);
  // dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    if (isStart && phase === "MEMORIZE") {
      console.log("FASE MEMORIZZA");
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            dispatch(generateTotal());
            dispatch(selectionPhase(true));
            dispatch(gamePhase("SELECTION"));
            clearInterval(timer);
            return 0;
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isStart, phase]);

  useEffect(() => {
    if (isStart && phase === "SELECTION") {
      console.log("FASE CLICK");
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            clearInterval(timer);
            dispatch(gamePhase("END_LEVEL"));
            dispatch(selectionPhase(false));
            return 0;
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isStart, phase]);

  return <>{seconds > 0 && isStart ? <h3>Countdown:{seconds}</h3> : null}</>;
}

export default Countdown;
