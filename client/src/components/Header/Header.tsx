import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../Menu/Menu';
import './index.scss';



export const Header: FC = () => {
    return (
        <header className='header'>
            {/* <div className="container"> */}
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

                    <Menu/>
                </div>
            {/* </div> */}
        </header>
    );
};
