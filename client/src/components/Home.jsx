import QAWindow from "./QAWindow";
import TimeLeft from "./TimeLeft";
import SectionInfo from "./Section";
import Response from "./Response";
const Home = ()=>{
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
                
                <div className="time-section-container-sections">
                    <SectionInfo />
                    <SectionInfo />
                    
                </div>
               
            </div>
        </div>
    );
}
export default Home;