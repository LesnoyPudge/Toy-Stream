import { FC } from "react";
import { useNextPage } from "../../hooks/useNextPage";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import './index.scss';



export const IntroSection: FC = () => {
    const {handleNavigate} = useNextPage();
    
    return (
        <section className="intro">
            <div className="container">
                <div className="intro__inner">
                    <div className="intro__content-side">
                        <div className="intro__header">
                            <SectionTitle
                                className='intro'
                            >
                                Мы создаем мобильные
                                игры, в которые играют
                                миллионы
                            </SectionTitle>
                        </div>
                        
                        <div className="intro__content">
                            <PrimaryButton
                                className='intro'
                                position='bottom'
                                direction='right'
                                onClick={() => {handleNavigate('/games')}}
                            >
                                Узнать <br/> 
                                подробнее
                            </PrimaryButton>

                            <div className="intro__text">
                                <p>
                                «Оригинальные идеи, качество реализации
                                игровых механик и внимание к деталям
                                интерфейса - наши основные принципы.»
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="intro__image-side">
                        <img className="intro__image" src="./images/Unicorn.png" alt="Unicorn" />
                    </div>
                </div>
            </div>
        </section>
    );
}