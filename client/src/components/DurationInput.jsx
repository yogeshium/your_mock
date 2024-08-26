import { useState, useEffect } from "react";
import { useMockDispatch } from "../contexts/MockContext";

export default function DurationInput({ mockDuration }) {
  const dispatch = useMockDispatch();

  const [duration, setDuration] = useState({
    hours: mockDuration.hours,
    minutes: mockDuration.minutes,
    seconds: mockDuration.seconds,
  });

  useEffect(() => {
    dispatch({
      type: "Change In Duration",
      duration: duration,
    });
  }, [duration]);

  const handleHoursChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0 && Number(value) <= 23)) {
      setDuration({ ...duration, hours: value });
    }
  };

  const handleMinutesChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0 && Number(value) <= 59)) {
      setDuration({ ...duration, minutes: value });
    }
  };
  const handleSecondsChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0 && Number(value) <= 59)) {
      setDuration({ ...duration, seconds: value });
    }
  };

  return (
    <div className="duration">
      <label>Duration: </label>
      <input
        type="text"
        className="duration-input"
        value={duration.hours}
        onChange={handleHoursChange}
        placeholder="Hours"
      />
      :
      <input
        type="text"
        className="duration-input"
        value={duration.minutes}
        onChange={handleMinutesChange}
        placeholder="Minutes"
      />
      :
      <input
        type="text"
        className="duration-input"
        value={duration.seconds}
        onChange={handleSecondsChange}
        placeholder="Seconds"
      />
    </div>
  );
}
