import { useState, useEffect } from "react";
import { useMockDispatch } from "../contexts/MockContext";

export default function InstructionInput({ mockInstructions }) {
  const dispatch = useMockDispatch();

  const [instructions, setInstructions] = useState(mockInstructions);

  useEffect(() => {
    dispatch({
      type: "Change In Instructions",
      instructions: instructions,
    });
  }, [instructions]);

  return (
    <div className="instruction">
      <label>Instructions: </label>
      <textarea
        name=""
        id=""
        rows="15"
        className="textarea-input"
        placeholder="You can also put Latex code here"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
    </div>
  );
}
