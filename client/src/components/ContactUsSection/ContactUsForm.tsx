import { FC } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useHttp } from "../../hooks/http.hook";
import {  FileInput, HiddenInput, SubmitButton, TextInput, validationFields } from "../FormComponents";
import { Loader } from "../Lodaer/Loader";
import { useParams } from "react-router-dom";



interface IContactFormProps {
    className: string;
}

interface IContactFormValues {
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string;
    candidateResume: any;
    extraFiles?: any;
    comment?: string;
    requestTime: string;
    vacancyId: string | undefined,
}

export const ContactForm: FC<IContactFormProps> = ({className}) => {
    const { vacancyId } = useParams();
    const { request, error } = useHttp();
    const formClassName = className;
    const initialValues: IContactFormValues = {
        candidateName: "",
        candidateEmail: "",
        candidatePhone: "",
        candidateResume: "",
        extraFiles: "",
        comment: "",
        requestTime: "",
        vacancyId: vacancyId,
    };

    const validationSchema = Yup.object({
        candidateName: 
            validationFields.name
            .required('Необходимо заполнить'),
        
        candidateEmail:
            validationFields.email                          
            .required('Необходимо заполнить'),
        
        candidatePhone: 
            validationFields.phone
            .required('Необходимо заполнить'),

        candidateResume: 
            validationFields.file
            .required('Необходимо заполнить'),

        extraFiles: 
            validationFields.file,
        
        comment:
            validationFields.text,
    });

    async function submitHandler(values: IContactFormValues) {   
        try {
            values.requestTime = Date.now().toString();
            await request('./api/candidate/add', 'POST', values);
        } catch (error) {
            console.log(error);
        }    
    }

    return (
        <Formik
            initialValues={initialValues}

            validationSchema={validationSchema}

            onSubmit={async (values, { setSubmitting }) => {
                await submitHandler(values);
                setSubmitting(false);
            }}
        >
            {({isSubmitting}) => (
                <Form
                    className={formClassName}
                >
                    <div className={formClassName + '__inner'}>
                        <div className={formClassName + '__row'}>
                            <TextInput
                                className={formClassName}
                                label="Как к вам обращаться?*"
                                name="candidateName"
                                type="text"
                                placeholder="Иванов Иван Иванович"
                            />

                            <TextInput
                                className={formClassName}
                                label="Ваш email*"
                                name="candidateEmail"
                                type="email"
                                placeholder="your@email.com"
                            />

                            <TextInput
                                className={formClassName}
                                label="Ваш телефон*"
                                name="candidatePhone"
                                type="tel"
                                placeholder="8 800 555 35 35"
                            />
                        </div>

                        <div className={formClassName + '__row'}>
                            <FileInput
                                className={formClassName}
                                label="Ваше резюме*"
                                name="candidateResume"
                                type="file"
                                placeholder="Прикрепите резюме"
                            />

                            <FileInput
                                className={formClassName}
                                label="Дополнительные файлы"
                                name="extraFiles"
                                type="file"
                                placeholder="Дополнительные файлы"
                            />

                            <TextInput
                                className={formClassName}
                                label="Дополнительный комментарий"
                                name="comment"
                                type="text"
                                placeholder="Дополнительный комментарий"
                            />
                        </div>

                        <HiddenInput
                            name="requestTime"
                        />

                        <HiddenInput
                            name="vacancyId"
                        />
                    </div>
                    
                    {
                        (error) ?
                            <SubmitButton
                                className={formClassName}
                                name="submit"
                                disabled={isSubmitting}
                            >
                                {
                                    (isSubmitting) ? <Loader/> : 'Ошибка! Повторите попытку'
                                }
                            </SubmitButton>
                        :
                        <SubmitButton
                            className={formClassName}
                            name="submit"
                            disabled={isSubmitting}
                        >
                            {
                                (isSubmitting) ? <Loader/> : 'Отправить'
                            }
                        </SubmitButton>
                    }
                </Form>
            )}
        </Formik>
    );
}