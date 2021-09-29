import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios'
import './RequestReserve.css'
import ConfirmDialog from './../../../components/Dialog/ConfirmDialog'
import LoginAuthPop from './../../../components/Dialog/LoginAuthPop';
import SuccessDialog from './../../../components/Dialog/SuccessDialog'
import Notification from './../../../components/Dialog/Notification';
import Navbar from './../../../components/Navbar/Navbar';
import Footer from './../../../components/Footer/Footer';


function RequestUtilities() {
    const [indv_inhabitant_id, setInhabitantId] = useState("");
    const [brgyaccount_id, setBrgyAccountId] = useState("");
    const [full_name, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [date_need, setDateNeed] = useState("");
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState("");
    const [date_today, setDateToday] = useState("");
    const history = useHistory();
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [successDialog, setSuccesDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });
    const [errorDialog, setErrorDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    var showdate = new Date();
    var displaytodaysdate = showdate.getFullYear() + '-' + (showdate.getMonth() + 1) + '-' + showdate.getDate();


    useEffect(() => {
        Axios.get("http://localhost:3001/InhabitantLogin").then((response) => {
            if (response.data.loggedIn === true) {
                setInhabitantId(response.data.user[0].indv_inhabitant_id);
                setBrgyAccountId(response.data.user[0].brgyaccount_id);
            }
        });
    }, []);

    function submit_request() {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        if (!indv_inhabitant_id) {
            setErrorDialog({
                isOpen: true,
                title: "Oops! Access Denied",
                subtitle: "You must be logged in to continue.",
                noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
            })
            setConfirmDialog({
                ...confirmDialog,
                isOpen: false
            })
        } else if (!full_name || !address || !contact || !date_need || !item || !quantity) {
            setErrorDialog({
                isOpen: true,
                title: "Input Error!",
                subtitle: "Required fields must not be empty",
                noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
            })
            setConfirmDialog({
                ...confirmDialog,
                isOpen: false
            })
        } else {
            setConfirmDialog({
                isOpen: true,
                title: "Application Confirmation",
                subtitle: "Are you sure you want to confirm the Application?",
                noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn">No</button>,
                yesButton: <button onClick={() => request_confirmed()} className="alert_yesBtn"> Yes </button>
            })

        }
    }

    function request_confirmed() {
        Axios.post("http://localhost:3001/RequestUtilities", {
            request_inhabitant_id: indv_inhabitant_id,
            request_brgyaccount_id: brgyaccount_id,
            request_full_name: full_name,
            request_address: address,
            request_contact: contact,
            request_date_need: date_need,
            request_item: item,
            request_quantity: quantity,
            request_dToday: displaytodaysdate,
        }).then((response) => {
            console.log(response)
        })
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        setSuccesDialog({
            isOpen: true,
            title: "Request Submitted!",
            subtitle: "",
            noButton: <button onClick={() => setSuccesDialog({ ...successDialog, isOpen: false })} className="alert_backBtn">Back</button>
        })
        setNotify({ isOpen: true, message: "Blotter Submit Successfully", type: "success" })

    }

    function BackToHome() {
        history.push("/home");
    }

    return (
        <div className="RequestReserve_main">
            <Navbar />
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            <LoginAuthPop errorDialog={errorDialog} setErrorDialog={setErrorDialog} />
            <SuccessDialog successDialog={successDialog} setSuccessDialog={successDialog} />
            <div className="container">
                <div className="EditProfile_container">
                    <div className="wrapper">
                        <div className="titles">
                            Facility Reservation & Request Form
                        </div>
                        <div className="forms_introduction_english">
                            <p>
                                Provided below are forms for requesting equipment and reservations of facilities of Barangay 407, please answer the form correctly and double check the form before to proceed to submission to avoid mistakes.
                            </p>
                        </div>
                        <div className="forms_introduction_tagalog">
                            <p>
                                Ibinigay sa ibaba ang mga form para sa paghingi ng kagamitan at pagpapareserba ng mga pasilidad ng Barangay 407, mangyaring sagutin nang tama ang form at i-double check ang form bago magpatuloy sa pagsusumite upang maiwasan ang mga pagkakamali.
                            </p>
                        </div>
                        <p className="required_symbol_english">All <span className="required_symbol">*</span> are required. </p>
                        <p className="required_symbol_tagalog">Lahat ng may <span className="required_symbol">*</span> ay kailangan. </p>
                        <div className="forms">
                            <div className="input_fields">
                                <input type="date" hidden className="inputs" value={displaytodaysdate} onChange={(e) => setDateToday(e.target.value)} />
                            </div>
                            <input type="text" className="inputs" hidden value={indv_inhabitant_id} setInhabitantId={(e) => setInhabitantId(e.target.value)} />
                            <input type="text" className="inputs" hidden value={brgyaccount_id} onChange={(e) => setBrgyAccountId(e.target.value)} />

                            <div className="input_fields">
                                <label>Full Name of Borrower <span className="required_symbol">*</span></label>
                                <input type="text" className="inputs" onChange={(e) => setFullName(e.target.value)} autoComplete="off" />
                            </div>
                            <div className="input_fields">
                                <label>Date Needed <span className="required_symbol">*</span></label>
                                <input type="date" className="inputs" onChange={(e) => setDateNeed(e.target.value)} autoCompelete="off" />
                            </div>
                            <div className="input_fields">
                                <label>Address <span className="required_symbol">*</span></label>
                                <textarea className="textarea" onChange={(e) => setAddress(e.target.value)} autoComplete="off"></textarea>
                            </div>
                            <div className="input_fields">
                                <label>Contact Number <span className="required_symbol">*</span></label>
                                <input type="number" className="inputs" onChange={(e) => setContact(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>Item <span className="required_symbol">*</span></label>
                                <div className="custom_select">
                                    <select className="inputs" onChange={(e) => setItem(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="Tent">Tent</option>
                                        <option value="Table">Table</option>
                                        <option value="Chair">Chair</option>
                                        <option value="Ladder">Ladder</option>
                                    </select>
                                </div>
                            </div>

                            <div className="input_fields">
                                <label>Quantity <span className="required_symbol">*</span></label>
                                <input type="number" className="inputs" onChange={(e) => setQuantity(e.target.value)} />
                            </div>

                            <div className="input_fields">
                                <input type="submit" value="Submit" className="btn" onClick={submit_request} />
                            </div>
                            <div className="input_fields">
                                <input type="submit" value="Back" className="btn" onClick={BackToHome} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}
export default RequestUtilities