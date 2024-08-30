import React, { useState } from "react";
import { useMock, useMockDispatch } from "../contexts/MockContext";

const QuestionInput = ({ index }) => {
  const mock = useMock();
  const dispatch = useMockDispatch();
  const [content, setContent] = useState(
    mock?.sections[index.sectionIndex].questions[index.questionIndex].content
  );
  const [duration, setDuration] = useState(
    mock?.sections[index.sectionIndex].questions[index.questionIndex].duration
  );
  const [options, setOptions] = useState(
    mock?.sections[index.sectionIndex].questions[index.questionIndex].options
  );
  const [answer,setAnswer] = useState(mock?.sections[index.sectionIndex].questions[index.questionIndex].answer);

  const [editingOption, setEditingOption] = useState(null);

  const handleAddOption = () => {
    setOptions([...options, { content: "", edit: true }]);
    setEditingOption("");
  };

  const handleSaveEditOption = () => {
    setOptions(
      options.map((option) => {
        if (option.edit) return { content: editingOption, edit: false };
        else return option;
      })
    );
  };

  const handleClickEdit = (idx) => {
    setEditingOption(options[idx].content);
    setOptions(
      options.map((o, i) => {
        if (i === idx) return { ...o, edit: true };
        else return { ...o, edit: false };
      })
    );
  };

  const handleSave = () => {
    dispatch({
      type: "Save This Question",
      sectionIndex: index.sectionIndex,
      questionIndex: index.questionIndex,
      question: {
        content: content,
        duration: duration,
        options: options,
        edit: false,
        answer: answer,
      },
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

  return (
    <div className="question-input-container">
      <div>
        <label>Question:</label>
        <textarea
          name=""
          id=""
          rows="7"
          className="textarea-input"
          value={content}
          placeholder="Question Title - You can put Latex code here"
          onChange={(e) => setContent(e.target.value)}
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
      {options.map((option, index) =>
        option.edit === true ? (
          <div key={index} className="option-input-container">
            <textarea
              type="text"
              rows="3"
              className="textarea-input"
              placeholder={`Option ${index+1} - You can put Latex code here`}
              value={editingOption}
              onChange={(e) => setEditingOption(e.target.value)}
            />
            <button onClick={handleSaveEditOption}>Save</button>
          </div>
        ) : (
          <div key={index} onClick={() => handleClickEdit(index)}>
            {option.content}
          </div>
        )
      )}

      <div>
        <button onClick={handleAddOption}>+ Add Option</button>
      </div>
      <div>
        <label>Answer: </label>
        <input type="text" placeholder="Option Number" onChange={(e)=>setAnswer(e.target.value)} value={answer}/>
      </div>

      <div>
        <button onClick={handleSave}>Save This Question</button>
      </div>
    </div>
  );
};

export default QuestionInput;
