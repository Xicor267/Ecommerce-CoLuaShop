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
import { useLocation, Outlet } from "react-router-dom";

interface IContent {

}

export const Content: FunctionComponent<IContent> = (props) => {
    const location = useLocation();

    return (
        <div className="content-container">
            <Row gutter={[0, 24]} className="content-main-row">
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }} className="content-left">
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
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 18 }} className="content-right">
                    {location.pathname.includes("/page-details/") ? (
                        <Outlet />
                    ) : (
                        <>
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
                        </>
                    )}
                </Col>
            </Row>
            <Row className="content-our-brands">
                <Col span={24}>
                    <OurBrands />
                </Col>
            </Row>
        </div>
    );
}