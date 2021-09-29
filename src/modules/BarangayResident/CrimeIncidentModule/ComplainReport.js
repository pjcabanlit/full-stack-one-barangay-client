import React, { useState, useEffect } from 'react';
import './ComplainReport.css'
import Axios from 'axios'
import Navbar from './../../../components/Navbar/Navbar';
import Footer from './../../../components/Footer/Footer';
import LoginAuthPop from './../../../components/Dialog/LoginAuthPop';
import Notification from './../../../components/Dialog/Notification';
import ConfirmDialog from './../../../components/Dialog/ConfirmDialog';


function ComplainReport() {
    const [full_name, setFullName] = useState("");
    const [complain, setComplain] = useState("");
    const [contact, setContact] = useState("");
    const [indv_inhabitant_id, setInhabitantId] = useState("");
    const [brgyaccount_id, setBrgyAccountId] = useState("");
    const [anonymous, setAnonymous] = useState("");

    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [errorDialog, setErrorDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });



    useEffect(() => {
        Axios.get("http://localhost:3001/InhabitantLogin").then((response) => {
            if (response.data.loggedIn === true) {
                setInhabitantId(response.data.user[0].indv_inhabitant_id);
                setBrgyAccountId(response.data.user[0].brgyaccount_id);

            }
        });
    }, []);

    function Submit_Complain() {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        setErrorDialog({
            ...errorDialog,
            isOpen: false
        })

        if (!indv_inhabitant_id) {
            setErrorDialog({
                isOpen: true,
                title: "Oops! Access Denied.",
                subtitle: "You must be logged in to continue.",
                noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
            })
            setConfirmDialog({
                ...confirmDialog,
                isOpen: false
            })
        } else if (anonymous) {
            if (!complain) {
                setConfirmDialog({
                    isOpen: true,
                    title: "Input Error!",
                    subtitle: "Required fields must not be empty",
                    noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_backBtn">Back</button>
                })
                setErrorDialog({
                    ...errorDialog,
                    isOpen: false
                })

            } else {
                Axios.post("http://localhost:3001/ComplainReport", {
                    complain_report_fName: full_name,
                    complain_report_complain: complain,
                    complain_report_contact: contact,
                    complain_report_indv_inhabitant_id: indv_inhabitant_id,
                    complain_report_brgyaccount_id: brgyaccount_id,
                    complain_report_anon: anonymous,
                }).then((response) => {
                    console.log(response);
                });
                setNotify({ isOpen: true, message: "Complain Report Submitted!", type: "success" })
            }
        } else {
            if (!full_name || !complain || !contact) {
                setConfirmDialog({
                    isOpen: true,
                    title: "Input Error!",
                    subtitle: "Required fields must not be empty",
                    noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_backBtn">Back</button>
                })
            } else {
                Axios.post("http://localhost:3001/ComplainReport", {
                    complain_report_fName: full_name,
                    complain_report_complain: complain,
                    complain_report_contact: contact,
                    complain_report_indv_inhabitant_id: indv_inhabitant_id,
                    complain_report_brgyaccount_id: brgyaccount_id,
                    complain_report_anon: anonymous,
                }).then((response) => {
                    console.log(response);
                });
                setNotify({ isOpen: true, message: "Complain Report Submitted!", type: "success" })
            }
        }
    }

    return (
        <div>
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            <LoginAuthPop errorDialog={errorDialog} setErrorDialog={setErrorDialog} />
            <Navbar />
            <div className="emrgncy_incdnt_container">
                <div className="container">
                    <div className="EditProfile_container">
                        <div className="wrapper">
                            <div className="brgy_cl_titles">
                                <h1>Complain Report</h1>
                                <p>Complain Report is a legal documentation written or applied by an individual to report grievances and wrongdoing. </p>
                                <p className="noteTagalog3"> Ang Complain Report ay isang legal na dokyumento upang mag sumite ng hinaing o maling gawain na nagaganap sa Barangay. </p>
                                <p>All <span className="required_symbol">*</span> are required. </p>
                            </div>
                            <div className="forms">
                                <input type="text" value={indv_inhabitant_id} onChange={(e) => setInhabitantId(e.target.value)} hidden />
                                <input type="text" value={brgyaccount_id} onChange={(e) => setBrgyAccountId(e.target.value)} hidden />
                                <div className="input_fields">
                                    <input type="checkbox" className="report_radio" name="Anonymous" id="Anonymous" onChange={(e) => setAnonymous(e.target.checked)} />
                                    <label className="report_labelRadio" for="Anonymous">Send As Anonymous</label>
                                </div>
                                {anonymous ? <div>
                                    <div className="input_fields">
                                        <label>Complain</label>
                                        <textarea className="textarea" onChange={(e) => setComplain(e.target.value)}></textarea>
                                    </div>
                                </div> : <div>
                                    <div className="input_fields">
                                        <label>Full Name</label>
                                        <input type="text" className="inputs" onChange={(e) => { setFullName(e.target.value); }} />
                                    </div>
                                    <div className="input_fields">
                                        <label>Complain</label>
                                        <textarea className="textarea" onChange={(e) => setComplain(e.target.value)}></textarea>
                                    </div>
                                    <div className="input_fields">
                                        <label>Contact</label>
                                        <input type="number" className="inputs" onChange={(e) => setContact(e.target.value)} />
                                    </div>
                                </div>

                                }
                                <div className="complain_margin"></div>
                                <div className="input_fields">
                                    <input type="submit" value="Submit" className="btn" onClick={() => {
                                        setConfirmDialog({
                                            isOpen: true,
                                            title: "Complain Confirmation",
                                            subtitle: "Are you sure you want to submit the Report?",
                                            yesButton: <button onClick={() => Submit_Complain()} className="alert_yesBtn"> Yes </button>,
                                            noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn">No</button>,
                                        })
                                    }} />
                                </div>
                                <div className="input_fields">
                                    <input type="submit" value="Back" className="btn" />
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

export default ComplainReport;