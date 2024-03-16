import "./Countdown.scss";
import { useEffect, useState } from "react";
function Countdown({ isStart, selectionPhase, ciao }) {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (isStart) {
      setSeconds(ciao);
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            clearInterval(timer);
            return 0;
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [selectionPhase]);

  return <>{seconds > 0 && isStart ? <h3>Countdown:{seconds}</h3> : null}</>;
}

export default Countdown;
