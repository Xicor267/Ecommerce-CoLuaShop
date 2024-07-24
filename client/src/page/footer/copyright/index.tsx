import { FunctionComponent, useEffect, useState } from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import { HiBanknotes } from "react-icons/hi2";
import "./index.scss";

interface ICopyRight {

}

export const CopyRight: FunctionComponent<ICopyRight> = () => {
    const [date, setDate] = useState(new Date);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date);
        }, 5000);

        return () => clearInterval(intervalId);
    })

    return (
        <div className="copyright-container">
            <div className="copyright-text">
                Copyright <FaRegCopyright color="#1677ff" /> {date.getFullYear()} - Ecommerce software by Nguyen Phuong Nam
            </div>
            <div className="copyright-icon">
                <FaCcVisa fontSize={20} className="copyright-icon-pay"/>
                <FaCcMastercard fontSize={20} className="copyright-icon-pay"/>
                <FaCcPaypal fontSize={20} className="copyright-icon-pay"/>
                <HiBanknotes fontSize={20} className="copyright-icon-pay"/>
            </div>
        </div>
    )
}