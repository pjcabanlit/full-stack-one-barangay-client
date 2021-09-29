import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Tooltip, Legend, BarChart, XAxis, YAxis, Bar, CartesianGrid, Pie, PieChart } from 'recharts'


const AdminChart = () => {

    const [RegMembers, setMemberCount] = useState("");
    const [MaleMembers, setMaleMembers] = useState("");
    const [FemaleMembers, setFemaleMembers] = useState("");

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

    const data = [
        { name: "Population", value: 974 },
        { name: "Household", value: 197 },
        { name: "Families", value: 425 },
        { name: "Family Head", value: 425 },
        { name: "Children", value: 172 },
        { name: "Senior Citizen", value: 123 },
        { name: "Voters", value: 876 },
    ]

    return (

        <div className="AdminChart_main">


            <BarChart width={700} height={400} data={data} margin={{ top: 5, bottom: 5, }} barSize={30}>
                <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 30 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
            </BarChart>


        </div>
    )

}

export default AdminChart

// import React from 'react'
// import './../../../node_modules/react-vis/dist/style.css'
// import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis'

// const AdminChart = () => {
//     const data = [
//         { x: "Hotdog", y: 10 },
//         { x: 2, y: 5 },
//         { x: 3, y: 15 },

//     ];
//     return (
//         <div style={{ marginTop: '15px' }}>
//             <XYPlot height={300} width={300}>
//                 <VerticalGridLines />
//                 <HorizontalGridLines />
//                 <LineSeries data={data} color="red" />

//                 <XAxis />
//                 <YAxis />

//             </XYPlot>
//         </div>

//     )
// }

// export default AdminChart