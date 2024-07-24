import { FunctionComponent } from "react";
import "./index.scss";

interface ICardNews {
    image?: string;
    title?: string;
    createDate?: string;
}

export const CardNews: FunctionComponent<ICardNews> = (props) => {
    return (
        <div className="cardnews-container">
            <div className="cardnews-details">
                <img style={{ width: 80, height: 80, borderRadius: 8 }} src={props.image} alt="" />
                <div className="cardnews-content">
                    <div className="cardnews-content-title">{props.title}</div>
                    <div className="cardnews-content-text">{props.createDate}</div>
                </div>
            </div>
        </div>
    )
}