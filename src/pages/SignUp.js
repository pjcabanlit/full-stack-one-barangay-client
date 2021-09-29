import React, { useState } from 'react'
import './SignUp.css';
import Axios from 'axios';
import { useHistory } from 'react-router-dom'
import brgy407_icon from './../images/brgy407_icon.png'
import ob_tag from './../images/ob_icon.png'
import Notification from './../components/Dialog/Notification';
import ConfirmDialog from './../components/Dialog/ConfirmDialog';
import SuccessDialog from './../components/Dialog/SuccessDialog';
import LoginAuthPop from './../components/Dialog/LoginAuthPop';
import manila from './../images/manila.png';

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [sex, setSex] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [prefix, setPrefix] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");
    const [birthplace, setBirthplace] = useState("");
    const [civilStatus, setCivilStatus] = useState("");
    const [dateToday, setDateToday] = useState("");
    const [householdHead, setHouseHoldHead] = useState("");
    const [relationshipToHousehold, setRelationshipToHousehold] = useState("");
    const [religion, setReligion] = useState("");
    const [residenceYear, setResidenceYear] = useState("");
    const [disable, setDisable] = useState("");
    const [disabilityKind, setDisabilityKind] = useState("")
    const [disabilityCard, setDisabilityCard] = useState("")
    const [fourPs, setFourPs] = useState("")
    const [fourPsYear, setFourPsYear] = useState("")
    const [isVoter, setIsVoter] = useState("")
    const [voterLocation, setVoterLocation] = useState("")

    const [region, setRegion] = useState("")
    const [province, setProvince] = useState("")
    const [city, setCity] = useState("")
    const [barangay, setBarangay] = useState("")
    const [postal, setPostal] = useState("")

    const [occupation, setOccupation] = useState("")

    const [primName, setPrimName] = useState("")
    const [primYear, setPrimYear] = useState("")
    const [primAddress, setPrimAddress] = useState("")
    const [secName, setSecName] = useState("")
    const [secYear, setSecYear] = useState("")
    const [secAddress, setSecAddress] = useState("")
    const [terName, setTerName] = useState("")
    const [terYear, setTerYear] = useState("")
    const [terAddress, setTerAddress] = useState("")

    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [successDialog, setSuccesDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });
    const [errorDialog, setErrorDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });


    const [checked, setChecked] = useState(false);
    const [isError, setIsError] = useState("");
    const history = useHistory();

    var showdate = new Date();
    var displaytodaysdate = showdate.getFullYear() + '-' + (showdate.getMonth() + 1) + '-' + showdate.getDate();


    // const { handleChange, values, handleSubmit, errors } = useForm(Validation);
    function register() {
        setErrorDialog({
            ...errorDialog,
            isOpen: false
        })
        setSuccesDialog({
            ...successDialog,
            isOpen: false
        })
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        if (password !== confirmPassword) {
            setErrorDialog({
                isOpen: true,
                title: "Password Error!",
                subtitle: "Password doesn't match. Please try again.",
                noButton: "Okay",
                noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
            })
            setSuccesDialog({
                ...successDialog,
                isOpen: false
            })
            setConfirmDialog({
                ...confirmDialog,
                isOpen: false
            })
        } else if (!firstName || !lastName || !email || !password || !confirmPassword || !birthdate || !sex || !address || !contact || !username || !role || !civilStatus || !region || !province || !city || !barangay || !postal) {
            setErrorDialog({
                isOpen: true,
                title: "Input Error!",
                subtitle: "Required fields must not be empty",
                noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
            })
            setSuccesDialog({
                ...successDialog,
                isOpen: false
            })
            setConfirmDialog({
                ...confirmDialog,
                isOpen: false
            })
        } else {
            Axios.post("http://localhost:3001/register", {
                C_firstname: firstName,
                C_middlename: middleName,
                C_lastname: lastName,
                C_prefix: prefix,
                C_email: email,
                C_password: password,
                C_contact: contact,
                C_birthdate: birthdate,
                C_sex: sex,
                C_address: address,
                C_username: username,
                C_role: role,
                C_civilStatus: civilStatus,
                C_birthplace: birthplace,
                C_dateToday: displaytodaysdate,
                C_householdHead: householdHead,
                C_relationshipToHousehold: relationshipToHousehold,
                C_religion: religion,
                C_residenceYear: residenceYear,
                C_disable: disable,
                C_disabilityKind: disabilityKind,
                C_disabilityCard: disabilityCard,
                C_fourPs: fourPs,
                C_fourPsYear: fourPsYear,
                C_isVoter: isVoter,
                C_voterLocation: voterLocation,
                C_region: region,
                C_province: province,
                C_city: city,
                C_barangay: barangay,
                C_postal: postal,
                C_primName: primName,
                C_primYear: primYear,
                C_primAddress: primAddress,
                C_secName: secName,
                C_secYear: secYear,
                C_secAddress: secAddress,
                C_terName: terName,
                C_terYear: terYear,
                C_terAddress: terAddress,
                C_occupation: occupation
            }).then((response) => {
                console.log(response);
            });
            setSuccesDialog({
                isOpen: true,
                title: "Registered Successfully!",
                subtitle: "",
                noButton: <button onClick={() => setSuccesDialog({ ...successDialog, isOpen: false })} className="alert_backBtn">Back</button>
            })
            setNotify({ isOpen: true, message: "Registered Successfully", type: "success" })
        }
    }


    function RegisterAsStaff() {
        setErrorDialog({
            ...errorDialog,
            isOpen: false
        })
        setSuccesDialog({
            ...successDialog,
            isOpen: false
        })
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        if (password !== confirmPassword) {
            setErrorDialog({
                isOpen: true,
                title: "Password Error!",
                subtitle: "Password doesn't match. Please try again.",
                noButton: "Okay",
                noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
            })
            setSuccesDialog({
                ...successDialog,
                isOpen: false
            })
            setConfirmDialog({
                ...confirmDialog,
                isOpen: false
            })
        } else if (!firstName || !lastName || !email || !password || !confirmPassword || !birthdate || !sex || !address || !contact || !username || !role || !civilStatus || !region || !province || !city || !barangay || !postal) {
            setErrorDialog({
                isOpen: true,
                title: "Input Error!",
                subtitle: "Required fields must not be empty",
                noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
            })
            setSuccesDialog({
                ...successDialog,
                isOpen: false
            })
            setConfirmDialog({
                ...confirmDialog,
                isOpen: false
            })
        } else {
            Axios.post("http://localhost:3001/RegisterAsStaff", {
                S_firstname: firstName,
                S_middlename: middleName,
                S_lastname: lastName,
                S_prefix: prefix,
                S_email: email,
                S_password: password,
                S_contact: contact,
                S_birthdate: birthdate,
                S_sex: sex,
                S_address: address,
                S_username: username,
                S_role: role,
                S_civilStatus: civilStatus,
                S_birthplace: birthplace,
                S_dateToday: displaytodaysdate,
                S_householdHead: householdHead,
                S_relationshipToHousehold: relationshipToHousehold,
                S_religion: religion,
                S_residenceYear: residenceYear,
                S_disable: disable,
                S_disabilityKind: disabilityKind,
                S_disabilityCard: disabilityCard,
                S_fourPs: fourPs,
                S_fourPsYear: fourPsYear,
                S_isVoter: isVoter,
                S_voterLocation: voterLocation,
                S_region: region,
                S_province: province,
                S_city: city,
                S_barangay: barangay,
                S_postal: postal,
                S_primName: primName,
                S_primYear: primYear,
                S_primAddress: primAddress,
                S_secName: secName,
                S_secYear: secYear,
                S_secAddress: secAddress,
                S_terName: terName,
                S_terYear: terYear,
                S_terAddress: terAddress,
                S_occupation: occupation
            }).then((response) => {
                console.log(response);
            });
            setSuccesDialog({
                isOpen: true,
                title: "Registered Successfully!",
                subtitle: "",
                noButton: <button onClick={() => setSuccesDialog({ ...successDialog, isOpen: false })} className="alert_backBtn">Back</button>
            })
            setNotify({ isOpen: true, message: "Registered Successfully", type: "success" })
        }
    }

    const backToLogin = () => {
        history.push("/")
    }

    const checkValidation = (e) => {
        const confPass = e.target.value;
        setConfirmPassword(confPass)
        if (password !== confPass) {
            setIsError("Password doesn't match. Please try again.")
        } else {
            setIsError("")
        }
    }

    return (
        <div>
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            <LoginAuthPop errorDialog={errorDialog} setErrorDialog={setErrorDialog} />
            <SuccessDialog successDialog={successDialog} setSuccessDialog={successDialog} />
            <div className="signup_div">
                <div className="topnav_container">
                    <img src={brgy407_icon} alt={brgy407_icon} className="main-logo-1" />
                    <img src={ob_tag} alt={ob_tag} className="login_header_title" />
                    <img src={manila} alt={manila} className="main-logo-2" />
                </div>
                <div className="EditProfile_container">
                    <div className="wrapper">
                        <div className="titles">
                            REGISTRATION
                        </div>
                        <p>All <span className="required_symbol">*</span> are required.</p>
                        <div className="forms">
                            <h1>Personal Information</h1>
                            <div className="input_fields">
                                <label>First Name<span className="required_symbol">*</span></label>
                                <input type="text" className="inputs" onChange={(e) => {
                                    setFirstName(e.target.value);
                                }} autoComplete="off" />
                            </div>
                            <div className="input_fields">
                                <label>Middle Name</label>
                                <input type="text" className="inputs" onChange={(e) => {
                                    setMiddleName(e.target.value);
                                }} autoComplete="off" />
                            </div>
                            <div className="input_fields">
                                <label>Last Name<span className="required_symbol">*</span></label>
                                <input type="text" className="inputs" onChange={(e) => {
                                    setLastName(e.target.value);
                                }} autoComplete="off" />
                            </div>
                            <div className="input_fields">
                                <label>Suffix</label>
                                <input type="text" className="inputs" onChange={(e) => {
                                    setPrefix(e.target.value);
                                }} />
                            </div>

                            <div className="input_fields">
                                <label>Contact<span className="required_symbol">*</span></label>
                                <input type="text" className="inputs" onChange={(e) => {
                                    setContact(e.target.value);
                                }} autoComplete="off" />
                            </div>

                            <div className="input_fields">
                                <label>Region<span className="required_symbol">*</span></label>
                                <div className="custom_select">
                                    <select className="inputs" onChange={(e) => {
                                        setRegion(e.target.value);
                                    }} autoComplete="off">
                                        <option value="">Select</option>
                                        <option value="NCR">NCR - National Capital Region</option>
                                        <option value="CAR">CAR - Cordillera Administrative Region</option>

                                    </select>
                                </div>
                            </div>
                            {region === "NCR" ? <div className="input_fields">
                                <label>Province<span className="required_symbol">*</span></label>
                                <div className="custom_select">
                                    <select className="inputs" onChange={(e) => {
                                        setProvince(e.target.value);
                                    }} autoComplete="off">
                                        <option value="">Select</option>
                                        <option value="NCR, First District">NCR, First District</option>
                                        <option value="NCR, Second District">NCR, Second District</option>
                                        <option value="NCR, Third District">NCR, Third District</option>

                                    </select>
                                </div>
                            </div> : ""}
                            {province === "NCR, First District" ? <div className="input_fields">
                                <label>City<span className="required_symbol">*</span></label>
                                <div className="custom_select">
                                    <select className="inputs" onChange={(e) => {
                                        setCity(e.target.value);
                                    }} autoComplete="off">
                                        <option value="">Select</option>
                                        <option value="City Of Manila">City Of Manila</option>
                                    </select>
                                </div>
                            </div> : ""}
                            {city === "City Of Manila" ? <div className="input_fields">
                                <label>Barangay<span className="required_symbol">*</span></label>
                                <div className="custom_select">
                                    <select className="inputs" onChange={(e) => {
                                        setBarangay(e.target.value);
                                    }} autoComplete="off">
                                        <option value="">Select</option>
                                        <option value="Barangay 407">Barangay 407</option>
                                        <option value="Barangay 412">Barangay 412</option>
                                    </select>
                                </div>
                            </div> : ""}

                            <div className="input_fields">
                                <label>Postal</label>
                                <input type="text" className="inputs" onChange={(e) => {
                                    setPostal(e.target.value);
                                }} />
                            </div>
                            <div className="input_fields">
                                <label>Complete Address<span className="required_symbol">*</span></label>
                                <textarea className="textarea" onChange={(e) => {
                                    setAddress(e.target.value);
                                }} autoComplete="off"></textarea>
                            </div>
                            <div className="input_fields">
                                <label>Gender<span className="required_symbol">*</span></label>
                                <div className="custom_select">
                                    <select className="inputs" onChange={(e) => {
                                        setSex(e.target.value);
                                    }} autoComplete="off">
                                        <option value="">Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input_fields">
                                <label>E-mail<span className="required_symbol">*</span></label>
                                <input type="text" className="inputs" onChange={(e) => {
                                    setEmail(e.target.value);
                                }} autoComplete="off" />
                            </div>
                            <div className="input_fields">
                                <label>Birthdate<span className="required_symbol">*</span></label>
                                <input type="date" className="inputs" onChange={(e) => {
                                    setBirthdate(e.target.value);
                                }} autoComplete="off" />
                            </div>
                            <div className="input_fields">
                                <label>Place Of Birth<span className="required_symbol">*</span></label>
                                <input type="text" className="inputs" onChange={(e) => {
                                    setBirthplace(e.target.value);
                                }} autoComplete="off" />
                            </div>
                            <div className="input_fields">
                                <label>Civil Status<span className="required_symbol">*</span></label>
                                <div className="custom_select" onChange={(e) => {
                                    setCivilStatus(e.target.value);
                                }} autoComplete="off">
                                    <select className="inputs">
                                        <option value="">Select</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Separated">Separated</option>
                                        <option value="Divorced">Divorced</option>
                                        <option value="Widowed">Widowed</option>

                                    </select>
                                </div>
                            </div>
                            <h1>Account Information</h1>
                            <div className="input_fields">
                                <label>Username<span className="required_symbol">*</span></label>
                                <input type="text" className="inputs" onChange={(e) => {
                                    setUsername(e.target.value);
                                }} autoComplete="off" />
                            </div>
                            <div className="input_fields">
                                <label>Password<span className="required_symbol">*</span></label>
                                <input type="password" className="inputs" value={password} onChange={(e) => {
                                    setPassword(e.target.value);
                                }} autoComplete="off" />
                            </div>
                            <div className="input_fields">
                                <label>Confirm Password<span className="required_symbol">*</span></label>
                                <input type="password" className="inputs" value={confirmPassword} onChange={(e) => checkValidation(e)} autoComplete="off" />

                            </div>
                            <div className="error_password">
                                {isError}
                            </div>

                            <div className="input_fields">
                                <label>Role<span className="required_symbol">*</span></label>
                                <div className="custom_select">
                                    <select className="inputs" onChange={(e) => {
                                        setRole(e.target.value);
                                    }}>
                                        <option value="">Select</option>
                                        <option value="Barangay Resident">Barangay Resident</option>
                                        <option value="Barangay Staff">Barangay Staff</option>
                                    </select>
                                </div>
                            </div>
                            <input className="form-input" hidden required type="text" value={displaytodaysdate} onChange={(e) => {
                                setDateToday(e.target.value);
                            }} />
                            <div className="input_fields terms">
                                <label className="check">
                                    <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
                                    <span className="checkmark"></span>
                                </label>
                                <p>I agree to the collection and use of all personal information I have provided through this application by One Barangay. I understand that the collection and the use of this data, shall be in accordance with the <a href="">Data Privacy Act of 2012</a> and <a href="">Privacy Policy of One Barangay</a></p>
                            </div>
                            <div className="note2">
                                <p className="noteEnglish2">Note that providing false information to Barangay 407 is punishable by law with a penalty of fine and imprisonment in accordance of Barangay Law.</p>
                                <p className="noteTagalog2">Tandaan na ang pagtatala ng maling impormasyon sa Barangay 407 ay may karampatang parusa na pagkakulong o multa alinsunod sa patuntunan ng Barangay.</p>
                            </div>
                            <div className="input_fields">
                                {checked && role === "Barangay Staff" ? <input type="submit" value="Register" id="submitBTN" className="btn" onClick={() => {
                                    setConfirmDialog({
                                        isOpen: true,
                                        title: 'Are you sure you want to Register?',
                                        subtitle: 'Please check all the information before you register.',
                                        noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn"> No </button>,
                                        yesButton: <button onClick={() => RegisterAsStaff()} className="alert_yesBtn"> Yes </button>,
                                    })
                                }} /> : checked === ""}

                            </div>
                            <div className="input_fields">{checked && role === "Barangay Resident" ? <input type="submit" value="Register" id="submitBTN" className="btn" onClick={() => {
                                setConfirmDialog({
                                    isOpen: true,
                                    title: 'Are you sure you want to Register?',
                                    subtitle: 'Please check all the information before you register.',
                                    noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn"> No </button>,
                                    yesButton: <button onClick={() => register()} className="alert_yesBtn"> Yes </button>,
                                })
                            }} /> : checked === ""}

                            </div>
                            <div className="input_fields">
                                <input type="submit" value="Back" className="btn" onClick={backToLogin} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="signup_footer">
                <div className="signUp_footer_left">
                    <img src={brgy407_icon} alt={brgy407_icon} />
                    <img src={ob_tag} alt={ob_tag} />
                    <p className="system_title">One Barangay: A Multipurpose Barangay Management System</p>
                </div>
                <ul className="home_footer_right">
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
                <div className="signUp_footer_bottom">
                    <center>
                        <p>One Barangay</p>
                        <p>Copyright 2021 ©. Barangay 407 Zone 42 Manila. All Rights Reserved.</p>
                    </center>
                </div>
            </footer>
        </div>
    )
}
export default SignUp;