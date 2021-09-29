import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import BarangayCertificates from '../ApplicationModule/BarangayCertificates';
import EmergencyIncidentReport from './../CrimeIncidentModule/EmergencyIncidentReport';
import ComplainReport from '../CrimeIncidentModule/ComplainReport';
import Announcement from './../ProgramModule/Announcement';
import Seminar from './../ProgramModule/Seminar';
import RequestUtilities from './../ReservationModule/RequestUtilities';
import Feedbacks from './../ForumModule/Feedbacks';
import FAQs from './../ForumModule/FAQs';
import './Home.css';
import ApplicationModule from './../ApplicationModule/ApplicationModule';
import Home from './Home';
import CrimeIncidentModule from './../CrimeIncidentModule/CrimeIncidentModule';
import MyProfile from './../MyAccount/MyProfile';
import MyApplications from './../MyAccount/MyApplications';
import MyNotifications from './../MyAccount/MyNotifications';
import EditProfile from './../MyAccount/EditProfile'
import ProgramsEvents from './../ProgramModule/ProgramsEvents';
import ReservationModule from './../ReservationModule/ReservationModule';
import Forum from './../ForumModule/Forum';
import EditAccount from './../MyAccount/EditAccount';
import MyAccount from './../MyAccount/MyAccount';
import EditAddress from './../MyAccount/EditAddress';
import EditEducation from './../MyAccount/EditEducation';
import EditFamily from './../MyAccount/EditFamily';
import AuthApi from './../../../components/ProtectedRoute/AuthApi';
import Login from './../../../pages/Login';
import Axios from 'axios'
import LoginAuthPop from './../../../components/Dialog/LoginAuthPop'
import img407 from './../../../images/img407.jpg'
import oneb from './../../../images/oneb.png'
import logo_samp from './../../../images/brgy407_icon.png'
import ob_tag from './../../../images/ob_icon.png'
import RefreshToScroll from './../../../components/ScrollToTop/RefreshToScroll';

function UserHome() {
    // const [auth, setAuth] = useState(false);

    // const Login = () => {

    //     const history = useHistory();
    //     const [username, setUsername] = useState('');
    //     const [password, setPassword] = useState('');
    //     const [indv_inhabitant_id, setInhabitantId] = useState("");
    //     const [role, setRole] = useState("");
    //     const [loginStatus, setLoginStatus] = useState('');

    //     const [guest_id, setGuestId] = useState("");
    //     const [guest_name, setGuestName] = useState("");



    //     Axios.defaults.withCredentials = true;

    //     const [errorDialog, setErrorDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });

    //     const Auth = useContext(AuthApi);
    //     const InhabitantLogin = () => {
    //         Auth.setAuth(true);
    //         Cookies.set("user", "loginTrue");

    //         setErrorDialog({
    //             ...errorDialog,
    //             isOpen: false
    //         })
    //         if (!username || !password) {
    //             setErrorDialog({
    //                 isOpen: true,
    //                 title: "Login Failed",
    //                 subtitle: "Username and Password are required.",
    //                 noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
    //             })
    //         } else {
    //             Axios.post("http://localhost:3001/InhabitantLogin", {
    //                 I_username: username,
    //                 I_password: password,
    //                 I_role: role,
    //                 I_inhabitantId: indv_inhabitant_id,
    //             }).then((response) => {
    //                 if (response.data.message) {
    //                     setErrorDialog({
    //                         isOpen: true,
    //                         title: "Login Failed",
    //                         subtitle: "Incorrect Username or Password.",
    //                         noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
    //                     })
    //                     setLoginStatus(response.data.message);
    //                 } else {
    //                     Auth.setAuth(true);
    //                     Cookies.set("user", "loginTrue");
    //                     setInhabitantId(response.data[0].indv_inhabitant_id);
    //                     setRole(response.data[0].role);
    //                     setLoginStatus(response.data[0].loginStatus);

    //                 }
    //             });
    //         }
    //     }

    //     useEffect(() => {
    //         Axios.get("http://localhost:3001/InhabitantLogin").then((response) => {
    //             if (response.data.loggedIn == true) {
    //                 setRole(response.data.user[0].role);
    //                 setInhabitantId(response.data.user[0].indv_inhabitant_id);
    //                 setLoginStatus(response.data.user[0].loginStatus);

    //             }
    //         });
    //     }, []);

    //     const continueAsGuest = () => {
    //         const guestId = 1;
    //         const guestName = "Guest";
    //         Axios.post("http://localhost:3001/GuestLogin", {
    //             G_id: guestId,
    //             G_name: guestName,
    //             G_role: role,
    //         }).then((response) => {
    //             if (response.data.message) {
    //                 setLoginStatus(response.data.message);
    //                 console.log("Login failed");
    //             } else {
    //                 console.log(guestName);
    //                 setGuestId(response.data[0].guestId)
    //                 setGuestName(response.data[0].guestName);
    //                 setRole(response.data[0].role);
    //                 console.log(role)
    //                 console.log('Success login');
    //             }
    //         })
    //     }

    //     useEffect(() => {
    //         Axios.get("http://localhost:3001/GuestLogin").then((response) => {
    //             if (response.data.loggedIn == true) {
    //                 setRole(response.data.user[0].role);
    //                 setGuestName(response.data.user[0].guestName)
    //             }
    //         });
    //     }, []);


    return (
        <Router>
            <RefreshToScroll />
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Route path='/MyProfile' exact component={MyProfile} />
                <Route path='/MyApplication' exact component={MyApplications} />
                <Route path='/MyNotifs' exact component={MyNotifications} />
                <Route path='/ApplicationModule' exact component={ApplicationModule} />
                <Route path='/Barangay-Certificates' exact component={BarangayCertificates} />
                <Route path='/CIEModule' exact component={CrimeIncidentModule} />
                <Route path='/EmergencyIncidentReport' exact component={EmergencyIncidentReport} />
                <Route path='/Submit-Complain-Report' exact component={ComplainReport} />
                <Route path='/Programs&Events' exact component={ProgramsEvents} />
                <Route path='/Announcement' exact component={Announcement} />
                <Route path='/Seminar' exact component={Seminar} />
                <Route path='/Reservation-Module' exact component={ReservationModule} />
                <Route path='/RequestUtilities' exact component={RequestUtilities} />
                <Route path='/Forums' exact component={Forum} />
                <Route path='/Feedbacks' exact component={Feedbacks} />
                <Route path='/FAQs' exact component={FAQs} />
                <Route path='/EditAccount' exact component={EditAccount} />
                <Route path='/MyAccount' exact component={MyAccount} />
                <Route path='/Edit-Personal-Information' exact component={EditProfile} />
                <Route path='/Edit-Address-Information' exact component={EditAddress} />
                <Route path='/Edit-Educational-Background' exact component={EditEducation} />
                <Route path='/Edit-family-background' exact component={EditFamily} />
            </Switch>
        </Router>
    )

    //     return (
    //         <div>
    //             <body>
    //                 <LoginAuthPop errorDialog={errorDialog} setErrorDialog={setErrorDialog} />

    //                 <div className="topnav-login">
    //                     <div>
    //                         <img src={logo_samp} alt={logo_samp} className="main-logo-1" />
    //                     </div>
    //                     <div>
    //                         <center>
    //                             <img src={ob_tag} alt={ob_tag} className="login_header_title" />
    //                         </center>
    //                     </div>
    //                     <div>
    //                         <center>
    //                             <p className="login_title_address">Barangay 407 Zone 42 Sampaloc, Manila</p>
    //                         </center>
    //                     </div>
    //                     <div>
    //                         <img src={oneb} alt={oneb} className="main-logo-2" />
    //                     </div>
    //                 </div>
    //                 <section>
    //                     <div className="imgBx">
    //                         <img src={img407} alt={img407} />
    //                     </div>
    //                     <div className="contentBx">
    //                         <div className="formBx">
    //                             <h2>
    //                                 <div className="inputBx">
    //                                     <span className="login_span">Username:</span>
    //                                     <div className="login_inputContainer">
    //                                         <i className="fa fa-user login_icon" />
    //                                         <input className="login_inputField" type="text" name="" autocomplete="off" onChange={(e) => { setUsername(e.target.value) }} />
    //                                     </div>
    //                                 </div>
    //                                 <div className="inputBx">
    //                                     <span className="login_span">Password:</span>
    //                                     <div className="login_inputContainer">
    //                                         <i className="fa fa-key login_icon" />
    //                                         <input className="login_inputField" type="password" name="" autocomplete="off" onChange={(e) => { setPassword(e.target.value) }} />
    //                                     </div>
    //                                 </div>

    //                                 <div className="inputBx">
    //                                     <input type="submit" value="Log in" onClick={InhabitantLogin} />
    //                                 </div>
    //                                 <div className="inputBx">
    //                                     <p className="login_noticeAccount" >Don't have an account? <a href="/register">Register here.</a> </p>
    //                                 </div>
    //                                 <h3>OR</h3>
    //                                 <input type="submit" className="btn_guest" value="Continue As Guest" onClick={continueAsGuest} />
    //                             </h2>
    //                             <hr className="login_divider" />
    //                             <div>
    //                                 <p className="login_notice">All modules, contents and services included in this system is intended for Nationalians' use only. You may not, except with our express written permission, distribute or commercially exploit its contents. Nor may you transmit it or store it in any other website or other form of electronic retrieval system. National University © 2021.</p>
    //                             </div>
    //                         </div>

    //                     </div>

    //                 </section>
    //                 <h1>{role}</h1>
    //                 <h1>{indv_inhabitant_id}</h1>

    //                 {role == "Barangay Staff" && history.push("/AdminHome")}
    //                 {role == "Barangay Resident" && history.push("/home")}
    //                 {role == "Guest" && history.push("/home")}
    //             </body>

    //         </div>
    //     )
    // }

    // const Routes = () => {
    //     const Auth = useContext(AuthApi)
    //     return (
    //         <Switch>
    //             <ProtectedLogin path='/' auth={Auth.auth} exact component={Login} />
    //             <ProtectedRoute path="/home" auth={Auth.auth} exact component={Home} />
    //             {/* <Route path='/home' exact component={Home} /> */}
    //             <Route path='/MyProfile' exact component={MyProfile} />
    //             <Route path='/MyApplication' exact component={MyApplications} />
    //             <Route path='/MyNotifs' exact component={MyNotifications} />
    //             <Route path='/ApplicationModule' exact component={ApplicationModule} />
    //             <Route path='/Barangay-Clearance' exact component={BaranggayClearance} />
    //             <Route path='/Barangay-ID' exact component={BaranggayID} />
    //             <Route path='/Barangay-Indigency' exact component={BaranggayIndigency} />
    //             <Route path='/Cedula' exact component={Cedula} />
    //             <Route path='/Barangay-Business-Permit' exact component={BaranggayBusinessPermit} />
    //             <Route path='/Barangay-Health-Permit' exact component={BaranggayHealthPermit} />
    //             <Route path='/CIEModule' exact component={CrimeIncidentModule} />
    //             <Route path='/EmergencyHotlines' exact component={EmergencyHotlines} />
    //             <Route path='/file-incidient-report' exact component={FileIncidentReport} />
    //             <Route path='/EmergencyIncidentReport' exact component={EmergencyIncidentReport} />
    //             <Route path='/EmergencyPlan' exact component={EmergencyPlan} />
    //             <Route path='/Submit-Complain-Report' exact component={SubmitBlotter} />
    //             <Route path='/WatchOut' exact component={WatchOut} />
    //             <Route path='/Programs&Events' exact component={ProgramsEvents} />
    //             <Route path='/Announcement' exact component={Announcement} />
    //             <Route path='/Scholarship' exact component={Scholarship} />
    //             <Route path='/Seminar' exact component={Seminar} />
    //             <Route path='/Reservation-Module' exact component={ReservationModule} />
    //             <Route path='/RequestUtilities' exact component={RequestUtilities} />
    //             <Route path='/RequestVenues' exact component={RequestVenues} />
    //             <Route path="/Payments" exact component={Payments} />
    //             <Route path='/ModeOfPayment' exact component={ModeOfPayment} />
    //             <Route path='/ProofOfPayment' exact component={ProofOfPayment} />
    //             <Route path='/Transaction-History' exact component={Reciepts} />
    //             <Route path='/Forums' exact component={Forum} />
    //             <Route path='/Feedbacks' exact component={Feedbacks} />
    //             <Route path='/FAQs' exact component={FAQs} />
    //             <Route path='/EditAccount' exact component={EditAccount} />
    //             <Route path='/MyAccount' exact component={MyAccount} />
    //             <Route path='/Edit-Personal-Information' exact component={EditProfile} />
    //             <Route path='/Edit-Address-Information' exact component={EditAddress} />
    //             <Route path='/Edit-Educational-Background' exact component={EditEducation} />
    //             <Route path='/Edit-family-background' exact component={EditFamily} />
    //         </Switch>
    //     )
    // }

    // const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
    //     return (
    //         <Route {...rest} render={() => auth ? (<Component />) : <Redirect to="/" />} />

    //     )
    // }

    // const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
    //     return (
    //         <Route {...rest} render={() => !auth ? (<Component />) : <Redirect to="/home" />} />

    //     )
    // }

    // return (
    //     <div>
    //         <AuthApi.Provider value={auth, setAuth}>
    //             <Router>
    //                 <Routes />

    //             </Router>
    //         </AuthApi.Provider>

    //     </div>
    // )
}
export default UserHome;