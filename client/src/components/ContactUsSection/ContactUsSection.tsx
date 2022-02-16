import { FC } from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { ContactForm } from "./ContactUsForm";
import './index.scss';



export const ContactUsSection: FC = () => {
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
                        <ContactForm
                            className='contact-us-form'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}