import { useState, useEffect} from "react";
import Heading from "./Heading";
import { useSelector, useDispatch } from "react-redux";
import { setOptionChosen } from "../store/mockData";

const QAWindow = () => {
  const mockData = useSelector((state) => state.mock);
  const curr = useSelector((state) => state.currentQuestion);
  // console.log(curr);
  const question = useSelector((state) => {
    const sections = state.mock.sections;
    if (sections) {
      return sections[curr.sectionNumber - 1].questions[
        curr.questionNumber - 1
      ];
    }
  });

  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    setSelectedOption(question?.optionChosen)
  }, [question?.optionChosen]);

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

 

  const handleChange = (id) => {
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
                  onChange={() => handleChange(e.id)}
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
