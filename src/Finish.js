import {finish, zapStatus} from "./Database";
import party from "./assets/party.png";
import sad from "./assets/sad.png"
export function Finish(props){
    const{result, status} = props;
    let icon= result?party:sad;
    let title = result? finish.zap.title:finish.fail.title;
    let message =result? finish.zap.message:finish.fail.message;
    return (
        <section className="finish">
            <div className="title">
                <img src={icon} alt="" />
                <h1>{title}</h1>
            </div>
            <p>{message}</p>
            <div className="icons">
            <ul>
                {status.map(item => <li>{zapStatus[item].icon}</li>)}
            </ul>    
            </div>
        </section>
    )
}