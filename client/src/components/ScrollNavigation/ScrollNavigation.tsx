import React, { FC, useCallback, useEffect, useState } from 'react';
import './index.scss';



export const ScrollNavigation: FC = ({children}) => {
    const [activeItem, setActiveItem] = useState(0);
    const [targets, setTargets] = useState<NodeListOf<HTMLElement>>();


    const scrollHandler = useCallback(() => {
        if (!targets) return;

        const center = (window.innerHeight / 2);

        targets.forEach((target, index) => {
            if (index === activeItem) return;

            if (target.getBoundingClientRect().top < center && target.getBoundingClientRect().bottom > center) {
                setActiveItem(index);
            }
        })
    }, [activeItem, targets]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return (() => {
            document.removeEventListener('scroll', scrollHandler);
        });
    }, [scrollHandler]);

    useEffect(() => {
        setTargets(document.querySelectorAll('section'));
    }, [])

    function clickHandler(index: number) {
        if (!targets) return;
        if (!targets[index]) return;

        targets[index].scrollIntoView({block: 'start', behavior: 'smooth'});
    }

    function renderChildren() {
        return React.Children.map(children, (child: any, index) => {
            return React.cloneElement(child, {
                isActive: index === activeItem,
                onClick: () => {clickHandler(index)},
            })
        });
    }
 
    return (
        <>
            <div className='scroll-navigation'>
                <div className='scroll-navigation__inner'>
                    <ul className='scroll-navigation__list'>
                        {
                            renderChildren()
                        }
                    </ul>
                </div>
            </div>
        </>
        
    );
}