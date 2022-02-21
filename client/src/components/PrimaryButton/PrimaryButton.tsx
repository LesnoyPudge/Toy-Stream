import { FC } from "react";
import './index.scss';



interface IPrimaryButtonProps {
    className: string;
    position?: 'top' | 'bottom' | 'right' | 'left';
    direction?: 'right' | 'left' | 'up' | 'down';
    onClick?: () => void;
}

export const PrimaryButton: FC<IPrimaryButtonProps> = ({children, className, position, direction, onClick}) => {
    return (
        <div
            className={
                className + '__primary-button ' +
                'primary-button' +
                ' position--' + position +
                ' direction--' + direction +
                ' button'
            } 
            onClick={onClick}
        >
            <div className="primary-button__inner">
                <span className='primary-button__text'>
                    {children}
                </span>

                {
                    (position && direction) ? 
                        <img src={"../images/Arrow--" + direction + ".svg"} alt="" className='primary-button__arrow'/>
                    :
                    null
                }
            </div>
        </div>
    );
}