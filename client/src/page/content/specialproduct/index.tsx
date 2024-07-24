import { FunctionComponent, useEffect, useState } from "react";
import { getCardProductItem } from "../discount/items";
import { CardProduct } from "../../component/card/cardproducts";
import { CgArrowLeftR, CgArrowRightR } from "react-icons/cg";
import "./index.scss";

interface ISpecialProduct {

}

export const SpecialProduct: FunctionComponent<ISpecialProduct> = (props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const perPage = 3;

    const handlePrevClick = () => {
        setCurrentPage((prev) => (prev - 1 + getCardProductItem.length) % getCardProductItem.length);
    };

    const handleNextClick = () => {
        setCurrentPage((prev) => (prev + 1) % getCardProductItem.length);
    };

    const startIndex = currentPage;
    const endIndex = (startIndex + perPage) % getCardProductItem.length;
    
    const currentItem = startIndex < endIndex 
        ? getCardProductItem.slice(startIndex, endIndex) 
        : [...getCardProductItem.slice(startIndex), ...getCardProductItem.slice(0, endIndex)];

    return (
        <div className="spacialproduct-container">
            <div className="spacialproduct-header">
                <div className="spacialproduct-buttons-title">{"Special Product"}</div>
                <div className="spacialproduct-buttons">
                    <CgArrowLeftR onClick={handlePrevClick} className="spacialproduct-buttons-icon" fontSize={20} />
                    <CgArrowRightR onClick={handleNextClick} className="spacialproduct-buttons-icon" fontSize={20} />
                </div>
            </div>
            <div className="spacialproduct-all-card">
                {currentItem.map((item, index) => {
                    return (
                        <div className="spacialproduct-card">
                            <CardProduct
                                key={index}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                discount={item.discount}
                                discountPercent={item.discountPercent}
                                hasHoverItem
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}