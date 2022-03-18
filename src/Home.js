import React from "react";

export default function Home(){
    const [initRecall, setInitRecall] = React.useState(false);
    const classCSS = `home ${initRecall ? "hidden" : ""}`;
    return(
        <section className={classCSS}>
            <img src="./img/logo.png" alt="imagem" />
            <p>ZapRecall</p>
            <button onClick={() => setInitRecall(!initRecall)}>Iniciar Recall!</button>
            
        </section>
    );
}