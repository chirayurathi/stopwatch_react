import React from "react";
import Style from "./Timer.module.css";
import useWatch from "../../hooks/useWatch";
import timeStyle from "../../helpers/timeStyle";
const Timer = () => {
  const watch = useWatch();

  return (
    <div className={Style.Timer}>
      <h3>React Stopwatch</h3>
      <div className={Style.WatchContainer}>
        <p>{timeStyle(watch.timer)}</p>
        <div className={Style.ButtonContainer}>
          {!watch.isActive && !watch.isPaused ? (
            <button onClick={watch.handleStart}>Start</button>
          ) : watch.isPaused ? (
            <button onClick={watch.handlePause}>Pause</button>
          ) : (
            <button onClick={watch.handleResume}>Resume</button>
          )}
          <button onClick={watch.handleReset} disabled={!watch.isActive}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
