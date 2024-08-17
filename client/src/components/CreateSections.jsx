// import { useState } from "react";
import SectionInput from "./SectionInput";
import { useMock, useMockDispatch } from "../contexts/MockContext";

function CreatePage() {
  const mock = useMock();
  const dispatch = useMockDispatch();

  const handleAddSection = () => {
    dispatch({
      type: "Create New Section",
    })
  };

  const handleClickEdit = (idx)=>{
    dispatch({
      type: "Edit This Section",
      sectionIndex: idx, 
    })
  }

  return (
    <div>
      {/* Show All the sections, click them if, you want to edit */}
      {mock?.sections.map((section, idx) =>
        section.edit === true ? (
          <SectionInput key={idx} sectionIndex={idx} />
        ) : (
          <div key={idx} 
            onClick={()=>handleClickEdit(idx)}
          >
            {section.title}
          </div>
        )
      )}
      <button onClick={handleAddSection}>+ Add Section</button>
    </div>
  );
}

export default CreatePage;
