import React from "react";
import {decks, zapStatus} from "./Database";
import {Finish} from "./Finish"
import {Footer} from "./Footer"
import logo from "./assets/logo-pequeno.png"
import seta from "./assets/setinha.png"
export default function FirstPage(){
    const data = decks.React.data;
    data.sort(shuffler);
    let winStatus = false;
    const [count, setCount] = React.useState(0);
    const [allStatus, setAllStatus]= React.useState([]);
    const [state, setState] = React.useState({});
    return(
        <>
        <section className="first">
            <div className="logo">
                <img src={logo} alt="logo zap recall" />
                <h1>ZapRecall</h1>

            </div>
            <div className="cards">
                {data.map((key, index) => (
                    !state[index]?
                    <Card question={key.question} 
                    answer={key.answer} 
                    index={index+1} 
                    calback={(value) => { setCount(count + value); } } 
                    status={
                        (value)=> {
                        setState({...state, [index]:value})
                        setAllStatus([...allStatus, value])}
                    } />
                    :
                    <PlayedCard index={index+1} status = {state[index]}/>
                ))}
                
            </div>
        </section>
        {allStatus.includes("red") ? winStatus = false : winStatus = true }
        {allStatus.length !== 8 ?
        <Footer value={count} status = {allStatus} ></Footer>
        :
        <Finish  result = {winStatus} status = {allStatus}/>}
        </>
        
    );
}

function Card(props){
    const [state, setState] = React.useState("fit");
    const {question, answer, index, calback, status} = props;
    console.log(question);
    return state === "fit" ? (
        <div className="card fit" onClick={()=>{setState("show")}}>
            <p>questão   {index}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div> ) 
        
        : state === "show" ? (
        <div className="card show" onClick={()=>{
            setState("answer")
            calback(1)
            }}>
            <p>{question}</p>
            <img src={seta} alt="" />
        </div> )
        
        :state === "answer" ? (
        <div className="card show">
            <p className="answer">{answer} </p>
            <button className="btnRed" onClick={()=>{status("red")}}>Não lembrei</button> 
            <button className="btnOrange" onClick={()=>{status("orange")}}>Quase não lembrei</button>
            <button className="btnGreen" onClick={()=>{status("green")}}>Zap!</button>
        </div>   
        ):(<></>)
    
}

function PlayedCard(props){
    const {index, status} = props;
    let classCSS =`card fit ${zapStatus[status].class}`
    return(
        <div className={classCSS}>
            <p>questão   {index}</p>
            {zapStatus[status].icon}
        </div>
    );
}
function shuffler(){
    return Math.random() - 0.5; 
}