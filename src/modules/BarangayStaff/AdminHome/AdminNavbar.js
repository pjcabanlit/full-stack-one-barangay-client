import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './AdminNavbar.css';
import brgy_logo from './../../../images/brgy407_icon.png'
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import m1 from './../../../images/m1.png'
const AdminNavbar = ({ sidebarOpen, openSidebar }) => {
    return (

        <div className="adminNavbar">
            <div className="adminNavIcon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a href="" className="admin_active_link"></a>
            </div>
            <div className="navbar__right">
                {/* <a href="#">
                    <i className="fa fa-search"></i>
                </a> */}
                <NavItem icon={<img width="45" src={m1} alt={m1} />}>
                    <DropdownMenu>

                    </DropdownMenu>
                </NavItem>

            </div>
        </div>
    )
}

function DropdownMenu() {
    const [f_name, setFirstName] = useState("");
    const [m_name, setMiddleName] = useState("");
    const [l_name, setLastName] = useState("");
    const [_suffix, setPrefix] = useState("");
    const [username, setUsername] = useState("");
    const [brgy_id, setBrgyId] = useState("")
    const [role, setRole] = useState("");

    function DropdownItem(props) {
        return (
            <a href="/MyProfile" className="menu-itm">
                {props.children}
            </a>
        );
    }
    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                setFirstName(response.data.user[0].f_name);
                setMiddleName(response.data.user[0].m_name);
                setLastName(response.data.user[0].l_name);
                setPrefix(response.data.user[0]._suffix);
                setUsername(response.data.user[0].username);
                setBrgyId(response.data.user[0].brgy_id);
                setRole(response.data.user[0].role)
            }
        });
    }, []);
    const [activeMenu, setActiviteMenu] = useState("main");

    return (
        <div className="dropdown_menu_new">
            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary">
                <div className="menu">
                    <Link to="/MyAccount" className="small_profile">
                        <center>
                            <div> <img src={m1} alt={m1} className="small_profile_img" /></div>
                            <div> {f_name + " " + m_name + " " + l_name + " " + _suffix} </div>
                            <div className="small_profile_username"> {username} </div>
                            <div>{role}</div>
                        </center>
                    </Link>
                    <Link to="" className="menu-itm" id={window.location.pathname === "/MyProfile" ? "activeMyProfileDropdown" : ""}>My Profile</Link>
                    <Link to="" className="menu-itm" id={window.location.pathname === "/MyNotifs" ? "activeMyProfileDropdown" : ""}>My Notifications</Link>
                    <a href="/" className="menu-itm">Logout</a>
                </div>
            </CSSTransition>
        </div>
    )
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-itemskie">
            <a className="icon_button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    )
}

export default AdminNavbar