import { FunctionComponent } from "react";
import { Image } from 'antd';
import "./index.scss";
import { imageSetting } from "../../../../helper";

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
                <Image rootClassName="carduser-image" src={imageSetting(props.image as any)} alt="" />
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