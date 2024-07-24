import { FunctionComponent, ReactNode } from "react";
import { useLanguage } from "../../../../locales/locale";
import "./index.scss";

interface ICardHeader {
    icon?: ReactNode;
    title?: string;
}

export const CardHeader: FunctionComponent<ICardHeader> = (props) => {
    const { i18n } = useLanguage();

    return (
        <div className="card-header-wrap">
            <div className="card-header-icon">
                {props.icon}
            </div>
            <div className="card-header-title">
                {i18n(props.title || '')}
            </div>
        </div>
    );
};