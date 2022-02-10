import { FC } from "react";
import { IVacancyData } from "../../pages";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import parse from 'html-react-parser';
import './index.scss';



interface IVacancyDescriptionSectionProps {
    vacancy: IVacancyData;
}

export const VacancyDescriptionSection: FC<IVacancyDescriptionSectionProps> = ({vacancy}) => {
    const {
        label = vacancy.label,
        description = vacancy.description,
    } = vacancy;


    return (
        <section className="vacancy-description">
            <div className="container">
                <div className="vacancy-description__inner">
                    <div className="vacancy-description__header">
                        <SectionTitle
                            className="vacancy-description"
                        >
                            {label}
                        </SectionTitle>
                    </div>

                    <div className="vacancy-description__content">
                        <div className="vacancy-description__text">
                            {parse(description)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}