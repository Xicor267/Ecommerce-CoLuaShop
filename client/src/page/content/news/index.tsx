import { FunctionComponent, useState } from "react";
import "./index.scss";
import { CardNews } from "../../component/card/cardnews";
import { getCardNewsItem } from "./items";
import { PaginationHeader } from "../../component/navwrap";

interface INews {

}

export const News: FunctionComponent<INews> = (props) => {

    return (
        <div className="news-container">
            <div className="news-title">
                <PaginationHeader
                    title="Latest News"
                    item={getCardNewsItem}
                    perPage={3}
                    renderItems={(currentItems) => (
                        <div className="news-card">
                            {currentItems.map((item, index) => (
                                <CardNews
                                    key={index}
                                    image={item.image}
                                    title={item.title}
                                    createDate={item.createDate}
                                />
                            ))}
                        </div>
                    )}
                />
            </div>
        </div>
    )
}