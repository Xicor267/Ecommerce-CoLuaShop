import { FunctionComponent } from "react";
import "./index.scss";

interface ICarouselOne {

}

export const CarouselOne: FunctionComponent<ICarouselOne> = (props) => {
    // const image = "https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2023/TrangBalo_Resize_840x320.jpg";
    const image = "https://cdn-prod.mykiot.vn/merchant/22d4c3b772ab19ba41def1f767f22162/cropped/1711971385/crop-file.png"

    return (
        <div className="carouselone-container">
            <img className="carouselone-container-image" src={image} alt=""/>
        </div>
    )
}