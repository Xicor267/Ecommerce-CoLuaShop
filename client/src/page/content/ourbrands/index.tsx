import { FunctionComponent } from "react";
import "./index.scss";
import { PaginationHeader } from "../../component/navwrap";
import { getBrandItem } from "./items";
import { CardBrand } from "../../component/card/cardbrand";

interface IOurBrands {

}

export const OurBrands: FunctionComponent<IOurBrands> = (props) => {
    return (
        <div className="ourbrand-container">
            <CardBrand 
                title="Our Brands"
                perPage={4}
                item={getBrandItem}
            />
        </div>
    )
}