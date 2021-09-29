import React from "react";

function Arrows({ prevSlide, nextSlide }) {
    return (
        <div className="imgSlider_arrows">
            <span className="imgSlider_prev" onClick={prevSlide}>
                &#10094;
            </span>
            <span className="imgSlider_next" onClick={nextSlide}>
                &#10095;
            </span>
        </div>
    );
}

export default Arrows;
