import React, { useState } from 'react'
import './OfficialsTable.css';

export default function OfficialsTable({ data }) {

    return (
        <div>
            <center>
                <table cellPadding="0" cellSpacing="0" className="facility_table">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => {
                            return (
                                <tr>
                                    <td>{row.name}</td>
                                    <td>{row.position}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </center>
        </div>
    )
}