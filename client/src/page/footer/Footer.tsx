import { FunctionComponent } from "react";
import { CardFooter } from "../component/card/cardfooter";
import { PiMapPinLine } from "react-icons/pi";

import "./Footer.scss";
import { getItemAddressUrl, getItemInfoUrl, getItemPolicytUrl, getItemSupportUrl } from "./items";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";

interface IFooter {

}

type FormData = {
    [key: string]: any
}

export const Footer: FunctionComponent<IFooter> = (props) => {
    const [form] = useForm()

    const onFinish = (data: FormData) => {
        console.log(data)
    }

    const getFooterItem = [
        {
            title: "VĂN PHÒNG PHẨM CÔ LỤA",
            icon: <PiMapPinLine fontSize={20} color="#1677ff" />,
            desc: getItemAddressUrl,
            element: <div className="footer-form">
                <Form
                    onFinish={onFinish}
                    form={form}
                    name="wrap"
                    labelCol={{ flex: '110px' }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{ flex: 1 }}
                    colon={false}
                    style={{ maxWidth: 600 }}
                >
                    <Form.Item label="Email" name="Email" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
 
                    <Form.Item label=" ">
                        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        },
        {
            title: "VỀ CÔ LỤA",
            icon: "",
            desc: getItemInfoUrl,
            element: ""
        },
        {
            title: "HỖ TRỢ KHÁCH HÀNG",
            icon: "",
            desc: getItemSupportUrl,
            element: ""
        },
        {
            title: "CHÍNH SÁCH",
            icon: "",
            desc: getItemPolicytUrl,
            element: ""
        },
    ]

    return (
        <div className="footer-container">
            {getFooterItem.map((item, index) => (
                <CardFooter
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    desc={item.desc}
                    element={item.element}
                />
            ))}
        </div>
    )
}