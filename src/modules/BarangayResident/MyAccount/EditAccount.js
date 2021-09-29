import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import Footer from './../../../components/Footer/Footer';
import ConfirmDialog from './../../../components/Dialog/ConfirmDialog';
import SuccessDialog from './../../../components/Dialog/SuccessDialog'
import LoginAuthPop from './../../../components/Dialog/LoginAuthPop';
import Notification from './../../../components/Dialog/Notification';
import Navbar from './../../../components/Navbar/Navbar';

function EditAccount() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [successDialog, setSuccessDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });
    const [errorDialog, setErrorDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });

    const history = useHistory()

    function UpdateChanges() {

    }
    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                setUsername(response.data.user[0].username)
                setPassword(response.data.user[0].password);
            }
        });
    }, []);

    function BackToAccount() {
        history.push("/MyAccount")
    }

    return (
        <div className="MyAccount_container">
            <Navbar />
            <Notification notify={notify} setNotify={setNotify} />
            <SuccessDialog successDialog={successDialog} setSuccessDialog={setSuccessDialog} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            <LoginAuthPop errorDialog={errorDialog} setErrorDialog={setErrorDialog} />
            <div className="personal_info">
                <form>
                    <div className="container_fluid">
                        <fieldset className="fieldset_container">
                            <legend>
                                <i className="fa fa-map-marked-alt"></i>
                                Account Information
                            </legend>
                            <div className="personal_info_col">
                                <div className="form-group">
                                    <label className="control_label" htmlFor="username"> Username:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="province" id="province" value={username} className="form-control" autoComplete="off" onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="password"> Password:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="password" name="city_municipality" id="city_municipality" value={password} className="form-control" autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="password"> Confirm Password:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="password" name="city_municipality" id="city_municipality" className="form-control" autoComplete="off" onChange={(e) => setConfirmPassword(e.target)} />
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                    </div>
                </form>
                <div className="editProfile_container">
                    <input type="submit" className="editProfile_btn" value="Save Changes" onClick={UpdateChanges} />
                </div>
                <div className="editProfile_container">
                    <input type="submit" className="editProfile_btn" value="Back" onClick={BackToAccount} />
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default EditAccount