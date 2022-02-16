import { useField } from "formik";
import { FC } from "react";
import { IInputFieldProps } from "./types";
import './index.scss';
import { useFocus } from "../../hooks/useFocus";




export const TextInput: FC<IInputFieldProps> = ({className, label, ...props}) => {
    const {isFocused, focusHandler, blurHandler} = useFocus(props);
    const [field, meta] = useField(props);

    return (
        <>
            <div 
                className={
                    (className ? className + '__form-field ' : '') +
                    'form-field ' +
                    (isFocused ? 'form-field--focus ' : '') +
                    ((meta.touched && !meta.error && field.value) ? 'form-field--validated ' : '') +
                    ((meta.touched && meta.error) ? 'form-field--error ' : '')
                }
                onFocus={focusHandler}
                onBlur={blurHandler}
            >
                <label className="form-field__label">
                    {
                        // (label) ? 
                        //     <span className="form-field__label-text">
                        //         {label}
                        //     </span>
                        // :
                        // null
                    }

                    <input 
                        {...field} {...props}
                        className="form-field__input" 
                    />

                    <div className="form-field__separator"/>
                    
                    {
                        (meta.touched && meta.error) ? 
                            <span className="form-field__error-message">
                                {meta.error}
                            </span> 
                        : 
                        null
                    }
                </label>
            </div>
        </>
    );
}