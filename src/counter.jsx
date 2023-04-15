import App from "./App";
import Checkbox from "./checkbox";

export default function Count({list, conta}){
    return(
        <div style={{display: 'flex', justifyContent: "space-evenly"}}>
            <span>
                <span style={{color: "white", fontWeight: "bold"}}>Total </span>
                <span style={{fontWeight: "bolder", color: "#E2DDB6"}}>{"  "+list.length}</span>
            </span>
            <span>
                <span style= {{color: "white"}}>Pending </span>
                <span  style={{fontWeight: "bolder", color: "#E2DDB6"}}>{"  "+list.length - conta}</span>
            </span>
        </div>
    )
}