import { FC } from "react";
import './index.scss';



interface IScrollToSectionButtonProps {
    className: string;
    position: string;
    direction: string;
    to: string;
}

export const ScrollToSectionButton: FC<IScrollToSectionButtonProps> = ({children, className, position, direction, to}) => {
    
    function clickHundler() {
        const target = document.querySelector(to);

        if (!target) return;
        
        target.scrollIntoView({block: "start", behavior: "smooth"});
    }
    
    return (
        <button
            className={
                className + '__scroll-to-section' +
                ' scroll-to-section' +
                ' scroll-to-section--pos-' + position +
                ' scroll-to-section--dir-' + direction +
                ' button'
            }
            onClick={clickHundler}
        >
            <div className="scroll-to-section__inner">
                <span className='scroll-to-section__text'>
                    {children}
                </span>

                <img src={"./images/Arrow--" + direction + ".png"} alt="" className='scroll-to-section__arrow'/>
            </div>
        </button>
    );
}