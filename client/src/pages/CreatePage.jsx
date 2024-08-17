import { useState } from "react";
import { CreateSections } from "../components";
import { useMock } from "../contexts/MockContext";
function CreatePage() {
  const mock = useMock();
  const [title, setTitle] = useState(mock?.title);
  const [duration, setDuration] = useState({
    hours: mock?.duration.hours,
    minutes: mock?.duration.minutes,
    seconds: mock?.duration.seconds,
  });

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
    <div>
      <div>
        <input
          type="text"
          value={title}
          placeholder="Mock Title"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Duration: </label>
        <input
          type="text"
          value={duration.hours}
          onChange={handleHoursChange}
          placeholder="HH"
        />
        :
        <input
          type="text"
          value={duration.minutes}
          onChange={handleMinutesChange}
          placeholder="MM"
        />
        :
        <input
          type="text"
          value={duration.seconds}
          onChange={handleSecondsChange}
          placeholder="SS"
        />
      </div>
      <CreateSections />

      <div>
        <button>Save Mock</button>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default CreatePage;
