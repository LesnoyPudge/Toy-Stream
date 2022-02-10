import { useField } from "formik";



export function HiddenInput() {
    // const [field] = useField(props);

    return (
        <input 
            type="hidden"
            // {...field} {...props}
        />
    );
}