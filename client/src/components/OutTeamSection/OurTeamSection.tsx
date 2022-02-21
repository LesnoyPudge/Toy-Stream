import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import './index.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper';
import { SliderNavigation } from '../SliderNavigation/SliderNavigation';
import { useMobile } from '../../hooks/useMobile';



export const OurTeamSection: FC = () => {
    const {isMobile, mobileSize} = useMobile();
    const [options, setOptions] = useState({
        spaceBetween: 70,
        slidesPerView: 4,
    });

    useEffect(() => {
        if (!isMobile) {
            setOptions({
                spaceBetween: 70,
                slidesPerView: 4,
            })
        }

        if (isMobile && mobileSize === 'L') {
            setOptions({
                spaceBetween: 30,
                slidesPerView: 3,
            })
        }

        if (isMobile && mobileSize === 'M') {
            setOptions({
                spaceBetween: 30,
                slidesPerView: 2,
            })
        }

        if (isMobile && mobileSize === 'S') {
            setOptions({
                spaceBetween: 70,
                slidesPerView: 1,
            })
        }
    }, [isMobile, mobileSize]);



    return (
        <section className='our-team'>
            <div className='container'>
                <div className='our-team__inner'>
                    <div className='our-team__header'>
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

                    

                    <div className='our-team__content'>
                        <div className='our-team__slider'>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={options.spaceBetween}
                                slidesPerView={options.slidesPerView}
                                navigation={
                                    {
                                        nextEl: '.slider-navigation__next',
                                        prevEl: '.slider-navigation__prev',
                                    }
                                }
                            >
                                
                                <SwiperSlide>
                                    <div className='our-team__item'>
                                        <div className='our-team__item-image'>
                                            <img src='./images/OurTeam__image-1.jpg' alt='' />
                                        </div>

                                        <div className='our-team__item-content'>
                                            <h3 className='our-team__item-title'>
                                                Алексей Олейник
                                            </h3>

                                            <p className='our-team__item-subtitle'>
                                                CEO (Chief Executive Officer)
                                            </p>

                                            <div className='our-team__item-text'>
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
                                    <div className='our-team__item'>
                                        <div className='our-team__item-image'>
                                            <img src='./images/OurTeam__image-1.jpg' alt='' />
                                        </div>

                                        <div className='our-team__item-content'>
                                            <h3 className='our-team__item-title'>
                                                Алексей Олейник
                                            </h3>

                                            <p className='our-team__item-subtitle'>
                                                CEO (Chief Executive Officer)
                                            </p>

                                            <div className='our-team__item-text'>
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
                                    <div className='our-team__item'>
                                        <div className='our-team__item-image'>
                                            <img src='./images/OurTeam__image-1.jpg' alt='' />
                                        </div>

                                        <div className='our-team__item-content'>
                                            <h3 className='our-team__item-title'>
                                                Алексей Олейник
                                            </h3>

                                            <p className='our-team__item-subtitle'>
                                                CEO (Chief Executive Officer)
                                            </p>

                                            <div className='our-team__item-text'>
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
                                    <div className='our-team__item'>
                                        <div className='our-team__item-image'>
                                            <img src='./images/OurTeam__image-1.jpg' alt='' />
                                        </div>

                                        <div className='our-team__item-content'>
                                            <h3 className='our-team__item-title'>
                                                Алексей Олейник
                                            </h3>

                                            <p className='our-team__item-subtitle'>
                                                CEO (Chief Executive Officer)
                                            </p>

                                            <div className='our-team__item-text'>
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
                                    <div className='our-team__item'>
                                        <div className='our-team__item-image'>
                                            <img src='./images/OurTeam__image-1.jpg' alt='' />
                                        </div>

                                        <div className='our-team__item-content'>
                                            <h3 className='our-team__item-title'>
                                                Алексей Олейник
                                            </h3>

                                            <p className='our-team__item-subtitle'>
                                                CEO (Chief Executive Officer)
                                            </p>

                                            <div className='our-team__item-text'>
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
                                    <div className='our-team__item'>
                                        <div className='our-team__item-image'>
                                            <img src='./images/OurTeam__image-1.jpg' alt='' />
                                        </div>

                                        <div className='our-team__item-content'>
                                            <h3 className='our-team__item-title'>
                                                Алексей Олейник
                                            </h3>

                                            <p className='our-team__item-subtitle'>
                                                CEO (Chief Executive Officer)
                                            </p>

                                            <div className='our-team__item-text'>
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
                                    <div className='our-team__item'>
                                        <div className='our-team__item-image'>
                                            <img src='./images/OurTeam__image-1.jpg' alt='' />
                                        </div>

                                        <div className='our-team__item-content'>
                                            <h3 className='our-team__item-title'>
                                                Алексей Олейник
                                            </h3>

                                            <p className='our-team__item-subtitle'>
                                                CEO (Chief Executive Officer)
                                            </p>

                                            <div className='our-team__item-text'>
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