import React from 'react'
import './OfficerCards.css'
import k1 from './../../images/k1.jpg';
import k2 from './../../images/k2.jpg';
import k3 from './../../images/k3.jpg';


function OfficerCards() {
    return (
        <div className="officerCard_container">
            <body className="officerCard">
                <div className="officerCard_grid">
                    <div className="officerCard_grid-item">
                        <div className="officerCard_card">
                            <img className="officerCard_card-img" src={k1} alt="Rome" />
                            <div className="officerCard_card-content">
                                <h1 className="officerCard_card-header">JUSTIN LEONARD R. LEE</h1>
                                <p className="officerCard_card-text">
                                    Punong Barangay
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="officerCard_grid-item">
                        <div className="officerCard_card">
                            <img
                                className="officerCard_card-img"
                                src={k3}
                                alt="Grand Canyon"
                            />
                            <div className="officerCard_card-content">
                                <h1 className="officerCard_card-header">MAYLENE C. PUERTOLLANO</h1>
                                <p className="officerCard_card-text">
                                    Sangguniang Barangay Member
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="officerCard_grid-item">
                        <div className="officerCard_card">
                            <img className="officerCard_card-img" src={k2} alt="Maldives" />
                            <div className="officerCard_card-content">
                                <h1 className="officerCard_card-header">LARRY V. MARCELINO</h1>
                                <p className="officerCard_card-text">
                                    Sangguniang Barangay Member
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="officerCard_grid-item">
                        <div className="officerCard_card">
                            <img className="officerCard_card-img" src={k2} alt="Maldives" />
                            <div className="officerCard_card-content">
                                <h1 className="officerCard_card-header">MA. LOURDES O. SAMSON</h1>
                                <p className="officerCard_card-text">
                                    Sangguniang Barangay Member
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="officerCard_grid-item">
                        <div className="officerCard_card">
                            <img className="officerCard_card-img" src={k2} alt="Maldives" />
                            <div className="officerCard_card-content">
                                <h1 className="officerCard_card-header">FELIZANO SALONGA</h1>
                                <p className="officerCard_card-text">
                                    Sangguniang Barangay Member
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="officerCard_grid-item">
                        <div className="officerCard_card">
                            <img className="officerCard_card-img" src={k2} alt="Maldives" />
                            <div className="officerCard_card-content">
                                <h1 className="officerCard_card-header">JUAN PAOLO M. DOMINGO</h1>
                                <p className="officerCard_card-text">
                                    Sangguniang Barangay Member
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="officerCard_grid-item">
                        <div className="officerCard_card">
                            <img className="officerCard_card-img" src={k2} alt="Maldives" />
                            <div className="officerCard_card-content">
                                <h1 className="officerCard_card-header">LOUIS M. ALZONA</h1>
                                <p className="officerCard_card-text">
                                    Sangguniang Barangay Member
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="officerCard_grid-item">
                        <div className="officerCard_card">
                            <img className="officerCard_card-img" src={k2} alt="Maldives" />
                            <div className="officerCard_card-content">
                                <h1 className="officerCard_card-header">MICHAEL T. SANCHEZ</h1>
                                <p className="officerCard_card-text">
                                    Sangguniang Barangay Member
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="officerCard_grid-item">
                        <div className="officerCard_card">
                            <img className="officerCard_card-img" src={k2} alt="Maldives" />
                            <div className="officerCard_card-content">
                                <h1 className="officerCard_card-header">DAN ANTHONY D. SANCHEZ</h1>
                                <p className="officerCard_card-text">
                                    SK Chairperson                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="officerCard_grid-item">
                        <div className="officerCard_card">
                            <img className="officerCard_card-img" src={k2} alt="Maldives" />
                            <div className="officerCard_card-content">
                                <h1 className="officerCard_card-header">FE R. SANCHEZ</h1>
                                <p className="officerCard_card-text">
                                    Barangay Secretary                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="officerCard_grid-item">
                        <div className="officerCard_card">
                            <img className="officerCard_card-img" src={k2} alt="Maldives" />
                            <div className="officerCard_card-content">
                                <h1 className="officerCard_card-header">JERALD TRONO</h1>
                                <p className="officerCard_card-text">
                                    Barangay Treasurer                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </body>

        </div>
    )
}

export default OfficerCards
