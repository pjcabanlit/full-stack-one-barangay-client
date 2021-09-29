import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Footer from './../../../components/Footer/Footer';
import ConfirmDialog from './../../../components/Dialog/ConfirmDialog';
import SuccessDialog from './../../../components/Dialog/SuccessDialog'
import LoginAuthPop from './../../../components/Dialog/LoginAuthPop';
import Notification from './../../../components/Dialog/Notification';
import Navbar from './../../../components/Navbar/Navbar';

export default function EditEducation() {
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [successDialog, setSuccesDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });
    const [errorDialog, setErrorDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });

    const [region, setRegion] = useState("")
    const [province, setProvince] = useState("")
    const [city, setCity] = useState("")
    const [barangay, setBarangay] = useState("")
    const [postal, setPostal] = useState("")
    const [complete_address, setAddress] = useState("")

    const history = useHistory("");

    function BackToProfile() {
        history.push("/MyProfile")
    }

    return (
        <div className="EditProfile_container">
            <Navbar />
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            <LoginAuthPop errorDialog={errorDialog} setErrorDialog={setErrorDialog} />
            <SuccessDialog successDialog={successDialog} setSuccessDialog={successDialog} />
            <div className="wrapper">
                <div className="titles">
                    Edit Address
                </div>
                <p>All <span className="required_symbol">*</span> are required.</p>
                <div className="forms">
                    <div className="input_fields">
                        <label>Region<span className="required_symbol">*</span></label>
                        <div className="custom_select">
                            <select className="inputs" onChange={(e) => {
                                setRegion(e.target.value);
                            }} autoComplete="off">
                                <option value="">Select</option>
                                <option value="Metro Manila">Metro Manila</option>
                                <option value="Mindanao">Mindanao</option>
                                <option value="North Luzon">North Luzon</option>
                                <option value="South Luzon">South Luzon</option>
                                <option value="Visayas">Visayas</option>
                            </select>
                        </div>
                    </div>
                    {region === "Metro Manila" ? <div className="input_fields">
                        <label>Province<span className="required_symbol">*</span></label>
                        <div className="custom_select">
                            <select className="inputs" onChange={(e) => {
                                setProvince(e.target.value);
                            }} autoComplete="off">
                                <option value="">Select</option>
                                <option value="Metro Manila1">Metro Manila</option>
                            </select>
                        </div>
                    </div> : ""}
                    {province === "Metro Manila1" ? <div className="input_fields">
                        <label>City<span className="required_symbol">*</span></label>
                        <div className="custom_select">
                            <select className="inputs" onChange={(e) => {
                                setCity(e.target.value);
                            }} autoComplete="off">
                                <option value="">Select</option>
                                <option value="Binondo">Binondo</option>
                                <option value="Caloocan City">Caloocan City</option>
                                <option value="Ermita">Ermita</option>
                                <option value="Intramuros">Intramuros</option>
                                <option value="Las Pinas">Las Pinas</option>
                                <option value="Makati City">Makati City</option>
                            </select>
                        </div>
                    </div> : ""}
                    {city === "Binondo" ? <div className="input_fields">
                        <label>Barangay<span className="required_symbol">*</span></label>
                        <div className="custom_select">
                            <select className="inputs" onChange={(e) => {
                                setBarangay(e.target.value);
                            }} autoComplete="off">
                                <option value="">Select</option>
                                <option value="Binondo">Barangay 287</option>
                                <option value="Caloocan City">Barangay 288</option>
                                <option value="Ermita">Barangay 289</option>
                                <option value="Intramuros">Barangay 290</option>
                                <option value="Las Pinas">Barangay 291</option>
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
                        <input type="submit" value="Register" id="submitBTN" className="btn" />

                    </div>
                    <div className="input_fields">
                        <input type="submit" value="Back" className="btn" onClick={BackToProfile} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}