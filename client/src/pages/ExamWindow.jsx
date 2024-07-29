import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFetch } from "../hooks/fetch.js";
import { setMock } from "../store/mockData.js";
import Response from "../components/Response.jsx";
import SectionMap from "../components/SectionMap.jsx";
import QuestionWindow from "../components/QuestionWindow.jsx";
import TimeLeft from "../components/TimeLeft.jsx";

const ExamWindow = () => {
  const navigate = useNavigate();

  //State for cheking (whether to start exam or not)
  const [examStart, setExamStart] = useState(false);

  //To set mock data
  const dispatch = useDispatch();

  //Id of mock
  const { id } = useParams();

  //Fetching the data
  const { data, isPending, error } = useFetch(
    `http://localhost:8000/exam/${id}`
  );

  //setMock as data arrives
  useEffect(() => {
    dispatch(setMock(data));
  }, [data]);

  //If User select yes - setExamStart - true;
  const handleExamStart = ()=>{
    setExamStart(true);
  }
  //if user select no - go back to exam page
  const handleGoBack = ()=>{
    navigate(-1);
  }

  //Show loading... while fetching the data
  if (isPending) return <div>Loading...</div>;

  //If we got error while fetching 
  if (error) return <div>{error} </div>;

  //For asking - whether to start exam or not
  if (!examStart) {
    return (
      <div>
        <p>Do you want to start the mock?</p>
        <button onClick={handleExamStart}>Yes</button>
        <button onClick={handleGoBack}>No</button>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="qa-response-container">
        <QuestionWindow />
        <Response />
      </div>
      <div className="time-section-container">
        <div className="time-section-container-time">
          <TimeLeft />
        </div>
        <SectionMap />
      </div>
    </div>
  );
};
export default ExamWindow;
