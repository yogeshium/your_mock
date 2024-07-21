import Heading from "./Heading";
const TimeLeft = () => {
  return (
    <div className="time-left-container">
      <Heading />
      <div className="time-left">
        <div class="time-unit">
          <span id="hours">00</span>
          <span>Hours</span>
        </div>
        
        <div class="time-unit">
          <span id="minutes">00</span>
          <span>Minutes</span>
        </div>
        
        <div class="time-unit">
          <span id="seconds">00</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default TimeLeft;
