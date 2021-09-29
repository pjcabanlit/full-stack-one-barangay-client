import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Axios from 'axios'
import './Home.css';
import './../../../styles/Root.css'
import samp_chairman from './../../../images/samp_chairman.jpg'
import brgy407 from './../../../images/brgy407_icon.png';
import brgy from './../../../images/brgy.jpg';
import OfficerCards from './../../../components/Cards/OfficerCards';
import Slider from './../../../components/ImageSlider/Slider';
import ConfirmDialog from './../../../components/Dialog/ConfirmDialog';
import ScrollToTop from './../../../components/ScrollToTop/ScrollToTop';
import Footer from './../../../components/Footer/Footer';
import Navbar from './../../../components/Navbar/Navbar';

function Home() {
    const [role, setRole] = useState("");
    const [brgyaccount_id, setBrgyaccount_id] = useState("");
    const [guest_name, setGuestName] = useState("");
    const history = useHistory();
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    useEffect(() => {
        Axios.get("http://localhost:3001/GuestLogin").then((response) => {
            if (response.data.loggedIn === true) {
                setRole(response.data.user[0].role);
                setGuestName(response.data.user[0].guestName)
            }
        });
    }, []);

    const [indv_inhabitant_id, setInhabitantId] = useState("")

    useEffect(() => {
        Axios.get("http://localhost:3001/InhabitantLogin").then((response) => {
            if (response.data.loggedIn === true) {
                setRole(response.data.user[0].role);
                setBrgyaccount_id(response.data.user[0].brgyaccount_id);
                setInhabitantId(response.data.user[0].indv_inhabitant_id);
            }
        });
    }, []);

    return (
        <div className="home_body">
            <Navbar />
            <div className="home_main_container">
                <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
                <ScrollToTop />
                <div className="home_announcement_content">
                    <Slider />
                </div>
                <div className="home_chairman_message_container" >
                    <div className="chairman_pic">
                        <img src={samp_chairman} alt={samp_chairman} />
                    </div>
                    <div className="chairman_message">
                        <div className="chairman_message_bg">
                            <img src={brgy407} alt={brgy407} className="message_bg" />
                        </div>
                        <h1>Welcome Message of Barangay Chairman</h1>
                        <p>The Municipality of Pura is a fourth class municipality found at the northeastern side of Tarlac Province abutting the municipality of Guimba in the Province of Nueva Ecija. As its name implies, everything in here is pure and natural. It is a growing community located in the mid-northern part of Central Luzon’s extensive central plains. It is within the cross road of three major thoroughfares, the Tarlac-Pangasinan-La Union Expressway, the Gerona-Guimba Road and the East-West Coast Road (Dingalan-Lingayen Highway) which brings a great deal for economic growth. Along with this, PURA is envisioned to be a sustainable community characterized by a mix of land uses that combines utility and aesthetics that gives an ambience that soothes the spirit, invites high productivity, and encourages healthy living. We encourage everyone to visit and witness the pureness of our municipality. Come and enjoy the beauty of our place and experience our “Puranian” cordiality. <br /> <br />
                            Hon. Justin Leonard R. Lee <br />
                            Chairman, Brgyn 407 Zone 42</p>
                    </div>
                </div>
                <div className="about_us">
                    <div className="container">
                        <div className="content">
                            <div className="content_img">
                                <img className="brgy_img_src" src={brgy} alt={brgy} />
                            </div>
                            <div className="content_description">
                                <h1 className="title">About Us</h1>
                                <div className="subtitle">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam minima molestias maxime, omnis quibusdam. Quasi, ipsam beatae atque nam quia at qui suscipit incidunt ullam nihil labore! Deserunt, ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam minima molestias maxime, omnis quibusdam. Quasi, ipsam beatae atque nam quia at qui suscipit incidunt ullam nihil labore! Deserunt, ipsum.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="vision_mision">
                    <div className="container">
                        <div className="mission_container">
                            <div className="mission_title">
                                <h1 className="title">MISSION</h1>
                            </div>
                            <div className="desc">
                                <p>“To improve the security, prosperity and well being of the community by providing a distinct and quality public service and to ensure that all constituents will be given access to government assistance and services.”</p>
                            </div>
                        </div>
                        <div className="vision_container">
                            <div >
                                <h1 className="title">VISION</h1>
                            </div>
                            <div className="desc">
                                <p>“We envision Barangay 407 Zone 42 District 4 to be more developed, discipline, orderly, morally, and socially progressive community.”</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="elected_officials_container">
                    <div className="officials_container">
                        <center>
                            <h1 className="title">Barangay Officials</h1>
                        </center>
                        <OfficerCards />
                    </div>
                </div>
                <div className="visitUs_container">
                    <div>
                        <center><h1 className="title">Visit Us</h1></center>
                    </div>
                    <div className="visitUs_addressContainer">
                        <h2>Barangay 407 Zone 42 Sampaloc, Manila</h2>
                        <h2>461 M.F. Jhocson Street cor. SorPetronilla St.Sampaloc</h2>

                        <h2>Office Hours: Monday - Friday, 8am - 5pm</h2>
                    </div>
                    <div className="location_container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.9080007478474!2d120.99244001516024!3d14.604316389800081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9fc11a6ceb3%3A0x9d4220dade0140ab!2sNational%20University-Manila!5e0!3m2!1sen!2sph!4v1599576733648!5m2!1sen!2sph" >
                        </iframe>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
} export default Home;