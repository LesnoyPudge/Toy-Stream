import { FC } from 'react';
import { ScrollToSectionButton } from '../ScrollToSectionButton/ScrollToSectionButton';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import './index.scss';



export const AboutGamesSection: FC = () => {
    return (
        <section className='about-games'>
            <div className='container'>
                <div className='about-games__inner'>
                    <div className='about-games__content-side'>
                        <div className='about-games__header'>
                            <SectionTitle
                                className='about-games'
                            >
                                Игры
                            </SectionTitle>
                        </div>
                        
                        <div className='about-games__content'>
                            <div className='about-games__text'>
                                <p>
                                    Toy.Stream сегодня — это команда из более 500 человек и офисы
                                    по всему миру. Мы входим в топ-10 игровых разработчиков по
                                    установкам — общее количество загрузок перевалило за 2 млрд,
                                    а ежемесячная аудитория составляет более 250 млн игроков.
                                </p>

                                <p>
                                    В разработке у нас всегда находится более десяти проектов
                                    одновременно. Мы постоянно экспериментируем, ищем новые
                                    тренды и пробуем себя в новых жанрах.
                                </p>
                            </div>

                            <ScrollToSectionButton
                                className='about-games'
                                position='right'
                                direction='down'
                                to='.our-games'
                            >
                                Смотреть <br/> 
                                наши работы
                            </ScrollToSectionButton>
                        </div>
                    </div>

                    <div className='about-games__image-side'>
                        <img className='about-games__image' src='/images/AboutGames__image.png' alt='about games' />
                    </div>
                </div>
            </div>
        </section>
    );
}