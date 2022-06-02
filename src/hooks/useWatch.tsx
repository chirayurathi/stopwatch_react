import { useState, useRef } from "react";

const useWatch = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setActive] = useState(false);
  const [isPaused, setPaused] = useState(false);
  let counter = useRef<NodeJS.Timeout>();

  const handleStart = () => {
    setActive(true);
    setPaused(true);
    counter.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(counter.current);
    setPaused(false);
  };

  const handleResume = () => {
    setPaused(true);
    counter.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(counter.current);
    setActive(false);
    setPaused(false);
    setTimer(0);
  };
  return {
    timer,
    isActive,
    isPaused,
    handleResume,
    handlePause,
    handleReset,
    handleStart,
  };
};

export default useWatch;
