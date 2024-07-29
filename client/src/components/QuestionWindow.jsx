import { useState, useEffect } from "react";
import Heading from "./Heading";
import { useSelector, useDispatch } from "react-redux";
import { setOptionChosen, setStatus } from "../store/mockData";

const QAWindow = () => {
  const dispatch = useDispatch();
  const mockData = useSelector((state) => state.mock);
  const curr = useSelector((state) => state.currentQuestion);
  const [selectedOption, setSelectedOption] = useState(null);
  
  const question = mockData?.sections[curr?.sectionNumber-1].questions[curr.questionNumber-1];

  const updateStatus = (status) => {
    return {
      ...mockData,

      sections: [
        ...mockData.sections.slice(0, curr.sectionNumber - 1),
        {
          ...mockData.sections[curr.sectionNumber - 1],
          questions: [
            ...mockData.sections[curr.sectionNumber - 1].questions.slice(
              0,
              curr.questionNumber - 1
            ),
            {
              ...mockData.sections[curr.sectionNumber - 1].questions[
                curr.questionNumber - 1
              ],
              status: status,
            },
            ...mockData.sections[curr.sectionNumber - 1].questions.slice(
              curr.questionNumber
            ),
          ],
        },
        ...mockData.sections.slice(curr.sectionNumber),
      ],
    };
  };

  //Whenever going to new question - taking its optionChosen and showing.
  //Also set Status to 'current'
  useEffect(() => {
    dispatch(setStatus(updateStatus(1)));
    setSelectedOption(question?.optionChosen);
  }, [question?.optionChosen, curr]);

  const updateOptionSelected = (id) => {
    return {
      ...mockData,

      sections: [
        ...mockData.sections.slice(0, curr.sectionNumber - 1),
        {
          ...mockData.sections[curr.sectionNumber - 1],
          questions: [
            ...mockData.sections[curr.sectionNumber - 1].questions.slice(
              0,
              curr.questionNumber - 1
            ),
            {
              ...mockData.sections[curr.sectionNumber - 1].questions[
                curr.questionNumber - 1
              ],
              optionChosen: id,
            },
            ...mockData.sections[curr.sectionNumber - 1].questions.slice(
              curr.questionNumber
            ),
          ],
        },
        ...mockData.sections.slice(curr.sectionNumber),
      ],
    };
  };

  //Set the option Chosen whenever user choose a option and set status to 'answered' (answered -> 2)
  const handleChangeOption = (id) => {
    setSelectedOption(id);
    dispatch(setOptionChosen(updateOptionSelected(id)));
  };

  return (
    <div className="qa-container">
      <Heading title={mockData?.title} />
      <div className="question-container">
        <div className="question-id">{question?.id}</div>
        <br className="line-break" />
        <div className="question-content">{question?.content}</div>

        <div className="question-images"></div>
        <div className="options-container">
          {question?.options?.map((e, idx) => {
            return (
              <div className="option-content" key={e.id}>
                <input
                  type="radio"
                  id="option"
                  name="option"
                  checked={selectedOption === e.id}
                  value={e.content}
                  onChange={() => handleChangeOption(e.id)}
                />
                <label htmlFor="option">
                  {(idx + 1)?.toString() + ". " + e.content}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QAWindow;
