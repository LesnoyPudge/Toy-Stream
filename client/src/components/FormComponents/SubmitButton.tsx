import { useField } from "formik";
import { FC } from "react";
import { ISubmitButtonProps } from "./types";



export const SubmitButton: FC<ISubmitButtonProps> = ({className, disabled, children, ...props}) => {
    const [field] = useField(props);
    
    return (
        <button 
            {...field} {...props}
            disabled={disabled}
            type="submit"
            className={
                (className ? className + '__form-submit ' : '') +
                'form-submit ' +
                'button '
            }  
        >
            {children}    
        </button>
    );
};
