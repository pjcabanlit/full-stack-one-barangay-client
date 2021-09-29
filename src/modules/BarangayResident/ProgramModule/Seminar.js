import React from 'react';
import './Seminar.css'
import Navbar from './../../../components/Navbar/Navbar';
import Footer from './../../../components/Footer/Footer'
import SeminarCards from './SeminarCards';

function Seminar() {
    return (
        <div>
            <Navbar />
            <div>
                <SeminarCards />
            </div>
            <Footer />
        </div>

    )
}

export default Seminar