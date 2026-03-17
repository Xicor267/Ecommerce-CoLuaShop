import React, { FunctionComponent } from 'react';
import { Header } from '../page';
import HeaderNav from '../page/header/header-nav';
import { Content } from '../page/content/Content';
import { Footer } from '../page/footer/Footer';
import { CopyRight } from '../page/footer/copyright';
import { MapCustom } from '../page/footer/map';
import { facebook, messenger, youtube, phone } from "../assets/image";
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
            <MapCustom />
            <CopyRight />

            <div className="layout-contact">
                <a href="https://www.facebook.com/lua.nguyenthi.3975" target="_blank" rel="noreferrer">
                    <img src={facebook} className="layout-contact-icon" alt="Facebook" />
                </a>
                <a href="https://www.facebook.com/lua.nguyenthi.3975" target="_blank" rel="noreferrer">
                    <img src={messenger} className="layout-contact-icon" alt="Messenger" />
                </a>
                <a href="https://www.youtube.com/channel/UC7sH7UkomGQONKgcmtGCc8w" target="_blank" rel="noreferrer">
                    <img src={youtube} className="layout-contact-icon" alt="YouTube" />
                </a>
                <div className="layout-contact-item">
                    <img src={phone} className="layout-contact-phone" alt="Phone" />
                    <div className="layout-contact-text">Call: 0372928669</div>
                </div>
            </div>

        </div>
    );
}

export default Layout;