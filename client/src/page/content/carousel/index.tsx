import { FunctionComponent } from "react"
import { useLanguage } from "../../../locales/locale";
import "./index.scss";
import { Carousel } from "antd";
import { getCarouselImage } from "./items";

interface ICarousel {

}
export const CarouselCustom: FunctionComponent<ICarousel> = (props) => {
    const { i18n } = useLanguage();

    return (
        <div className="carousel-container">
            <Carousel arrows autoplay>
                {getCarouselImage.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} className="carousel-image" />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}