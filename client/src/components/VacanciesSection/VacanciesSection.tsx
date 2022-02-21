import { FC } from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import './index.scss';
import { data } from './data';
import { VacancyItem } from './VacancyItem';



export const VacanciesSection: FC = () => {
    return (
        <section className='vacancies'>
            <div className='container'>
                <div className='vacancies__inner'>
                    <div className='vacancies__header'>
                        <SectionTitle
                            className='vacancies'
                        >
                            Наши <br/> вакансии
                        </SectionTitle>
                    </div>

                    <div className='vacancies__content'>
                        <ul className='vacancies__list'>
                            {
                                data.map((item, index) => {
                                    return (
                                        <VacancyItem
                                            key={index}
                                            vacancy={item}
                                        />
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}