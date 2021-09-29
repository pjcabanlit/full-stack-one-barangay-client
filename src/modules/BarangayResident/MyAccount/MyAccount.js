import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './MyProfile.css';
import Axios from 'axios';
import Footer from './../../../components/Footer/Footer';
import Navbar from './../../../components/Navbar/Navbar';

function MyAccount() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                setUsername(response.data.user[0].username)
                setPassword(response.data.user[0].password);
            }
        });
    }, []);

    const history = useHistory();

    const edit_profile = () => {
        history.push("/EditAccount");
    }

    return (
        <div className="MyAccount_container">
            <Navbar />
            <div className="forPadding">
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
                                            <input type="text" name="province" id="province" value={username} required className="form-control" autoComplete="off" disabled />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="password"> Password:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="password" name="city_municipality" id="city_municipality" value={password} required className="form-control" autoComplete="off" disabled />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="editProfile_container">
                                <input type="submit" className="editProfile_btn" value="Edit Account" onClick={edit_profile} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />

        </div>

    )
}

export default MyAccount