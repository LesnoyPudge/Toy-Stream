import { FC } from "react";
import './index.scss';



interface IBurgerButton {
    className: string;
    menuIsOpen: boolean;
    handleToggle: () => void;
}

export const BurgerButton: FC<IBurgerButton> = ({className, menuIsOpen, handleToggle}) => {

    return (
        <button className=
            {
                (className ? className + "__burger " : '') + 
                "burger " + 
                (menuIsOpen ? 'burger--active ' : '') +
                " button"
            }

            onClick={handleToggle}
        >
            <span className="burger__bar"></span>
            <span className="burger__bar"></span>
            <span className="burger__bar"></span>
        </button>
    );
}