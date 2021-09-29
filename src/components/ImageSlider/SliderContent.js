import React from "react";

function SliderContent({ activeIndex, SliderImage }) {
    return (
        <section>
            {SliderImage.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? "imgSlider_slides active" : "inactive"}
                >
                    <img className="imgSlider_slide-image" src={slide.urls} alt="" />
                    <h2 className="imgSlider_slide-title">{slide.title}</h2>
                    <h3 className="imgSlider_slide-text">{slide.description}</h3>
                </div>
            ))}
        </section>
    );
}

export default SliderContent;
