import { FC } from "react";
import { IVacancyData } from "../../pages";
import { NextPageButton } from "../NextPageButton/NextPageButton";



interface IVacancyItemProps {
    vacancy: IVacancyData;
}

export const VacancyItem: FC<IVacancyItemProps> = ({vacancy}) => {
    const {
        id = vacancy.id,
        label = vacancy.label,
    } = vacancy;

    return (
        <li className="vacancies__item">
            <div className="vacancies__item-inner">
                <div className="vacancies__item-content">
                    <h3 className="vacancies__item-label">
                        {label}
                    </h3>

                    <NextPageButton
                        className="vacancies"
                        position="bottom"
                        direction="right"
                        to={id}
                    >
                        Подробнее
                    </NextPageButton>
                </div>
            </div>
        </li>
    );
}