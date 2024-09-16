import Heading from "./Heading";
import { useDispatch, useSelector } from "react-redux";
import { setSectionQuestion } from "../store/currentQuestion";
import {setStatus} from "../store/mockData";

const Section = ({ idx }) => {
  const dispatch = useDispatch();
  const mockData = useSelector((state) => state.mock);
  const curr = useSelector((state) => state.currentQuestion);
  const section = mockData?.sections[idx];
  const statusClassName = [
    "not-attempted",
    "current",
    "answered",
    "not-answered",
    "marked-review",
  ];

  /*
    Update the status according to the selected option. If the optionChosen=0, that 
    means, user didn't chosen any option. You will mark it 3 ->(not-answered).
    Else, you will mark it 2 ->(answered)
  */
  const updateStatus = () =>{
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
              status: mockData.sections[curr.sectionNumber - 1].questions[
                curr.questionNumber - 1].optionChosen===0?3:2,
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

  /* 
    Whenever a user clicks on a question, we have to update the status first,
    and then we will change the current question to the question that the user clicked.
  */
  const handleClick = (sid, qid) => {
    dispatch(setStatus(updateStatus()))
    dispatch(setSectionQuestion({ sectionNumber: sid, questionNumber: qid }));
  };

  return (
    <div className="section-container">
      <Heading title={section.title} />
      <div className="section-q-box-container">
        {section.questions.map((q, i) => {
          return (
            <div
              className={"section-q-box " + statusClassName[q.status]}
              key={q.id}
              onClick={() => handleClick(section.id, q.id)}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Section;
