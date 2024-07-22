import QAWindow from "./QAWindow";
import TimeLeft from "./TimeLeft";
import { useParams } from "react-router-dom";
import Response from "./Response";
import {useDispatch } from "react-redux";
import { useEffect } from "react";
import {fetchMockData} from "../services/fetchService.js"
import {setMock} from "../store/mockData.js"
import SectionMap from "./SectionMap.jsx";


const ExamWindow = ()=>{
    // console.log("hii");
    const dispatch = useDispatch();
    const {id}=useParams();
    useEffect( ()=>{
        const fetchData= async (id)=>{
            const res= await fetchMockData(id);
            dispatch(setMock(res));
        }
        fetchData(id);
    },[])

    
    return (
        <div className="home-container">
            <div className="qa-response-container">
                <QAWindow />
                <Response />
            </div>
            <div className="time-section-container">
                <div className="time-section-container-time">
                    <TimeLeft />
                </div>
                
                <SectionMap/>
               
            </div>
        </div>
    );
}
export default ExamWindow;