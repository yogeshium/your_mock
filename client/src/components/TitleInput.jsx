import { useState, useEffect } from "react";
import { useMockDispatch } from "../contexts/MockContext";

export default function TitleInput({ mockTitle }) {
  const dispatch = useMockDispatch();
  const [title, setTitle] = useState(mockTitle);

  useEffect(() => {
    dispatch({
      type: "Change In Title",
      title: title,
    });
  }, [title]);

  return (
    <div className="title">
      <label>Title: </label>
      <input
        type="text"
        className="title-input"
        value={title}
        placeholder="Mock Title"
        required
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </div>
  );
}
