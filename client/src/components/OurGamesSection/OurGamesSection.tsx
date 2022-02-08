import { FC } from 'react';
import './index.scss';
import { OurGamesItem } from './OurGamesItem';
import { data } from './data';



export const OurGamesSection: FC = () => {
    return (
        <section className='our-games'>
            <div className='container'>
                <ul className="our-games__list">
                    {
                        data.map((game, index) => {
                            return (
                                <OurGamesItem
                                    key={index}
                                    game = {game}
                                />
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    );
}