import { FC, useEffect, useState } from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { SliderNavigation } from '../SliderNavigation/SliderNavigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper';
import { data } from './data';
import { LastProjectsItem } from './LastProjectsItem';
import { useMobile } from '../../hooks/useMobile';



export const LastProjectsSection: FC = () => {
    const {isMobile, mobileSize} = useMobile();
    const [options, setOptions] = useState({
        spaceBetween: 160,
        slidesPerView: 3,
    });

    useEffect(() => {
        if (!isMobile) {
            setOptions({
                spaceBetween: 160,
                slidesPerView: 3,
            })
        }

        if (isMobile && mobileSize === 'L') {
            setOptions({
                spaceBetween: 40,
                slidesPerView: 3,
            })
        }

        if (isMobile && mobileSize === 'M') {
            setOptions({
                spaceBetween: 40,
                slidesPerView: 2,
            })
        }

        if (isMobile && mobileSize === 'S') {
            setOptions({
                spaceBetween: 40,
                slidesPerView: 1,
            })
        }
    }, [isMobile, mobileSize]);

    return (
        <section className='last-projects'>
            <div className='container'>
                <div className='last-projects__inner'>
                    <div className='last-projects__header'>
                        <SectionTitle
                            className='last-projects'
                        >
                            Последние проекты
                        </SectionTitle>

                        <SliderNavigation
                            className='last-projects'
                        />
                    </div>

                    <div className='last-projects__content'>
                        <div className='last-projects__slider'>
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
                                {
                                    data.map((game, index) => {
                                        return (
                                            <SwiperSlide
                                                key={index}
                                            >
                                                <LastProjectsItem
                                                    game={game}
                                                />
                                            </SwiperSlide>
                                        );
                                    })
                                }    
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}