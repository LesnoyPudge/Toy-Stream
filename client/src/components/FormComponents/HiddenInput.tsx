import { useField } from "formik";
import { FC } from "react";
import { IInputFieldProps } from "./types";



export const HiddenInput: FC<IInputFieldProps> = (props) => {
    const [field] = useField(props);

    return (
        <input 
            {...field}
            type="hidden"
        />
    );
}