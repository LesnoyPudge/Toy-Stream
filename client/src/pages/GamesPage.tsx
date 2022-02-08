import { AboutGamesSection } from "../components/AboutGamesSection/AboutGamesSection";
import { LastProjectsSection } from "../components/LastProjectsSection/LastProjectsSection";
import { OurGamesSection } from "../components/OurGamesSection/OurGamesSection";
import { ScrollNavigation } from "../components/ScrollNavigation/ScrollNavigation";
import { ScrollNavigationItem } from "../components/ScrollNavigation/ScrollNavigationItem";



export const GamesPage = () => {
    return (
        <>
            <ScrollNavigation>
                <ScrollNavigationItem
                    label='О играх'
                />
                <ScrollNavigationItem
                    label='Наши игры'
                />
                <ScrollNavigationItem
                    label='Последние проекты'
                />
            </ScrollNavigation>

            <AboutGamesSection/>

            <OurGamesSection/>

            <LastProjectsSection/>
        </>
    );
}