import React from "react";

function Dots({ activeIndex, onclick, SliderImage }) {
    return (
        <div className="imgSlider_all-dots">
            {SliderImage.map((slide, index) => (
                <span
                    key={index}
                    className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                    onClick={() => onclick(index)}
                ></span>
            ))}
        </div>
    );
}

export default Dots;
