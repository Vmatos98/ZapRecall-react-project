import React from "react";
import {zapStatus} from "./Database";
export function Footer(props){
    const{value, status} = props;
    console.log("Footer" + status)
    return(
        <footer>
            <div className="score">
                <h1>{value}/8 CONCLUÍDOS</h1>
            </div>
            <div className="icons">
            <ul>
                {status.map(item => <li>{zapStatus[item].icon}</li>)}
            </ul>    
            </div>
        </footer>
    )
}
