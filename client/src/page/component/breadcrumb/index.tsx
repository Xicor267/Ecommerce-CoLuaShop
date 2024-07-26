import { Breadcrumb } from "antd";
import { FunctionComponent } from "react";
import "./index.scss";

interface IBreadcrumbs {

}

export const Breadcrumbs: FunctionComponent<IBreadcrumbs> = (props) => {
    const getBreadcrumbItem = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Page deatails",
            href: ""
        }
    ]

    return (
        <div className="breadcrumb-container">
            <Breadcrumb 
                separator=">"
                items={getBreadcrumbItem}
                className="breadcrumb-item"
            />
        </div>
    )
}