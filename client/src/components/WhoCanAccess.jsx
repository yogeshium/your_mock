import { useState, useEffect } from "react";
import { useMockDispatch } from "../contexts/MockContext";
export default function WhoCanAccess({authorized}) {
  const dispatch = useMockDispatch();
  const [accessType, setAccessType] = useState(authorized.accessType);
  const [emails, setEmails] = useState(authorized.emails);

  useEffect(() => {
    dispatch({
      type: "Change In Authorized",
      accessType: accessType,
      emails: emails,
    });
  }, [emails, accessType]);

  const handleDropdownChange = (event) => {
    setAccessType(event.target.value);
  };

  return (
    <form>
      <label>Access Type:</label>
      <select value={accessType} onChange={handleDropdownChange}>
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
      {accessType === "private" && (
        <div>
          <textarea
            name=""
            id=""
            rows="3"
            className="textarea-input"
            value={emails}
            onChange={(e) => setEmails(e.target.value)}
            placeholder="Add Emails comma separated"
          />
        </div>
      )}
    </form>
  );
}
