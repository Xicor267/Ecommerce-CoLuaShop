import { Select } from "antd";
import { FunctionComponent, useEffect } from "react";
import { LanguageContextType, useLanguage } from "../../../locales/locale";

interface IDropdownCustom {
    defaultValue?: string | null;
    option: {
        value?: string | null;
        description?: string;
    }[];
    className?: string;
    onChange?: (value: string) => void;
    // onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

const { Option } = Select;

export const DropdownCustom: FunctionComponent<IDropdownCustom> = (props) => {
    const { i18n } = useLanguage();

    const handleChange = (value: string) => {
        if (props.onChange) {
            props.onChange(value);
        }
    };
    
    return (
        <Select defaultValue={props.defaultValue} onChange={handleChange} className={props.className}>
            {props.option?.map((item, index) => {
                return (
                    <Option value={item.value} key={index}>{i18n(item.description || '')}</Option>
                )
            })}
        </Select>
    )
}