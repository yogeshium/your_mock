import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/currentQuestion.js";
import { setStatus } from "../store/mockData.js";
import { useNavigate } from "react-router-dom";


const Response = () => {
  const mockData = useSelector((state) => state.mock);
  const curr = useSelector((state) => state.currentQuestion);
  const sections = mockData?.sections;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* When you click Next or Previous, you have to update status of current question.
  It means, when user click Next or Previous, you will set the status of the current
  question and then you will increment or decrement the current question accordingly.

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

  const submitHandler = () => {
    navigate("/result");
  };

  const handleNext = () => {
    const totalSections = sections.length;
    const totalCurrSectionQuestions =
      sections[curr.sectionNumber - 1].questions.length;
    dispatch(setStatus(updateStatus()))
    dispatch(increment({ totalCurrSectionQuestions, totalSections }));
  };

  const handlePrev = () => {
    const totalSections = sections.length;
    const totalPrevSectionQuestions =
      curr.sectionNumber - 1 === 0
        ? sections[totalSections - 1].questions.length
        : sections[curr.sectionNumber - 1].questions.length;
    dispatch(setStatus(updateStatus()))
    dispatch(decrement({ totalPrevSectionQuestions, totalSections }));
  };

  return (
    <div className="response-container">
      <div className="button-container">
        <div className="submit-button-container">
          <button className="btn btn-submit" onClick={submitHandler}>
            End
          </button>
        </div>
        <div className="prev-next-mark-buttton-container">
          <button className="btn btn-mark">Mark for Review</button>
          <div className="prev-next-button-container">
            <button className="btn btn-prev" onClick={handlePrev}>
              Previous
            </button>
            <button className="btn btn-next" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="color-info-container">
        <div className="color-info">
          <div className="color-circle current"></div>
          <div className="color-mark">Current</div>
        </div>
        <div className="color-info">
          <div className="color-circle not-attempted"></div>
          <div className="color-mark">Not Attempted</div>
        </div>
        <div className="color-info">
          <div className="color-circle answered"></div>
          <div className="color-mark">Answered</div>
        </div>
        <div className="color-info">
          <div className="color-circle not-answered"></div>
          <div className="color-mark">Not Answered</div>
        </div>
        <div className="color-info">
          <div className="color-circle marked-review"></div>
          <div className="color-mark">Marked For Review</div>
        </div>
      </div>
    </div>
  );
};
export default Response;
