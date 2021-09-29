import React from 'react'
import m1 from './../../../images/m1.png'
import './Forum.css'
import Navbar from './../../../components/Navbar/Navbar';
import Footer from './../../../components/Footer/Footer';

function Forum() {
    return (
        <div className="Forum_main">
            <Navbar />
            <div className="container">
                <div className="Forum_container">
                    <div className="Forum_button">
                        <center>
                            <button className="start_forum">START A NEW TOPIC</button>
                        </center>
                    </div>
                    <center>
                        <table className="Forum_table">
                            <thead>
                                <tr>
                                    <th>Topic</th>
                                    <th>Date Posted</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div className="topic_flex"><img src={m1} alt={m1} className="sender_img" /> <p>Top 10 Barangay 407 Problems</p></div> </td>
                                    <td className="topic_date">11-11-2021</td>
                                </tr>
                                <tr>
                                    <td><div className="topic_flex"><img src={m1} alt={m1} className="sender_img" /> <p>What it is like living in a Filipino Barangay?</p></div> </td>
                                    <td className="topic_date">10-09-2021</td>
                                </tr>
                                <tr>
                                    <td><div className="topic_flex"><img src={m1} alt={m1} className="sender_img" /> <p>How are we going to solve the issue of sanitation in Barangay?</p></div> </td>
                                    <td className="topic_date">01-23-2021</td>
                                </tr>
                                <tr>
                                    <td><div className="topic_flex"><img src={m1} alt={m1} className="sender_img" /> <p>What is the greatest problem facing the Barangay in the Philippines?</p></div> </td>
                                    <td className="topic_date">04-06-2021</td>
                                </tr>
                                <tr>
                                    <td><div className="topic_flex"><img src={m1} alt={m1} className="sender_img" /> <p>As A youth, in what way can you help the peace and order in your Barangay?</p></div> </td>
                                    <td className="topic_date">07-07-2021</td>
                                </tr>
                                <tr>
                                    <td><div className="topic_flex"><img src={m1} alt={m1} className="sender_img" /> <p>What are the problems encountered by the residents in Barangay?</p></div> </td>
                                    <td className="topic_date">05-11-2021</td>
                                </tr>
                            </tbody>
                        </table>
                    </center>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Forum