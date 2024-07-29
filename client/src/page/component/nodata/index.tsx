import { FunctionComponent } from "react";
import "./index.scss";
import { Empty } from "antd";

interface INoData {

}

export const NoData: FunctionComponent<INoData> = (props) => {
    return (
        <div className="nodata-container">
            <Empty />
        </div>
    )
}