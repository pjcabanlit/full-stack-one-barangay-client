import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import brgy_logo from './../../../images/brgy407_icon.png'
import './AdminMain.css'
import OfficialsTable from './OfficialsTable'
import AdminChart from './AdminChart'
import { CartesianGrid, Bar, BarChart, XAxis, YAxis, Legend, Tooltip } from 'recharts'

const AdminMain = () => {
    var showdate = new Date();
    var displaytodaysdate = showdate.getDate() + '/' + (showdate.getMonth() + 1) + '/' + showdate.getFullYear();
    var stringTodaysDate = showdate.toDateString();
    var displayTime = showdate.getHours() + ":" + showdate.getMinutes() + ":" + showdate.getSeconds();
    var currTime = new Date().toLocaleTimeString();

    const [RegMembers, setMemberCount] = useState("");

    const [role, setRole] = useState("");
    const [brgyaccount_id, setBrgyaccount_id] = useState("");
    const [staff_id, setBrgyId] = useState("");
    const [f_name, setFirstName] = useState("");
    const [m_name, setMiddleName] = useState("");
    const [l_name, setLastName] = useState("");
    const [suffix, setPrefix] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const [MaleMembers, setMaleMembers] = useState("");
    const [FemaleMembers, setFemaleMembers] = useState("");
    const [officialsList, setOfficialsList] = useState([]);

    const data2 = [
        { name: "Male", value: 326 },
        { name: "Female", value: 648 }
    ]

    const data3 = [
        { name: "PWD", value: 123 },
        { name: "Pregnant", value: 153 },
        { name: "Senior Citizen", value: 567 },
        { name: "4Ps", value: 80 },
        { name: "Single Parents", value: 200 },
        { name: "Students", value: 579 },
        { name: "Head of The Family", value: 698 },





    ]

    useEffect(() => {
        Axios.get("http://localhost:3001/CountMembers").then((response) => {
            setMemberCount(response.data[0].RegMembers);
        })
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/CountMale").then((response) => {
            setMaleMembers(response.data[0].MaleMembers);
        })
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/CountFemale").then((response) => {
            setFemaleMembers(response.data[0].FemaleMembers);
        })
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/GetOfficials").then((response) => {
            setOfficialsList(response.data);
        })
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/InhabitantLogin").then((response) => {
            if (response.data.loggedIn == true) {
                setRole(response.data.user[0].role);
                setBrgyaccount_id(response.data.user[0].brgyaccount_id);
                setLoginStatus(response.data.user[0].loginStatus);
                setFirstName(response.data.user[0].f_name);
                setMiddleName(response.data.user[0].m_name);
                setLastName(response.data.user[0].l_name);
                setPrefix(response.data.user[0].suffix);
                setBrgyId(response.data.user[0].staff_id);
            }
        });
    }, []);

    return (
        <main>
            <div className="adminMain_container">
                <div className="adminMain_title">
                    <img src={brgy_logo} alt={brgy_logo} />
                    <div className="adminMain_greeting">
                        <h1>Brgy. 407 Zone 42 Sampaloc, Manila</h1>
                        <p>Welcome to your Dashboard</p>
                    </div>
                    <div className="adminCard">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <p className="text-primary-p">{currTime}</p>
                        <div className="adminCard_inner">
                            <span className="font-bold text-title"> {stringTodaysDate}</span>
                        </div>
                    </div>

                </div>

                <div className="adminMain_cards">
                    <div className="adminCard">
                        <i className="fa fa-home fa-2x text-lightblue"></i>
                        <div className="adminCard_inner">
                            <p className="text-primary-p">Total No. of Household</p>
                            <span className="font-bold text-title"> 197</span>
                        </div>
                    </div>

                    <div className="adminCard">
                        <i className="fa fa-users fa-2x text-lightblue"></i>
                        <div className="adminCard_inner">
                            <p className="text-primary-p">Total Population</p>
                            <span className="font-bold text-title"> 974</span>
                        </div>
                    </div>
                    <div className="adminCard">
                        <i className="fa fa-users fa-2x text-lightblue"></i>
                        <div className="adminCard_inner">
                            <p className="text-primary-p">Total No. of Families</p>
                            <span className="font-bold text-title"> 425</span>
                        </div>
                    </div>
                    <div className="adminCard">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="adminCard_inner">
                            <p className="text-primary-p">Total Head of the Families</p>
                            <span className="font-bold text-title"> 425</span>
                        </div>
                    </div>
                    <div className="adminCard">
                        <i className="fa fa-child fa-2x text-lightblue"></i>
                        <div className="adminCard_inner">
                            <p className="text-primary-p">Total No. of Children</p>
                            <span className="font-bold text-title"> 172</span>
                        </div>
                    </div>
                    <div className="adminCard">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="adminCard_inner">
                            <p className="text-primary-p">Total No. of Senior Citizens</p>
                            <span className="font-bold text-title"> 123</span>
                        </div>
                    </div>
                    <div className="adminCard">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="adminCard_inner">
                            <p className="text-primary-p">Total No. of Voters</p>
                            <span className="font-bold text-title"> 876</span>
                        </div>
                    </div>

                    <div className="adminCard">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="adminCard_inner">
                            <p className="text-primary-p">Total No. of Elderly</p>
                            <span className="font-bold text-title"> 679</span>
                        </div>
                    </div>
                    <div className="adminCard">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="adminCard_inner">
                            <p className="text-primary-p">Religion</p>
                            <span className="font-bold text-title"> Catholic 80%</span>
                        </div>
                    </div>
                    <div className="adminCard">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="adminCard_inner">
                            <p className="text-primary-p">Total No. of Voting Precint Center</p>
                            <span className="font-bold text-title"> 1</span>
                        </div>
                    </div>
                    <div className="adminCard">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="adminCard_inner">
                            <p className="text-primary-p">Total No. of Voting Precints</p>
                            <span className="font-bold text-title"> 2</span>
                        </div>
                    </div>
                </div>
                <div className="adminCharts_chart">
                    <center>
                        <div className="adminCharts_left">
                            <div className="adminCharts_left_title">
                                <div>
                                    <h1>Demographic Information</h1>
                                </div>
                            </div>
                            <AdminChart />
                        </div>
                        <div className="adminCharts_left">

                            <div className="adminCharts_left_title">
                                <div>
                                    <h1>Barangay Resident by Gender</h1>
                                </div>
                            </div>
                            <center>
                                <BarChart width={300} height={200} data={data2} margin={{ top: 5, bottom: 5, }} barSize={50}>
                                    <XAxis dataKey="name" scale="point" padding={{ left: 40, right: 40 }} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
                                </BarChart>
                            </center>
                        </div>
                    </center>
                </div>

                <div className="adminCharts">
                    <div className="adminCharts_left">
                        <div className="adminCharts_left_title">
                            <div>
                                <h1>Current Barangay 407 Officers</h1>
                                <p></p>
                                <OfficialsTable data={officialsList} />
                            </div>
                        </div>
                    </div>
                    <div className="adminCharts_right">
                        <div className="adminCharts_right_title">
                            <div>
                                <h1>Upcoming Programs & Events</h1>
                                <p>Barangay 407 Zone 42 Sampaloc, Manila</p>
                            </div>

                        </div>
                        <div className="adminCharts_right_cards">
                            <div className="card1">
                                <h1>Program 1</h1>
                                <p>Date, Location</p>
                            </div>
                            <div className="card2">
                                <h1>Program 2</h1>
                                <p>Date, Location</p>
                            </div>
                            <div className="card3">
                                <h1>Program 3</h1>
                                <p>Date, Location</p>
                            </div>
                            <div className="card4">
                                <h1>Program 4</h1>
                                <p>Date, Location</p>
                            </div>
                            <div className="card5">
                                <h1>Program 5</h1>
                                <p>Date, Location</p>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </main>


    )
}

export default AdminMain;