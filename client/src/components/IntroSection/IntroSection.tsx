import { FC } from "react";
import { NextPageButton } from "../NextPageButton/NextPageButton";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import './index.scss';



export const IntroSection: FC = () => {
    return (
        <section className="intro-section">
            <div className="container">
                <div className="intro-section__inner">
                    <div className="intro-section__header">
                        <SectionTitle
                            className='intro-section'
                        >
                            Мы создаем мобильные <br/> 
                            игры, в которые играют <br/>
                            миллионы
                        </SectionTitle>
                    </div>
                    
                    <div className="intro-section__content">
                        <NextPageButton
                            className='intro-section'
                            position='down'
                            direction='right'
                            to='/company'
                        >
                            Узнать <br/> 
                            подробнее
                        </NextPageButton>

                        <div className="intro-section__text">
                            <p>
                            «Оригинальные идеи, качество реализации <br/>
                            игровых механик и внимание к деталям <br/>
                            интерфейса - наши основные принципы.»
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}