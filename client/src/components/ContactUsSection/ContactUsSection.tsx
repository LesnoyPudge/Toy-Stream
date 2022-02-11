import { FC } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { useHttp } from "../../hooks/http.hook";
import {  FileInput, HiddenInput, SubmitButton, TextInput } from "../FormComponents";
import { Loader } from "../Lodaer/Loader";



interface IContactUsSectionProps {
    vacancyId: string;
}

interface ContactFormValues {
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string;
    candidateResume: any;
    extraFiles: any;
    comment: string;
    requestTime: string;
    vacancyId: string,
}

export const ContactUsSection: FC<IContactUsSectionProps> = ({vacancyId}) => {
    const { request, error } = useHttp();
    const formClassName = 'contact-us-form';
    const initialValues: ContactFormValues = {
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
        candidateName: Yup.string()
            .required("Required"),
        
        candidateEmail: Yup.string()
            .trim()
            .email()                            
            .required("Required"),
        
        candidatePhone: Yup.string()
            .trim()
            .matches(/^((8|\+7)[ - ]?)?(\(?\d{3}\)?[ - ]?)?[\d\- ]{7,10}$/, "Invalid phone number")
            .required("Required"),

        candidateResume: Yup.mixed()
            .required("Required")
            .test("fileSize", "The file is too large", (value) => {
                if (!value) return false;
                return value.size <= 10000000
            }),
        extraFiles: Yup.mixed()
            .nullable()
            .test("fileSize", "The file is too large", (value) => {
                if (!value) return true;
                return value.size <= 10000000;
            }),
    });

    async function submitHandler(values:any, setSubmitting: (isSubmiting: boolean) => void) {   
        values.requestTime = Date.now().toString();

        try {
            await request('./api/candidate/add', 'POST', values, {});
            setSubmitting(false);
        } catch (error) {
            console.log(error);
            setSubmitting(false);
        }    
    }

    return (
        <section className="contact-us">
            <div className="container">
                <div className="contact-us__inner">
                    <div className="contact-us__header">
                        <SectionTitle
                            className="contact-us"
                        >
                            Напишите <br/>
                            нам
                        </SectionTitle>
                    </div>

                    <div className="contact-us__content">
                        <Formik
                            initialValues={initialValues}

                            validationSchema={validationSchema}

                            onSubmit={(values, { setSubmitting }) => {
                                submitHandler(values, setSubmitting);
                            }}
                        >
                            {({isSubmitting}) => (
                                <Form
                                    className={formClassName}
                                >
                                    <div className={formClassName + '__inner'}>
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
                    </div>
                </div>
            </div>
        </section>
    );
}