import React, { FunctionComponent, useState } from 'react';
import { FireOutlined, PhoneOutlined, ProfileOutlined } from '@ant-design/icons';
import { DropdownCustom } from '../../component/dropdown';
import { CardHeader } from '../../component/card/cardheader';
import { getLanguageHeaderItem } from '../items';
import "./index.scss";

interface IHeaderNav {

}

export const HeaderNav: FunctionComponent<IHeaderNav> = (props) => {
    const [language, setLanguage] = useState("vi")

    const getCardItem = [
        {
            icon: <ProfileOutlined />,
            title: "Nhận báo giá rẻ hơn"
        },
        {
            icon: <FireOutlined />,
            title: "Chính sách ưu đãi"
        },
        {
            icon: <PhoneOutlined />,
            title: "033.934.1525 (Ms. Lua)"
        },
    ]

    return (
        <div className="header-nav">
            <div className="header-nav-container">
                <div className="header-nav-row">
                    {getCardItem.map((item) => {
                        return (
                            <CardHeader
                                icon={item.icon}
                                title={item.title}
                            />
                        )
                    })}
                </div>
                <DropdownCustom
                    defaultValue={language}
                    option={getLanguageHeaderItem}
                    className="header-nav-dropdown"
                />
            </div>
        </div>
    );
}

export default HeaderNav;