import { Tooltip } from "antd";
import { FunctionComponent, ReactNode } from "react";

interface ITooltipCustom {
    title?: string | number;
    color?: string;
    content?: ReactNode;
}

export const TooltipCustom: FunctionComponent<ITooltipCustom> = (props) => {
    return (
        <Tooltip title={props.title} color={props.color} key={props.color}>
            {props.content}
        </Tooltip>
    )
}