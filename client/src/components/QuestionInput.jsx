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
      },
    });
  };

  const handleHoursChange = (e) => {
    setDuration({ ...duration, hours: e.target.value });
  };
  const handleMinutesChange = (e) => {
    setDuration({ ...duration, minutes: e.target.value });
  };

  return (
    <div>
      <div>
        <textarea
          name=""
          id=""
          value={content}
          placeholder="Question Title"
          onChange={(e) => setContent(e.target.value)}
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
      </div>
      {options.map((option, index) =>
        option.edit === true ? (
          <div key={index}>
            <input
              type="text"
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
        <input type="text" placeholder="Answer" />
      </div>

      <div>
        <button onClick={handleSave}>Save This Question</button>
      </div>
    </div>
  );
};

export default QuestionInput;
