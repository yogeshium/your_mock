import React, { useState } from "react";
import QuestionInput from "./QuestionInput";
import { useMock, useMockDispatch } from "../contexts/MockContext";

const SectionInput = ({ sectionIndex }) => {
  const mock = useMock();
  const dispatch = useMockDispatch();
  const [title, setTitle] = useState(mock?.sections[sectionIndex].title);
  const [duration, setDuration] = useState(
    mock?.sections[sectionIndex].duration
  );
  // const [questions, setQuestions] = useState(mock?.sections[index].questions);

  const handleAddQuestion = () => {
    dispatch({
      type: "Create New Question",
      sectionIndex: sectionIndex,
    });
  };

  const handleClickEdit = (idx) => {
    dispatch({
      type: "Edit This Question",
      sectionIndex: sectionIndex,
      questionIndex: idx,
    });
  };

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

  const handleSave = ()=>{
    dispatch({
      type: "Save This Section", 
      sectionIndex: sectionIndex, 
      newSection: {
        title: title, 
        duration: duration, 
        edit: false
      }
    })
  }

  return (
    <div className="section-input-container">
      <div>
        <label>Title: </label>
        <input
          type="text"
          className="title-input"
          placeholder="Section Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
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
      {mock?.sections[sectionIndex].questions.map((question, idx) =>
        question.edit === true ? (
          <QuestionInput
            key={idx}
            index={{ sectionIndex: sectionIndex, questionIndex: idx }}
          />
        ) : (
          <div key={idx} onClick={() => handleClickEdit(idx)}>
            Q. {idx + 1}
          </div>
        )
      )}

      <div>
        <button onClick={handleAddQuestion}>+ Add Question</button>
      </div>
      <div>
        <button onClick={handleSave}>Save This Section</button>
      </div>
    </div>
  );
};

export default SectionInput;
