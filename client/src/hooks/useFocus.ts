import { useField } from 'formik';
import { useState } from 'react';



export function useFocus(props: any) {
    const [isFocused, setIsFocused] = useState(false);
    const [field, meta, helpers] = useField(props);

    function focusHandler() {
        setIsFocused(true);
    }

    function blurHandler() {
        setIsFocused(false);
        helpers.setTouched(true);
    }

    return {
        isFocused,
        focusHandler,
        blurHandler,
    };
}