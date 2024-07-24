import { FunctionComponent, useEffect, useState } from "react";
import "./index.scss";
import { getCardProductItem } from "./items";
import { CardProduct } from "../../component/card/cardproducts";
import { PaginationHeader } from "../../component/navwrap";

interface IDiscount {

}

export const Discount: FunctionComponent<IDiscount> = (props) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const getTimeDiscount = [
        {
            day: currentDate.getDay(),
            hour: currentDate.getHours(),
            minutes: currentDate.getMinutes(),
            second: currentDate.getSeconds()
        }
    ]

    return (
        <div className="discount-container">
            <div className="discount-title">
                <PaginationHeader
                    title="Daily Deal"
                    item={getCardProductItem}
                    perPage={1}
                    renderItems={(currentItems) => (
                        <div className="discount-card">
                            {currentItems.map((item, index) => {
                                return (
                                    <CardProduct
                                        key={index}
                                        image={item.image}
                                        title={item.title}
                                        price={item.price}
                                        discount={item.discount}
                                        discountPercent={item.discountPercent}
                                        time={getTimeDiscount}
                                        hasDiscountTime
                                    />
                                );
                            })}
                        </div>
                    )}
                />
            </div>
        </div>
    )
}