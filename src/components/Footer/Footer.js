import React from 'react'
import './Footer.css'
import logo_samp from './../../images/brgy407_icon.png';
import ob_icon from './../../images/ob_icon.png';
function Footer() {
    const year = new Date().getFullYear();
    return (
        <div>
            <footer className="home_footer">
                <div className="home_footer_left">
                    <img src={logo_samp} alt={logo_samp} />
                    <img src={ob_icon} alt={ob_icon} />
                    <p>One Barangay: A Multipuprose Barangay Management System in Mobile and Web Application.</p>
                </div>
                <ul className="home_footer_right">
                    <li>
                        <h2>About</h2>
                        <ul className="box">
                            <li><a href="#officials">Elected Officials</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </li>
                    <li className="features">
                        <h2>Government</h2>
                        <ul className="box">
                            <li><a href="#">Ordinances</a></li>
                            <li><a href="#">Resolution</a></li>
                            <li><a href="#">Executive Order</a></li>
                            <li><a href="#">Location</a></li>
                        </ul>
                    </li>
                    <li>
                        <h2>Socials</h2>
                        <ul className="box">
                            <li><a href="https://www.facebook.com/Brgy407Zone42Manila">Facebook</a>
                                <a href="https://www.facebook.com/Brgy407Zone42Manila"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#">Instagram</a> <a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#">Twitter</a> <a href="#"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                        <div className="brgy_socials">

                        </div>
                    </li>
                </ul>
                <div className="home_footer_bottom">
                    <p>One Barangay</p>
                    <p>Copyright {year} ©. Barangay 407 Zone 42 Manila. All Rights Reserved.</p>
                </div>
            </footer>
        </div>

    )
}

export default Footer;