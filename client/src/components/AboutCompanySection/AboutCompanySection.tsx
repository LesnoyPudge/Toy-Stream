import { FC } from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import './index.scss';



export const AboutCompanySection: FC = () => {
    return (
        <section className="about-company">
            <div className="container">
                <div className="about-company__inner">
                    <div className="about-company__left-side">
                        <div className="about-company__header">
                            <SectionTitle
                                className='about-company'
                            >
                                О студии
                            </SectionTitle>
                        </div>
                        
                        <div className="about-company__content">
                            {/* <NextPageButton
                                className='about-company'
                                position='down'
                                direction='right'
                                to='/company'
                            >
                                Узнать <br/> 
                                подробнее
                            </NextPageButton> */}

                            <div className="about-company__text">
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
                        </div>
                    </div>

                    <div className="about-company__right-side">
                        <div className="about-company__achievements achievements">
                            <ul className="achievements__list">
                                <li className="achievements__item">
                                    <div className="achievements__item-image">
                                        <img src="/images/Achievement__image-1.png" alt="2млрд+ установок" />
                                    </div>

                                    <div className="achievements__item-content">
                                        <h3 className="achievements__item-title">
                                            2млрд+
                                        </h3>

                                        <p className="achievements__item-subtitle">
                                            Установок
                                        </p>
                                    </div>
                                </li>

                                <li className="achievements__item">
                                    <div className="achievements__item-image">
                                        <img src="./images/Achievement__image-2.png" alt="500млн+ игроков" />
                                    </div>

                                    <div className="achievements__item-content">
                                        <h3 className="achievements__item-title">
                                            500млн+
                                        </h3>

                                        <p className="achievements__item-subtitle">
                                            Игроков
                                        </p>
                                    </div>
                                </li>

                                <li className="achievements__item">
                                    <div className="achievements__item-image">
                                        <img src="./images/Achievement__image-3.png" alt="250млн+ активных юзеров в месяц" />
                                    </div>

                                    <div className="achievements__item-content">
                                        <h3 className="achievements__item-title">
                                            250млн+
                                        </h3>

                                        <p className="achievements__item-subtitle">
                                            Активных юзеров в месяц
                                        </p>
                                    </div>
                                </li>

                                <li className="achievements__item">
                                    <div className="achievements__item-image">
                                        <img src="./images/Achievement__image-4.png" alt="500+ сотрудников" />
                                    </div>

                                    <div className="achievements__item-content">
                                        <h3 className="achievements__item-title">
                                            500+
                                        </h3>

                                        <p className="achievements__item-subtitle">
                                            Сотрудников
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}