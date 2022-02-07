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
                    label='Последнии проекты'
                />
            </ScrollNavigation>
        </>
    );
}