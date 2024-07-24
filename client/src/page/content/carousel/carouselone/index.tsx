import { FunctionComponent } from "react";
import "./index.scss";

interface ICarouselOne {

}

export const CarouselOne: FunctionComponent<ICarouselOne> = (props) => {
    // const image = "https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2023/TrangBalo_Resize_840x320.jpg";
    const image = "https://khosivanphongpham.net/wp-content/uploads/2019/07/van-phong-pham-htp15.jpg"

    return (
        <div className="carouselone-container">
            <div className="carouselone-image">
                <img className="carouselone-image-banner" src={image} alt="" />
            </div>
        </div>
    )
}