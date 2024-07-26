import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";

interface IRouter {

}

export const Routers: FunctionComponent<IRouter> = (props) => {
    return (
        <Layout >
            <Routes>
                <Route path='/' index element={<Content />} />
            </Routes>
        </Layout>
    )
}