import { FunctionComponent } from "react";
import "./index.scss";

interface ICardProduct {
    image?: string;
    title?: string;
    price?: string;
    discount?: string;
    time?: { day: number, hour: number, minutes: number, second: number }[];
}

export const CardProduct: FunctionComponent<ICardProduct> = (props) => {
    return (
        <div className="cardproduct-container">
            <div className="cardproduct-image">
                <img src={props.image} style={{ width: 210, height: 210, borderRadius: 8 }} />
            </div>
            <div className="cardproduct-content">
                <div className="cardproduct-title">
                    {props.title}
                </div>
                <div className="cardproduct-price">
                    <div className="cardproduct-price-text">{props.price}</div>
                    <span className="cardproduct-price-discount">{props.discount}</span>
                </div>
            </div>
            {props.time?.map((item, index) => {
                return (
                    <div className="cardproduct-time" key={index}>
                        <div className="cardproduct-input">
                            <input value={item.day} />
                            <input value={item.hour} />
                        </div>
                        <div style={{ fontWeight: 700 }}>:</div>
                        <div className="cardproduct-input">
                            <input value={item.minutes} />
                            <input value={item.second} />
                        </div>
                    </div>
                )
            })}
            <div className="cardproduct-time" style={{color: "#8a8a8a", fontStyle: "italic", fontSize: 14}}>
                <div className="cardproduct-input">
                    <div>Days</div>
                    <div>Hours</div>
                </div>
                <div className="cardproduct-input">
                    <div>Mins</div>
                    <div>Secs</div>
                </div>
            </div>
        </div>
    )
}