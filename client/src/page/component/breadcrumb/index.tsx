import { Breadcrumb } from "antd";
import { FunctionComponent } from "react";
import "./index.scss";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../../locales/locale";

interface IBreadcrumbs {

}

export const Breadcrumbs: FunctionComponent<IBreadcrumbs> = (props) => {
    const { i18n } = useLanguage();
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter((i) => i);

    const breadcrumbNameMap: { [key: string]: string } = {
        '/': 'Home',
        '/page-details': 'Page Details',
        '/page-details/biaHoSo': i18n("page.header.biaHoSo"),
        '/page-details/butThuoc': i18n("page.header.butThuoc"),
        '/page-details/so': i18n("page.header.so"),
        '/page-details/bangKeo': i18n("page.header.bangKeo"),
        '/page-details/bangTenDayDeo': i18n("page.header.bangTenDayDeo"),
        '/page-details/keTaiLieu': i18n("page.header.keTaiLieu"),
        '/page-details/hopDauMucDau': i18n("page.header.hopDauMucDau"),
        '/page-details/hinhDan': i18n("page.header.hinhDanSticker"),
        '/page-details/doChoiTreEm': i18n("page.header.doChoiTreEm"),
        '/page-details/dungCuHocSinh': i18n("page.header.dungCuHocSinh"),
        '/page-details/dungCuKhac': i18n("page.header.dungCuKhac"),
    };

    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
        </Breadcrumb.Item>,
        ...pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>{breadcrumbNameMap[url]}</Link>
                </Breadcrumb.Item>
            );
        }),
    ];

    return (
        <div className="breadcrumb-container">
            <Breadcrumb separator=">" className="breadcrumb-item">
                {breadcrumbItems}
            </Breadcrumb>
        </div>
    );
}