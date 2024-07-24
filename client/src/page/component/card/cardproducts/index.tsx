import { FunctionComponent } from "react";
import { TbCurrencyDong } from "react-icons/tb";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import "./index.scss";

interface ICardProduct {
    image?: string;
    title?: string;
    price?: string;
    discount?: string;
    discountPercent?: number;
    time?: { day: number, hour: number, minutes: number, second: number }[];
    hasDiscountTime?: boolean;
    hasHoverItem?: boolean;
}

export const CardProduct: FunctionComponent<ICardProduct> = (props) => {
    return (
        <div className="cardproduct-container">
            <div className="cardproduct-image">
                <img src={props.image} style={{ width: "100%", height: "100%", borderRadius: 8 }} />
            </div>
            <div className="cardproduct-content">
                <div className="cardproduct-title">
                    {props.title}
                </div>
                <div className="cardproduct-price">
                    <div className="cardproduct-price-text">
                        {(props.price && !props.discount) ? props.price : props.discount}
                        {(props.price || props.discount) ? <TbCurrencyDong /> : ""}
                    </div>
                    <span className="cardproduct-price-discount">
                        {(props.price && !props.discount) ? "" : props.price}
                        {(props.price && !props.discount) ? "" : <TbCurrencyDong />}
                    </span>
                </div>
            </div>
            {props.hasDiscountTime && props.time?.map((item, index) => {
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
            {props.hasDiscountTime &&
                <div className="cardproduct-time" style={{ color: "#8a8a8a", fontStyle: "italic", fontSize: 14 }}>
                    <div className="cardproduct-input">
                        <div>Days</div>
                        <div>Hours</div>
                    </div>
                    <div className="cardproduct-input">
                        <div>Mins</div>
                        <div>Secs</div>
                    </div>
                </div>
            }
            {props.discount &&
                <div className="cardproduct-sale">
                    {props.discountPercent}%
                    <div>Giảm</div>
                </div>
            }
            {props.hasHoverItem &&
                <div className="cardproduct-buttons">
                    <FaRegEye className="cardproduct-button" fontSize={20} />
                    <FaRegHeart className="cardproduct-button" fontSize={20} />
                    <MdAddShoppingCart className="cardproduct-button" fontSize={20} />
                </div>
            }
        </div>
    )
}