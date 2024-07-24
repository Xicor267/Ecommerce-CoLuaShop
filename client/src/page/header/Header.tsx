import React, { FunctionComponent, useEffect } from 'react';
import avatarLogo from "../../assets/image/avatar.png";
import "./Header.scss";
import Search from 'antd/es/input/Search';
import { Select } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { DetailLists } from '../component/detaillists';
import { getCategoryItem, getService } from './items';
import { DropdownCustom } from '../component/dropdown';
import { useLanguage } from '../../locales/locale';

interface IHeader {

}

const { Option } = Select;

export const Header: FunctionComponent<IHeader> = (props) => {
    const { i18n } = useLanguage();

    const selectBefore = (
        <DropdownCustom
            defaultValue={"8"}
            option={getCategoryItem}
            className="header-dropdown-category"
        />
    );

    return (
        <div className="header-container">
            <div className="header-top">
                <div className="header-row">
                    <div className="header-logo">
                        <a href="https://www.facebook.com/lua.nguyenthi.3975" target="_blank">
                            <img src={avatarLogo} alt={"Co Lua image"} style={{ width: 190, height: 110 }} />
                        </a>
                    </div>
                    <div className="header-search">
                        <Search
                            addonBefore={selectBefore}
                            placeholder={i18n("page.header.searchEntireStore")}
                            enterButton={i18n("page.header.search")}
                            size="large"
                            loading={false}
                            style={{ width: 800 }} />
                    </div>
                    <div className="header-item">
                        <div className="header-icon">
                            <div className="header-icon-title" style={{ width: 88 }}>
                                <UserOutlined style={{ fontSize: 35 }} />
                                <div className="header-icon-text">{i18n("page.header.myAccount")}</div>
                            </div>
                            <div className="header-icon-title">
                                <ShoppingCartOutlined style={{ fontSize: 35 }} />
                                <span className="header-icon-count">10</span>
                                <div className="header-icon-text">{i18n("page.header.cart")}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-category">
                    {getService.map((item, index) => {
                        return (
                            <div key={index}>
                                <DetailLists
                                    item={item.title}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}