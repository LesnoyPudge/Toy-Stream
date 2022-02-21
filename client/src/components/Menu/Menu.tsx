import { FC, useState } from 'react';
import { LangugageSwitch } from '../LanguageSwitch/LanguageSwitch';
import { Navbar } from '../Navbar/Navbar';
import { BurgerButton } from '../BurgerButton/BurgerButton';


export const Menu: FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function handleToggle() {
        setMenuIsOpen(!menuIsOpen);

        if (document.body.style.overflow === 'hidden') {
            document.body.style.overflow = '';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    function handleClose() {
        setMenuIsOpen(false);
        document.body.style.overflow = '';
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
                className='header'
                menuIsOpen={menuIsOpen}
                handleToggle={handleToggle}
            />
        </>
    );
}