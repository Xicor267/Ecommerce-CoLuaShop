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
                <Col span={18}>col-12</Col>
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