import { FunctionComponent } from "react"
import { useLanguage } from "../../../locales/locale";
import "./index.scss";
import { Carousel } from "antd";

interface ICarousel {

}
export const CarouselCustom: FunctionComponent<ICarousel> = (props) => {
    const { i18n } = useLanguage();

    return (
        <div className="carousel-container">
            <Carousel arrows autoplay style={{width: "100%"}}>
                <div>
                    <h3 className="carousel-text">1</h3>
                </div>
                <div>
                    <h3 className="carousel-text">2</h3>
                </div>
                <div>
                    <h3 className="carousel-text">3</h3>
                </div>
                <div>
                    <h3 className="carousel-text">4</h3>
                </div>
            </Carousel>
        </div>
    )
}