import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import brgy_logo from './../../../images/brgy407_icon.png';
import m1 from './../../../images/m1.png';
import './AdminSidebar.css';
const AdminSidebar = ({ sidebarOpen, closeSidebar }) => {
    const [role, setRole] = useState("");
    const [username, setUsername] = useState("");
    const [brgyaccount_id, setBrgyaccount_id] = useState("");
    const [brgy_id, setBrgyId] = useState("");
    const [first_name, setFirstName] = useState("");
    const [middle_name, setMiddleName] = useState("");
    const [last_name, setLastName] = useState("");
    const [prefix, setPrefix] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                setRole(response.data.user[0].role);
                setUsername(response.data.user[0].username)
                setBrgyaccount_id(response.data.user[0].brgyaccount_id);
                setLoginStatus(response.data.user[0].loginStatus);
                setFirstName(response.data.user[0].first_name);
                setMiddleName(response.data.user[0].middle_name);
                setLastName(response.data.user[0].last_name);
                setPrefix(response.data.user[0].prefix);
                setBrgyId(response.data.user[0].brgy_id);
            }
        });
    }, []);

    return (

        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="adminSidebar">
            <div className="adminSidebar_title">
                <div className="adminSidebar_img">
                    <img src={m1} alt={m1} />
                    <h1 className="admin_username">{username}</h1>

                </div>
                <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar()}></i>
            </div>
            <div className="adminSidebar_menu">
                <div className="adminSidebar_link" id={window.location.pathname === "/AdminHome" ? "active" : ""}>
                    <i className="fa fa-home"></i>
                    <a href="/AdminHome" >Dashboard</a>
                </div>
                <h2>Service Management</h2>
                <div className="adminSidebar_link active_menu_link" id={window.location.pathname === "/ConstituentDetails" ? "active" : ""}>
                    <i className="fa fa-info-circle"></i>
                    <a href="/ConstituentDetails">Resident Information</a>
                </div>
                <div className="adminSidebar_link" id={window.location.pathname === "/ProcessRequest" ? "active" : ""}>
                    <i className="fa fa-file"></i>
                    <a href="/ProcessRequest">Certificate Request</a>
                </div>

                <div className="adminSidebar_link" id={window.location.pathname === "/Availability-Utilities-&-Venues" ? "active" : ""}>
                    <i className="fas fa-tools"></i>
                    <a href="/Availability-Utilities-&-Venues">Facilities</a>
                </div>
                <div className="adminSidebar_link" id={window.location.pathname === "/Reservations-&-Requests" ? "active" : ""}>
                    <i className="fa fa-ticket"></i>
                    <a href="/Reservations-&-Requests">Reservations & Requests</a>
                </div>
                <h2>Program Management</h2>
                <div className="adminSidebar_link" id={window.location.pathname === "/AdminPrograms-&-Events" ? "active" : ""}>
                    <i className="fa fa-tasks"></i>
                    <a href="/AdminPrograms-&-Events">Program Management</a>
                </div>
                <div className="adminSidebar_link" id={window.location.pathname === "/ConstituentApplications" ? "active" : ""}>
                    <i className="fa fa-registered"></i>
                    <a href="/ConstituentApplications">Program Registrations</a>
                </div>

                <h2>Emergency & Reports Management</h2>
                <div className="adminSidebar_link" id={window.location.pathname === "/BrgyEvacuationPlan" ? "active" : ""}>
                    <i class="fas fa-exclamation-circle"></i>
                    <a href="/BrgyEvacuationPlan">Manage Evacuation Plan</a>
                </div>
                <div className="adminSidebar_link" id={window.location.pathname === "/MyBrgyReports" ? "active" : ""}>
                    <i className="fa fa-files-o"></i>
                    <a href="/MyBrgyReports">Resident's Reports</a>
                </div>
                <h2>Report</h2>
                <div className="adminSidebar_link" id={window.location.pathname === "/BrgyReports" ? "active" : ""}>
                    <i className="fa fa-files-o"></i>
                    <a href="/BrgyReports">Listing Report</a>
                </div>
                <h2>Forum</h2>
                <div className="adminSidebar_link" id={window.location.pathname === "/Feedbacks-&-Concerns" ? "active" : ""}>
                    <i className="fa fa-comments-o"></i>
                    <a href="/Feedbacks-&-Concerns">Resident's Feedback & Suggestion</a>
                </div>

            </div>

        </div>


    )
}

export default AdminSidebar