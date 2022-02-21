import { FC } from "react";
import { useParams } from "react-router-dom";
import { ContactUsSection } from "../components/ContactUsSection/ContactUsSection";
import { ScrollNavigation } from "../components/ScrollNavigation/ScrollNavigation";
import { ScrollNavigationItem } from "../components/ScrollNavigation/ScrollNavigationItem";
import { VacancyDescriptionSection } from "../components/VacancyDescriptionSection/VacancyDescriptionSection";
import { data } from "../components/VacanciesSection/data";



export interface IVacancyData {
    id: string;
    url: string;
    label: string;
    description: string;
}

const SingleVacancyPage: FC = () => {
    const { vacancyId } = useParams();

    const vacancy = data.filter((item) => {
        return (item.id === vacancyId);
    })[0];

    return (
        <>
            <ScrollNavigation>
                <ScrollNavigationItem
                    label='Описание'
                />
                <ScrollNavigationItem
                    label='Напишите нам'
                />
            </ScrollNavigation>

            <VacancyDescriptionSection
                vacancy={vacancy}
            />

            <ContactUsSection/>
        </>
    );
}

export default SingleVacancyPage;