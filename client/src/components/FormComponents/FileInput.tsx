import { useField, useFormikContext } from 'formik';
import { FC } from 'react';
import { IInputFieldProps } from './types';
import './index.scss';
import { useFocus } from '../../hooks/useFocus';




export const FileInput: FC<IInputFieldProps> = ({className, label, ...props}) => {
    const {isFocused, focusHandler, blurHandler} = useFocus(props);
    const [field, meta] = useField(props);
    const { setFieldValue } = useFormikContext();
    
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
                <label className='form-field__label'>
                    {
                        // (label) ? 
                        //     <span className='form-field__label-text'>
                        //         {label}
                        //     </span>
                        // :
                        // null
                    }

                    <input 
                        {...props}
                        className='form-field__input visually-hidden' 
                        onChange={(event) => {
                            setFieldValue(field.name, event.target.files![0])
                        }}
                    />

                    <div className='form-field__input-placeholder'>
                        
                        {
                            (field.value) ?
                                'Прикреплено: ' + field.value.name
                            :
                            props.placeholder
                        }

                        <svg>
                            <use xlinkHref='#file-input-icon' />
                        </svg>
                    </div>

                    <div className='form-field__separator'/>
                    
                    {
                        (meta.touched && meta.error) ? 
                            <span className='form-field__error-message'>
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