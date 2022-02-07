import React, { FC, useCallback, useEffect, useState } from "react";
import './index.scss';



export const ScrollNavigation: FC = ({children}) => {
    const [activeItem, setActiveItem] = useState(0);
    const [targets, setTargets] = useState<NodeListOf<HTMLElement>>();

    const observe = useCallback(() => {
        if (!targets) return;

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((element: any) => {
                if (element.isIntersecting) {
                    targets.forEach((target, index) => {
                        if (target !== element.target) return;

                        setActiveItem(index);
                    });
                }
            });
        }, options);
        
        targets.forEach(target => {
            observer.observe(target);
        });
    }, [targets]);

    useEffect(() => {
        setTargets(document.querySelectorAll('section'));
    }, [])

    useEffect(() => {
        observe();
    }, [observe]);

    function clickHundler(index: number) {
        if (!targets) return;

        targets[index].scrollIntoView({block: "start", behavior: "smooth"});
    }

    function renderChildren() {
        return React.Children.map(children, (child: any, index) => {
            return React.cloneElement(child, {
                isActive: index === activeItem,
                onClick: () => {clickHundler(index)},
            })
        });
    }
 
    return (
        <>
            <div className="scroll-navigation">
                <div className="scroll-navigation__inner">
                    <ul className="scroll-navigation__list">
                        {
                            renderChildren()
                        }
                    </ul>
                </div>
            </div>
        </>
        
    );
}