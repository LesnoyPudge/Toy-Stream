import { useEffect, useState } from "react";



export function useMobile() {
    const [isMobile, setIsMobile] = useState(false);
    const [mobileSize, setMobileSize] = useState('');

    useEffect(() => {
        function handleResize() {
            if (window.matchMedia("(max-width: 1000px)").matches) {
                setIsMobile(true);

                if (window.matchMedia("(max-width: 425px)").matches) {
                    return setMobileSize('S');
                }

                if (window.matchMedia("(max-width: 750px)").matches) {
                    return setMobileSize('M');
                }

                if (window.matchMedia("(max-width: 1000px)").matches) {
                    return setMobileSize('L');
                }

            } else {
                setIsMobile(false);
            }
        }
        handleResize();

        window.addEventListener('resize', handleResize, true);

        return () => {
            window.removeEventListener('resize', handleResize, true)
        };
    }, []);
    

    return {
        isMobile, 
        mobileSize
    };
}