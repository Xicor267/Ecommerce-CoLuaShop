import React, { FunctionComponent, ReactNode, useState } from 'react';
import { CgArrowLeftR, CgArrowRightR } from "react-icons/cg";
import "./index.scss";

interface IPaginationHeader {
    title?: string;
    item: any[];
    perPage: number;
    renderItems: (items: any[]) => ReactNode;
}

export const PaginationHeader: FunctionComponent<IPaginationHeader> = (props) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePrevClick = () => {
        setCurrentPage((prev) => (prev - 1 + Math.ceil(props.item.length / props.perPage)) % Math.ceil(props.item.length / props.perPage));
    };

    const handleNextClick = () => {
        setCurrentPage((prev) => (prev + 1) % Math.ceil(props.item.length / props.perPage));
    };

    const startIndex = currentPage * props.perPage;
    const endIndex = startIndex + props.perPage;
    const currentItem = props.item.slice(startIndex, endIndex);

    return (
        <div className="title-navigation-container">
            <div className="title-navigation-header">
                <div className="navigation-buttons-title">{props.title}</div>
                <div className="navigation-buttons">
                    <CgArrowLeftR onClick={handlePrevClick} className="navigation-buttons-icon" fontSize={20}/>
                    <CgArrowRightR onClick={handleNextClick} className="navigation-buttons-icon" fontSize={20}/>
                </div>
            </div>
            <div className="title-navigation-content">
                {props.renderItems(currentItem)}
            </div>
        </div>
    );
};