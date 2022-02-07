import { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionTitle } from "../SectionTitle/SectionTitle";
import './index.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from "swiper";
import { SliderNavigation } from "../SliderNavigation/SliderNavigation";



export const OurTeamSection: FC = () => {
    return (
        <section className="our-team">
            <div className="container">
                <div className="our-team__inner">
                    <div className="our-team__header">
                        <SectionTitle
                            className='our-team'
                        >
                            Наша <br/>
                            команда 
                        </SectionTitle>

                        <SliderNavigation
                            className='our-team'
                        />
                    </div>

                    

                    <div className="our-team__content">
                        <div className="our-team__slider">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={70}
                                slidesPerView={4}
                                navigation={
                                    {
                                        nextEl: '.slider-navigation__next',
                                        prevEl: '.slider-navigation__prev',
                                    }
                                }
                            >
                                
                                <SwiperSlide>
                                    <div className="our-team__item">
                                        <div className="our-team__item-image">
                                            <img src="./images/OurTeam__image-1.jpg" alt="" />
                                        </div>

                                        <div className="our-team__item-content">
                                            <h3 className="our-team__item-title">
                                                Алексей Олейник
                                            </h3>

                                            <p className="our-team__item-subtitle">
                                                CEO (Chief Executive Officer)
                                            </p>

                                            <div className="our-team__item-text">
                                                <p>
                                                    Наша студия разрабатывает мобильные 
                                                    игры в жанре Hyper Casual. Каждая игра - 
                                                    это оригинальная идея, отточенные 
                                                    механики и проработанный геймплей. 
                                                </p>

                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur 
                                                    adipisicing elit. Odit, hic. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <div className="our-team__item">
                                        <div className="our-team__item-image">
                                            <img src="./images/OurTeam__image-1.jpg" alt="" />
                                        </div>

                                        <div className="our-team__item-content">
                                            <h3 className="our-team__item-title">
                                                Алексей Олейник
                                            </h3>

                                            <p className="our-team__item-subtitle">
                                                CEO (Chief Executive Officer)
                                            </p>

                                            <div className="our-team__item-text">
                                                <p>
                                                    Наша студия разрабатывает мобильные 
                                                    игры в жанре Hyper Casual. Каждая игра - 
                                                    это оригинальная идея, отточенные 
                                                    механики и проработанный геймплей. 
                                                </p>

                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur 
                                                    adipisicing elit. Odit, hic. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <div className="our-team__item">
                                        <div className="our-team__item-image">
                                            <img src="./images/OurTeam__image-1.jpg" alt="" />
                                        </div>

                                        <div className="our-team__item-content">
                                            <h3 className="our-team__item-title">
                                                Алексей Олейник
                                            </h3>

                                            <p className="our-team__item-subtitle">
                                                CEO (Chief Executive Officer)
                                            </p>

                                            <div className="our-team__item-text">
                                                <p>
                                                    Наша студия разрабатывает мобильные 
                                                    игры в жанре Hyper Casual. Каждая игра - 
                                                    это оригинальная идея, отточенные 
                                                    механики и проработанный геймплей. 
                                                </p>

                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur 
                                                    adipisicing elit. Odit, hic. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <div className="our-team__item">
                                        <div className="our-team__item-image">
                                            <img src="./images/OurTeam__image-1.jpg" alt="" />
                                        </div>

                                        <div className="our-team__item-content">
                                            <h3 className="our-team__item-title">
                                                Алексей Олейник
                                            </h3>

                                            <p className="our-team__item-subtitle">
                                                CEO (Chief Executive Officer)
                                            </p>

                                            <div className="our-team__item-text">
                                                <p>
                                                    Наша студия разрабатывает мобильные 
                                                    игры в жанре Hyper Casual. Каждая игра - 
                                                    это оригинальная идея, отточенные 
                                                    механики и проработанный геймплей. 
                                                </p>

                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur 
                                                    adipisicing elit. Odit, hic. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <div className="our-team__item">
                                        <div className="our-team__item-image">
                                            <img src="./images/OurTeam__image-1.jpg" alt="" />
                                        </div>

                                        <div className="our-team__item-content">
                                            <h3 className="our-team__item-title">
                                                Алексей Олейник
                                            </h3>

                                            <p className="our-team__item-subtitle">
                                                CEO (Chief Executive Officer)
                                            </p>

                                            <div className="our-team__item-text">
                                                <p>
                                                    Наша студия разрабатывает мобильные 
                                                    игры в жанре Hyper Casual. Каждая игра - 
                                                    это оригинальная идея, отточенные 
                                                    механики и проработанный геймплей. 
                                                </p>

                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur 
                                                    adipisicing elit. Odit, hic. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="our-team__item">
                                        <div className="our-team__item-image">
                                            <img src="./images/OurTeam__image-1.jpg" alt="" />
                                        </div>

                                        <div className="our-team__item-content">
                                            <h3 className="our-team__item-title">
                                                Алексей Олейник
                                            </h3>

                                            <p className="our-team__item-subtitle">
                                                CEO (Chief Executive Officer)
                                            </p>

                                            <div className="our-team__item-text">
                                                <p>
                                                    Наша студия разрабатывает мобильные 
                                                    игры в жанре Hyper Casual. Каждая игра - 
                                                    это оригинальная идея, отточенные 
                                                    механики и проработанный геймплей. 
                                                </p>

                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur 
                                                    adipisicing elit. Odit, hic. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="our-team__item">
                                        <div className="our-team__item-image">
                                            <img src="./images/OurTeam__image-1.jpg" alt="" />
                                        </div>

                                        <div className="our-team__item-content">
                                            <h3 className="our-team__item-title">
                                                Алексей Олейник
                                            </h3>

                                            <p className="our-team__item-subtitle">
                                                CEO (Chief Executive Officer)
                                            </p>

                                            <div className="our-team__item-text">
                                                <p>
                                                    Наша студия разрабатывает мобильные 
                                                    игры в жанре Hyper Casual. Каждая игра - 
                                                    это оригинальная идея, отточенные 
                                                    механики и проработанный геймплей. 
                                                </p>

                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur 
                                                    adipisicing elit. Odit, hic. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}