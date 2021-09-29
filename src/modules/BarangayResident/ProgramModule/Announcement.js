import React from 'react';
import './Announcement.css'
import n1 from './../../../images/n1.jpg'
import n2 from './../../../images/n2.jpg'
import n3 from './../../../images/n3.jpg'
import n4 from './../../../images/n4.jpg'
import n5 from './../../../images/n5.jpg'
import n6 from './../../../images/n6.jpg'
import Navbar from './../../../components/Navbar/Navbar';
import Footer from './../../../components/Footer/Footer';

function Announcement() {
    return (
        <div className="Announcement_main">
            <Navbar />
            <div className="container">
                <div className="forFlexing">
                    <div className="news_column">
                        <div className="news_card">
                            <div className="news_card_top">
                                <div className="news_card_clip">
                                    <img src={n1} alt={n1} />
                                </div>
                            </div>
                            <div className="news_card_body">
                                <h3><a className="news_link" href="">Seminar on Healthy You!</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="news_column">
                        <div className="news_card">
                            <div className="news_card_top">
                                <div className="news_card_clip">
                                    <img src={n2} alt={n2} />
                                </div>
                            </div>
                            <div className="news_card_body">
                                <h3><a className="news_link" href="">National Oral Health Month</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="news_column">
                        <div className="news_card">
                            <div className="news_card_top">
                                <div className="news_card_clip">
                                    <img src={n3} alt={n3} />
                                </div>
                            </div>
                            <div className="news_card_body">
                                <h3><a className="news_link" href="">Awarding of Educational Assistance</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="news_column">
                        <div className="news_card">
                            <div className="news_card_top">
                                <div className="news_card_clip">
                                    <img src={n4} alt={n4} />
                                </div>
                            </div>
                            <div className="news_card_body">
                                <h3><a className="news_link" href="">Local Health Board Meeting</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="news_column">
                        <div className="news_card">
                            <div className="news_card_top">
                                <div className="news_card_clip">
                                    <img src={n5} alt={n5} />
                                </div>
                            </div>
                            <div className="news_card_body">
                                <h3><a className="news_link" href="">National Women's Month Celebration</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="news_column">
                        <div className="news_card">
                            <div className="news_card_top">
                                <div className="news_card_clip">
                                    <img src={n6} alt={n6} />
                                </div>
                            </div>
                            <div className="news_card_body">
                                <h3><a className="news_link" href="">Awarding of Education Assistance</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Announcement