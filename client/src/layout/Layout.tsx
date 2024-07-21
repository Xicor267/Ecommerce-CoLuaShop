import React, { FunctionComponent } from 'react';
import { Header } from '../page';
import HeaderNav from '../page/header/header-nav';

interface ILayout {

}

export const Layout: FunctionComponent<ILayout> = (props) => {
    return (
        <div className="layout-container">
            <HeaderNav />
            <Header />
        </div>
    );
}

export default Layout;