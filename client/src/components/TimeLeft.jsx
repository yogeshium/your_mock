import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "./Heading";

const TimeLeft = () => {
  const [timeRemaining, setTimeRemaining] = useState();
  const initialTime = useSelector((state) =>{
      const data=state.mock;
      if(data) return data.duration;
  } );
  // console.log(initialTime);
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeRemaining(initialTime);
  },[initialTime])
  
  // console.log(timeRemaining)
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          navigate("/result");
          // console.log("Countdown complete!");
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="time-left-container">
      <Heading title="Time Left"/>
      <div className="time-left">
        <div className="time-unit">
          <span id="hours">{hours}</span>
          <span>Hours</span>
        </div>

        <div className="time-unit">
          <span id="minutes">{minutes}</span>
          <span>Minutes</span>
        </div>

        <div className="time-unit">
          <span id="seconds">{seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default TimeLeft;
