import React from 'react'
import './SeminarCards.css'
import n1 from './../../../images/n1.jpg'
import n2 from './../../../images/n2.jpg'
import n3 from './../../../images/n3.jpg'

function SeminarCards() {
    return (
        <div>
            <body className="SeminarCards_body">
                <div className="SeminarCards_grid">
                    <div className="SeminarCards_grid-item">
                        <div className="SeminarCards_card">
                            <img className="SeminarCards_card-img" src={n1} alt="Rome" />
                            <div className="SeminarCards_card-content">
                                <h1 className="SeminarCards_card-header">Rome</h1>
                                <p className="SeminarCards_card-text">
                                    Rome is known for its stunning <strong> architecture</strong>,
                                    with the Colleseum, Pantheon, and Trevi Fountain as the main
                                    attractions.
                                </p>
                                <button className="SeminarCards_card-btn">Read More <span>&rarr;</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="SeminarCards_grid-item">
                        <div className="SeminarCards_card">
                            <img
                                className="SeminarCards_card-img"
                                src={n2}
                                alt="Grand Canyon"
                            />
                            <div className="SeminarCards_card-content">
                                <h1 className="SeminarCards_card-header">Grand Canyon</h1>
                                <p className="SeminarCards_card-text">
                                    One of the world's natural wonders, the iconic Grand Canyon draws
                                    oohs and aahs from visitors perched at the edge of its
                                    <strong>towering cliffs</strong>.
                                </p>
                                <button className="SeminarCards_card-btn">Read More <span>&rarr;</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="SeminarCards_grid-item">
                        <div className="SeminarCards_card">
                            <img className="SeminarCards_card-img" src={n3} alt="Maldives" />
                            <div className="SeminarCards_card-content">
                                <h1 className="SeminarCards_card-header">Maldives</h1>
                                <p className="SeminarCards_card-text">
                                    The Maldives are known for their
                                    <strong>natural environment</strong> including the blue ocean,
                                    white beaches, and clean air, attracting tourists.
                                </p>
                                <button className="SeminarCards_card-btn">Read More <span>&rarr;</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default SeminarCards
