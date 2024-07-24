import { FunctionComponent, useEffect, useState } from "react";
import { CgArrowLeftR, CgArrowRightR } from "react-icons/cg";
import "./index.scss";

interface ICardBrand {
    title?: string;
    perPage: number;
    item: any[];
}

export const CardBrand: FunctionComponent<ICardBrand> = (props) => {
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNextClick();
        },4000);

        return () => clearInterval(intervalId);
    }, []);

    const handlePrevClick = () => {
        setCurrentPage((prev) => (prev - 1 + props.item.length) % props.item.length);
    };

    const handleNextClick = () => {
        setCurrentPage((prev) => (prev + 1) % props.item.length);
    };

    const startIndex = currentPage;
    const endIndex = (startIndex + props.perPage) % props.item.length;
    
    const currentItem = startIndex < endIndex 
        ? props.item.slice(startIndex, endIndex) 
        : [...props.item.slice(startIndex), ...props.item.slice(0, endIndex)];


    return (
        <div className="cardbrand-container">
            <div className="cardbrand-header">
                <div className="cardbrand-buttons-title">{props.title}</div>
                <div className="cardbrand-buttons">
                    <CgArrowLeftR onClick={handlePrevClick} className="cardbrand-buttons-icon" fontSize={20}/>
                    <CgArrowRightR onClick={handleNextClick} className="cardbrand-buttons-icon" fontSize={20}/>
                </div>
            </div>
            <div className="cardbrand-details">
                {currentItem.map((item, index) => (
                    <img className="cardbrand-image" src={item.image} />
                ))}
            </div>
        </div>
    )
}