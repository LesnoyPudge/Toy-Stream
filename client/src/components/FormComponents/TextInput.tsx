import { useField } from "formik";
import { FC } from "react";
import { IInputFiledProps } from "./types";
import './index.scss';




export const TextInput: FC<IInputFiledProps> = (props) => {
    const [field, meta] = useField(props);
    const {
        className = props.className,
        label = props.label,
    } = props;
    

    return (
        <>
            {/* <label 
                className={
                    (className && (className + '__label ')) + 
                    'outlined-label ' + 
                    ((meta.touched && meta.error) ? 'outlined-label--error ' : '')
                }
            >
                <span
                    className={props.className + '__outlined-text outlined-text'}
                >
                    {(label && label)}
                </span>

                <input 
                    {...field} {...props} 

                    className={(props.className + '__input outlined-input')} 
                />
            </label>  */}


            <div 
                className={
                    // (className && (className + '__form-field ')) + 
                    // 'form-field ' +
                    // ((meta.touched && !meta.error) && 'form-field--validated') +
                    // ((meta.touched && meta.error) && 'form-field--error')

                    (className ? className + '__form-field ' : '') +
                    'form-field ' +
                    ((meta.touched && !meta.error) ? 'form-field--validated ' : '') +
                    ((meta.touched && meta.error) ? 'form-field--error ' : '')
                }
                
                // onFocus={(e) => {
                //     e.target.closest('.form-field')?.classList.add('focus');
                //     e.target.closest('.form-field')?.classList.add('error')
                //     e.target.closest('.form-field')?.classList.add('validated')
                // }}
                // onBlur={(e) => {
                //     e.target.closest('.form-field')?.classList.remove('focus');
                //     e.target.closest('.form-field')?.classList.remove('error')
                //     e.target.closest('.form-field')?.classList.remove('validated')
                // }}
            >
                <label className="form-field__label">
                    {
                        (label) ? 
                            <span className="form-field__label-text">
                                {label}
                            </span>
                        :
                        null
                    }

                    <input 
                        {...field} {...props}
                        className="form-field__input" 
                    />

                    <div className="form-field__separator"/>
                    
                    {
                        (meta.touched && meta.error) ? 
                            <span className="form-field__error-message">
                                Error
                            </span> 
                        : 
                        null
                    }
                </label>
            </div>
        </>
    );
}