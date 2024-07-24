import { FunctionComponent } from "react";
import "./Content.scss";
import { Category } from "./category";
import { CarouselCustom } from "./carousel";
import { News } from "./news";
import { Discount } from "./discount";
import { Col, Row } from "antd";
import { Owner } from "./owner";
import { FollowUs } from "./followus";
import { OurBrands } from "./ourbrands";
import { TrendingProduct } from "./trendingproduct";
import { CarouselOne } from "./carousel/carouselone";
import { SpecialProduct } from "./specialproduct";

interface IContent {

}

export const Content: FunctionComponent<IContent> = (props) => {
    return (
        <div className="content-container">
            <Row >
                <Col span={6}>
                    <div className="content-category">
                        <Category />
                    </div>
                    <div className="content-news">
                        <News />
                    </div>
                    <div className="content-discount">
                        <Discount />
                    </div>
                    <div className="content-owner">
                        <Owner />
                    </div>
                    <div className="content-follow-us">
                        <FollowUs />
                    </div>
                </Col>
                <Col className="content-right" span={18}>
                    <div className="content-carousel">
                        <CarouselCustom />
                    </div>
                    <div className="content-trending-product">
                        <TrendingProduct />
                    </div>
                    <div className="content-carousel-one">
                        <CarouselOne />
                    </div>
                    <div className="content-special-product">
                        <SpecialProduct />
                    </div>
                </Col>
            </Row>
            <Row className="content-our-brands">
                <Col span={24}>
                    <OurBrands />
                </Col>
            </Row>
        </div>
        // <div  >
        //     <div className="content-column-first">
        //         <div className="content-category">
        //             <Category />
        //         </div>
        //         <div className="content-news">
        //             <News />
        //         </div>
        //         <div className="content-discount">
        //             <Discount />
        //         </div>
        //     </div>
        //     <div className="content-column-second">
        //         <div className="content-carousel">
        //             {/* <CarouselCustom /> */}
        //         </div>
        //     </div>
        // </div>
    )
}