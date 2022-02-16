import { FC } from 'react';
import './index.scss';



interface IPublishDateProps {
    publishDate: string;
    className?: string;
}

export const PublishDate: FC<IPublishDateProps> = ({publishDate, className}) => {
    return (
        <div 
            className={
                (className ? className + '__publish-date ' : '') +
                'publish-date'
            }
        >
            <svg 
                className={
                    (className ? className + '__publish-date-icon ' : '') +
                    'publish-date-icon'
                }
            >
                <use xlinkHref='#publish-date-icon' />
            </svg>

            {publishDate}
        </div>
    );
}