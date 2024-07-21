import React, { FunctionComponent } from 'react';
import "./index.scss";

interface IDetailLists {
    item?: string;
    className?: string;
}

export const DetailLists: FunctionComponent<IDetailLists> = (props) => {
    return (
        <div className={`detail-list-wrap ${props.className}`}>
            {props.item}
        </div>
    );
}