import { FC, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Sprites } from './components/Sprites/Sprites';
import './index.scss';



 export const Layout: FC = () => {
    const location = useLocation();
    
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Header/>

            <main className='main'>
                <Outlet />
            </main>

            <Footer/>

            <Sprites/>
        </>
    );
}