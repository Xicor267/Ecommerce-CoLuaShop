import { Menu, MenuProps } from "antd";
import { FunctionComponent } from "react"
import { useLanguage } from "../../../locales/locale";
import "./index.scss";

interface ICategory {

}
type MenuItem = Required<MenuProps>['items'][number];

export const Category: FunctionComponent<ICategory> = (props) => {
    const { i18n } = useLanguage();

    const items: MenuItem[] = [
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
                    label: 'Item 1',
                    type: 'group',
                    children: [
                        { key: 'sub9-1', label: 'Option 1' },
                        { key: 'sub9-2', label: 'Option 2' },
                    ],
                },
                {
                    key: '9-2',
                    label: 'Item 2',
                    type: 'group',
                    children: [
                        { key: 'sub9-3', label: 'Option 3' },
                        { key: 'sub9-4', label: 'Option 4' },
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
                    label: 'Item 1',
                    type: 'group',
                    children: [
                        { key: 'sub10-1', label: 'Option 1' },
                        { key: 'sub10-2', label: 'Option 2' },
                    ],
                },
                {
                    key: '10-2',
                    label: 'Item 2',
                    type: 'group',
                    children: [
                        { key: 'sub10-3', label: 'Option 3' },
                        { key: 'sub10-4', label: 'Option 4' },
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
                    label: 'Item 1',
                    type: 'group',
                    children: [
                        { key: 'sub11-1', label: 'Option 1' },
                        { key: 'sub11-2', label: 'Option 2' },
                    ],
                },
                {
                    key: '11-2',
                    label: 'Item 2',
                    type: 'group',
                    children: [
                        { key: 'sub11-3', label: 'Option 3' },
                        { key: 'sub11-4', label: 'Option 4' },
                    ],
                },
            ],
        },
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    };

    return (
        <div className="category-container">
            <Menu
                onClick={onClick}
                className="category-menu"
                // style={{ width: 256, borderLeft: "1px solid rgba(5, 5, 5, 0.06)" }}
                mode="vertical"
                items={items}
            />
        </div>
    )
}