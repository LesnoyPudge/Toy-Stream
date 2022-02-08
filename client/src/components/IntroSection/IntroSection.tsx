import { FC } from "react";
import { NextPageButton } from "../NextPageButton/NextPageButton";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import './index.scss';



export const IntroSection: FC = () => {
    return (
        <section className="intro">
            <div className="container">
                <div className="intro__inner">
                    <div className="intro__header">
                        <SectionTitle
                            className='intro'
                        >
                            Мы создаем мобильные <br/> 
                            игры, в которые играют <br/>
                            миллионы
                        </SectionTitle>
                    </div>
                    
                    <div className="intro__content">
                        <NextPageButton
                            className='intro'
                            position='down'
                            direction='right'
                            to='/company'
                        >
                            Узнать <br/> 
                            подробнее
                        </NextPageButton>

                        <div className="intro__text">
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