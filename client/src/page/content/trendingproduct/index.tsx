import { FunctionComponent, useState } from "react";
import "./index.scss";
import { getCardProductItem } from "../discount/items";
import { CardProduct } from "../../component/card/cardproducts";
import { CgArrowLeftR, CgArrowRightR } from "react-icons/cg";

interface ITrendingProduct {

}

export const TrendingProduct: FunctionComponent<ITrendingProduct> = (props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const perPage = 6;

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
        <div className="trendingproduct-container">
            <div className="trendingproduct-header">
                <div className="trendingproduct-buttons-title">{"Trending Product"}</div>
                <div className="trendingproduct-buttons">
                    <CgArrowLeftR onClick={handlePrevClick} className="trendingproduct-buttons-icon" fontSize={20} />
                    <CgArrowRightR onClick={handleNextClick} className="trendingproduct-buttons-icon" fontSize={20} />
                </div>
            </div>
            <div className="trendingproduct-all-card">
                {currentItem.map((item, index) => {
                    return (
                        <div className="trendingproduct-card">
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