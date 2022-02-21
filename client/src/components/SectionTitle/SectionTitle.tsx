import { FC } from 'react';
import './index.scss';



interface ISectionTitleProps {
    className: string;
}

export const SectionTitle: FC<ISectionTitleProps> = ({children, className}) => {
    return (
        <h2 
            className={
                className + '__section-title ' + 
                'section-title'
            }
        >
            {children}
        </h2>
    );
}