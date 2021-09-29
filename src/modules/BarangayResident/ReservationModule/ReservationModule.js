import React from 'react'
import { useHistory } from 'react-router-dom'
import './ReservationModule.css'
import Navbar from './../../../components/Navbar/Navbar'
import Footer from './../../../components/Footer/Footer'

export default function ReservationModule() {
    const history = useHistory();
    function RequestNow() {
        history.push("/RequestUtilities")
    }
    return (
        <div className="ReservationModule_main">
            <Navbar />
            <div className="container">
                <div className="ReservationModule_container">
                    <div className="ReservationModule_title">
                        <h1>Barangay is always ready to serve!</h1>
                        <p>Barangay Residents can request and reserve facilities in the Barangay such as:</p>
                        <ul>
                            <li>Monoblock Chairs</li>
                            <li>Monoblock Tables</li>
                            <li>Microphones</li>
                            <li>Speakers/AV</li>
                            <li>Baskteball Courts</li>
                            <li>Community Center</li>
                        </ul>
                        <button className="req_res_button" onClick={RequestNow}>Request & Reserve</button>
                        <div className="ReservationModule_content">
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
