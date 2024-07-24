import { FunctionComponent, ReactNode } from "react";
import "./index.scss"

interface ICardFooter {
    title?: string;
    icon?: ReactNode;
    desc: { content: string, href: string }[];
    element?: ReactNode;
}

export const CardFooter: FunctionComponent<ICardFooter> = (props) => {
    return (
        <div className="cardfooter-container">
            <div className="cardfooter-title">
                {props.title}
            </div>
            <div className="cardfooter-icon">
                {props.icon}
                <div className="cardfooter-desc">
                    {props.desc.map((item, index) => (
                        <a
                            className="cardfooter-desc-url"
                            href={item.href}
                            target="_blank"
                            key={index}
                        >{item.content}</a>
                    ))}
                </div>
            </div>
            <div className="cardfooter-element">
                {props.element}
            </div>
        </div>
    )
}