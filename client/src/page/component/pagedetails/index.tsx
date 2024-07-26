import { FunctionComponent } from "react";
import { Breadcrumbs } from "../breadcrumb";
import { CardProductDetail } from "./cardproductdetail";
import { getCardProductDetail } from "../../mockup/getCardProductDetail";
import { CardProductFilter } from "./cardproductfilter";

interface IPageDetails {

}

export const PageDetails: FunctionComponent<IPageDetails> = (props) => {
    return (
        <div className="pagedetails-container">
            <Breadcrumbs />
            <div className="pagedetails-card-details">
                {getCardProductDetail.map((item, index) => (
                    <CardProductDetail
                        key={index}
                        title={item.title}
                        text={item.text}
                        image={item.image}
                    />
                ))}
            </div>
            <div className="pagedetails-filter">
                <CardProductFilter />
            </div>
        </div>
    )
}