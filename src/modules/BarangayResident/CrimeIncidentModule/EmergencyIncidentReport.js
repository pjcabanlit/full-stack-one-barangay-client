import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './EmergencyIncidentReport.css';
import LoginAuthPop from './../../../components/Dialog/LoginAuthPop';
import Notification from './../../../components/Dialog/Notification';
import ConfirmDialog from './../../../components/Dialog/ConfirmDialog';
import ScrollToTop from './../../../components/ScrollToTop/ScrollToTop';
import Navbar from './../../../components/Navbar/Navbar';
import Footer from './../../../components/Footer/Footer';

function EmergencyIncidentReport() {
    //state for Report's Category
    const [category, setCategory] = useState("");

    //state for BrgyMember ID
    const [indv_inhabitant_id, setInhabitantId] = useState("")
    const [brgyaccount_id, setBrgyAccountId] = useState("");

    //states for Popup confirmation dialog notification
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [errorDialog, setErrorDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });

    //getting the Brgy member Id
    useEffect(() => {
        Axios.get("http://localhost:3001/InhabitantLogin").then((response) => {
            if (response.data.loggedIn === true) {
                setInhabitantId(response.data.user[0].indv_inhabitant_id);
                setBrgyAccountId(response.data.user[0].brgyaccount_id);

            }
        });
    }, []);

    //states for Incident Report
    const [incidentDate, setIncidentDate] = useState("");
    const [incidentTime, setIncidentTime] = useState("");
    const [incidentLocation, setIncidentLocation] = useState("")
    const [incident, setIncident] = useState("");
    const [injury, setInjury] = useState("");
    const [injuryDescription, setInjuryDescription] = useState("");
    const [damageProperty, setDamageProperty] = useState("");
    const [damageDescription, setDamageDescription] = useState("");
    const [incidentCause, setIncidentCause] = useState("");
    const [incidentPrevention, setIncidentPrevention] = useState("");

    function incident_report_submit() {
        setErrorDialog({
            ...errorDialog,
            isOpen: false
        })
        setConfirmDialog({
            ...confirmDialog,
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
        } else if (!incidentDate || !incidentTime || !incident || !injury || !damageProperty || !incidentCause || !incidentPrevention || !incidentLocation) {
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
        } else if ((injury === "Yes" && !injuryDescription) || (damageProperty === "Yes" && !damageDescription)) {
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
        } else {
            setConfirmDialog({
                isOpen: true,
                title: "Report Confirmation",
                subtitle: "Are you sure you want to submit the Report?",
                noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn">No</button>,
                yesButton: <button onClick={() => incident_report_confirmed()} className="alert_yesBtn"> Yes </button>
            })
        }
    }

    function incident_report_confirmed() {
        Axios.post("http://localhost:3001/IncidentReport", {
            IncidentReport_date: incidentDate,
            IncidentReport_time: incidentTime,
            IncidentReport_location: incidentLocation,
            IncidentReport_incident: incident,
            IncidentReport_injury: injury,
            IncidentReport_damageProperty: damageProperty,
            IncidentReport_incidentCause: incidentCause,
            IncidentReport_incidentPrevention: incidentPrevention,
            IncidentReport_injuryDescription: injuryDescription,
            IncidentReport_damageDescription: damageDescription,
            IncidentReport_indv_inhabitant_id: indv_inhabitant_id,
            IncidentReport_brgyaccount_id: brgyaccount_id,
        }).then((response) => {
            console.log(response);
        });
        confirmDialog({
            ...confirmDialog,
            isOpen: false,
        })
        setNotify({ isOpen: true, message: "Report Submitted", type: "success" })
    }

    //states for Fire Incident Report
    const [fireLocation, setFireLocation] = useState("");
    const [fireDetails, setFireDetails] = useState("");
    const [fireProblems, setFireProblems] = useState("");
    const [fireDate, setFireDate] = useState("");
    const [fireTime, setFireTime] = useState("");
    const [firebrigade, setFirebrigade] = useState("");

    function fire_report_submit() {
        setErrorDialog({
            ...errorDialog,
            isOpen: false
        })
        setConfirmDialog({
            ...confirmDialog,
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
        } else if (!fireLocation || !fireDetails || !fireProblems || !fireDate || !fireTime || !firebrigade) {
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
        } else {
            setConfirmDialog({
                isOpen: true,
                title: "Report Confirmation",
                subtitle: "Are you sure you want to submit the Report?",
                noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn">No</button>,
                yesButton: <button onClick={() => fire_report_confirmed()} className="alert_yesBtn"> Yes </button>
            })
        }
    }

    function fire_report_confirmed() {
        Axios.post("http://localhost:3001/FireReport", {
            FireReport_location: fireLocation,
            FireReport_details: fireDetails,
            FireReport_problems: fireProblems,
            FireReport_date: fireDate,
            FireReport_time: fireTime,
            FireReport_firebrigade: firebrigade,
            FireReport_indv_inhabitant_id: indv_inhabitant_id,
            FireReport_brgyaccount_id: brgyaccount_id
        }).then((response) => {
            console.log(response);
        });
        confirmDialog({
            ...confirmDialog,
            isOpen: false,
        })
        setNotify({ isOpen: true, message: "Report Submitted", type: "success" })
    }

    //states for Accident Report
    const [injuredPerson, setInjuredPerson] = useState("");
    const [addressOfInjured, setAddressOfInjuredPerson] = useState("");
    const [sexOfInjured, setSexOfInjuredPerson] = useState("");
    const [accidentDate, setAccidentDate] = useState("");
    const [accidentTime, setAccidentTime] = useState("");
    const [accidentLocation, setAccidentLocation] = useState("");
    const [bodyPartInjured, setBodyPartInjured] = useState("");
    const [accidentCause, setAccidentCause] = useState("");
    const [accidentDescription, setAccidentDescription] = useState("");
    const [accidentPrevention, setAccidentPrevention] = useState("");

    function accident_report_submit() {
        setErrorDialog({
            ...errorDialog,
            isOpen: false
        })
        setConfirmDialog({
            ...confirmDialog,
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
        } else if (!injuredPerson || !addressOfInjured || !sexOfInjured || !accidentTime || !accidentDate || !accidentLocation || !bodyPartInjured || !accidentCause || !accidentDescription || !accidentPrevention) {
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
        } else {
            setConfirmDialog({
                isOpen: true,
                title: "Report Confirmation",
                subtitle: "Are you sure you want to submit the Report?",
                noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn">No</button>,
                yesButton: <button onClick={() => accident_report_confirmed()} className="alert_yesBtn"> Yes </button>
            })
        }
    }

    function accident_report_confirmed() {
        Axios.post("http://localhost:3001/AccidentReport", {
            AccidentReport_injuredPerson: injuredPerson,
            AccidentReport_addressOfInjured: addressOfInjured,
            AccidentReport_sexOfInjured: sexOfInjured,
            AccidentReport_time: accidentTime,
            AccidentReport_date: accidentDate,
            AccidentReport_location: accidentLocation,
            AccidentReport_bodyPartInjured: bodyPartInjured,
            AccidentReport_accidentCause: accidentCause,
            AccidentReport_accidentDescription: accidentDescription,
            AccidentReport_accidentPrevention: accidentPrevention,
            AccidentReport_const_id: indv_inhabitant_id,
            AccidentReport_brgyaccount_id: brgyaccount_id,
        }).then((response) => {
            console.log(response);
        });
        confirmDialog({
            ...confirmDialog,
            isOpen: false,
        })
        setNotify({ isOpen: true, message: "Report Submitted", type: "success" })
    }

    //states for Emergency Report
    const [emergencyFullname, setEmergencyFullname] = useState("");
    const [emergencyAddress, setEmergencyAddress] = useState("");
    const [emergencyDate, setEmergencyDate] = useState("");
    const [emergencyTime, setEmergencyTime] = useState("");
    const [emergencyDescription, setEmergencyDescription] = useState("");

    function emergency_report_submit() {
        setErrorDialog({
            ...errorDialog,
            isOpen: false
        })
        setConfirmDialog({
            ...confirmDialog,
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
        } else if (!emergencyFullname || !emergencyAddress || !emergencyDate || !emergencyTime || !emergencyDescription) {
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
        } else {
            setConfirmDialog({
                isOpen: true,
                title: "Report Confirmation",
                subtitle: "Are you sure you want to submit the Report?",
                noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn">No</button>,
                yesButton: <button onClick={() => emergency_report_confirmed()} className="alert_yesBtn"> Yes </button>
            })

        }
    }

    function emergency_report_confirmed() {
        Axios.post("http://localhost:3001/EmergencyReport", {
            EmergencyReport_fullName: emergencyFullname,
            EmergencyReport_emergencyAddress: emergencyAddress,
            EmergencyReport_date: emergencyDate,
            EmergencyReport_time: emergencyTime,
            EmergencyReport_description: emergencyDescription,
            EmergencyReport_indv_inhabitant_id: indv_inhabitant_id,
            EmergencyReport_brgyaccount_id: brgyaccount_id
        }).then((response) => {
            console.log(response);
        });
        confirmDialog({
            ...confirmDialog,
            isOpen: false,
        })
        setNotify({ isOpen: true, message: "Report Submitted", type: "success" })
    }

    return (
        <div className="EmergencyReports_container">
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            <LoginAuthPop errorDialog={errorDialog} setErrorDialog={setErrorDialog} />
            <Navbar />
            <ScrollToTop />
            <div className="container">
                <div className="EmergencyReports_category">
                    <center>
                        <label htmlFor="Category" className="category_label"> Please select what kind of report do you want to submit. <span className="required_symbol">*</span> <br />
                            <p className="tagalog_IEreport">Mangyaring piliin kung anong uri ng ulat ang nais mong isumite. </p>
                            <select className="category_select" onChange={(e) => { setCategory(e.target.value); }} >
                                <option value=""></option>
                                <option value="IncidentReport"> Incident Report</option>
                                <option value="FireIncidentReport">Fire Incident Report</option>
                                <option value="EmergencyReport">Emergency Report</option>
                                <option value="AccidentReport">Accident Report</option>
                            </select>
                        </label>
                        <input type="text" value={indv_inhabitant_id} onChange={(e) => setInhabitantId(e.target.value)} hidden />
                        <input type="text" value={brgyaccount_id} onChange={(e) => setBrgyAccountId(e.target.value)} hidden />
                    </center>
                </div>

                {category === "" ? <div className="EmergencyReports_contents">
                    <div className="EmergencyReports_IncidentReport">
                        <div className="EmergencyReports_IncidentReport_content">
                            <h1>What is an Incident Report?</h1>
                            <p>An incident report is a tool that documents any event that may or may not have caused injuries to a person or damage to a company asset. It is used to capture injuries and accidents, near misses, property and equipment damage, health and safety issues, security breaches and misconducts in the worksite.</p>

                        </div>
                        <div className="EmergencyReports_IncidentReport_content">
                            <h1>What is the Purpose of Incident Reporting?</h1>
                            <p>An incident report can be used in the investigation and analysis of an event. It includes the root cause and corrective actions to eliminate the risks involved and prevent similar future occurrences. Incident reports can also be used as safety documents that indicate potential risks and uncontrolled hazards found in the worksite.</p>
                            <p>Incident reporting is the process of documenting all worksite injuries, near misses, and accidents. An incident report should be completed at the time an incident occurs no matter how minor an injury is. This article covers an in-depth explanation of the incident reporting procedure and the types of events you should report.</p>

                        </div>
                        <div className="EmergencyReports_IncidentReport_content">
                            <h1>What is Considered an Incident?</h1>
                            <p>Generally, an incident is defined as any event, condition, or situation which:</p>
                            <ul>
                                <li>Causes disruption or interference to an organization;</li>
                                <li>Causes significant risks that could affect members within an organization;</li>
                                <li>Impacts on the systems and operation of worksites; and/ or</li>
                                <li>Attracts negative media attention or a negative profile for the worksite</li>
                            </ul>
                        </div>
                        <div className="EmergencyReports_IncidentReport_content">
                            <h1>What to do After Completing an Incident Report</h1>
                            <p>The incident report should be submitted to an investigation team to further study and look for deeper causes. An investigation should be conducted by those who are competent in collecting and analyzing information and evidence gathered from the incident report. Those conducting the investigation should be knowledgeable in occupational health and safety fundamentals.</p>
                            <p>The purpose of investigating an incident is not to find fault but to determine the root cause and develop corrective actions to prevent similar incidents from happening. An investigation also helps fulfill regulatory requirements (such as OSHA 300 Forms in the United States) and determines the costs involved with property or equipment damage (if any).</p>
                        </div>
                    </div>
                </div> : null}
                {category === "FireIncidentReport" ?
                    <div className="wrapper">
                        <div className="titles">
                            Fire Incident Report
                        </div>
                        <div className="IncidentReport_title">
                            <center>
                                <p className="IncidentReport_requireNotice">All <span className="required_symbol">*</span> are required</p>
                            </center>
                        </div>
                        <div className="forms">
                            <div className="input_fields">
                                <label>Fire Incident Location<span className="required_symbol">*</span></label>
                                <textarea className="textarea" onChange={(e) => setFireLocation(e.target.value)}> </textarea>
                            </div>
                            <div className="input_fields">
                                <label>Fire Incident Details<span className="required_symbol">*</span></label>
                                <textarea className="textarea" onChange={(e) => setFireDetails(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>Fire Problems Identified<span className="required_symbol">*</span></label>
                                <textarea type="text" className="textarea" onChange={(e) => setFireProblems(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>Date of Fire Incident<span className="required_symbol">*</span></label>
                                <input type="date" className="inputs" onChange={(e => setFireDate(e.target.value))} />
                            </div>
                            <div className="input_fields">
                                <label>Time of Fire Incident<span className="required_symbol">*</span></label>
                                <input type="time" className="inputs" onChange={(e => setFireTime(e.target.value))} />
                            </div>
                            <div className="input_fields">
                                <label>Did fire brigade attend?<span className="required_symbol">*</span></label>
                                <input type="radio" className="report_radio" name="fireBrigadeAttend" id="FByes" value="Yes" onChange={(e) => setFirebrigade(e.target.value)} />
                                <label className="report_labelRadio" for="FByes">Yes</label>
                                <input type="radio" className="report_radio" name="fireBrigadeAttend" id="FBno" value="No" onChange={(e) => setFirebrigade(e.target.value)} />
                                <label className="report_labelRadio" for="FBno">No</label>
                            </div>
                            <div className="input_fields">
                                <input type="submit" value="Submit Report" className="btn" onClick={fire_report_submit} />
                            </div>
                        </div>
                    </div>
                    : null}
                {category === "IncidentReport" ?
                    <div className="wrapper">
                        <div className="titles">
                            Incident Report
                        </div>
                        <center>
                            <p className="IncidentReport_requireNotice">All <span className="required_symbol">*</span> are required</p>
                        </center>
                        <div className="forms">
                            <div className="input_fields">
                                <label>Date of Incident:<span className="required_symbol">*</span></label>
                                <input type="date" className="inputs" onChange={(e) => setIncidentDate(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>Time of Incident:<span className="required_symbol">*</span></label>
                                <input type="time" className="inputs" onChange={(e) => setIncidentTime(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>Location of Incident:<span className="required_symbol">*</span></label>
                                <textarea type="text" className="textarea" onChange={(e) => setIncidentLocation(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>What was the Incident?<span className="required_symbol">*</span></label>
                                <textarea type="text" className="textarea" onChange={(e) => setIncident(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>Were there any injuries?<span className="required_symbol">*</span></label>
                                <input type="radio" className="report_radio" name="anyInjury?" id="IYes" value="Yes" onChange={(e) => setInjury(e.target.value)} />
                                <label className="report_labelRadio" for="IYes">Yes</label>
                                <input type="radio" className="report_radio" name="anyInjury?" id="Ino" value="No" onChange={(e) => setInjury(e.target.value)} />
                                <label className="report_labelRadio" for="Ino">No</label>
                            </div>
                            {injury === "Yes" ?
                                <div className="input_fields">
                                    <label>Description of injury:<span className="required_symbol">*</span><br /><span className="translation_reports">Ilarawan Ang Pinsala</span></label>
                                    <textarea type="text" className="textarea" onChange={(e) => setInjuryDescription(e.target.value)} />
                                </div> : null}

                            <div className="input_fields">
                                <label>Were there any damage to property?<span className="required_symbol">*</span></label>
                                <input type="radio" className="report_radio" name="damageProperty?" id="dpYes" value="Yes" onChange={(e) => setDamageProperty(e.target.value)} />
                                <label className="report_labelRadio" for="dpYes">Yes</label>
                                <input type="radio" className="report_radio" name="damageProperty?" id="dpNo" value="No" onChange={(e) => setDamageProperty(e.target.value)} />
                                <label className="report_labelRadio" for="dpNo">No</label>
                            </div>
                            {damageProperty === "Yes" ?
                                <div className="input_fields">
                                    <label>Description of damage:<span className="required_symbol">*</span></label>
                                    <textarea type="text" className="textarea" onChange={(e) => setDamageDescription(e.target.value)} />
                                </div> : null}

                            <div className="input_fields">
                                <label>What caused the incident?<span className="required_symbol">*</span></label>
                                <textarea type="text" className="textarea" onChange={(e) => setIncidentCause(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>What actions shall be taken to eliminate future repeats of the incident?<span className="required_symbol">*</span></label>
                                <textarea type="text" className="textarea" onChange={(e) => setIncidentPrevention(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <input type="submit" value="Submit Report" className="btn" onClick={incident_report_submit} />
                            </div>

                        </div>
                    </div> : null}
                {category === "AccidentReport" ?
                    <div className="wrapper">
                        <div className="titles">
                            Accident Report
                        </div>
                        <center>
                            <p className="IncidentReport_requireNotice">All <span className="required_symbol">*</span> are required</p>
                        </center>
                        <div className="forms">
                            <div className="input_fields">
                                <label>Name of Injured Person:<span className="required_symbol">*</span></label>
                                <textarea type="text" className="textarea" onChange={(e) => setInjuredPerson(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>Address of Injured Person:<span className="required_symbol">*</span></label>
                                <textarea type="text" className="textarea" onChange={(e) => setAddressOfInjuredPerson(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>Sex of injured person:<span className="required_symbol">*</span></label>
                                <div className="custom_select">
                                    <select className="inputs" onChange={(e) => setSexOfInjuredPerson(e.target.value)} >
                                        <option value=""></option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input_fields">
                                <label>Date of Accident:<span className="required_symbol">*</span></label>
                                <input type="date" className="inputs" onChange={(e) => setAccidentDate(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>Time of Accident:<span className="required_symbol">*</span></label>
                                <input type="time" className="inputs" onChange={(e) => setAccidentTime(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>Exact location of Accident:<span className="required_symbol">*</span></label>
                                <textarea type="text" className="textarea" onChange={(e) => setAccidentLocation(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>What part of the body was injured?<span className="required_symbol">*</span></label>
                                <textarea type="text" className="textarea" onChange={(e) => setBodyPartInjured(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>What caused the accident?<span className="required_symbol">*</span></label>
                                <textarea type="text" className="textarea" onChange={(e) => setAccidentCause(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>Describe how the accident happened:<span className="required_symbol">*</span></label>
                                <textarea type="text" className="textarea" onChange={(e) => setAccidentDescription(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>Recommended preventive action to take in the future to prevent reoccurence:<span className="required_symbol">*</span></label>
                                <textarea type="text" className="textarea" onChange={(e) => setAccidentPrevention(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <input type="submit" value="Submit Report" className="btn" onClick={accident_report_submit} />
                            </div>

                        </div>
                    </div> : null}
                {category === "EmergencyReport" ?
                    <div className="wrapper">
                        <div className="titles">
                            Emergency Report
                        </div>
                        <center>
                            <p className="IncidentReport_requireNotice">All <span className="required_symbol">*</span> are required</p>
                        </center>
                        <div className="forms">
                            <div className="input_fields">
                                <label>Full Name:</label>
                                <input type="text" className="inputs" onChange={(e) => setEmergencyFullname(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>Location of the Emergency:<span className="required_symbol">*</span></label>
                                <textarea type="text" className="textarea" onChange={(e) => setEmergencyAddress(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>Date and Time:<span className="required_symbol">*</span></label>
                                <input type="date" className="inputs" onChange={(e) => setEmergencyDate(e.target.value)} />
                                <input type="time" className="inputs" onChange={(e) => setEmergencyTime(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>Describe the Emergency:<span className="required_symbol">*</span></label>
                                <textarea type="text" className="textarea" onChange={(e) => setEmergencyDescription(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <input type="submit" value="Submit Report" className="btn" onClick={emergency_report_submit} />
                            </div>
                        </div>
                    </div>
                    : null}
            </div>
            <Footer />

        </div>
    )
} export default EmergencyIncidentReport