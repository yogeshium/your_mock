import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { setMock } from "../store/mockData";

function Exam(){
    const [mockId, setMockId] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e)=>{
        e.preventDefault();
        navigate(mockId)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="mockId">Mock Id: </label>
                <input type="text" id="mockId" name="mockId" value={mockId} onChange={(e)=>{setMockId(e.target.value)}}/>
                <button type="submit">Start</button>
            </form>
        </div>
    );
}

export default Exam;