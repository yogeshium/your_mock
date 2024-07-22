import { useSelector} from "react-redux";
import SectionInfo from "./Section";

const SectionMap = () => {
    const {sections}=useSelector(state=>state.mock)
     return (
    <div className="time-section-container-sections">
      {sections?.map((e, idx) => {
        return <SectionInfo key={e.id} idx={idx} />;
      })}
    </div>
  );
};

export default SectionMap;
