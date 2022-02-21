import { FC } from 'react';
import { useNextPage } from '../../hooks/useNextPage';
import { IVacancyData } from '../../pages';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';



interface IVacancyItemProps {
    vacancy: IVacancyData;
}

export const VacancyItem: FC<IVacancyItemProps> = ({vacancy}) => {
    const {handleNavigate} = useNextPage()
    const {
        id = vacancy.id,
        label = vacancy.label,
    } = vacancy;

    return (
        <li className='vacancies__item'>
            <div className='vacancies__item-inner'>
                <div className='vacancies__item-content'>
                    <h3 className='vacancies__item-label'>
                        {label}
                    </h3>

                    <PrimaryButton
                        className='vacancies'
                        position='bottom'
                        direction='right'
                        onClick={() => {handleNavigate(id)}}
                    >
                        Подробнее
                    </PrimaryButton>
                </div>
            </div>
        </li>
    );
}