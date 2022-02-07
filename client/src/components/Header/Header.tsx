import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LangugageSwitch } from '../LanguageSwitch/LanguageSwitch';
import { Navbar } from '../Navbar/Navbar';
import './index.scss';



export const Header: FC = () => {
    return (
        <header className='header'>
            <div className='header__inner'>
                <div className="header__logo">
                    <Link to='./'>
                        <svg>
                            <use xlinkHref='#logo' />
                        </svg> 

                        <span className="visually-hidden">
                            <h1>Toy Stream</h1>
                        </span>
                    </Link>
                </div>

                <Navbar className='header' />

                <LangugageSwitch className='header' />
            </div>
        </header>
    );
};
