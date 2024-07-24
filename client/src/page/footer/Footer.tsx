import { FunctionComponent } from "react";
import { CardFooter } from "../component/card/cardfooter";
import { PiMapPinLine } from "react-icons/pi";

import "./Footer.scss";
import { getItemAddressUrl, getItemInfoUrl, getItemPolicytUrl, getItemSupportUrl } from "./items";

interface IFooter {

}

export const Footer: FunctionComponent<IFooter> = (props) => {

    const getFooterItem = [
        {
            title: "VĂN PHÒNG PHẨM CÔ LỤA",
            icon: <PiMapPinLine fontSize={20} color="#1677ff"/>,
            desc: getItemAddressUrl,
            element: "",
        },
        {
            title: "VỀ CÔ LỤA",
            icon: "",
            desc: getItemInfoUrl,
            element: ""
        },
        {
            title: "HỖ TRỢ KHÁCH HÀNG",
            icon: "",
            desc: getItemSupportUrl,
            element: ""
        },
        {
            title: "CHÍNH SÁCH",
            icon: "",
            desc: getItemPolicytUrl,
            element: ""
        },
    ]

    return (
        <div className="footer-container">
            {getFooterItem.map((item, index) => (
                <CardFooter
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    desc={item.desc}
                    element={item.element}
                />
            ))}
        </div>
    )
}