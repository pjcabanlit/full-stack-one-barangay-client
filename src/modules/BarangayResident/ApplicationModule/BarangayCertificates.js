import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import './BarangayCertificates.css';
import Footer from './../../../components/Footer/Footer';
import Notification from './../../../components/Dialog/Notification';
import ConfirmDialog from './../../../components/Dialog/ConfirmDialog';
import LoginAuthPop from './../../../components/Dialog/LoginAuthPop';
import SuccessRegisterDialog from './../../../components/Dialog/SuccessRegisterDialog';
import Navbar from './../../../components/Navbar/Navbar';
import ScrollToTop from './../../../components/ScrollToTop/ScrollToTop';

function BarangayCertificates() {
    //Community Member Details
    const [indv_inhabitant_id, setInhabitantId] = useState("");
    const [brgyaccount_id, setBrgyAccountId] = useState("");
    const [first_name, setFirstName] = useState("");
    const [middle_name, setMiddleName] = useState("");
    const [last_name, setLastName] = useState("");
    const [suffix, setSuffix] = useState("");
    const [address, setAddress] = useState("");
    const [sex, setSex] = useState("");
    const [date_today, setDateToday] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [purpose, setPurpose] = useState("");
    const [civil_status, setCivilStatus] = useState("");
    const [years_resided, setYearsResided] = useState("");
    const [vending_location, setVendingLocation] = useState("");
    const [document_type, setDocumentType] = useState("");
    const [contact_person, setContactPerson] = useState("");
    const [contact_address, setContactAddress] = useState("");
    const [contact_contact, setContactContact] = useState("");
    const [business_name, setBusinessName] = useState("");
    const [business_address, setBusinessAddress] = useState("");
    const [business_type, setBusinessType] = useState("");
    const [status, setStatus] = useState("");
    const [vehicle, setVehicle] = useState("");
    const [vehicle_type, setVehicleType] = useState("");
    const [plate_no, setPlateNo] = useState("");
    const [destination, setDestination] = useState("");
    const [departure_date, setDepartureDate] = useState("");

    const [request, setRequest] = useState("");
    const [check, setCheck] = useState("");
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [errorDialog, setErrorDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });
    const [successRegisterDialog, setSuccessRegisterDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const history = useHistory();
    var showdate = new Date();
    var displaytodaysdate = showdate.getFullYear() + '-' + (showdate.getMonth() + 1) + '-' + showdate.getDate();

    useEffect(() => {
        Axios.get("http://localhost:3001/InhabitantLogin").then((response) => {
            if (response.data.loggedIn === true) {
                setInhabitantId(response.data.user[0].indv_inhabitant_id);
                setBrgyAccountId(response.data.user[0].brgyaccount_id);
                setFirstName(response.data.user[0].first_name);
                setMiddleName(response.data.user[0].middle_name);
                setLastName(response.data.user[0].last_name);
                setSex(response.data.user[0].gender);
                setAddress(response.data.user[0].complete_address);
                setSuffix(response.data.user[0].suffix)
                setCivilStatus(response.data.user[0].civil_status)
                setBirthdate(response.data.user[0].birthdate);
            }
        });
    }, []);


    function apply_certificate() {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        setErrorDialog({
            ...errorDialog,
            isOpen: false
        })
        setSuccessRegisterDialog({
            ...successRegisterDialog,
            isOpen: false
        })
        if (!indv_inhabitant_id) {
            setErrorDialog({
                isOpen: true,
                title: "Oops! Session Expired or Not Logged In",
                subtitle: "You must be logged in to apply this document.",
                noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
            })
            setSuccessRegisterDialog({
                ...successRegisterDialog,
                isOpen: false
            })
            setConfirmDialog({
                ...confirmDialog,
                isOpen: false
            })
        } else if (document_type === "Certificate of Indigency") {
            if (!first_name || !last_name || !address || !sex || !years_resided || !purpose) {
                setErrorDialog({
                    isOpen: true,
                    title: "Input Error!",
                    subtitle: "Required fields must not be empty",
                    noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
                })
                setSuccessRegisterDialog({
                    ...successRegisterDialog,
                    isOpen: false
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
                    yesButton: <button onClick={() => indigency_confirmed()} className="alert_yesBtn"> Yes </button>
                })
            }
        } else if (document_type === "Barangay ID") {
            if (!indv_inhabitant_id) {
                setErrorDialog({
                    isOpen: true,
                    title: "Oops! Session Expired or Not Logged In",
                    subtitle: "You must be logged in to apply this document.",
                    noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
                })
                setSuccessRegisterDialog({
                    ...successRegisterDialog,
                    isOpen: false
                })
                setConfirmDialog({
                    ...confirmDialog,
                    isOpen: false
                })
            } else if (!first_name || !last_name || !address || !sex || !birthdate || !purpose || !contact_person || !contact_address || !contact_contact) {
                setErrorDialog({
                    isOpen: true,
                    title: "Input Error!",
                    subtitle: "Required fields must not be empty",
                    noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
                })
                setSuccessRegisterDialog({
                    ...successRegisterDialog,
                    isOpen: false
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
                    yesButton: <button onClick={() => barangay_id_confirmed()} className="alert_yesBtn"> Yes </button>
                })
            }
        } else if (document_type === "Good Moral") {
            if (!indv_inhabitant_id) {
                setErrorDialog({
                    isOpen: true,
                    title: "Oops! Session Expired or Not Logged In",
                    subtitle: "You must be logged in to apply this document.",
                    noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
                })
                setSuccessRegisterDialog({
                    ...successRegisterDialog,
                    isOpen: false
                })
                setConfirmDialog({
                    ...confirmDialog,
                    isOpen: false
                })
            } else if (!first_name || !last_name || !address || !sex || !purpose) {
                setErrorDialog({
                    isOpen: true,
                    title: "Input Error!",
                    subtitle: "Required fields must not be empty",
                    noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
                })
                setSuccessRegisterDialog({
                    ...successRegisterDialog,
                    isOpen: false
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
                    yesButton: <button onClick={() => good_moral_confirmed()} className="alert_yesBtn"> Yes </button>
                })
            }
        } else if (document_type === "Business Clearance") {
            if (!indv_inhabitant_id) {
                setErrorDialog({
                    isOpen: true,
                    title: "Oops! Session Expired or Not Logged In",
                    subtitle: "You must be logged in to apply this document.",
                    noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
                })
                setSuccessRegisterDialog({
                    ...successRegisterDialog,
                    isOpen: false
                })
                setConfirmDialog({
                    ...confirmDialog,
                    isOpen: false
                })
            } else if (!first_name || !last_name || !business_name || !business_address || !business_type || !status) {
                setErrorDialog({
                    isOpen: true,
                    title: "Input Error!",
                    subtitle: "Required fields must not be empty",
                    noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
                })
                setSuccessRegisterDialog({
                    ...successRegisterDialog,
                    isOpen: false
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
                    yesButton: <button onClick={() => business_clearance_confirmed()} className="alert_yesBtn"> Yes </button>
                })
            }
        } else if (document_type === "Barangay Clearance") {
            if (!indv_inhabitant_id) {
                setErrorDialog({
                    isOpen: true,
                    title: "Oops! Session Expired or Not Logged In",
                    subtitle: "You must be logged in to apply this document.",
                    noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
                })
                setSuccessRegisterDialog({
                    ...successRegisterDialog,
                    isOpen: false
                })
                setConfirmDialog({
                    ...confirmDialog,
                    isOpen: false
                })
            } else if (!first_name || !last_name || !address || !sex || !birthdate || !civil_status || !purpose) {
                setErrorDialog({
                    isOpen: true,
                    title: "Input Error!",
                    subtitle: "Required fields must not be empty",
                    noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
                })
                setSuccessRegisterDialog({
                    ...successRegisterDialog,
                    isOpen: false
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
                    yesButton: <button onClick={() => barangay_clearance_confirmed()} className="alert_yesBtn"> Yes </button>
                })
            }
        } else if (document_type === "Travel Pass") {
            if (!indv_inhabitant_id) {
                setErrorDialog({
                    isOpen: true,
                    title: "Oops! Session Expired or Not Logged In",
                    subtitle: "You must be logged in to apply this document.",
                    noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
                })
                setSuccessRegisterDialog({
                    ...successRegisterDialog,
                    isOpen: false
                })
                setConfirmDialog({
                    ...confirmDialog,
                    isOpen: false
                })
            } else if (!first_name || !last_name || !address || !vehicle || !destination || !departure_date || !purpose) {
                setErrorDialog({
                    isOpen: true,
                    title: "Input Error!",
                    subtitle: "Required fields must not be empty",
                    noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
                })
                setSuccessRegisterDialog({
                    ...successRegisterDialog,
                    isOpen: false
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
                    yesButton: <button onClick={() => travel_pass_confirmed()} className="alert_yesBtn"> Yes </button>
                })
            };
        };
    };

    function indigency_confirmed() {
        Axios.post("http://localhost:3001/BarangayCertificates", {
            brgy_cert_InhabitantId: indv_inhabitant_id,
            brgy_cert_BrgyAccountId: brgyaccount_id,
            brgy_cert_fName: first_name,
            brgy_cert_mName: middle_name,
            brgy_cert_lName: last_name,
            brgy_cert_suffix: suffix,
            brgy_cert_sex: sex,
            brgy_cert_address: address,
            brgy_cert_dToday: displaytodaysdate,
            brgy_cert_purpose: purpose,
            brgy_cert_dType: document_type,
            brgy_cert_yResided: years_resided,

        }).then((response) => {
            console.log(response);
        });
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false,
        })
        setSuccessRegisterDialog({
            isOpen: true,
            title: "Application Successfully Submitted!",
            subtitle: "Do you want to request another document?",
            yesButton: <button onClick={() => RequestAgain()} className="alert_yesBtn">Yes</button>,
            noButton: <button onClick={() => setSuccessRegisterDialog({ ...successRegisterDialog, isOpen: false })} className="alert_backBtn">Back</button>,
        })
        setNotify({ isOpen: true, message: "Registered Successfully", type: "success" });
    }

    function barangay_id_confirmed() {
        Axios.post("http://localhost:3001/BarangayCertificates", {
            brgy_cert_InhabitantId: indv_inhabitant_id,
            brgy_cert_BrgyAccountId: brgyaccount_id,
            brgy_cert_fName: first_name,
            brgy_cert_mName: middle_name,
            brgy_cert_lName: last_name,
            brgy_cert_suffix: suffix,
            brgy_cert_sex: sex,
            brgy_cert_address: address,
            brgy_cert_dToday: displaytodaysdate,
            brgy_cert_birthdate: birthdate,
            brgy_cert_purpose: purpose,
            brgy_cert_dType: document_type,
            brgy_cert_cPerson: contact_person,
            brgy_cert_cAddress: contact_address,
            brgy_cert_cContact: contact_contact,

        }).then((response) => {
            console.log(response);
        });
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false,
        })
        setSuccessRegisterDialog({
            isOpen: true,
            title: "Application Successfully Submitted!",
            subtitle: "Do you want to request another document?",
            yesButton: <button onClick={() => RequestAgain()} className="alert_yesBtn">Yes</button>,
            noButton: <button onClick={() => setSuccessRegisterDialog({ ...successRegisterDialog, isOpen: false })} className="alert_backBtn">Back</button>,
        })
        setNotify({ isOpen: true, message: "Registered Successfully", type: "success" });
    }

    function good_moral_confirmed() {
        Axios.post("http://localhost:3001/BarangayCertificates", {
            brgy_cert_InhabitantId: indv_inhabitant_id,
            brgy_cert_BrgyAccountId: brgyaccount_id,
            brgy_cert_fName: first_name,
            brgy_cert_mName: middle_name,
            brgy_cert_lName: last_name,
            brgy_cert_suffix: suffix,
            brgy_cert_sex: sex,
            brgy_cert_address: address,
            brgy_cert_dToday: displaytodaysdate,
            brgy_cert_purpose: purpose,
            brgy_cert_dType: document_type,
        }).then((response) => {
            console.log(response);
        });
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false,
        })
        setSuccessRegisterDialog({
            isOpen: true,
            title: "Application Successfully Submitted!",
            subtitle: "Do you want to request another document?",
            yesButton: <button onClick={() => RequestAgain()} className="alert_yesBtn">Yes</button>, noButton: <button onClick={() => setSuccessRegisterDialog({ ...successRegisterDialog, isOpen: false })} className="alert_backBtn">Back</button>,
        })
        setNotify({ isOpen: true, message: "Registered Successfully", type: "success" });
    }

    function business_clearance_confirmed() {
        Axios.post("http://localhost:3001/BarangayCertificates", {
            brgy_cert_InhabitantId: indv_inhabitant_id,
            brgy_cert_BrgyAccountId: brgyaccount_id,
            brgy_cert_fName: first_name,
            brgy_cert_mName: middle_name,
            brgy_cert_lName: last_name,
            brgy_cert_suffix: suffix,
            brgy_cert_dToday: displaytodaysdate,
            brgy_cert_dType: document_type,
            brgy_cert_bName: business_name,
            brgy_cert_bAddress: business_address,
            brgy_cert_bType: business_type,
            brgy_cert_bStatus: status,

        }).then((response) => {
            console.log(response);
        });
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false,
        })
        setSuccessRegisterDialog({
            isOpen: true,
            title: "Application Successfully Submitted!",
            subtitle: "Do you want to request another document?",
            yesButton: <button onClick={() => RequestAgain()} className="alert_yesBtn">Yes</button>,
            noButton: <button onClick={() => setSuccessRegisterDialog({ ...successRegisterDialog, isOpen: false })} className="alert_backBtn">Back</button>,
        })
        setNotify({ isOpen: true, message: "Registered Successfully", type: "success" });
    }

    function barangay_clearance_confirmed() {
        Axios.post("http://localhost:3001/BarangayCertificates", {
            brgy_cert_InhabitantId: indv_inhabitant_id,
            brgy_cert_BrgyAccountId: brgyaccount_id,
            brgy_cert_fName: first_name,
            brgy_cert_mName: middle_name,
            brgy_cert_lName: last_name,
            brgy_cert_suffix: suffix,
            brgy_cert_sex: sex,
            brgy_cert_address: address,
            brgy_cert_dToday: displaytodaysdate,
            brgy_cert_birthdate: birthdate,
            brgy_cert_purpose: purpose,
            brgy_cert_cStatus: civil_status,
            brgy_cert_dType: document_type,
            brgy_cert_yResided: years_resided,
            brgy_cert_cPerson: contact_person,
            brgy_cert_cAddress: contact_address,
            brgy_cert_cContact: contact_contact,
            brgy_cert_vLocation: vending_location,
        }).then((response) => {
            console.log(response);

        });
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false,
        })
        setSuccessRegisterDialog({
            isOpen: true,
            title: "Application Successfully Submitted!",
            subtitle: "Do you want to request another document?",
            yesButton: <button onClick={() => RequestAgain()} className="alert_yesBtn">Yes</button>,
            noButton: <button onClick={() => setSuccessRegisterDialog({ ...successRegisterDialog, isOpen: false })} className="alert_backBtn">Back</button>,
        })
        setNotify({ isOpen: true, message: "Registered Successfully", type: "success" });
    }

    function travel_pass_confirmed() {
        Axios.post("http://localhost:3001/TravelPass", {
            brgy_cert_InhabitantId: indv_inhabitant_id,
            brgy_cert_BrgyAccountId: brgyaccount_id,
            brgy_cert_fName: first_name,
            brgy_cert_mName: middle_name,
            brgy_cert_lName: last_name,
            brgy_cert_suffix: suffix,
            brgy_cert_address: address,
            brgy_cert_vType: vehicle_type,
            brgy_cert_pNo: plate_no,
            brgy_cert_destination: destination,
            brgy_cert_dDate: departure_date,
            brgy_cert_purpose: purpose,
            brgy_cert_dToday: displaytodaysdate,
            brgy_cert_dType: document_type,
        }).then((response) => {
            if (response.data.message) {
                setErrorDialog({
                    isOpen: true,
                    title: "Notice",
                    subtitle: "This user already have pending request for this document.",
                    noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
                })
            }
        });
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false,
        })
        setSuccessRegisterDialog({
            isOpen: true,
            title: "Application Successfully Submitted!",
            subtitle: "Do you want to request another document?",
            yesButton: <button onClick={() => RequestAgain()} className="alert_yesBtn">Yes</button>,
            noButton: <button onClick={() => setSuccessRegisterDialog({ ...successRegisterDialog, isOpen: false })} className="alert_backBtn">Back</button>,
        })
        setNotify({ isOpen: true, message: "Registered Successfully", type: "success" });
    }

    function RequestAgain() {
        setSuccessRegisterDialog({
            ...successRegisterDialog,
            isOpen: false
        })
        setRequest("");
        history.push("/Barangay-Certificates");
    }

    function backtoHome() {
        history.push("/ApplicationModule")
    }

    return (
        <div>
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            <LoginAuthPop errorDialog={errorDialog} setErrorDialog={setErrorDialog} />
            <SuccessRegisterDialog successRegisterDialog={successRegisterDialog} setSuccessRegisterDialog={setSuccessRegisterDialog} />
            <Navbar />
            <ScrollToTop />
            <div className="EditProfile_container">
                <div className="container">
                    <div className="wrapper">
                        <div className="brgy_cl_titles">
                            <h1>ONLINE APPLICATION FORM FOR BARANGAY CERTIFICATES</h1>
                            <p className="">Please fill out all required information which will be reflected in the Barangay registry and Barangay Certificate. We enjoin you to provide only true and accurate information to avoid penalties as provided in the law.</p>
                            <p className="noteTagalog3">Punan ang lahat ng kailangang impormasyon para sa inyong Barangay Certificate. Ibigay lamang ang totoo at tamang impormasyon upang maiwasan ang parusang ayos sa batas.</p>
                            <p>All <span className="required_symbol">*</span> are required. </p>
                            <p className="required_symbol_tagalog">Lahat ng may <span className="required_symbol">*</span> ay kailangan. </p>
                        </div>
                        <div className="forms">
                            <div className="input_fields">
                                <label>Are you requesting this document? <span className="required_symbol">*</span></label>
                                <div className="custom_select" onChange={(e) => { setRequest(e.target.value); }} >
                                    <select className="inputs">
                                        <option value="">Select</option>
                                        <option value="Yes">Yes. Extract My Information</option>
                                        <option value="No">No.</option>
                                    </select>
                                </div>
                            </div>
                            {request === "Yes" || request === "No" ?
                                <div>
                                    <div className="input_fields">
                                        <label>Type of Document <span className="required_symbol">*</span></label>
                                        <div className="custom_select" >
                                            <select className="inputs" onChange={(e) => { setDocumentType(e.target.value); }}>
                                                <option value="">Select</option>
                                                <option value="Certificate of Indigency">Certificate of Indigency</option>
                                                <option value="Barangay ID">Barangay ID</option>
                                                <option value="Good Moral">Good Moral</option>
                                                <option value="Business Clearance">Business Clearance</option>
                                                <option value="Barangay Clearance">Barangay Clearance</option>
                                                <option value="Travel Pass">Travel Pass</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Certificate of Indigency */}
                                    {document_type === "Certificate of Indigency" ? <div>
                                        <div className="input_fields">
                                            <label>First Name <span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setFirstName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? first_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Middle Name</label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setMiddleName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? middle_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Last Name <span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setLastName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? last_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Suffix</label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setSuffix(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? suffix : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Complete Address <span className="required_symbol">*</span></label>
                                            <textarea className="textarea" onChange={(e) => {
                                                setAddress(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? address : ""}></textarea>
                                        </div>

                                        <div className="input_fields">
                                            <label>Gender <span className="required_symbol">*</span></label>
                                            <div className="custom_select">
                                                <select className="inputs" onChange={(e) => { setSex(e.target.value) }} value={request === "Yes" ? sex : ""}>
                                                    <option value="">Select</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="input_fields">
                                            <label>Years Resided in the Barangay <span className="required_symbol">*</span></label>
                                            <input type="number" className="inputs" onChange={(e) => {
                                                setYearsResided(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? years_resided : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Purpose <span className="required_symbol">*</span></label>
                                            <div className="custom_select">
                                                <select className="inputs" onChange={(e) => { setPurpose(e.target.value); }}>
                                                    <option value="">Select</option>
                                                    <option value="All Legal Intents and Purposes">All Legal Intents and Purposes</option>
                                                    <option value="Applying A Job">Applying A Job</option>
                                                    <option value="Applying A Bank Account">Applying A Bank Account</option>
                                                    <option value="Certify Residency">Certify Residency</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                        {purpose === "Others" ? <div className="input_fields">
                                            <label>Please Specify Purpose<span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setPurpose(e.target.value);
                                            }} autoComplete="off" />
                                        </div> : ""}
                                    </div> : ""}

                                    {/* Barangay ID */}
                                    {document_type === "Barangay ID" ? <div>
                                        <div className="input_fields">
                                            <label>First Name <span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setFirstName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? first_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Middle Name</label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setMiddleName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? middle_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Last Name <span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setLastName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? last_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Suffix</label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setSuffix(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? suffix : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Complete Address <span className="required_symbol">*</span></label>
                                            <textarea className="textarea" onChange={(e) => {
                                                setAddress(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? address : ""}></textarea>
                                        </div>

                                        <div className="input_fields">
                                            <label>Gender <span className="required_symbol">*</span></label>
                                            <div className="custom_select">
                                                <select className="inputs" onChange={(e) => { setSex(e.target.value) }} value={request === "Yes" ? sex : ""}>
                                                    <option value="">Select</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="input_fields">
                                            <label>Birthdate <span className="required_symbol">*</span></label>
                                            <input type="date" className="inputs" onChange={(e) => {
                                                setBirthdate(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? birthdate : ""} />
                                        </div>

                                        <div className="input_fields">
                                            <label>Purpose <span className="required_symbol">*</span></label>
                                            <div className="custom_select">
                                                <select className="inputs" onChange={(e) => { setPurpose(e.target.value); }}>
                                                    <option value="">Select</option>
                                                    <option value="All Legal Intents and Purposes">All Legal Intents and Purposes</option>
                                                    <option value="Applying A Job">Applying A Job</option>
                                                    <option value="Applying A Bank Account">Applying A Bank Account</option>
                                                    <option value="Certify Residency">Certify Residency</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                        {purpose === "Others" ? <div className="input_fields">
                                            <label>Please Specify Purpose<span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setPurpose(e.target.value);
                                            }} autoComplete="off" />
                                        </div> : ""}
                                        <div className="person_to_contact">
                                            <p> Person to Contact In Case of Emergency </p>
                                        </div>
                                        <div className="input_fields">
                                            <label>Full Name <span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setContactPerson(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? contact_person : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Complete Address <span className="required_symbol">*</span></label>
                                            <textarea className="textarea" onChange={(e) => {
                                                setContactAddress(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? contact_address : ""}></textarea>
                                        </div>
                                        <div className="input_fields">
                                            <label>Contact No. <span className="required_symbol">*</span></label>
                                            <input type="number" className="inputs" onChange={(e) => {
                                                setContactContact(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? contact_contact : ""} />
                                        </div>
                                    </div> : ""}

                                    {/* Good Moral */}
                                    {document_type === "Good Moral" ? <div>
                                        <div className="input_fields">
                                            <label>First Name <span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setFirstName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? first_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Middle Name</label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setMiddleName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? middle_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Last Name <span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setLastName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? last_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Suffix</label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setSuffix(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? suffix : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Complete Address <span className="required_symbol">*</span></label>
                                            <textarea className="textarea" onChange={(e) => {
                                                setAddress(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? address : ""}></textarea>
                                        </div>

                                        <div className="input_fields">
                                            <label>Gender <span className="required_symbol">*</span></label>
                                            <div className="custom_select">
                                                <select className="inputs" onChange={(e) => { setSex(e.target.value) }} value={request === "Yes" ? sex : ""}>
                                                    <option value="">Select</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="input_fields">
                                            <label>Purpose <span className="required_symbol">*</span></label>
                                            <div className="custom_select">
                                                <select className="inputs" onChange={(e) => { setPurpose(e.target.value); }}>
                                                    <option value="">Select</option>
                                                    <option value="All Legal Intents and Purposes">All Legal Intents and Purposes</option>
                                                    <option value="Applying A Job">Applying A Job</option>
                                                    <option value="Applying A Bank Account">Applying A Bank Account</option>
                                                    <option value="Certify Residency">Certify Residency</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                        {purpose === "Others" ? <div className="input_fields">
                                            <label>Please Specify Purpose <span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setPurpose(e.target.value);
                                            }} autoComplete="off" />
                                        </div> : ""}
                                    </div> : ""}

                                    {/* Business Clearance */}
                                    {document_type === "Business Clearance" ? <div>
                                        <div className="input_fields">
                                            <label>First Name <span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setFirstName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? first_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Middle Name</label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setMiddleName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? middle_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Last Name <span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setLastName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? last_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Suffix</label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setSuffix(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? suffix : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Name of Business <span className="required_symbol">*</span> </label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setBusinessName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? business_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Business Address <span className="required_symbol">*</span></label>
                                            <textarea className="textarea" onChange={(e) => {
                                                setBusinessAddress(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? business_address : ""}></textarea>
                                        </div>
                                        <div className="input_fields">
                                            <label>Type of Business <span className="required_symbol">*</span> </label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setBusinessType(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? business_type : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Status <span className="required_symbol">*</span></label>
                                            <div className="custom_select">
                                                <select className="inputs" onChange={(e) => { setStatus(e.target.value); }}>
                                                    <option value="">Select</option>
                                                    <option value="New">New</option>
                                                    <option value="Renewal">Renewal</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div> : ""}

                                    {/* Barangay Clearance */}
                                    {document_type === "Barangay Clearance" ? <div>
                                        <div className="input_fields">
                                            <label>First Name <span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setFirstName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? first_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Middle Name</label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setMiddleName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? middle_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Last Name <span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setLastName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? last_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Suffix</label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setSuffix(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? suffix : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Complete Address <span className="required_symbol">*</span></label>
                                            <textarea className="textarea" onChange={(e) => {
                                                setAddress(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? address : ""}></textarea>
                                        </div>

                                        <div className="input_fields">
                                            <label>Gender <span className="required_symbol">*</span></label>
                                            <div className="custom_select">
                                                <select className="inputs" onChange={(e) => { setSex(e.target.value) }} value={request === "Yes" ? sex : ""}>
                                                    <option value="">Select</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="input_fields">
                                            <label>Birthdate <span className="required_symbol">*</span></label>
                                            <input type="date" className="inputs" onChange={(e) => {
                                                setBirthdate(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? birthdate : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Civil Status <span className="required_symbol">*</span></label>
                                            <div className="custom_select">
                                                <select className="inputs" onChange={(e) => { setCivilStatus(e.target.value); }} value={request === "Yes" ? civil_status : ""}>
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
                                            <label>Purpose <span className="required_symbol">*</span></label>
                                            <div className="custom_select">
                                                <select className="inputs" onChange={(e) => { setPurpose(e.target.value); }}>
                                                    <option value="">Select</option>
                                                    <option value="All Legal Intents and Purposes">All Legal Intents and Purposes</option>
                                                    <option value="Applying A Job">Applying A Job</option>
                                                    <option value="Applying A Bank Account">Applying A Bank Account</option>
                                                    <option value="Certify Residency">Certify Residency</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                        {purpose === "Others" ? <div className="input_fields">
                                            <label>Please Specify Purpose <span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setPurpose(e.target.value);
                                            }} autoComplete="off" />
                                        </div> : ""}
                                    </div> : ""}

                                    {document_type === "Travel Pass" ? <div>
                                        <div className="input_fields">
                                            <label>First Name <span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setFirstName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? first_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Middle Name</label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setMiddleName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? middle_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Last Name <span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setLastName(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? last_name : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Suffix</label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setSuffix(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? suffix : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Complete Address <span className="required_symbol">*</span></label>
                                            <textarea className="textarea" onChange={(e) => {
                                                setAddress(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? address : ""}></textarea>
                                        </div>
                                        <div className="input_fields">
                                            <label>Do you have a vehicle?<span className="required_symbol">*</span></label>
                                            <div className="custom_select">
                                                <select className="inputs" onChange={(e) => { setVehicle(e.target.value); }} value={request === "Yes" ? vehicle : ""}>
                                                    <option value="">Select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="None">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        {vehicle === "Yes" ? <div>
                                            <div className="input_fields">
                                                <label>Vehicle Type <span className="required_symbol">*</span></label>
                                                <input className="inputs" onChange={(e) => {
                                                    setVehicleType(e.target.value);
                                                }} autoComplete="off" value={request === "Yes" ? vehicle_type : ""} />
                                            </div>
                                            <div className="input_fields">
                                                <label>Plate No. <span className="required_symbol">*</span></label>
                                                <input type="text" className="inputs" onChange={(e) => {
                                                    setPlateNo(e.target.value);
                                                }} autoComplete="off" value={request === "Yes" ? plate_no : ""} />
                                            </div>
                                            <br />
                                        </div> : ""}

                                        <div className="input_fields">
                                            <label>Destination <span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setDestination(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? destination : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Date of Departure <span className="required_symbol">*</span></label>
                                            <input type="date" className="inputs" onChange={(e) => {
                                                setDepartureDate(e.target.value);
                                            }} autoComplete="off" value={request === "Yes" ? departure_date : ""} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Purpose <span className="required_symbol">*</span></label>
                                            <div className="custom_select">
                                                <select className="inputs" onChange={(e) => { setPurpose(e.target.value); }}>
                                                    <option value="">Select</option>
                                                    <option value="All Legal Intents and Purposes">All Legal Intents and Purposes</option>
                                                    <option value="Applying A Job">Applying A Job</option>
                                                    <option value="Applying A Bank Account">Applying A Bank Account</option>
                                                    <option value="Certify Residency">Certify Residency</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                        {purpose === "Others" ? <div className="input_fields">
                                            <label>Please Specify Purpose <span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" onChange={(e) => {
                                                setPurpose(e.target.value);
                                            }} autoComplete="off" />
                                        </div> : ""}

                                    </div> : ""}
                                    <div className="form-inputs">
                                        <label htmlFor="todaysdate" className="form-label">
                                            <input type="text" hidden value={displaytodaysdate} onChange={(e) => {
                                                setDateToday(e.target.value);
                                            }} autoComplete="off" />
                                        </label>
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="indv_inhabitant_id" className="form-label">
                                            <input type="text" hidden value={indv_inhabitant_id} onChange={(e) => {
                                                setInhabitantId(e.target.value);
                                            }} />
                                        </label>
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="brgyaccount_id" className="form-label">
                                            <input type="text" hidden value={brgyaccount_id} onChange={(e) => {
                                                setBrgyAccountId(e.target.value);
                                            }} />
                                        </label>
                                    </div>
                                    {!document_type ? "" : <div>
                                        <div className="input_fields terms">
                                            <label className="check">
                                                <input type="checkbox" onChange={(e) => { setCheck(e.target.checked) }} />
                                                <span className="checkmark"></span>
                                            </label>
                                            <p className="applicationForm_terms">I agree to the collection and use of all personal information I have provided through this application by One Barangay. I understand that the collection and the use of this data, shall be in accordance with the <a href="">Data Privacy Act of 2012</a> and <a href="">Privacy Policy of One Barangay</a></p>
                                        </div>
                                        <div className="note">
                                            <p className="noteEnglish">Note: Please provide your active email address and Philippine mobile number to receive updates on your Barangay Clearance application.</p>
                                            <p className="noteTagalog">Tandaan: Ibigay lamang ang iyong aktibong email address at Philippine mobile number upang makatanggap ng mga mensahe sa iyong rehistrasyon sa Barangay Clearance.</p>
                                        </div>
                                        <div className="note2">
                                            <p className="noteEnglish2">Note that providing false information to Barangay 407 is punishable by law with a penalty of fine and imprisonment in accordance of Barangay Law.</p>
                                            <p className="noteTagalog2">Tandaan na ang pagtatala ng maling impormasyon sa Barangay 407 ay may karampatang parusa na pagkakulong o multa alinsunod sa patuntunan ng Barangay.</p>
                                        </div>
                                        {!check ? "" : <div>
                                            <div className="input_fields">
                                                <input type="submit" id="submitBTN" value="Submit" className="btn" onClick={apply_certificate} />
                                            </div>
                                        </div>}
                                    </div>}
                                    <div className="input_fields">
                                        <input type="submit" value="Back" className="btn" id="forms_backBtn" onClick={backtoHome} />
                                    </div>
                                </div> : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default BarangayCertificates;