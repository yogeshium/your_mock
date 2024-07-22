import Heading from "./Heading";
import { useSelector } from "react-redux";

const SectionInfo = ({ idx }) => {
  const section = useSelector((state) => state.mock.sections[idx]);
  const statusClassName = [
    "not-attempted",
    "current",
    "answered",
    "not-answered",
    "marked-review",
  ];

  return (
    <div className="section-container">
      <Heading title={section.title} />
      <div className="section-q-box-container">
        {section.questions.map((q, i) => {
          return (
            <div
              className={"section-q-box " + statusClassName[q.status]}
              key={q.id}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SectionInfo;
