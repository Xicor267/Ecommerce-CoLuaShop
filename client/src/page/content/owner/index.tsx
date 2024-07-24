import { FunctionComponent, useState } from "react";
import "./index.scss";
import { CardUser } from "../../component/card/carduser";
import { getCardUserItem } from "./items";
import { PaginationHeader } from "../../component/navwrap";

interface IOwner {

}

export const Owner: FunctionComponent<IOwner> = (props) => {

    return (
        <div className="owner-container">
            <div className="owner-title">
                <PaginationHeader
                    title={"Owner"}
                    item={getCardUserItem}
                    perPage={1}
                    renderItems={(currentItems) => (
                        <div className="owner-card">
                            {currentItems.map((item, index) => (
                                <CardUser
                                    key={index}
                                    image={item.image}
                                    name={item.name}
                                    content={item.content}
                                    position={item.position}
                                />
                            ))}
                        </div>
                    )}
                />
            </div>
        </div>
    )
}