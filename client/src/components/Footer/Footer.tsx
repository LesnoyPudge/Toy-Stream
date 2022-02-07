import { FC } from "react";
import { Navbar } from "../Navbar/Navbar";
import { SocialLiks } from "../SocialLinks/SocialLinks";
import './index.scss';



export const Footer: FC = () => {
    return (
        <footer className='footer'>
            <div className='footer__inner'>
                <span>
                    © Toy.Stream, Inc.
                </span>

                <Navbar className='footer' />

                <SocialLiks className='footer' />
            </div>
        </footer>
    );
}