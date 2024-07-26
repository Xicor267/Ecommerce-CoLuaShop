import { FunctionComponent } from "react";
import { TbCurrencyDong } from "react-icons/tb";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { TooltipCustom } from "../../tootip";
import { Image } from 'antd';
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
    const handleViewImage = () => {
        console.log("first")
        return (
            <Image
                className="cardproduct-image"
                src={props.image}
            />
        )
    }

    const getIcon = [
        {
            title: "Xem chi tiết sản phẩm",
            color: "#1677ff",
            content: <FaRegEye className="cardproduct-button" fontSize={20} />
        },
        {
            title: "Thích sản phẩm",
            color: "#1677ff",
            content: <IoHeartOutline className="cardproduct-button" fontSize={20} />
        },
        {
            title: "Thêm vào giỏ hàng",
            color: "#1677ff",
            content: <MdAddShoppingCart className="cardproduct-button" fontSize={20} />
        },
    ];

    return (
        <div className="cardproduct-container">
            {/* <img className="cardproduct-image" src={props.image} alt="" /> */}
            <Image
                className="cardproduct-image"
                src={props.image}
            />
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
                    {getIcon.map((item, index) => (
                        <TooltipCustom
                            key={index}
                            title={item.title}
                            color={item.color}
                            content={item.content}
                        />
                    ))}
                </div>
            }
        </div>
    )
}