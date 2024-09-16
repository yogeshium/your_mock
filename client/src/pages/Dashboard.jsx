import { useNavigate } from "react-router-dom";
function Dashboard(){
    const navigate = useNavigate();
    return(
        <div>
            <div>
                <button onClick={()=>{navigate("create")}}>Create a Mock</button>
            </div>
            <div>
                <button onClick={()=>{navigate("exam")}}>Give a Mock</button>
            </div>

        </div>
    )
}
export default Dashboard;