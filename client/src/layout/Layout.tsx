import React, { FunctionComponent } from 'react';
import { Header } from '../page';
import HeaderNav from '../page/header/header-nav';
import { Content } from '../page/content/Content';
import { Footer } from '../page/footer/Footer';
import { CopyRight } from '../page/footer/copyright';
import { MapCustom } from '../page/footer/map';
import { imageSetting } from '../helper';
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
                    <img src={imageSetting('status_15047667.png')} className="layout-contact-icon" alt="Facebook" />
                </a>
                <a href="https://www.facebook.com/lua.nguyenthi.3975" target="_blank" rel="noreferrer">
                    <img src={imageSetting('call_15047436.png')} className="layout-contact-icon" alt="Messenger" />
                </a>
                <a href="https://www.youtube.com/channel/UC7sH7UkomGQONKgcmtGCc8w" target="_blank" rel="noreferrer">
                    <img src={imageSetting('play_15047677.png')} className="layout-contact-icon" alt="YouTube" />
                </a>
                <div className="layout-contact-item">
                    <img src={imageSetting('call_15047651.png')} className="layout-contact-phone" alt="Phone" />
                    <div className="layout-contact-text">Call: 0372928669</div>
                </div>
            </div>

        </div>
    );
}

export default Layout;