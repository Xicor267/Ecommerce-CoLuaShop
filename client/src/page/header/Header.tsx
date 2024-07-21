import React, { FunctionComponent, useEffect } from 'react';
import avatarLogo from "../../assets/image/avatar.png";
import "./Header.scss";
import Search from 'antd/es/input/Search';
import { Select } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { DetailLists } from '../component/detaillists';
import { getService } from './items';

interface IHeader {

}

const { Option } = Select;

export const Header: FunctionComponent<IHeader> = (props) => {

    const selectBefore = (
        <Select defaultValue="http://">
            <Option value="http://">http://</Option>
            <Option value="https://">https://</Option>
        </Select>
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
                            placeholder="Search entire store..."
                            enterButton="Search"
                            size="large"
                            loading={false}
                            style={{ width: 800 }} />
                    </div>
                    <div className="header-item">
                        <div className="header-icon">
                            <div className="header-icon-title" style={{ width: 88 }}>
                                <UserOutlined style={{ fontSize: 35 }} />
                                <div className="header-icon-text">My Account</div>
                            </div>
                            <div className="header-icon-title">
                                <ShoppingCartOutlined style={{ fontSize: 35 }} />
                                <span className="header-icon-count">10</span>
                                <div className="header-icon-text">Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-category">
                    {getService.map((item) => {
                        return (
                            <DetailLists
                                item={item.title}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}