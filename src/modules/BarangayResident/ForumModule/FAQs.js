import React from 'react';
import ChatBody from './ChatBody/ChatBody';
import './FAQs.css'
import Navbar from './../../../components/Navbar/Navbar';
import Footer from './../../../components/Footer/Footer';

function FAQs() {
    return (
        <div>
            <Navbar />
            <div className="FAQS_container">
                <div className="container">
                    <center>
                        <ChatBody />
                    </center>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default FAQs;