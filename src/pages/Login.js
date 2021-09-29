import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import "./Login.css"
import logo_samp from './../images/brgy407_icon.png';
import ob_tag from './../images/ob_icon.png';
import manila from './../images/manila.png';
import LoginAuthPop from './../components/Dialog/LoginAuthPop';

function Login() {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [indv_inhabitant_id, setInhabitantId] = useState("");
    const [role, setRole] = useState("");
    const [loginStatus, setLoginStatus] = useState('');

    const [guest_id, setGuestId] = useState("");
    const [guest_name, setGuestName] = useState("");

    Axios.defaults.withCredentials = true;

    const [errorDialog, setErrorDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' })

    const InhabitantLogin = () => {
        setErrorDialog({
            ...errorDialog,
            isOpen: false
        })
        if (!username || !password) {
            setErrorDialog({
                isOpen: true,
                title: "Login Failed",
                subtitle: "Username and Password are required.",
                noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
            })
        } else {
            Axios.post("http://localhost:3001/InhabitantLogin", {
                I_username: username,
                I_password: password,
                I_role: role,
                I_inhabitantId: indv_inhabitant_id,
            }).then((response) => {
                if (response.data.message) {
                    setErrorDialog({
                        isOpen: true,
                        title: "Login Failed",
                        subtitle: "Incorrect Username or Password.",
                        noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
                    })
                    setLoginStatus(response.data.message);
                } else {
                    setInhabitantId(response.data[0].indv_inhabitant_id);
                    setRole(response.data[0].role);
                    setLoginStatus(response.data[0].loginStatus);

                }
            });
        }
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/InhabitantLogin").then((response) => {
            if (response.data.loggedIn == true) {
                setRole(response.data.user[0].role);
                setInhabitantId(response.data.user[0].indv_inhabitant_id);
                setLoginStatus(response.data.user[0].loginStatus);

            }
        });
    }, []);

    const continueAsGuest = () => {
        const guestId = 1;
        const guestName = "Guest";
        Axios.post("http://localhost:3001/GuestLogin", {
            G_id: guestId,
            G_name: guestName,
            G_role: role,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
                console.log("Login failed");
            } else {
                console.log(guestName);
                setGuestId(response.data[0].guestId)
                setGuestName(response.data[0].guestName);
                setRole(response.data[0].role);
                console.log(role)
                console.log('Success login');
            }
        })
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/GuestLogin").then((response) => {
            if (response.data.loggedIn == true) {
                setRole(response.data.user[0].role);
                setGuestName(response.data.user[0].guestName)
            }
        });
    }, []);


    return (
        <div className="login_body">
            <LoginAuthPop errorDialog={errorDialog} setErrorDialog={setErrorDialog} />
            <body>
                <div className="bg">
                    <div className="login_pad">
                        <div className="login_icons">
                            <img src={logo_samp} alt={logo_samp} />
                            <img src={ob_tag} alt={ob_tag} />
                            <img src={manila} alt={manila} />
                        </div>
                        <div className="login_titles">
                            <p>Republic of the Philippines</p>
                            <p>Barangay 407 Zone 42 District 4</p>
                            <p>Sampaloc, Manila</p>

                        </div>
                        <div className="login_container">
                            <div className="login_wrapper">
                                <div className="login_title"><span>LOG IN</span></div>
                                <div className="login_form">
                                    <div className="login_row">
                                        <i className="fas fa-user"></i>
                                        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div className="login_row">
                                        <i className="fa fa-lock"></i>
                                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="login_pass"><a href="#">Forgot password?</a></div>
                                    <div className="login_row button">
                                        <input type="submit" value="Login" onClick={InhabitantLogin} />
                                    </div>
                                    <div className="login_row button">
                                        <p className="continue_as_guest_separator"> OR </p>
                                        <input type="submit" value="Continue as Guest" onClick={continueAsGuest} />
                                    </div>
                                    <div className="login_signup-link">Not a member? <a href="/register">Register Here</a></div>

                                </div>
                            </div>
                        </div>
                        <h1>{role}</h1>
                        <h1>{indv_inhabitant_id}</h1>

                        {role == "Barangay Staff" && history.push("/AdminHome")}
                        {role == "Barangay Resident" && history.push("/home")}
                        {role == "Guest" && history.push("/home")}
                    </div>
                </div>
            </body>
        </div>

    )
}

export default Login
