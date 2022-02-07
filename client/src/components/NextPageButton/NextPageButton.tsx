import { FC } from "react";
import { Link } from "react-router-dom";
import './index.scss';



interface INextPageButtonProps {
    className: string;
    position: string;
    direction: string;
    to: string;
}

export const NextPageButton: FC<INextPageButtonProps> = ({children, className, position, direction, to}) => {
    return (
        <span
            className={
                className + '__next-page-button ' +
                'next-page-button' +
                ' next-page-button--pos-' + position +
                ' next-page-button--dir-' + direction +
                ' button'
            } 
        >
            <Link to={to}>
                <div className="next-page-button__inner">
                    <span className='next-page-button__text'>
                        {children}
                    </span>

                    <img src={"./images/Arrow--" + direction + ".png"} alt="" className='next-page-button__arrow'/>
                </div>
            </Link>
        </span>
    );
}