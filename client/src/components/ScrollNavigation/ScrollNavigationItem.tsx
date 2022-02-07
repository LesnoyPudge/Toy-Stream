import { FC } from 'react';



interface ScrollNavigationItemProps {
    label: string;
    isActive?: boolean;
    onClick?: () => void; 
}

export const ScrollNavigationItem: FC<ScrollNavigationItemProps> = ({label, isActive, onClick}) => {
    return (
        <li 
            className={
                'scroll-navigation__item' + 
                (isActive ? ' scroll-navigation__item--active' : '')
            }
            onClick={onClick}
        >
            <span className='scroll-navigation__item-label'>
                {label}
            </span>
        </li>
    );
}