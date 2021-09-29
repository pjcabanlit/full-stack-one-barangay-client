import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Axios from 'axios'
import './ProcessTable.css'
import Notification from '../../../../components/Dialog/Notification';
import ConfirmDialog from '../../../../components/Dialog/ConfirmDialog';
import ViewEditDialog from './../../../../components/Dialog/ViewEditDialog';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Grid, Typography, TablePagination, TableFooter } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { saveAs } from 'file-saver';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 200,
    },
    tableContainer: {
        borderRadius: 5,
        margin: '10px 10px',
        maxWidth: 1175,
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: '#0061a8',
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        fontFamily: "Montserrat, sans-serif",
        cursor: "pointer",
    },
    tableCell: {
        fontFamily: "Montserrat, sans-serif",
        cursor: "pointer",
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        cursor: "pointer",
        fontWeight: 'bold',
        color: theme.palette.secondary.dark,
        fontFamily: "Montserrat, sans-serif"

    },
    status: {
        cursor: "pointer",
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 5,
        padding: '3px 10px',
        display: 'inline-block',
        fontFamily: "Montserrat, sans-serif"
    }
}))


function ProcessTable({ data }) {
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [viewEditDialog, setViewEditDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [first_name, setFirstName] = useState("");
    const [middle_name, setMiddleName] = useState("");
    const [last_name, setLastName] = useState("");
    const [suffix, setSuffix] = useState("");
    const [address, setAddress] = useState("")
    const [document_type, setDocumentType] = useState("");
    const [purpose, setPurpose] = useState("");
    const [contact_person, setContactPerson] = useState("");
    const [contact_address, setContactAddress] = useState("");
    const [contact_contact, setContactContact] = useState("");
    const [gender, setGender] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [vehicle_type, setVehicleType] = useState("");
    const [destination, setDestination] = useState("");
    const [plate_no, setPlateNo] = useState("");
    const [departure_date, setDepartureDate] = useState("");
    const [business_name, setBusinessName] = useState("");
    const [business_address, setBusinessAddress] = useState("");
    const [business_type, setBusinessType] = useState("");
    const [business_status, setBusinessStatus] = useState("");
    const [civil_status, setCivilStatus] = useState("");
    const [years_resided, setYearsResided] = useState("");

    const classes = useStyles();

    // const setDelete = (reqpaper_id) => {
    //     setConfirmDialog({
    //         ...confirmDialog,
    //         isOpen: false
    //     })
    //     Axios.delete(`http://localhost:3001/delete/${reqpaper_id}`)
    //     setNotify({ isOpen: true, message: "Application Deleted", type: "success" })
    //     window.location.reload();
    // }

    // const deleteDialog = (reqpaper_id) => {
    //     setConfirmDialog({
    //         isOpen: true,
    //         title: "Confirmation",
    //         subtitle: "Are you sure you want to decline this application?",
    //         noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn">No</button>,
    //         yesButton: <button onClick={() => setDelete(reqpaper_id)} className="alert_yesBtn"> Yes </button>
    //     })
    // }

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    const [loading, setLoading] = useState("");

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])

    const generate_certificate = (reqpaper_id, document_type, indv_inhabitant_id, brgyaccount_id, date_requested, purpose, status, first_name, middle_name, last_name, suffix, address, gender, birthdate, civil_status, contact_person, contact_address, contact_contact, business_name, business_address, business_type, business_status, years_resided, vehicle_type, plate_no, destination, departure_date) => {
        const download_coi = () => {
            Axios.post("http://localhost:3001/create-pdf-coi", {
                COI_firstName: first_name,
                COI_middleName: middle_name,
                COI_lastName: last_name,
                COI_suffix: suffix,
                COI_address: address,
                COI_yearsResided: years_resided,
                COI_purpose: purpose,
            }).then(() => Axios.get("http://localhost:3001/fetch-pdf-coi", { responseType: 'blob' })).then((response) => {
                const pdfBlob = new Blob([response.data], { type: 'application/pdf' })
                saveAs(pdfBlob, `Certificate-of-Indigency-${first_name + "_" + middle_name + "_" + last_name + "" + suffix}.pdf`);
            })

            Axios.put("http://localhost:3001/COIProcessed", {
                COI_reqpaperId: reqpaper_id,
            }).then((response) => {
                console.log(response);
                window.location.reload();
            });
        }

        const download_goodMoral = () => {
            Axios.post("http://localhost:3001/create-pdf-goodMoral", {
                gm_firstName: first_name,
                gm_middleName: middle_name,
                gm_lastName: last_name,
                gm_suffix: suffix,
                gm_address: address,
                gm_gender: years_resided,
                gm_purpose: purpose,
            }).then(() => Axios.get("http://localhost:3001/fetch-pdf-goodMoral", { responseType: 'blob' })).then((response) => {
                const pdfBlob = new Blob([response.data], { type: 'application/pdf' })
                saveAs(pdfBlob, `Good-Moral-${first_name + "_" + middle_name + "_" + last_name + "" + suffix}.pdf`);
            })
        }

        const download_travelPass = () => {
            Axios.post("http://localhost:3001/create-pdf-travelPass", {
                tp_firstName: first_name,
                tp_middleName: middle_name,
                tp_lastName: last_name,
                tp_suffix: suffix,
                tp_address: address,
                tp_vehicleType: vehicle_type,
                tp_plateNo: plate_no,
                tp_destination: destination,
                tp_departureDate: departure_date,
                tp_purpose: purpose,
            }).then(() => Axios.get("http://localhost:3001/fetch-pdf-travelPass", { responseType: 'blob' })).then((response) => {
                const pdfBlob = new Blob([response.data], { type: 'application/pdf' })
                saveAs(pdfBlob, `Travel-Pass-${first_name + "_" + middle_name + "_" + last_name + "" + suffix}.pdf`);
            })
        }

        const download_businessClearance = () => {
            Axios.post("http://localhost:3001/create-pdf-businessClearance", {
                busC_firstName: first_name,
                busC_middleName: middle_name,
                busC_lastName: last_name,
                busC_suffix: suffix,
                busC_businessName: business_name,
                busC_businessAddress: business_address,
                busC_businessType: business_type,
                busC_businessStatus: business_status,
            }).then(() => Axios.get("http://localhost:3001/fetch-pdf-businessClearance", { responseType: 'blob' })).then((response) => {
                const pdfBlob = new Blob([response.data], { type: 'application/pdf' })
                saveAs(pdfBlob, `Business-Clearance-${first_name + "_" + middle_name + "_" + last_name + "" + suffix}.pdf`);
            })
        }

        setViewEditDialog({
            isOpen: true,
            title: <main>
                <div className="generate-certificate-body">
                    <div className="generate-certificate-container">
                        {document_type === "Certificate of Indigency" ? <div>
                            <div className="EditProfile_container">
                                <div className="wrapper">
                                    <div className="titles">
                                        Certification Request Details
                                    </div>
                                    <div className="forms">
                                        <div className="input_fields">
                                            <label>First Name</label>
                                            <input type="text" className="inputs" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Middle Name</label>
                                            <input type="text" className="inputs" value={middle_name} onChange={(e) => setMiddleName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Last Name</label>
                                            <input type="text" className="inputs" value={last_name} onChange={(e) => setLastName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Suffix</label>
                                            <input type="text" className="inputs" value={suffix} onChange={(e) => setSuffix(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Address</label>
                                            <textarea className="textarea" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                                        </div>

                                        <div className="input_fields">
                                            <label>Gender</label>
                                            <input type="text" className="inputs" value={gender} onChange={(e) => setGender(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Years Resided in the Barangay</label>
                                            <input type="text" className="inputs" value={years_resided} onChange={(e) => setYearsResided(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Purpose</label>
                                            <input type="text" className="inputs" value={purpose} onChange={(e) => setPurpose(e.target.value)} />
                                        </div>

                                        <div className="input_fields">
                                            <input type="submit" value="Generate" className="btn" onClick={download_coi} />
                                        </div>
                                        <div className="input_fields">
                                            <input type="submit" value="Back" className="btn" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : ""}
                        {document_type === "Barangay ID" ? <div>
                            <div className="EditProfile_container">
                                <div className="wrapper">
                                    <div className="titles">
                                        Certification Request Details
                                    </div>
                                    <div className="forms">
                                        <div className="input_fields">
                                            <label>First Name</label>
                                            <input type="text" className="inputs" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Middle Name</label>
                                            <input type="text" className="inputs" value={middle_name} onChange={(e) => setMiddleName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Last Name</label>
                                            <input type="text" className="inputs" value={last_name} onChange={(e) => setLastName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Suffix</label>
                                            <input type="text" className="inputs" value={suffix} onChange={(e) => setSuffix(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Address</label>
                                            <textarea className="textarea" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                                        </div>

                                        <div className="input_fields">
                                            <label>Gender</label>
                                            <input type="text" className="inputs" value={gender} onChange={(e) => setGender(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Birthdate</label>
                                            <textarea className="textarea" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} ></textarea>
                                        </div>
                                        <div className="input_fields">
                                            <label>Purpose</label>
                                            <textarea className="textarea" value={purpose} onChange={(e) => setPurpose(e.target.value)} ></textarea>
                                        </div>
                                        <p> Person to contact in case of emergency </p>
                                        <div className="input_fields">
                                            <label>Full Name</label>
                                            <input className="textarea" value={contact_person} onChange={(e) => setContactPerson(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Address</label>
                                            <textarea className="textarea" value={contact_address} onChange={(e) => setContactAddress(e.target.value)} ></textarea>
                                        </div>
                                        <div className="input_fields">
                                            <label>Contact No</label>
                                            <input className="textarea" value={contact_contact} onChange={(e) => setContactContact(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <input type="submit" value="Generate" className="btn" />
                                        </div>
                                        <div className="input_fields">
                                            <input type="submit" value="Back" className="btn" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : ""}
                        {document_type === "Good Moral" ? <div>
                            <div className="EditProfile_container">
                                <div className="wrapper">
                                    <div className="titles">
                                        Certification Request Details
                                    </div>
                                    <div className="forms">
                                        <div className="input_fields">
                                            <label>First Name</label>
                                            <input type="text" className="inputs" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Middle Name</label>
                                            <input type="text" className="inputs" value={middle_name} onChange={(e) => setMiddleName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Last Name</label>
                                            <input type="text" className="inputs" value={last_name} onChange={(e) => setLastName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Suffix</label>
                                            <input type="text" className="inputs" value={suffix} onChange={(e) => setSuffix(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Address</label>
                                            <textarea className="textarea" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                                        </div>

                                        <div className="input_fields">
                                            <label>Gender</label>
                                            <input type="text" className="inputs" value={gender} onChange={(e) => setGender(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Purpose</label>
                                            <input className="textarea" value={purpose} onChange={(e) => setPurpose(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <input type="submit" value="Generate" className="btn" onClick={download_goodMoral} />
                                        </div>
                                        <div className="input_fields">
                                            <input type="submit" value="Back" className="btn" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : ""}
                        {document_type === "Business Clearance" ? <div>
                            <div className="EditProfile_container">
                                <div className="wrapper">
                                    <div className="titles">
                                        Certification Request Details
                                    </div>
                                    <div className="forms">
                                        <div className="input_fields">
                                            <label>First Name</label>
                                            <input type="text" className="inputs" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Middle Name</label>
                                            <input type="text" className="inputs" value={middle_name} onChange={(e) => setMiddleName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Last Name</label>
                                            <input type="text" className="inputs" value={last_name} onChange={(e) => setLastName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Suffix</label>
                                            <input type="text" className="inputs" value={suffix} onChange={(e) => setSuffix(e.target.value)} />
                                        </div>

                                        <div className="input_fields">
                                            <label>Name of Business</label>
                                            <input type="text" className="inputs" value={business_name} onChange={(e) => setBusinessName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Business Address</label>
                                            <textarea className="textarea" value={business_address} onChange={(e) => setBusinessAddress(e.target.value)}></textarea>
                                        </div>
                                        <div className="input_fields">
                                            <label>Type of Business</label>
                                            <input type="text" className="inputs" value={business_type} onChange={(e) => setBusinessType(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Status</label>
                                            <input type="text" className="inputs" value={business_status} onChange={(e) => setBusinessStatus(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <input type="submit" value="Generate" className="btn" onClick={download_businessClearance} />
                                        </div>
                                        <div className="input_fields">
                                            <input type="submit" value="Back" className="btn" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : ""}
                        {document_type === "Barangay Clearance" ? <div>
                            <div className="EditProfile_container">
                                <div className="wrapper">
                                    <div className="titles">
                                        Certification Request Details
                                    </div>
                                    <div className="forms">
                                        <div className="input_fields">
                                            <label>First Name</label>
                                            <input type="text" className="inputs" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Middle Name</label>
                                            <input type="text" className="inputs" value={middle_name} onChange={(e) => setMiddleName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Last Name</label>
                                            <input type="text" className="inputs" value={last_name} onChange={(e) => setLastName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Suffix</label>
                                            <input type="text" className="inputs" value={suffix} onChange={(e) => setSuffix(e.target.value)} />
                                        </div>

                                        <div className="input_fields">
                                            <label>Address</label>
                                            <textarea className="textarea" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                                        </div>
                                        <div className="input_fields">
                                            <label>Gender</label>
                                            <input type="text" className="inputs" value={gender} onChange={(e) => setGender(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Birthdate</label>
                                            <input type="text" className="inputs" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Civil Status</label>
                                            <input type="text" className="inputs" value={civil_status} onChange={(e) => setCivilStatus(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Purpose</label>
                                            <input type="text" className="inputs" value={purpose} onChange={(e) => setPurpose(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <input type="submit" value="Generate" className="btn" />
                                        </div>
                                        <div className="input_fields">
                                            <input type="submit" value="Back" className="btn" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : ""}
                        {document_type === "Travel Pass" ? <div>
                            <div className="EditProfile_container">
                                <div className="wrapper">
                                    <div className="titles">
                                        Certification Request Details
                                    </div>
                                    <div className="forms">
                                        <div className="input_fields">
                                            <label>First Name</label>
                                            <input type="text" className="inputs" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Middle Name</label>
                                            <input type="text" className="inputs" value={middle_name} onChange={(e) => setMiddleName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Last Name</label>
                                            <input type="text" className="inputs" value={last_name} onChange={(e) => setLastName(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Suffix</label>
                                            <input type="text" className="inputs" value={suffix} onChange={(e) => setSuffix(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Address</label>
                                            <textarea className="textarea" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                                        </div>
                                        <div className="input_fields">
                                            <label>Vehicle Type</label>
                                            <input type="text" className="inputs" value={vehicle_type} onChange={(e) => setVehicleType(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Plate No.</label>
                                            <input type="text" className="inputs" value={plate_no} onChange={(e) => setPlateNo(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Destination</label>
                                            <input type="text" className="inputs" value={destination} onChange={(e) => setDestination(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Departure Date</label>
                                            <input type="text" className="inputs" value={departure_date} onChange={(e) => setDepartureDate(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Purpose</label>
                                            <input type="text" className="inputs" value={purpose} onChange={(e) => setPurpose(e.target.value)} />
                                        </div>
                                        <div className="input_fields">
                                            <input type="submit" value="Generate" className="btn" onClick={download_travelPass} />
                                        </div>
                                        <div className="input_fields">
                                            <input type="submit" value="Back" className="btn" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : ""}

                    </div>
                </div>
            </main>,
            noButton: <button onClick={() => setViewEditDialog({ ...viewEditDialog, isOpen: false })} className="alert_backBtn">Back</button>

        })
    }
    return (
        <div>

            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            <ViewEditDialog viewEditDialog={viewEditDialog} setViewEditDialog={setViewEditDialog} />
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeaderCell}>Full Name</TableCell>
                            <TableCell className={classes.tableHeaderCell} >Type of Document</TableCell>
                            <TableCell className={classes.tableHeaderCell} >Purpose</TableCell>
                            <TableCell className={classes.tableHeaderCell} >Date Requested</TableCell>
                            <TableCell className={classes.tableHeaderCell} >Status</TableCell>
                            <TableCell className={classes.tableHeaderCell} >Generate</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow>
                                    <TableCell>
                                        <Grid container>
                                            <Grid item lg={2}>
                                                <Avatar alt={row.first_name} src="." className={classes.avatar} />
                                            </Grid>
                                            <Grid item lg={10} >
                                                <Typography className={classes.name}>{row.first_name + " " + row.middle_name + " " + row.last_name + " " + row.suffix}
                                                </Typography>
                                                <Typography className={classes.tableCell}>
                                                    {row.indv_inhabitant_id}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell onChange={(e) => setDocumentType(e.target.value)} className={classes.tableCell}>{row.document_type}</TableCell>
                                    <TableCell className={classes.tableCell}>{row.purpose}</TableCell>
                                    <TableCell className={classes.tableCell}>{row.date_requested}</TableCell>
                                    <TableCell>
                                        <Typography className={classes.status} style={{
                                            backgroundColor: ((row.status === "Processed" && 'green') ||
                                                (row.status === "Pending" && 'red'))
                                        }}>
                                            {row.status}
                                        </Typography>
                                    </TableCell>
                                    <TableCell><button className="approve_btn" onClick={() => generate_certificate(row.reqpaper_id, row.document_type, row.indv_inhabitant_id, row.brgyaccount_id, row.date_requested, row.purpose, row.status, row.first_name, row.middle_name, row.last_name, row.suffix, row.address, row.gender, row.birthdate, row.civil_status, row.contact_person, row.contact_address, row.contact_contact, row.business_name, row.business_address, row.business_type, row.business_status, row.years_resided, row.vehicle_type, row.plate_no, row.destination, row.departure_date)}>Check</button></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                    <TableFooter>
                        <TablePagination rowsPerPageOptions={[5, 10, 15]}
                            component="div"
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ProcessTable