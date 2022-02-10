import { FC } from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import parse from 'html-react-parser';
import { NextPageButton } from "../NextPageButton/NextPageButton";



interface IOurGamesItemProps {
    game: IGameData;
}

interface IGameData {
    label: string;
    description: string;
    image: string;
}

export const OurGamesItem: FC<IOurGamesItemProps> = ({game}) => {

    const {
        label = game.label,
        description = game.description,
        image = game.image,
    } = game;

    return (
        <li className="our-games__item">
            <div className='our-games__inner'>
                <div className='our-games__content-side'>
                    <div className='our-games__header'>
                        <SectionTitle
                            className='our-games'
                        >
                            {parse(label)}
                        </SectionTitle>
                    </div>
                    
                    <div className='our-games__content'>
                        <div className='our-games__text'>
                            {parse(description)}
                        </div>
                    </div>

                    <NextPageButton
                        className='our-games'
                        position='bottom'
                        direction='right'
                        to=''
                    >
                        Подробнее
                    </NextPageButton>
                </div>

                <div className='our-games__image-side'>
                    <img 
                        className='our-games__game-image' 
                        src={'/images/' + image + '.jpg'} 
                        alt='our game' 
                    />
                </div>
            </div>
        </li>
    );
}