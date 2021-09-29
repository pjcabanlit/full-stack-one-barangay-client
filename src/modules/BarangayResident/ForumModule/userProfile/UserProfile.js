import React, { useEffect, useState } from "react";
import Axios from 'axios'
import "./userProfile.css";
import m1 from "./../../../../images/m1.png"

export default function UserProfile() {

    const [indv_inhabitant_id, setInhabitantId] = useState("");
    const [role, setRole] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    useEffect(() => {
        Axios.get("http://localhost:3001/InhabitantLogin").then((response) => {
            if (response.data.loggedIn === true) {
                setInhabitantId(response.data.user[0].indv_inhabitant_id);
                setFirstName(response.data.user[0].first_name)
                setLastName(response.data.user[0].last_name)
                setRole(response.data.user[0].role)
            }
        });
    }, []);
    const toggleInfo = (e) => {
        e.target.parentNode.classList.toggle("open");
    };

    return (
        <div className="main__userprofile">
            <div className="profile__card user__profile__image">
                <div className="profile__image">
                    <img src={m1} />
                </div>
                <h4>{first_name + " " + last_name}</h4>
                <p>{role}</p>
            </div>
            {/* <div className="profile__card">
                <div className="card__header" onClick={toggleInfo}>
                    <h4>Information</h4>
                    <i className="fa fa-angle-down"></i>
                </div>
                <div className="card__content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    ultrices urna a imperdiet egestas. Donec in magna quis ligula
                </div>
            </div> */}
        </div>
    );

}