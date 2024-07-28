import { FunctionComponent, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { PiListBulletsBold } from "react-icons/pi";
import { Button, Dropdown, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { getCardProductItem } from "../../../content/discount/items";
import { CardProductColumn } from "../../card/cardproducts/cardproductrow";
import { FcAlphabeticalSortingAz, FcAlphabeticalSortingZa, FcGenericSortingAsc, FcGenericSortingDesc } from "react-icons/fc";
import { CardProduct } from "../../card/cardproducts";
import { getBangKeo, getBangTenDayDeo, getBiaHoSo, getButThuoc, getDoChoiTreEm, getDungCuHocSinh, getDungCuKhac, getHinhDan, getHopDauMucDau, getKeTaiLieu, getSo } from "../../../mockup/product/getDropdownItem";
import { useParams } from "react-router-dom";
import "./index.scss";
import { CardProductDetail } from "../cardproductdetail";
import { getCardBangKeo, getCardBangTenDayDeo, getCardBiaHoSo, getCardButThuoc, getCardDoChoiTreEm, getCardDungCuHocSinh, getCardDungCuKhac, getCardHinhDan, getCardHopDauMucDau, getCardKeTaiLieu, getCardSo } from "../../../mockup/getCardProductDetail";

interface ICardProductFilter {

}

//config router
const dataMap: { [key: string]: any } = {
    biaHoSo: {
        data: getBiaHoSo,
        cardData: getCardBiaHoSo,
    },
    butThuoc: {
        data: getButThuoc,
        cardData: getCardButThuoc,
    },
    so: {
        data: getSo,
        cardData: getCardSo,
    },
    bangKeo: {
        data: getBangKeo,
        cardData: getCardBangKeo,
    },
    bangTenDayDeo: {
        data: getBangTenDayDeo,
        cardData: getCardBangTenDayDeo,
    },
    keTaiLieu: {
        data: getKeTaiLieu,
        cardData: getCardKeTaiLieu,
    },
    hopDauMucDau: {
        data: getHopDauMucDau,
        cardData: getCardHopDauMucDau,
    },
    hinhDan: {
        data: getHinhDan,
        cardData: getCardHinhDan,
    },
    doChoiTreEm: {
        data: getDoChoiTreEm,
        cardData: getCardDoChoiTreEm,
    },
    dungCuHocSinh: {
        data: getDungCuHocSinh,
        cardData: getCardDungCuHocSinh,
    },
    dungCuKhac: {
        data: getDungCuKhac,
        cardData: getCardDungCuKhac,
    }
};

export const CardProductFilter: FunctionComponent<ICardProductFilter> = (props) => {
    const [viewMode, setViewMode] = useState('grid'); //list or grid
    const { category } = useParams<{ category: string }>();

    const data = category && dataMap[category] ? dataMap[category].data : [];
    const cardData = category && dataMap[category] ? dataMap[category].cardData : [];

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    };

    const items: MenuProps['items'] = [
        {
            label: 'Name, A to Z',
            key: '1',
            icon: <FcAlphabeticalSortingAz />,
        },
        {
            label: 'Name, Z to A',
            key: '2',
            icon: <FcAlphabeticalSortingZa />,
        },
        {
            label: 'Price, low to high',
            key: '3',
            icon: <FcGenericSortingAsc />,
        },
        {
            label: 'Price, high to low',
            key: '4',
            icon: <FcGenericSortingDesc />,
        },
    ];

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    const handleViewProductColumn = () => {
        return (
            <div className="cardproductfilter-all-card-column">
                {getCardProductItem.map((item, index) => {
                    return (
                        <div className="cardproductfilter-card-column">
                            <CardProductColumn
                                key={index}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                discount={item.discount}
                                discountPercent={item.discountPercent}
                            />
                        </div>
                    );
                }).slice(0, 6)}
            </div>
        )
    }

    const handleViewProductRow = () => {
        return (
            <div className="cardproductfilter-all-card-row">
                {data.map((item: any, index: number) => {
                    return (
                        <div className="cardproductfilter-card-row">
                            <CardProduct
                                key={index}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                discount={item.discount}
                                discountPercent={item.discountPercent}
                                hasHoverItem
                            />
                        </div>
                    );
                }).slice()}
            </div>
        )
    }

    return (
        <div className="cardproductfilter-container">
            <div className="cardproductfilter-card-details">
                {cardData.map((item: any, index: number) => (
                    <CardProductDetail
                        key={index}
                        title={item.title}
                        text={item.text}
                        image={item.image}
                    />
                ))}
            </div>
            <div className="cardproductfilter-nav">
                <div className="cardproductfilter-icon">
                    <CgMenuGridR
                        fontSize={30}
                        onClick={() => setViewMode('grid')}
                        style={{ cursor: 'pointer', color: viewMode === 'grid' ? '#181818' : '#aaa' }}
                    />
                    <PiListBulletsBold
                        fontSize={30}
                        onClick={() => setViewMode('list')}
                        style={{ cursor: 'pointer', color: viewMode === 'list' ? '#181818' : '#aaa' }}
                    />
                </div>
                <div className="cardproductfilter-filter">
                    <div style={{ fontWeight: 500, fontSize: 15 }}>Sort by: </div>
                    <Dropdown
                        menu={menuProps}
                    >
                        <Button className="cardproductfilter-button">
                            Option
                            <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
            </div>
            {viewMode === 'list' ? handleViewProductColumn() : handleViewProductRow()}
            <div className="cardproductfilter-quantity">
                Showing 1 - {getCardProductItem.length} of {getCardProductItem.length} item(s)
            </div>
        </div>
    )
}