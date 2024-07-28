import { FunctionComponent } from "react";
import { Breadcrumbs } from "../breadcrumb";
import { CardProductDetail } from "./cardproductdetail";
import { getCardBiaHoSo } from "../../mockup/getCardProductDetail";
import { CardProductFilter } from "./cardproductfilter";
import "./index.scss";

interface IPageDetails {

}

export const PageDetails: FunctionComponent<IPageDetails> = (props) => {
    return (
        <div className="pagedetails-container">
            <Breadcrumbs />
            <div className="pagedetails-filter">
                <CardProductFilter />
            </div>
        </div>
    )
}