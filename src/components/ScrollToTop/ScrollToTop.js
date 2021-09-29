import React, { useState, useEffect } from 'react'
import './ScrollToTop.css';
import { useWindowScroll } from 'react-use'

function ScrollToTop() {
    const { y: pageYOffset } = useWindowScroll();
    const [visibility, setVisibility] = useState(false);

    useEffect(() => {
        if (pageYOffset > 400) {
            setVisibility(false);
        } else {
            setVisibility(true);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    if (visibility) {
        return false;
    }

    return (
        <div className="scroll-to-top" onClick={scrollToTop}>
            <i className="icon fas fa-chevron-up"></i>
        </div>
    )
}

export default ScrollToTop;
