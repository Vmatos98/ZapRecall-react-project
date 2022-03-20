import React from "react";
import logo from "./assets/logo.png"
export default function Home(){
    const [initRecall, setInitRecall] = React.useState(false);
    const classCSS = `home ${initRecall ? "hidden" : ""}`;
    return(
        <section className={classCSS}>
            <div className="content">
                <img src={logo} alt="imagem" />
                <p>ZapRecall</p>
                <button onClick={() => setInitRecall(!initRecall)}>Iniciar Recall!</button>
            </div>
        </section>
    );
}