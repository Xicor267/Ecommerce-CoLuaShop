import { FunctionComponent } from "react";
import "./index.scss";

interface IMap {

}

export const MapCustom: FunctionComponent<IMap> = (props) => {
    return (
        <div className="map-container">
            <div className="map-title">
                Chi nhánh cửa hàng
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.3277293197843!2d108.1913291307286!3d16.008671275383566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421a32f5147d6f%3A0x6fb1d0f26607253f!2zMjggUGhvbmcgQuG6r2MgMjAsIEjDsmEgVGjhu40gxJDDtG5nLCBD4bqpbSBM4buHLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e1!3m2!1svi!2sus!4v1722014220766!5m2!1svi!2sus"
                // width="800"
                // height="600"
                // style="border:0;"
                className="map-iframe"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}