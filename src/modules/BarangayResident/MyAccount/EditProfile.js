import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import './EditProfile.css';
import Footer from './../../../components/Footer/Footer';
import ConfirmDialog from './../../../components/Dialog/ConfirmDialog';
import SuccessDialog from './../../../components/Dialog/SuccessDialog'
import LoginAuthPop from './../../../components/Dialog/LoginAuthPop';
import Notification from './../../../components/Dialog/Notification';
import Navbar from './../../../components/Navbar/Navbar';

function EditProfile() {
    const history = useHistory();

    const backToProfile = () => {
        history.push("/MyProfile");
    }

    const [indv_inhabitant_id, setInhabitantId] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [BirthDate, setBirthdate] = useState("");
    const [gender, setSex] = useState("");
    const [complete_address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [middle_name, setMiddleName] = useState("");
    const [suffix, setPrefix] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");
    const [birthplace, setBirthplace] = useState("");
    const [civil_status, setCivilStatus] = useState("");
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

    const [nationality, setNationality] = useState("")

    const [region, setRegion] = useState("")
    const [province, setProvince] = useState("")
    const [city, setCity] = useState("")
    const [barangay, setBarangay] = useState("")
    const [postal, setPostal] = useState("")

    const [occupation, setOccupation] = useState("")

    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [successDialog, setSuccessDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });
    const [errorDialog, setErrorDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });

    var showdate = new Date();
    var displaytodaysdate = showdate.getDate() + '/' + (showdate.getMonth() + 1) + '/' + showdate.getFullYear();

    useEffect(() => {
        Axios.get("http://localhost:3001/InhabitantLogin").then((response) => {
            if (response.data.loggedIn === true) {

                setUsername(response.data.user[0].username)
                setFirstName(response.data.user[0].first_name);
                setMiddleName(response.data.user[0].middle_name);
                setLastName(response.data.user[0].last_name);
                setAddress(response.data.user[0].complete_address);
                setPrefix(response.data.user[0].suffix)
                setSex(response.data.user[0].gender);
                setEmail(response.data.user[0].email)
                setContact(response.data.user[0].contact);
                setNationality(response.data.user[0].nationality);
                setCivilStatus(response.data.user[0].civil_status);
                setPassword(response.data.user[0].password);
                setBirthdate(response.data.user[0].BirthDate);
                setBirthplace(response.data.user[0].birthplace);
                setBarangay(response.data.user[0].barangay);
            }
        });
    }, []);

    function UpdateProfile() {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        setErrorDialog({
            ...errorDialog,
            isOpen: false
        })
        setSuccessDialog({
            ...successDialog,
            isOpen: false
        })
        if (!first_name || !last_name || !complete_address || !BirthDate || !birthplace || !gender || !contact || !nationality || !civil_status || !username || !password || !confirmPassword) {
            setErrorDialog({
                isOpen: true,
                title: "Input Error!",
                subtitle: "All fields are required",
                noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
            })
            setConfirmDialog({
                ...confirmDialog,
                isOpen: false
            })
            setSuccessDialog({
                ...successDialog,
                isOpen: false
            })
        } else if (!indv_inhabitant_id) {
            setErrorDialog({
                isOpen: true,
                title: "Oops! Session Expired.",
                subtitle: "You must be logged in to continue.",
                noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
            })
            setConfirmDialog({
                ...confirmDialog,
                isOpen: false
            })
            setSuccessDialog({
                ...successDialog,
                isOpen: false
            })
        } else if (password !== confirmPassword) {
            setErrorDialog({
                isOpen: true,
                title: "Password Doesn't Match!.",
                subtitle: "Please try again.",
                noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
            })
            setConfirmDialog({
                ...confirmDialog,
                isOpen: false
            })
            setSuccessDialog({
                ...successDialog,
                isOpen: false
            })
        } else {
            Axios.put("http://localhost:3001/UpdateProfile", {
                EditProfile_const_id: indv_inhabitant_id,
                EditProfile_firstName: first_name,
                EditProfile_middleName: middle_name,
                EditProfile_lastName: last_name,
                EditProfile_address: complete_address,
                EditProfile_prefix: suffix,
                EditProfile_birthdate: BirthDate,
                EditProfile_birthplace: birthplace,
                EditProfile_sex: gender,
                EditProfile_contact: contact,
                EditProfile_nationality: nationality,
                EditProfile_civilStatus: civil_status,
                EditProfile_email: email,
                EditProfile_barangay: barangay,
                EditProfile_username: username,
                EditProfile_password: password
            }).then((response) => {
                console.log(response);
            })
            setSuccessDialog({
                isOpen: true,
                title: "Updated!",
                subtitle: "Profile Updated Successfully!",
                noButton: <button onClick={() => setSuccessDialog({ ...successDialog, isOpen: false })} className="alert_backBtn">Back</button>
            })
            setNotify({ isOpen: true, message: "Profile Updated!", type: "success" })
        }
    }

    function BackToProfile() {
        history.push("/MyProfile")
    }

    return (
        <div className="EditProfile_container">
            <Notification notify={notify} setNotify={setNotify} />
            <SuccessDialog successDialog={successDialog} setSuccessDialog={setSuccessDialog} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            <LoginAuthPop errorDialog={errorDialog} setErrorDialog={setErrorDialog} />
            <Navbar />
            <div className="personal_info">
                <div className="wrapper">
                    <div className="titles">
                        EDIT PERSONAL INFORMATION
                    </div>
                    <p>All <span className="required_symbol">*</span> are required.</p>
                    <div className="forms">
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
                        <div className="input_fields">
                            <label>Residence Years <span className="required_symbol">*</span></label>
                            <input type="text" className="inputs" onChange={(e) => {
                                setResidenceYear(e.target.value);
                            }} autoComplete="off" />
                        </div>
                        <div className="input_fields">
                            <label>Household Head <span className="required_symbol">*</span></label>
                            <div className="custom_select" onChange={(e) => {
                                setHouseHoldHead(e.target.value);
                            }} autoComplete="off">
                                <select className="inputs">
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        {householdHead === "Yes" ? <div className="input_fields">
                            <label>Relationship to Household head <span className="required_symbol">*</span></label>
                            <input type="text" className="inputs" onChange={(e) => {
                                setRelationshipToHousehold(e.target.value);
                            }} autoComplete="off" />
                        </div> : ""}
                        <div className="input_fields">
                            <label>Religion<span className="required_symbol">*</span></label>
                            <input type="text" className="inputs" onChange={(e) => {
                                setReligion(e.target.value);
                            }} autoComplete="off" />
                        </div>
                        <div className="input_fields">
                            <label>Disability<span className="required_symbol">*</span></label>
                            <div className="custom_select" onChange={(e) => {
                                setDisable(e.target.value);
                            }} autoComplete="off">
                                <select className="inputs">
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        {disable === "Yes" ? <div className="input_fields">
                            <label>Disability Kind<span className="required_symbol">*</span></label>
                            <input type="text" className="inputs" onChange={(e) => {
                                setDisabilityKind(e.target.value);
                            }} autoComplete="off" />
                        </div> : ""}
                        {disable === "Yes" ? <div className="input_fields">
                            <label>Has Disability Card<span className="required_symbol">*</span></label>
                            <div className="custom_select" onChange={(e) => {
                                setDisabilityCard(e.target.value);
                            }} autoComplete="off">
                                <select className="inputs">
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div> : ""}
                        <div className="input_fields">
                            <label>4P's Member<span className="required_symbol">*</span></label>
                            <div className="custom_select" onChange={(e) => {
                                setFourPs(e.target.value);
                            }} autoComplete="off">
                                <select className="inputs">
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        {fourPs === "Yes" ? <div className="input_fields">
                            <label>4P's Year<span className="required_symbol">*</span></label>
                            <input type="text" className="inputs" onChange={(e) => {
                                setFourPsYear(e.target.value);
                            }} autoComplete="off" />
                        </div> : ""}
                        <div className="input_fields">
                            <label>Is Voter<span className="required_symbol">*</span></label>
                            <div className="custom_select" onChange={(e) => {
                                setIsVoter(e.target.value);
                            }} autoComplete="off">
                                <select className="inputs">
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        {isVoter === "Yes" ? <div className="input_fields">
                            <label>Voter Registration Location<span className="required_symbol">*</span></label>
                            <input type="text" className="inputs" onChange={(e) => {
                                setVoterLocation(e.target.value);
                            }} autoComplete="off" />
                        </div> : ""}

                        <input className="form-input" hidden required type="text" onChange={(e) => {
                            setDateToday(e.target.value);
                        }} />

                        <div className="input_fields">
                            <input type="submit" value="Register" id="submitBTN" className="btn" />

                        </div>
                        <div className="input_fields">
                            <input type="submit" value="Back" className="btn" onClick={BackToProfile} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default EditProfile