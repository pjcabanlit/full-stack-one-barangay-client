import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './FacilityReservation.css'
import ReservationTable from './ReservationTable';

require("es6-promise").polyfill();
require("isomorphic-fetch");

function FacilityReservation() {
    const [reservation, setReservation] = useState([]);
    const [q, setQ] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/GetReservationRequest").then((response) => {
            setReservation(response.data);
        });
    }, []);

    function search(rows) {
        return rows.filter(row => row.full_name.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
            row.status.toLowerCase().indexOf(q.toLowerCase()) > -1)
    }

    return (
        <main>
            <div className="facility_reservation">
                <div className="">
                    <h1>Reservation Table</h1>
                    <hr />
                </div>
                <div>
                    <input type="text" placeholder="Search Name or Status..." value={q} onChange={(e) => setQ(e.target.value)} />
                </div>
                <div className="reservation_table">
                    <center>
                        <ReservationTable data={search(reservation)} />
                    </center>
                </div>
            </div>
        </main>

    )
}

export default FacilityReservation;