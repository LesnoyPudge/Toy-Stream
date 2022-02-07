import { FC } from "react";
import './index.scss';



interface ISocialLinksProps {
    className: string;
}

export const SocialLiks: FC<ISocialLinksProps> = ({className}) => {
    return (
        <div 
            className={
                (className) + '__social-links ' +
                'social-links'
            }
        >
            <ul className="social-links__list">
                <li className="social-links__item">
                    <a 
                        className="social-links__link" 
                        href="https://www.pinterest.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <svg className="social-links__icon">
                            <use xlinkHref="#pinterest-icon" />
                        </svg>
                    </a>
                </li>

                <li className="social-links__item">
                    <a 
                        className="social-links__link" 
                        href="https://www.behance.net/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <svg className="social-links__icon">
                            <use xlinkHref="#behance-icon" />
                        </svg>
                    </a>
                </li>

                <li className="social-links__item">
                    <a 
                        className="social-links__link" 
                        href="https://dribbble.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <svg className="social-links__icon">
                            <use xlinkHref="#dribbble-icon" />
                        </svg>
                    </a>
                </li>

                <li className="social-links__item">
                    <a 
                        className="social-links__link" 
                        href="https://www.snapchat.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <svg className="social-links__icon">
                            <use xlinkHref="#snapchat-icon" />
                        </svg>
                    </a>
                </li>

                <li className="social-links__item">
                    <a 
                        className="social-links__link" 
                        href="https://linkedin.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <svg className="social-links__icon">
                            <use xlinkHref="#linkedin-icon" />
                        </svg>
                    </a>
                </li>

                <li className="social-links__item">
                    <a 
                        className="social-links__link" 
                        href="http://facebook.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <svg className="social-links__icon">
                            <use xlinkHref="#facebook-icon" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
}