import { FC } from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { ContactsMap } from "./ContactsMap";
import './index.scss';



export const ContactsSection: FC = () => {
    return (
        <section className="contacts">
            <div className="container">
                <div className="contacts__inner">
                    <div className="contacts__header">
                        <SectionTitle
                            className="contacts"
                        >
                            Контакты
                        </SectionTitle>

                        <address className="contacts__address">
                            <a className="contacts__phone" href="tel:88005553535">
                                8 (800) 555-35-35
                            </a>

                            <a className="contacts__email" href="mailto:toystream@mail.ru" >
                                toystream@mail.ru
                            </a>

                            <span>
                                г.Екатеринбург, ул. Куйбышева, 44д
                            </span>
                        </address>
                    </div>

                    <div className="contacts__content">
                        <ContactsMap/>
                    </div>
                </div>
            </div>
        </section>
    );
}