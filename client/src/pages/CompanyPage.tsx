import { FC } from "react";
import { AboutCompanySection } from "../components/AboutCompanySection/AboutCompanySection";
import { OurTeamSection } from "../components/OutTeamSection/OurTeamSection";
import { ScrollNavigation } from "../components/ScrollNavigation/ScrollNavigation";
import { ScrollNavigationItem } from "../components/ScrollNavigation/ScrollNavigationItem";



export const CompanyPage: FC = () => {
    return (
        
        <>
            <ScrollNavigation>
                <ScrollNavigationItem
                    label='О компании'
                />
                <ScrollNavigationItem
                    label='Наша команда'
                />
            </ScrollNavigation>
            
            <AboutCompanySection/>
            <OurTeamSection/>
        </>
    );
}