import { FunctionComponent } from "react";
import { TbCurrencyDong } from "react-icons/tb";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { TooltipCustom } from "../../../tootip";
import { Image } from 'antd';
import "./index.scss";

interface ICardProductColumn {
    image?: string;
    title?: string;
    price?: string;
    description?: string;
    discount?: string;
    discountPercent?: number;
}

export const CardProductColumn: FunctionComponent<ICardProductColumn> = (props) => {
    const getIcon = [
        {
            title: "Xem chi tiết sản phẩm",
            color: "#1677ff",
            content: <FaRegEye className="cardproductcolumn-button" fontSize={20} />
        },
        {
            title: "Thích sản phẩm",
            color: "#1677ff",
            content: <IoHeartOutline className="cardproductcolumn-button" fontSize={20} />
        },
        {
            title: "Thêm vào giỏ hàng",
            color: "#1677ff",
            content: <MdAddShoppingCart className="cardproductcolumn-button" fontSize={20} />
        },
    ];

    return (
        <div className="cardproductcolumn-container">
            {/* <img className="cardproductcolumn-image" src={props.image} alt="" /> */}
            <Image
                className="cardproductcolumn-image"
                src={props.image}
            />
            <div className="cardproductcolumn-content">
                <div className="cardproductcolumn-title">
                    {props.title}
                </div>
                <div className="cardproductcolumn-price">
                    <div className="cardproductcolumn-price-text">
                        {(props.price && !props.discount) ? props.price : props.discount}
                        {(props.price || props.discount) ? <TbCurrencyDong /> : ""}
                    </div>
                    <span className="cardproductcolumn-price-discount">
                        {(props.price && !props.discount) ? "" : props.price}
                        {(props.price && !props.discount) ? "" : <TbCurrencyDong />}
                    </span>
                </div>
                <div className="cardproductcolumn-price-desc">
                    {props.description}
                </div>
                {props.discount &&
                    <div className="cardproductcolumn-sale">
                        {props.discountPercent}%
                        <div>Giảm</div>
                    </div>
                }
                <div className="cardproductcolumn-buttons">
                    {getIcon.map((item) => (
                        <TooltipCustom
                            title={item.title}
                            color={item.color}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}