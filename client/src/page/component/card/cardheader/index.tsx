import { FunctionComponent, ReactNode } from "react";
import "./index.scss";

interface ICardHeader {
    icon?: ReactNode;
    title?: string;
}

export const CardHeader: FunctionComponent<ICardHeader> = (props) => {
    return (
        <div className="card-header-wrap">
            <div className="card-header-icon">
                {props.icon}
            </div>
            <div className="card-header-title">
                {props.title}
            </div>
        </div>
    )
}