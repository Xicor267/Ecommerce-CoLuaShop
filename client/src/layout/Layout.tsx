import React, { FunctionComponent } from 'react';
import { Header } from '../page';
import HeaderNav from '../page/header/header-nav';
import { Content } from '../page/content/Content';
import { Footer } from '../page/footer/Footer';
import { CopyRight } from '../page/footer/copyright';
import "./Layout.scss";

interface ILayout {

}

export const Layout: FunctionComponent<ILayout> = (props) => {
    return (
        <div className="layout-container">
            <HeaderNav />
            <Header />
            <Content />
            <Footer />
            <CopyRight />
        </div>
    );
}

export default Layout;