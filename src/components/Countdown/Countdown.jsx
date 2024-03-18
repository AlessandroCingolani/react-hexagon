import "./Countdown.scss";
import { useEffect, useState } from "react";
import { incrementStageLevel } from "../../redux/counterSlice";
import { generateRandom, selectionPhase } from "../../redux/boardSlice";
import { useSelector, useDispatch } from "react-redux";
function Countdown({ isStart, phaseSelect, ciao }) {
  const [seconds, setSeconds] = useState(ciao);
  const stage = useSelector((state) => state.counter.stage);
  // dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    if (isStart) {
      const timer = setInterval(() => {
        console.log(seconds);
        setSeconds((prevSeconds) => {
          console.log(seconds);
          if (prevSeconds === 0) {
            if (phaseSelect && stage < 6) {
              clearInterval(timer);
              dispatch(generateRandom());
              dispatch(incrementStageLevel());
              dispatch(selectionPhase(false));
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
  }, [phaseSelect]);

  return <>{seconds > 0 && isStart ? <h3>Countdown:{seconds}</h3> : null}</>;
}

export default Countdown;
