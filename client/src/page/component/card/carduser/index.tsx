import { FunctionComponent } from "react";
import "./index.scss";

interface ICardUser {
    image?: string;
    name?: string;
    content?: string;
    position?: string;
}

export const CardUser: FunctionComponent<ICardUser> = (props) => {
    return (
        <div className="carduser-container">
            <div className="" style={{textAlign: "center"}}>
                <img className="carduser-image" src={props.image} alt="" />
            </div>
            <div className="carduser-title">
                {props.name}
            </div>
            <hr className="carduser-title-border"/>
            <div className="carduser-content">
                {props.content}
            </div>
            <div className="carduser-position">
                {props.position}
            </div>
        </div>
    )
}