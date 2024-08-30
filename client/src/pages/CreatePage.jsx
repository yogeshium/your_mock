import { useState } from "react";
import {
  CreateSections,
  WhoCanAccess,
  TitleInput,
  DurationInput,
  InstructionInput,
} from "../components";
import validate from "../utils/validation.js";
import manipulate from "../utils/manipulation.js";
import { useMock } from "../contexts/MockContext";

function CreatePage() {
  const [errorMsg, setErrorMsg] = useState("");
  const mock = useMock();

  const handleSubmit = () => {
    //call validate
    validate(mock)
      .then(async (result) => {
        let newMock = manipulate(result);
        try {
          const response = await fetch(
            "http://localhost:8000/mock/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newMock),
            }
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error("Error:", error);
        }
      })
      .catch((error) => setErrorMsg(error));

    //call manipulate data
    //call axios.post for pushing data to backend
  };

  return (
    <div className="mock-container">
      <TitleInput mockTitle={mock.title} />
      <DurationInput mockDuration={mock.duration} />
      <CreateSections />
      <WhoCanAccess authorized={mock?.authorized} />
      <InstructionInput mockInstructions={mock.instructions} />
      <div>
        {/* <button className="btn btn-save" onClick={handleSaveMock}>
          Save Mock
        </button> */}
        {errorMsg !== "" && <p className="error">Error: {errorMsg}</p>}
        <button className="btn btn-submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreatePage;
