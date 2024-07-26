import { FunctionComponent } from "react";
import "./index.scss";
import { useLanguage } from "../../../../locales/locale";
import { Image } from 'antd';

interface ICardProductDetail {
    title?: string;
    text?: string
    image?: string;
}

export const CardProductDetail: FunctionComponent<ICardProductDetail> = (props) => {
    const {i18n} = useLanguage();

    return (
        <div className="cardproductdetail-container">
            <div className="cardproductdetail-title">
                {i18n(props.title || "")}
            </div>
            <div className="cardproductdetail-detail">
                <div className="cardproductdetail-text">
                    {props.text}
                </div>
                <Image className="cardproductdetail-image" src={props.image} alt="" />
            </div>
        </div>
    )
}