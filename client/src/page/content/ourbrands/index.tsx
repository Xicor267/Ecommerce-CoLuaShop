import { FunctionComponent } from "react";
import "./index.scss";
import { PaginationHeader } from "../../component/navwrap";

interface IOurBrands {

}

export const OurBrands: FunctionComponent<IOurBrands> = (props) => {
    return (
        <div className="ourbrand-container">
            <PaginationHeader
                    title="Our Brands"
                    item={[]}
                    perPage={1}
                    renderItems={(currentItems) => (
                        <></>
                    )}
                />
        </div>
    )
}