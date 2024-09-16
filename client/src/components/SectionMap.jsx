import { useSelector } from "react-redux";
import Section from "./Section";

const SectionMap = () => {
  const { sections } = useSelector((state) => state.mock);
  return (
    <div className="time-section-container-sections">
      {sections?.map((e, idx) => {
        return <Section key={e.id} idx={idx} />;
      })}
    </div>
  );
};

export default SectionMap;
