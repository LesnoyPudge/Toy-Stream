import { FC } from "react";
import { NavbarItem } from "./NavbarItem";
import './index.scss';



interface INavbarProps {
    className: string;
}

export const Navbar: FC<INavbarProps> = ({className}) => {
    return (
        <nav 
            className={
                ((className) ? className + '__navbar ' : '') + 
                'navbar' 
            }
        >
            <ul className="navbar__list">
                <NavbarItem to='/'>
                    Главная страница
                </NavbarItem>

                <NavbarItem to='/company'>
                    Компания
                </NavbarItem>

                <NavbarItem to='/games'>
                    Игры
                </NavbarItem>

                <NavbarItem to='/career'>
                    Карьера
                </NavbarItem>

                <NavbarItem to='/news'>
                    Новости
                </NavbarItem>

                <NavbarItem to='/contacts'>
                    Контакты
                </NavbarItem>
            </ul>
        </nav>
    );
}