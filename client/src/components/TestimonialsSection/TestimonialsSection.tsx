import { FC } from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import './index.scss';



export const TestimonialsSection: FC = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <div className="testimonials__inner">
                    <div className="testimonials__left-side">
                        <div className="testimonials__header">
                            <SectionTitle
                                className='testimonials'
                            >
                                Преимущества работы в Toy Stream
                            </SectionTitle>
                        </div>
                        
                        <div className="testimonials__content">
                            <div className="testimonials__text">
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
                        </div>
                    </div>

                    <div className="testimonials__right-side">
                        <ul className="testimonials__list">
                            <li className="testimonials__item">
                                <div className="testimonials__item-image">
                                    <img src="/images/Achievement__image-1.png" alt="2млрд+ установок" />
                                </div>

                                <div className="testimonials__item-content">
                                    <h3 className="testimonials__item-title">
                                        2млрд+
                                    </h3>

                                    <p className="testimonials__item-subtitle">
                                        Установок
                                    </p>
                                </div>
                            </li>

                            <li className="testimonials__item">
                                <div className="testimonials__item-image">
                                    <img src="./images/Achievement__image-2.png" alt="500млн+ игроков" />
                                </div>

                                <div className="testimonials__item-content">
                                    <h3 className="testimonials__item-title">
                                        500млн+
                                    </h3>

                                    <p className="testimonials__item-subtitle">
                                        Игроков
                                    </p>
                                </div>
                            </li>

                            <li className="testimonials__item">
                                <div className="testimonials__item-image">
                                    <img src="./images/Achievement__image-3.png" alt="250млн+ активных юзеров в месяц" />
                                </div>

                                <div className="testimonials__item-content">
                                    <h3 className="testimonials__item-title">
                                        250млн+
                                    </h3>

                                    <p className="testimonials__item-subtitle">
                                        Активных юзеров в месяц
                                    </p>
                                </div>
                            </li>

                            <li className="testimonials__item">
                                <div className="testimonials__item-image">
                                    <img src="./images/Achievement__image-4.png" alt="500+ сотрудников" />
                                </div>

                                <div className="testimonials__item-content">
                                    <h3 className="testimonials__item-title">
                                        500+
                                    </h3>

                                    <p className="testimonials__item-subtitle">
                                        Сотрудников
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}