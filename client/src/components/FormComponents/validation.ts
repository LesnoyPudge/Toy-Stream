import * as Yup from 'yup';



export const validationFields = {
    name: 
        Yup.string()
        .trim()
        .min(2, 'Не менее 2 символов')
        .max(50, 'Не более 50 символов'),

    email: 
        Yup.string()
        .trim()
        .min(3, 'Не менее 3 символов')
        .max(50, 'Не более 50 символов')
        .email(),

    phone: 
        Yup.string()
        .trim()
        .min(10, 'Не менее 10 символов')
        .max(15, 'Не более 15 символов')
        .matches(/^((8|\+7)[ - ]?)?(\(?\d{3}\)?[ - ]?)?[\d\- ]{7,10}$/, 'Некорректный номер телефона'),

    file: 
        Yup.mixed()
        .test('fileSize', 'Размер файла не должен превышать 10мб', (value) => {
            if (!value) return true;
            return value.size <= 10000000
        }),

    text:
        Yup.string()
        .trim()
        .max(250, 'Не более 250 символов')
}