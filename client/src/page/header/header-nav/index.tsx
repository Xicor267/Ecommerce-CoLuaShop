import React, { FunctionComponent, useEffect, useState } from 'react';
import { FireOutlined, PhoneOutlined, ProfileOutlined } from '@ant-design/icons';
import { DropdownCustom } from '../../component/dropdown';
import { CardHeader } from '../../component/card/cardheader';
import { getLanguageHeaderItem } from '../items';
import "./index.scss";
import { LanguageContextType, useLanguage } from '../../../locales/locale';

interface IHeaderNav {

}

export const HeaderNav: FunctionComponent<IHeaderNav> = (props) => {
    const { language, setLanguage } = useLanguage();
    const [selectedLanguage, setSelectedLanguage] = useState<string>(language);

    useEffect(() => {
        setSelectedLanguage(language);
    }, [language]);

    const handleLanguageChange = (value: string): void => {
        setSelectedLanguage(value);
        setLanguage(value);
    };

    const getCardItem = [
        {
            icon: <ProfileOutlined />,
            title: "page.header.nhanBaoGiaReHon"
        },
        {
            icon: <FireOutlined />,
            title: "page.header.chinhSachUuDai"
        },
        {
            icon: <PhoneOutlined />,
            title: "page.header.msLuacontact"
        },
    ]

    return (
        <div className="header-nav">
            <div className="header-nav-container">
                <div className="header-nav-row">
                    {getCardItem.map((item, index) => {
                        return (
                            <div key={index}>
                                <CardHeader
                                    icon={item.icon}
                                    title={item.title}
                                />
                            </div>
                        )
                    })}
                </div>
                <DropdownCustom
                    defaultValue={selectedLanguage}
                    option={getLanguageHeaderItem}
                    onChange={handleLanguageChange}
                    className="header-nav-dropdown"
                />
            </div>
        </div>
    );
}

export default HeaderNav;