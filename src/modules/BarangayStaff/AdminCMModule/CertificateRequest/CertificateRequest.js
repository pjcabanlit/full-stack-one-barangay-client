import React, { useState, useEffect } from 'react'
import './CertificateRequest.css';
import Axios from 'axios';
import Notification from "../../../../components/Dialog/Notification";
import ConfirmDialog from '../../../../components/Dialog/ConfirmDialog';
import ProcessTable from './ProcessTable';
import ProcessedTable from './ProcessedTable';

require("es6-promise").polyfill();
require("isomorphic-fetch");

function CertificateRequest() {
    const [applicationList, setApplicationList] = useState([]);
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [q, setQ] = useState("");
    const [searchColumns, setSearchColumns] = useState(["first_name", "last_name", "middle_name", "prefix", "reqpaper_id", "type"]);
    const [processedList, setProcessedList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/ProcessRequest").then((response) => {
            setApplicationList(response.data);
        })
    }, [])

    const setApprove = (reqpaper_id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        Axios.put("http://localhost:3001/approve", {
            requestId: reqpaper_id,
        }).then((response) => {
            console.log(response);
            window.location.reload();
        });
        setNotify({ isOpen: true, message: "Application Processed", type: "success" })
    }

    const approveDialog = (reqpaper_id) => {
        setConfirmDialog({
            isOpen: true,
            title: "Confirmation",
            subtitle: "Are you sure you want to process this application?",
            noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn">No</button>,
            yesButton: <button onClick={() => setApprove(reqpaper_id)} className="alert_yesBtn"> Yes </button>
        })
    }

    const setDecline = (reqpaper_id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        Axios.put("http://localhost:3001/decline", {
            requestId: reqpaper_id,
        }).then((response) => {
            console.log(response);

        });

        window.location.reload();
        setNotify({ isOpen: true, message: "Application Declined", type: "success" })
    }

    const declineDialog = (reqpaper_id) => {
        setConfirmDialog({
            isOpen: true,
            title: "Confirmation",
            subtitle: "Are you sure you want to decline this application?",
            noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn">No</button>,
            yesButton: <button onClick={() => setDecline(reqpaper_id)} className="alert_yesBtn"> Yes </button>
        })
    }

    const setDelete = (reqpaper_id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        Axios.delete(`http://localhost:3001/delete/${reqpaper_id}`)
        setNotify({ isOpen: true, message: "Application Deleted", type: "success" })
        window.location.reload();
    }

    const deleteDialog = (reqpaper_id) => {
        setConfirmDialog({
            isOpen: true,
            title: "Confirmation",
            subtitle: "Are you sure you want to decline this application?",
            noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn">No</button>,
            yesButton: <button onClick={() => setDelete(reqpaper_id)} className="alert_yesBtn"> Yes </button>
        })
    }

    function search(rows) {
        return rows.filter(row => row.first_name.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
            row.status.toLowerCase().indexOf(q.toLowerCase()) > -1 || row.middle_name.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
            row.last_name.toLowerCase().indexOf(q.toLowerCase()) > -1 || row.document_type.toLowerCase().indexOf(q.toLowerCase()) > -1)
    }

    return (
        <main>
            <div className="process_request_container">
                <Notification notify={notify} setNotify={setNotify} />
                <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
                <div className="proccess_request_title">
                    <center>
                        <h1>Pending Applications</h1>
                    </center>
                </div>
                <div className="requestTable_container">
                    <div className="applications_filter">
                        <center>
                            <i className="fa fa-search"></i>
                            <input type="text" value={q} placeholder="Search ID, Name, Document.." onChange={(e) => setQ(e.target.value)} />
                        </center>
                    </div>
                    <center>
                        <ProcessTable data={search(applicationList)} />
                    </center>
                </div>
            </div>
        </main>
    )
}

export default CertificateRequest;