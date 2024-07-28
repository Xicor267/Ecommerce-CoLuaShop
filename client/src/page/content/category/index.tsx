import { Menu, MenuProps } from "antd";
import { FunctionComponent } from "react"
import { useLanguage } from "../../../locales/locale";
import { FcHome } from "react-icons/fc";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";

interface ICategory {

}
type MenuItem = Required<MenuProps>['items'][number];

export const Category: FunctionComponent<ICategory> = (props) => {
    const { i18n } = useLanguage();
    const navigate = useNavigate();

    const items: MenuItem[] = [
        {
            key: 'sub0',
            icon: <FcHome style={{ fontSize: "20px" }} />,
            label: "Home",
        },
        {
            key: 'sub1',
            icon: <img width="20" height="20" src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_128,h_128/https://vanphong-pham.com/wp-content/uploads/2021/11/folders.png" alt=""></img>,
            label: i18n("page.header.biaHoSo"),
        },
        {
            key: 'sub2',
            icon: <img width="20" height="20" src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_128,h_128/https://vanphong-pham.com/wp-content/uploads/2021/11/20200615084636-but.png" alt=""></img>,
            label: i18n("page.header.butThuoc"),
        },
        {
            key: 'sub3',
            icon: <img width="20" height="20" src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_128,h_128/https://vanphong-pham.com/wp-content/uploads/2021/11/notebook.png" alt=""></img>,
            label: i18n("page.header.so"),
        },
        {
            key: 'sub4',
            icon: <img width="20" height="20" src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_128,h_128/https://vanphong-pham.com/wp-content/uploads/2021/11/tape.png" alt=""></img>,
            label: i18n("page.header.bangKeo"),
        },
        {
            key: 'sub5',
            icon: <img width="20" height="20" src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_128,h_128/https://vanphong-pham.com/wp-content/uploads/2021/11/employee.png" alt=""></img>,
            label: i18n("page.header.bangTenDayDeo"),
        },
        {
            key: 'sub6',
            icon: <img width="20" height="20" src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_128,h_128/https://vanphong-pham.com/wp-content/uploads/2021/11/branding.png" alt=""></img>,
            label: i18n("page.header.keTaiLieu"),
        },
        {
            key: 'sub7',
            icon: <img width="20" height="20" src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_128,h_128/https://vanphong-pham.com/wp-content/uploads/2021/11/stamp.png" alt=""></img>,
            label: i18n("page.header.hopDauMucDau"),
        },
        {
            key: 'sub8',
            icon: <img width="20" height="20" src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_128,h_128/https://vanphong-pham.com/wp-content/uploads/2021/11/happy.png" alt=""></img>,
            label: i18n("page.header.hinhDanSticker"),
        },
        {
            key: 'sub9',
            icon: <img width="20" height="20" src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_128,h_128/https://vanphong-pham.com/wp-content/uploads/2021/11/toys.png" alt=""></img>,
            label: i18n("page.header.doChoiTreEm"),
            children: [
                {
                    key: '9-1',
                    label: i18n("page.header.doChoiTreEm"),
                    type: 'group',
                    children: [
                        { key: 'sub9', label: 'Đất nặn' },
                    ],
                },
            ],
        },
        {
            key: 'sub10',
            icon: <img width="20" height="20" src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_128,h_128/https://vanphong-pham.com/wp-content/uploads/2021/11/education.png" alt=""></img>,
            label: i18n("page.header.dungCuHocSinh"),
            children: [
                {
                    key: '10-1',
                    label: i18n("page.header.dungCuHocSinh"),
                    type: 'group',
                    children: [
                        { key: 'sub10', label: 'Tổng hợp đồ dụng cụ học sinh' },
                    ],
                },

            ],
        },
        {
            key: 'sub11',
            icon: <img width="20" height="20" src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_128,h_128/https://vanphong-pham.com/wp-content/uploads/2021/11/office-desk.png" alt=""></img>,
            label: i18n("page.header.dungCuKhac"),
            children: [
                {
                    key: '11-1',
                    label: i18n("page.header.dungCuHocSinh"),
                    type: 'group',
                    children: [
                        { key: 'sub11', label: 'Đồ văn phòng' },
                    ],
                },
            ],
        },
    ];

    const keyToPageMap = {
        'sub0': '/',
        'sub1': '/page-details/biaHoSo',
        'sub2': '/page-details/butThuoc',
        'sub3': '/page-details/so',
        'sub4': '/page-details/bangKeo',
        'sub5': '/page-details/bangTenDayDeo',
        'sub6': '/page-details/keTaiLieu',
        'sub7': '/page-details/hopDauMucDau',
        'sub8': '/page-details/hinhDan',
        'sub9': '/page-details/doChoiTreEm',
        'sub10': '/page-details/dungCuHocSinh',
        'sub11': '/page-details/dungCuKhac',
    };

    const onClick: MenuProps['onClick'] = (e) => {
        const path = keyToPageMap[e.key as keyof typeof keyToPageMap];
        if (path) {
            navigate(path);
        }
    };

    return (
        <div className="category-container">
            <Menu
                onClick={onClick}
                className="category-menu"
                mode="vertical"
                defaultOpenKeys={['sub0']}
                items={items}
            />
        </div>
    )
}