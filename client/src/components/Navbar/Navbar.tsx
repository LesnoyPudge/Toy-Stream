import { FC } from "react";
import { NavbarItem } from "./NavbarItem";
import './index.scss';



interface INavbarProps {
    className: string;
    menuIsOpen?: boolean;
    handleClose?: () => void;
}

export const Navbar: FC<INavbarProps> = ({className, menuIsOpen, handleClose}) => {

    return (
        <nav 
            className={
                (className ? className + '__navbar ' : '') + 
                'navbar ' + 
                (menuIsOpen ? 'navbar--active' : '')
            }
            onClick={handleClose}
        >
            <ul 
                className="navbar__list"
                onClick={(e) => {e.stopPropagation()}}
            >
                <NavbarItem 
                    label="Главная страница"
                    to='/'
                    handleClose={handleClose}
                /> 

                <NavbarItem 
                    label="Компания"
                    to='/company'
                    handleClose={handleClose}
                />

                <NavbarItem 
                    label="Карьера"
                    to='/career'
                    handleClose={handleClose}
                />

                <NavbarItem 
                    label="Новости"
                    to='/news'
                    handleClose={handleClose}
                />

                <NavbarItem 
                    label="Контакты"
                    to='/contacts'
                    handleClose={handleClose}
                />
            </ul>
        </nav>
    );
}