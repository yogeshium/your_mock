import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchResult } from "../services/fetchService";
const ResultWindow = () => {
  const mockData = useSelector((state) => state.mock);

  const makeAnswerScript = () => {
    return {
      id: mockData.title,
      sections: mockData.sections.map((s) => {
        return {
          id: s.id,
          questions: s.questions.map((q) => {
            return {
                id: q.id,
                optionChosen: q.optionChosen
            }
          }),
        };
      }),
    };
  };

  useEffect(() => {
    const answerScript = makeAnswerScript();
    const fetchData = async () => {
      const res = await fetchResult(answerScript);
      console.log(res);
    };
    fetchData();
  }, []);
//   console.log(mockData);
  return <div>Test Complete</div>;
};

export default ResultWindow;
