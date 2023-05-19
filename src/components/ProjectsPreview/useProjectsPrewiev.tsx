import { useState, useEffect } from 'react';

export const useProjectsPreview = () => {
    const [slice, setSlice] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth > 1023) {
                setSlice(2);
            } else {
                setSlice(2);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        slice,
    };
};
