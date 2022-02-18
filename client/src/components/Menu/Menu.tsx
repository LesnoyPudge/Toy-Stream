import { FC, useState } from "react";
import { LangugageSwitch } from "../LanguageSwitch/LanguageSwitch";
import { Navbar } from "../Navbar/Navbar";
import { BurgerButton } from "./BurgerButton";



export const Menu: FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function handleToggle() {
        setMenuIsOpen(!menuIsOpen);
    }

    function handleClose() {
        setMenuIsOpen(false);
    }

    return (
        <>
            <Navbar 
                className='header' 
                menuIsOpen={menuIsOpen}
                handleClose={handleClose}
            />

            <LangugageSwitch className='header' />

            <BurgerButton
                className="header"
                menuIsOpen={menuIsOpen}
                handleToggle={handleToggle}
            />
        </>
    );
}