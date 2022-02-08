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
                                    Toy.Stream сегодня — это команда из более 500 человек и офисы <br/>
                                    по всему миру. Мы входим в топ-10 игровых разработчиков по <br/>
                                    установкам — общее количество загрузок перевалило за 2 млрд, <br/>
                                    а ежемесячная аудитория составляет более 250 млн игроков. <br/>
                                </p>

                                <p>
                                    В разработке у нас всегда находится более десяти проектов <br/>
                                    одновременно. Мы постоянно экспериментируем, ищем новые <br/>
                                    тренды и пробуем себя в новых жанрах. <br/>
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
                        <img className='about-games__character' src='/images/AboutGames__image.png' alt='about games' />
                    </div>
                </div>
            </div>
        </section>
    );
}