import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function TIMER_COUNTDOWN(timer) {
  const m = Math.floor(timer.time / 60);
  let s = timer.time % 60;
  timer.time--;

  let obj = {
    time: timer.time,
    minute: m,
    second: s,
  };
  return obj;
} // End of TIMER_COUNTDOWN

function prompt(type, current) {
  // Here is the event
  return { type, payload: { current } };
}

function Timer() {
  const TIMER = useSelector((item) => item.COUNTDOWN);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);
  let [minute, setMinute] = useState();
  let [second, setSecond] = useState();
  useEffect(() => {
    if (toggle === true) {
      // Starting the countdown
      const INV_ID = setInterval(() => {
        let test = TIMER_COUNTDOWN(TIMER);
        setMinute(test.minute);
        setSecond(test.second);
        if (test.time === 0) {
          setToggle(false); // Stop the countdown
          dispatch(prompt("time", test.time));
        }
      }, 1000);
      return () => clearInterval(INV_ID);
    }
  }, [toggle, TIMER, dispatch]);

  return (
    <>
      {minute}:{second}
    </>
  );
}

export default Timer;
