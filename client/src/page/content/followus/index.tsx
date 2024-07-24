import { FunctionComponent } from "react";
import "./index.scss";
import { FacebookFilled, InstagramFilled, SkypeFilled, YoutubeFilled } from "@ant-design/icons";

interface IFollowUs {

}

export const FollowUs: FunctionComponent<IFollowUs> = (props) => {
    return (
        <div className="followus-container">
            <div className="followus-title">
                Follow us
            </div>
            <div className="followus-network">
                <a href="https://www.facebook.com/lua.nguyenthi.3975" target="_blank"><FacebookFilled className="followus-network-icon"/></a>
                <a href="https://www.youtube.com/channel/UC7sH7UkomGQONKgcmtGCc8w" target="_blank"><YoutubeFilled className="followus-network-icon"/></a>
                <a href="/" target="_blank"><InstagramFilled className="followus-network-icon"/></a>
                <a href="/" target="_blank"><SkypeFilled className="followus-network-icon"/></a>
            </div>
        </div>
    )
}