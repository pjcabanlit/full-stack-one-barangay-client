import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Navbar.css';
import { Link } from 'react-router-dom';
import m1 from './../../images/m1.png';
import ob_tag from './../../images/ob_icon.png';
import brgy407 from './../../images/brgy407_icon.png'
import LoginAuthPop from './../Dialog/LoginAuthPop';

function Navbar() {
    const [indv_inhabitant_id, setInhabitantId] = useState("");
    const [errorDialog, setErrorDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });

    useEffect(() => {
        Axios.get("http://localhost:3001/InhabitantLogin").then((response) => {
            if (response.data.loggedIn === true) {
                setInhabitantId(response.data.user[0].indv_inhabitant_id);
                console.log("tite")
            } else {
                setErrorDialog({
                    isOpen: true,
                    title: "Oops! Session Expired or Not Logged In",
                    subtitle: "Try logging in again.",
                    noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
                })
            }
        });
    }, []);

    const user_logout = () => {
    }

    return (
        <div className="wrapperx">
            <LoginAuthPop errorDialog={errorDialog} setErrorDialog={setErrorDialog} />
            <nav className="UserHome_header">
                <input type="text" hidden value={indv_inhabitant_id} autoComplete="off" />

                <input type="checkbox" id="show-search" />
                <input type="checkbox" id="show-menu" />
                <label htmlFor="show-menu" className="menu-icon"><i className="fas fa-bars"></i></label>
                <div className="content">
                    <div className="logo">
                        <img src={brgy407} alt={brgy407} className="brgy407_header" />
                        <img src={ob_tag} alt={ob_tag} className="ob_icon_header" />
                    </div>
                    <ul className="links">
                        <li className="li" id="main_li"><Link to="/home" className="home_button_header">Home</Link></li>
                        <li className="li" id="main_li">
                            <Link to="/ApplicationModule" className="desktop-link" id="b" >Application <i className='fa fa-caret-down' /></Link>
                            <input type="checkbox" id="show-features" />
                            <label htmlFor="show-features">Application <i className='fa fa-caret-down' /></label>
                            <ul>
                                <li className="li" id="sub_li"><Link to="/Barangay-Certificates" id="a" className="header_links">Barangay Certificates</Link></li>
                            </ul>


                        </li>
                        <li className="li" id="main_li">
                            <Link to="/CIEModule" className="desktop-link" id="b">Emergency & Reports <i className='fa fa-caret-down' /></Link>
                            <input type="checkbox" id="show-services" />
                            <label htmlFor="show-services">Emergency & Reports <i className='fa fa-caret-down' /></label>
                            <ul>
                                <li className="li" id="sub_li"><Link to="/EmergencyIncidentReport" className="header_links" id="a">File An Incident Report</Link></li>
                                <li className="li" id="sub_li"><Link to="/Submit-Complain-Report" className="header_links" id="a">Send A Complain Report</Link></li>

                            </ul>
                        </li>
                        <li className="li" id="main_li">
                            <Link to="/Programs&Events" className="desktop-link" id="b" >Programs & Events <i className='fa fa-caret-down' /></Link>
                            <input type="checkbox" id="show-programs" />
                            <label htmlFor="show-programs">Programs & Events <i className='fa fa-caret-down' /></label>
                            <ul>
                                <li className="li" id="sub_li"><Link to="/Announcement" id="a" className="header_links">Announcements</Link></li>
                                <li className="li" id="sub_li"><Link to="/Seminar" id="a" className="header_links">Seminars</Link></li>
                            </ul>
                        </li>
                        <li className="li" id="main_li">
                            <Link to="/Forums" className="desktop-link" id="b">Forums <i className='fa fa-caret-down' /></Link>
                            <input type="checkbox" id="show-forum" />
                            <label htmlFor="show-forum">Forums <i className='fa fa-caret-down' /></label>
                            <ul>
                                <li className="li" id="sub_li"><Link to="/Feedbacks" id="a" className="header_links">Feedbacks & Suggestions</Link></li>
                                <li className="li" id="sub_li"><Link to="/FAQs" id="a" className="header_links">Frequently Asked Questions</Link></li>

                            </ul>
                        </li>
                        <li className="li" id="main_li">
                            <Link to="/Reservation-Module" className="desktop-link" id="b">Reservation & Request <i className='fa fa-caret-down' /></Link>
                            <input type="checkbox" id="show-rr" />
                            <label htmlFor="show-rr">Reservation & Request <i className='fa fa-caret-down' /></label>
                            <ul>
                                <li className="li" id="sub_li"><Link to="/RequestUtilities" id="a" className="header_links">Request & Reserve Facility</Link></li>

                            </ul>
                        </li>

                        <li className="li" id="main_li">
                            <img src={m1} alt={m1} className="member-profile_desktop desktop-link" />

                            <input type="checkbox" id="show-profile" />
                            <label htmlFor="show-profile"><img src={m1} alt={m1} className="member-profile" /> </label>
                            <ul>
                                <li className="li" id="sub_li"><Link to="/MyProfile" id="a" className="header_links">My Profile</Link></li>
                                <li className="li" id="sub_li"><Link to="/MyApplication" id="a" className="header_links">My Application</Link></li>
                                <li className="li" id="sub_li"><Link to="/MyNotifs" id="a" className="header_links">My Notification</Link></li>
                                <li className="li" id="sub_li"><button onClick={user_logout} id="a" className="header_links">Logout</button></li>
                            </ul>
                        </li>
                        <input type="text" hidden value={indv_inhabitant_id} onChange={(e) => setInhabitantId(e.target.value)} />
                    </ul>
                </div>
                <label htmlFor="show-search" className="search-icon"><i className="fas fa-search"></i></label>
                <form action="#" className="search-box">
                    <input type="text" placeholder="Type Something to Search..." required />
                    <button type="submit" className="go-icon"><i class="fas fa-long-arrow-alt-right"></i></button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar;