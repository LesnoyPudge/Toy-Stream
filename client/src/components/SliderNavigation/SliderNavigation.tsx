import { FC } from 'react';
import './index.scss';



interface ISliderNavigationProps {
    className: string;
}

export const SliderNavigation: FC<ISliderNavigationProps> = ({className}) => {
    return (
        <div 
            className={
                className + '__slider-navigation slider-navigation'
            }
        >
            <button className='slider-navigation__prev button'>
                <svg>
                    <use xlinkHref='#slider-navigation-arrow' />
                </svg>
            </button>

            <button className='slider-navigation__next button'>
                <svg>
                    <use xlinkHref='#slider-navigation-arrow' />
                </svg>
            </button>
        </div>
    );
}