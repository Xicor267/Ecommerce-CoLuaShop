import React, { FunctionComponent } from 'react';
import { useLanguage } from '../../../locales/locale';
import "./index.scss";

interface IDetailLists {
    item?: string;
    className?: string;
}

export const DetailLists: FunctionComponent<IDetailLists> = (props) => {
    const { i18n } = useLanguage();

    return (
        <div className={`detail-list-wrap ${props.className}`}>
            {i18n(props.item || '')}
        </div>
    );
};