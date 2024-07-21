import { Select } from "antd";
import { FunctionComponent } from "react";

interface IDropdownCustom {
    defaultValue?: string | null;
    option: {
        value?: string | null;
        description?: string;
    }[];
    className?: string
}

const { Option } = Select;

export const DropdownCustom: FunctionComponent<IDropdownCustom> = (props) => {
    return (
        <Select defaultValue={props.defaultValue} className={props.className}>
            {props.option.map((item) => {
                return (
                    <Option value={item.value}>{item.description}</Option>
                )
            })}
        </Select>
    )
}