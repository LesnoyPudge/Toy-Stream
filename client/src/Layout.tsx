import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Sprites } from './components/Sprites/Sprites';
import './index.scss';



 export const Layout: FC = () => {
    return (
        <>
            <Header/>

            <main className='main'>
                <Outlet />
            </main>

            {/* <Footer/> */}

            <Sprites/>
        </>
    );
}