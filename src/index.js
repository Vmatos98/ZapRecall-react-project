import ReactDOM from "react-dom";
import Main from "./Main";
import Footer from "./Footer";
function App(){
    return(
        <>
            <Main/>
            <Footer/>
        </>
    );
}
let content = App();
let local= document.querySelector(".root")

ReactDOM.render(content, local);