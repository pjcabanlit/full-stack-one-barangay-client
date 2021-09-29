import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "./ResidentInformation.css";
import ResidentTable from "./ResidentTable";

require("es6-promise").polyfill();
require("isomorphic-fetch");

function ResidentInformation() {
    const [constituentList, setConstituentList] = useState([]);
    const [indv_inhabitant_id, setIndv_inhabitant_id] = useState()
    const [inhabitantList, setInhabitantList] = useState([])
    const [q, setQ] = useState("");
    const history = useHistory();

    useEffect(() => {
        Axios.get("http://localhost:3001/ConstituentDetails").then((response) => {
            setConstituentList(response.data);
        });
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/InhabitantInfo").then((response) => {
            setInhabitantList(response.data);
        });
    }, []);

    function search(rows) {
        return rows.filter(
            (row) =>
                row.first_name.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
                row.last_name.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
                row.middle_name.toLowerCase().indexOf(q.toLowerCase()) > -1);
    }
    const AddMember = (indv_inhabitant_id) => {
        history.push("/add-brgy-community-member");
    };

    return (
        <main>
            <div className="constituent-details-container">
                <div className="constituent_content_container">
                    <div className="constituent_details_title">
                        <center>
                            <h1>Resident Information</h1>
                        </center>
                    </div>
                    <div className="buttons_container">
                        <div className="new_resident_btn_container">
                            <input
                                type="submit"
                                className="new_resident_btn"
                                value="New Resident"
                                onClick={AddMember}
                            />
                        </div>
                    </div>
                    <div className="constituentTable_filtering">
                        <center>
                            <i className="fa fa-search"></i>
                            <input
                                type="text"
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                placeholder="Search Name"
                            />
                        </center>
                    </div>
                    <div>
                        <center>
                            <ResidentTable data={search(inhabitantList)} />
                        </center>
                    </div>
                </div>

            </div>
        </main>
    );
}
export default ResidentInformation;
