import ReactDOM from "react-dom";
import Main from "./Main";
import "./style.css"
import "./reset.css"
function App(){
    
    return(
        <>
            <Main/>
        </>
    );
}
let content = App();
let local= document.querySelector(".root")

ReactDOM.render(content, local);