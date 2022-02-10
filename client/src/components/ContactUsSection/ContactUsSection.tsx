import { FC } from "react";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { useHttp } from "../../hooks/http.hook";
import {  TextInput } from "../FormComponents";
import { Loader } from "../Lodaer/Loader";



interface IContactUsSectionProps {
    vacancyId: string;
}

interface ContactFormValues {
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string;
    // candidateResume: HTMLInputElement;
    // extraFiles: HTMLInputElement;
    comment: string;
    requestTime: string;
    vacancyId: string,
}

export const ContactUsSection: FC<IContactUsSectionProps> = ({vacancyId}) => {
    const { request, error } = useHttp();
    const formClassName = 'contact-us';
    const initialValues: ContactFormValues = {
        candidateName: "",
        candidateEmail: "",
        candidatePhone: "",
        // candidateResume: ,
        // extraFiles: "",
        comment: "",
        requestTime: "",
        vacancyId: vacancyId,
    };

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

                            // validationSchema={Yup.object({
                            //     candidateName: Yup.string()
                            //         .required("Required"),
                                
                            //     candidateEmail: Yup.string()
                            //         .trim()
                            //         .email()                            
                            //         .required("Required"),
                                
                            //     questionText: Yup.string()
                            //         .trim()
                            //         .required("Required"),
                            // })}

                            onSubmit={ async (values, { setSubmitting }) => {
                                values.requestTime = Date.now().toString();
                                // console.log(values);
                                try {
                                    await request('./api/candidate/add', 'POST', values, {});
                                    setSubmitting(false);
                                } catch (error) {
                                    console.log(error);
                                    setSubmitting(false);
                                }    
                            }}
                        >
                            {( props: FormikProps<ContactFormValues> ) => (
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

                                        {/* <FileInput
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
                                        /> */}

                                        <TextInput
                                            className={formClassName}
                                            label="Дополнительный комментарий"
                                            name="comment"
                                            type="text"
                                            placeholder="Дополнительный комментарий"
                                        />

                                        {/* <HiddenInput
                                            name="requestTime"
                                        />

                                        <HiddenInput
                                            name="vacancyId"
                                        /> */}
                                    </div>
                                    

                                    {
                                        // (error) ?
                                        //     <SubmitButton
                                        //         className={formClassName}
                                        //         name="submit"
                                        //         disabled={isSubmitting}
                                        //     >
                                        //         {
                                        //             (isSubmitting) ? <Loader/> : 'Ошибка! Повторить попытку'
                                        //         }
                                        //     </SubmitButton>
                                        // :
                                        // <SubmitButton
                                        //     className={formClassName}
                                        //     name="submit"
                                        //     disabled={isSubmitting}
                                        // >
                                        //     {
                                        //         (isSubmitting) ? <Loader/> : 'Отправить'
                                        //     }
                                        // </SubmitButton>
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