import { FC } from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import parse from 'html-react-parser';



interface IOurGamesItemProps {
    game: IGameData;
}

export interface IGameData {
    label: string;
    description: string;
    image: string;
}

export const LastProjectsItem: FC<IOurGamesItemProps> = ({game}) => {

    const {
        label = game.label,
        description = game.description,
        image = game.image,
    } = game;

    return (
        <div className='last-projects__item'>
            <div className='last-projects__item-image'>
                <img src={'./images/' + image + '.jpg'} alt='' />
            </div>

            <div className='last-projects__item-content'>
                <h3 className='last-projects__item-title'>
                    {parse(label)}
                </h3>

                <div className='last-projects__item-text'>
                    {parse(description)}
                </div>
            </div>
        </div>
    );
}