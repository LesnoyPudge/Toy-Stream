import { CareerSection } from "../components/CareerSection/CareerSection";
import { ScrollNavigation } from "../components/ScrollNavigation/ScrollNavigation";
import { ScrollNavigationItem } from "../components/ScrollNavigation/ScrollNavigationItem";
import { TestimonialsSection } from "../components/TestimonialsSection/TestimonialsSection";
import { VacanciesSection } from "../components/VacanciesSection/VacanciesSection";



export const CareerPage = () => {
    return (
        <>
            <ScrollNavigation>
                <ScrollNavigationItem
                    label='Карьера'
                />
                <ScrollNavigationItem
                    label='Вакансии'
                />
                <ScrollNavigationItem
                    label='Преимущества'
                />
            </ScrollNavigation>

            <CareerSection/>

            <VacanciesSection/>

            <TestimonialsSection/>
        </>
    );
}