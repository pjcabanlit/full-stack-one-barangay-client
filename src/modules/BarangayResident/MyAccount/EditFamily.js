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
    const [primName, setPrimName] = useState("")
    const [primYear, setPrimYear] = useState("")
    const [primAddress, setPrimAddress] = useState("")
    const [secName, setSecName] = useState("")
    const [secYear, setSecYear] = useState("")
    const [secAddress, setSecAddress] = useState("")
    const [terName, setTerName] = useState("")
    const [terYear, setTerYear] = useState("")
    const [terAddress, setTerAddress] = useState("")

    const [dateToday, setDateToday] = useState("");

    const history = useHistory("");

    function BackToProfile() {
        history.push("/MyProfile")
    }

    var showdate = new Date();
    var displaytodaysdate = showdate.getDate() + '/' + (showdate.getMonth() + 1) + '/' + showdate.getFullYear();


    return (
        <div className="EditProfile_container">
            <Navbar />
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            <LoginAuthPop errorDialog={errorDialog} setErrorDialog={setErrorDialog} />
            <SuccessDialog successDialog={successDialog} setSuccessDialog={successDialog} />
            <div className="wrapper">
                <div className="titles">
                    Family Background
                </div>
                <p>All <span className="required_symbol">*</span> are required.</p>
                <div className="forms">
                    <div className="input_fields">
                        <label>Relationship<span className="required_symbol">*</span></label>
                        <input type="text" className="inputs" onChange={(e) => {
                            setPrimName(e.target.value);
                        }} autoComplete="off" />
                    </div>
                    <div className="input_fields">
                        <label>Full Name<span className="required_symbol">*</span></label>
                        <input type="text" className="inputs" onChange={(e) => {
                            setPrimName(e.target.value);
                        }} autoComplete="off" />
                    </div>
                    <div className="input_fields">
                        <label>Occupation<span className="required_symbol">*</span></label>
                        <input type="text" className="inputs" onChange={(e) => {
                            setPrimYear(e.target.value);
                        }} autoComplete="off" />
                    </div>
                    <div className="input_fields">
                        <label>Complete Address<span className="required_symbol">*</span></label>
                        <textarea className="textarea" onChange={(e) => {
                            setPrimYear(e.target.value);
                        }} autoComplete="off"></textarea>
                    </div>
                    <hr />
                    <div className="input_fields">
                        <label>Relationship<span className="required_symbol">*</span></label>
                        <input type="text" className="inputs" onChange={(e) => {
                            setSecName(e.target.value);
                        }} autoComplete="off" />
                    </div>
                    <div className="input_fields">
                        <label>Full Name<span className="required_symbol">*</span></label>
                        <input type="text" className="inputs" onChange={(e) => {
                            setSecYear(e.target.value);
                        }} autoComplete="off" />
                    </div>
                    <div className="input_fields">
                        <label>Occupation<span className="required_symbol">*</span></label>
                        <input type="text" className="inputs" onChange={(e) => {
                            setSecAddress(e.target.value);
                        }} autoComplete="off" />
                    </div>
                    <div className="input_fields">
                        <label>Complete Address<span className="required_symbol">*</span></label>
                        <textarea className="textarea" onChange={(e) => {
                            setPrimYear(e.target.value);
                        }} autoComplete="off"></textarea>
                    </div>
                    <hr />

                    <div className="input_fields">
                        <label>Relationship<span className="required_symbol">*</span></label>
                        <input type="text" className="inputs" onChange={(e) => {
                            setTerYear(e.target.value);
                        }} autoComplete="off" />
                    </div>
                    <div className="input_fields">
                        <label>Full Name<span className="required_symbol">*</span></label>
                        <input type="text" className="inputs" onChange={(e) => {
                            setTerAddress(e.target.value);
                        }} autoComplete="off" />
                    </div>
                    <div className="input_fields">
                        <label>Occupation<span className="required_symbol">*</span></label>
                        <input type="text" className="inputs" onChange={(e) => {
                            setTerAddress(e.target.value);
                        }} autoComplete="off" />
                    </div>
                    <div className="input_fields">
                        <label>Complete Address<span className="required_symbol">*</span></label>
                        <textarea className="textarea" onChange={(e) => {
                            setPrimYear(e.target.value);
                        }} autoComplete="off"></textarea>
                    </div>


                    <input className="form-input" hidden required type="text" value={displaytodaysdate} onChange={(e) => {
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
            <Footer />
        </div>

    )
}