import { FC } from "react";
import './index.scss';



interface ILanguageSwitch {
    className: string;
}

export const LangugageSwitch: FC<ILanguageSwitch> = ({className}) => {
    return (
        <div 
            className = { 
                className + '__language-switch ' + 
                'language-switch'
            }
        >   
            ENG
        </div>
    );
}