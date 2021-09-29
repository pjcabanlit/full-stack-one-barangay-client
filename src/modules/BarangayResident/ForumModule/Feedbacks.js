import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios'
import './Feedback.css';
import ConfirmDialog from './../../../components/Dialog/ConfirmDialog';
import LoginAuthPop from './../../../components/Dialog/LoginAuthPop';
import SuccessDialog from './../../../components/Dialog/SuccessDialog'
import Notification from './../../../components/Dialog/Notification';
import Navbar from './../../../components/Navbar/Navbar';
import Footer from './../../../components/Footer/Footer';

function Feedbacks() {
    const [indv_inhabitant_id, setInhabitantId] = useState("");
    const [first_name, setFirstName] = useState();
    const [middle_name, setMiddleName] = useState();
    const [last_name, setLastName] = useState();
    const [suffix, setSuffix] = useState();
    const [feedback, setFeedback] = useState();
    const [date_today, setCurrentDate] = useState();

    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [successDialog, setSuccesDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });
    const [errorDialog, setErrorDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });

    var showdate = new Date();
    var displaytodaysdate = showdate.getFullYear() + '-' + (showdate.getMonth() + 1) + '-' + showdate.getDate();

    const history = useHistory();

    useEffect(() => {
        Axios.get("http://localhost:3001/InhabitantLogin").then((response) => {
            if (response.data.loggedIn === true) {
                setInhabitantId(response.data.user[0].indv_inhabitant_id);
            }
        });
    }, []);

    function submit_feedback() {
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
        } else if (!feedback) {
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
                yesButton: <button onClick={() => feedback_confirmed()} className="alert_yesBtn"> Yes </button>
            })
        }
    }

    function feedback_confirmed() {
        Axios.post("http://localhost:3001/Feedback", {
            feedback_suggestion_first_name: first_name,
            feedback_suggestion_middle_name: middle_name,
            feedback_suggestion_last_name: last_name,
            feedback_suggestion_suffix: suffix,
            feedback_suggestion_details: feedback,
            feedback_suggestion_inhabitant_id: indv_inhabitant_id,
            feedback_suggestion_date_today: displaytodaysdate,
        }).then((response) => {
            console.log(response);
        })
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        setSuccesDialog({
            isOpen: true,
            title: "Suggestion Submitted!",
            subtitle: "",
            noButton: <button onClick={() => setSuccesDialog({ ...successDialog, isOpen: false })} className="alert_backBtn">Back</button>
        })
        setNotify({ isOpen: true, message: "Blotter Submit Successfully", type: "success" })
    }


    function BackToHome() {
        history.push("/home")
    }

    return (
        <div>
            <Navbar />
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            <LoginAuthPop errorDialog={errorDialog} setErrorDialog={setErrorDialog} />
            <SuccessDialog successDialog={successDialog} setSuccessDialog={successDialog} />
            <div className="Feedbacks_container">
                <div className="container">
                    <div className="EditProfile_container">
                        <div className="wrapper">
                            <div className="titles">
                                Feedbacks and Suggestions
                            </div>
                            <div className="forms_introduction_english">
                                <p>
                                    As a part of continuous and committed public service, we want to hear your Feedbacks and Suggestions to serve you better! Express your satisfaction by filling up the form provided.
                                </p>
                                <p className="disclaimer">
                                    DISCLAIMER: Submitted forms will undergo to Barangay for viewing, unlawful or defamatory statements can be subjected to a legal action.
                                </p>
                            </div>
                            <div className="forms_introduction_tagalog">
                                <p>
                                    Bilang bahagi ng tuloy-tuloy at nakatuon na serbisyo publiko, nais naming marinig ang iyong Mga Feedback at Mungkahi na mas maihatid ka! Ipahayag ang iyong kasiyahan sa pamamagitan ng pagpunan ng ibinigay na form.
                                </p>
                                <p className="disclaimer_tagalog">
                                    DISCLAIMER: Ang mga naisumite na form ay sasailalim sa Barangay para sa pagtingin, labag sa batas o mapanirang pahiwatig na pahayag ay maaaring mapailalim sa isang ligal na aksyon.
                                </p>
                            </div>
                            <p className="required_symbol_english">All <span className="required_symbol">*</span> are required. </p>
                            <p className="required_symbol_tagalog">Lahat ng may <span className="required_symbol">*</span> ay kailangan. </p>
                            <div className="forms">
                                <div className="input_fields">
                                    <input type="text" hidden className="inputs" value={indv_inhabitant_id} onChange={(e) => setInhabitantId(e.target.value)} autocomplete="off" />
                                </div>
                                <div className="input_fields">
                                    <input type="text" hidden className="inputs" value={displaytodaysdate} onChange={(e) => setCurrentDate(e.target.value)} autocomplete="off" />

                                </div>
                                <div className="input_fields">
                                    <label>First Name</label>
                                    <input type="text" className="inputs" onChange={(e) => setFirstName(e.target.value)} autocomplete="off" />
                                </div>
                                <div className="input_fields">
                                    <label>Middle Name</label>
                                    <input type="text" className="inputs" onChange={(e) => setMiddleName(e.target.value)} autocomplete="off" />
                                </div>
                                <div className="input_fields">
                                    <label>Last Name</label>
                                    <input type="text" className="inputs" onChange={(e) => setLastName(e.target.value)} autocomplete="off" />
                                </div>
                                <div className="input_fields">
                                    <label>Suffix</label>
                                    <input type="text" className="inputs" onChange={(e) => setSuffix(e.target.value)} autocomplete="off" />
                                </div>
                                <div className="input_fields">
                                    <label>Please give as much detail as you can and share examples if you have any: <span className="required_symbol">*</span></label>
                                    <textarea className="textarea" onChange={(e) => setFeedback(e.target.value)} autocomplete="off"></textarea>
                                </div>
                                <div className="input_fields">
                                    <input type="submit" value="Submit" className="btn" onClick={submit_feedback} />
                                </div>
                                <div className="input_fields">
                                    <input type="submit" value="Back" className="btn" onClick={BackToHome} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Feedbacks;