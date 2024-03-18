import "./Countdown.scss";
import { useEffect, useState } from "react";
import { incrementStageLevel } from "../../redux/counterSlice";
import { generateRandom } from "../../redux/boardSlice";
import { selectionPhase } from "../../redux/boardSlice";
import { useSelector, useDispatch } from "react-redux";
function Countdown({ isStart, phaseSelect, ciao }) {
  const [seconds, setSeconds] = useState(ciao);
  const stage = useSelector((state) => state.counter.stage);
  // dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    if (isStart) {
      setSeconds(ciao);
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            if (phaseSelect && stage < 6) {
              dispatch(generateRandom());
              dispatch(selectionPhase(false));
              dispatch(incrementStageLevel());
              clearInterval(timer);
              return 0;
            } else {
              clearInterval(timer);
              return 0;
            }
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [phaseSelect, stage]);

  return <>{seconds > 0 && isStart ? <h3>Countdown:{seconds}</h3> : null}</>;
}

export default Countdown;
