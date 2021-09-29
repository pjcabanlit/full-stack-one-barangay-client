import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import MyRequestsTable from './MyRequestsTable';
import './MyApplications.css';
import Footer from './../../../components/Footer/Footer';
import Navbar from './../../../components/Navbar/Navbar';

function MyApplications() {
    const [indv_inhabitant_id, setInhabitantId] = useState("");
    const [myRequestList, setRequestList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/InhabitantLogin").then((response) => {
            if (response.data.loggedIn === true) {
                setInhabitantId(response.data.user[0].indv_inhabitant_id)
            }
        });
    }, []);


    useEffect(() => {
        Axios.get("http://localhost:3001/GetMyRequests", {
            my_request_indv_inhabitant_id: indv_inhabitant_id,
        }).then((response) => {
            setRequestList(response.data);
            console.log(myRequestList)
        })
    }, [])

    return (
        <div className="ProofOfPayment_main">
            <Navbar />
            <div className="MyApplicationFormatter">
                <input type="text" value={indv_inhabitant_id} onChange={(e) => setInhabitantId(e.target.value)} hidden />
                <div className="ProofOfPayment_container">
                    <div className="MyApplications_tableContainer">
                        <div className="MyApplications_title">
                            <center>
                                <h1>My Applications</h1>
                            </center>
                        </div>
                        <div className="constituentTable_filtering">
                            <center>
                                <input hidden type="text" value={indv_inhabitant_id} onChange={(e) => setInhabitantId(e.target.value)} />
                            </center>
                        </div>
                        <div className="ProofOfPayment_table">
                            <center>
                                <MyRequestsTable data={myRequestList} />
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default MyApplications