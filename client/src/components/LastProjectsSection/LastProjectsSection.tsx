import { FC } from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SliderNavigation } from "../SliderNavigation/SliderNavigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from "swiper";
import { data } from './data';
import { LastProjectsItem } from "./LastProjectsItem";



export const LastProjectsSection: FC = () => {
    return (
        <section className="last-projects">
            <div className="container">
                <div className="last-projects__inner">
                    <div className="last-projects__header">
                        <SectionTitle
                            className='last-projects'
                        >
                            Последние проекты
                        </SectionTitle>

                        <SliderNavigation
                            className='last-projects'
                        />
                    </div>

                    <div className="last-projects__content">
                        <div className="last-projects__slider">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={160}
                                slidesPerView={3}
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
                                            <SwiperSlide>
                                                <LastProjectsItem
                                                    key={index}
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