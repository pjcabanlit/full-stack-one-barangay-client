import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './ManageAvailability.css'
import FacilityTable from './FacilityTable'
import FacilityDialog from './../../../components/Dialog/FacilityDialog'
import ConfirmDialog from './../../../components/Dialog/ConfirmDialog'
import LoginAuthPop from './../../../components/Dialog/LoginAuthPop'
import SuccessDialog from './../../../components/Dialog/SuccessDialog'
import Notification from './../../../components/Dialog/Notification'

function ManageAvailability() {

    const [facilityDialog, setFacilityDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [errorDialog, setErrorDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });

    const [successDialog, setSuccessDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });

    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });


    const [facilityList, setFacilityList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/GetFacilities").then((response) => {
            setFacilityList(response.data);
        })
    }, [])
    const [facilityName, setFacilityName] = useState("");
    const [quantity, setQuantity] = useState("");

    const AddFacility = () => {
        setFacilityDialog({
            isOpen: true,
            title: <div>
                <div className=""><div className="wrapper">
                    <div className="forms">
                        <h1>Add Facility</h1>
                        <p>All <span className="required_symbol">*</span> are required.</p>

                        <div className="input_fields">
                            <label>Item Name/Venue:<span className="required_symbol">*</span></label>
                            <input type="text" className="inputs" autoComplete="off" onChange={(e) => { setFacilityName(e.target.value) }} />
                            {console.log(setFacilityName)}
                        </div>
                        <div className="input_fields">
                            <label>Quantity</label>
                            <input type="text" className="inputs" autoComplete="off" onChange={(e) => { setQuantity(e.target.value) }} />
                        </div>

                        <div className="editProfile_container">
                            <input type="submit" className="editProfile_btn" value="Submit" onClick={ConfirmFacility} />
                        </div>
                    </div>
                </div></div>
            </div>,
            noButton: <button onClick={() => setFacilityDialog({ ...facilityDialog, isOpen: false })} className="alert_backBtn">Back</button>
        })

        function SubmitFacility() {
            Axios.post("http://localhost:3001/AddFacility", {
                AF_facilityName: facilityName,
                AF_quantity: quantity
            }).then((response) => {
                console.log(response)
            });
            setConfirmDialog({
                ...confirmDialog, isOpen: false
            })
            setSuccessDialog({
                isOpen: true,
                title: "Registered Successfully!",
                subtitle: "",
                noButton: <button onClick={() => setSuccessDialog({ ...successDialog, isOpen: false })} className="alert_backBtn">Back</button>
            })
            setNotify({ isOpen: true, message: "Registered Successfully", type: "success" })
        }



        function ConfirmFacility() {
            setConfirmDialog({
                isOpen: true,
                title: "Confirmation",
                subtitle: "Are you sure you want to add facility?",
                noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn">No</button>,
                yesButton: <button onClick={() => SubmitFacility()} className="alert_yesBtn"> Yes </button>
            })
        }
    }

    return (
        <main>
            <FacilityDialog facilityDialog={facilityDialog} setFacilityDialog={setFacilityDialog} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            <LoginAuthPop errorDialog={errorDialog} setErrorDialog={setErrorDialog} />
            <SuccessDialog successDialog={successDialog} setSuccessDialog={setSuccessDialog} />
            <Notification notify={notify} setNotify={setNotify} />
            <div className="mng_avail_container">
                <div className="mng_avail_title">
                    <h1>Facility Settings</h1>
                </div>
                <hr />
                <div className="mng_avail_addFacility">
                    <div className="adminCard_facility" onClick={AddFacility}>
                        <i class="fas fa-tools fa-2x text-lightblue"></i>
                        <div className="adminCard_inner_facility">
                            <p className="text-primary-p">Add Facility</p>
                        </div>
                    </div>
                </div>
                <div>
                    <center>
                        <FacilityTable data={facilityList} />
                    </center>
                </div>
            </div>
        </main>

    )
}

export default ManageAvailability;