import React from 'react'
import './../../../../styles/card.css';
const Card = props => {

    return (
        <div>
            <div className="Card">
                <div className="upper-container">
                    <img src={props.imgSrc} alt={props.imgSrc} />
                </div>

                <div className="lower-container">
                    <h3> {props.name} </h3>
                    <h4> {props.job}</h4>
                </div>
            </div>

        </div>
    )
}

export default Card;