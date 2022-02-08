import { FC } from 'react';
import { ScrollToSectionButton } from '../ScrollToSectionButton/ScrollToSectionButton';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import './index.scss';



export const CareerSection: FC = () => {
    return (
        <section className='career'>
            <div className='container'>
                <div className='career__inner'>
                    <div className='career__content-side'>
                        <div className='career__header'>
                            <SectionTitle
                                className='career'
                            >
                                Игры
                            </SectionTitle>
                        </div>
                        
                        <div className='career__content'>
                            <div className='career__text'>
                                <p>
                                    Мы распределенная команда из более 
                                    300 специалистов по всему миру. 
                                    И расстояния не мешают нам создавать 
                                    хиты для миллионов игроков.
                                </p>
                            </div>

                            <ScrollToSectionButton
                                className='career'
                                position='right'
                                direction='down'
                                to='.vacancies'
                            >
                                Вакансии
                            </ScrollToSectionButton>
                        </div>
                    </div>

                    <div className='career__image-side'>
                        <img className='career__image' src='/images/Career__image.png' alt='career' />
                    </div>
                </div>
            </div>
        </section>
    );
}