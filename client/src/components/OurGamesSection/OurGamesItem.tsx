import { FC } from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import parse from 'html-react-parser';
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";



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

                    <PrimaryButton
                        className='our-games'
                        position='bottom'
                        direction='right'
                    >
                        Подробнее
                    </PrimaryButton>
                </div>

                <div className='our-games__image-side'>
                    <img 
                        className='our-games__image' 
                        src={'/images/' + image + '.jpg'} 
                        alt='our game' 
                    />
                </div>
            </div>
        </li>
    );
}