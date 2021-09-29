import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Grid, Typography, TablePagination, TableFooter } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ViewEditDialog from '../../../components/Dialog/ViewEditDialog';
import Axios from 'axios'
import ConfirmDialog from '../../../components/Dialog/ConfirmDialog';
import SuccessDialog from '../../../components/Dialog/SuccessDialog';
import Notification from '../../../components/Dialog/Notification';

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
    },
    tableCell: {
        fontFamily: "Montserrat, sans-serif",
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark,
        fontFamily: "Montserrat, sans-serif",

    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 5,
        padding: '3px 10px',
        display: 'inline-block',
        fontFamily: "Montserrat, sans-serif",

    }
}))

function ReservationTable({ data }) {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    Axios.defaults.withCredentials = true;
    const [viewEditDialog, setViewEditDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [successDialog, setSuccessDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [date_today, setDateToday] = useState("");

    var showdate = new Date();
    var displaytodaysdate = showdate.getFullYear() + '-' + (showdate.getMonth() + 1) + '-' + showdate.getDate();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    const confirm_request = (id_req_facilities) => {
        setViewEditDialog({
            ...viewEditDialog,
            isOpen: false,
        })
        setConfirmDialog({
            isOpen: true,
            title: "Confirmation",
            subtitle: "Are you sure you want to approve this request?",
            noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn">No</button>,
            yesButton: <button onClick={() => approve_request(id_req_facilities)} className="alert_yesBtn"> Yes </button>
        })
    }

    const approve_request = (id_req_facilities) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        Axios.put("http://localhost:3001/ApproveReservation", {
            facility_id: id_req_facilities,
        }).then((response) => {
            console.log(response);
            window.location.reload();
        });
        setNotify({ isOpen: true, message: "Facility Borrowed!", type: "success" })
    }

    const confirm_return = (id_req_facilities) => {
        setViewEditDialog({
            ...viewEditDialog,
            isOpen: false
        })
        setConfirmDialog({
            isOpen: true,
            title: "Confirmation",
            subtitle: "Are you sure you want to return this facility?",
            noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn">No</button>,
            yesButton: <button onClick={() => approve_return(id_req_facilities)} className="alert_yesBtn"> Yes </button>
        })
        setViewEditDialog({
            ...viewEditDialog,
            isOpen: false
        })
    }

    const approve_return = (id_req_facilities) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        Axios.put("http://localhost:3001/ReturnReservation", {
            facility_id: id_req_facilities,
            date_returned: date_today,
        }).then((response) => {
            console.log(response);
            window.location.reload();
        });
        setNotify({ isOpen: true, message: "Facility Borrowed!", type: "success" })
    }

    const check_request = (full_name, address, contact, item, quantity, date_need, date_borrowed, date_requested, date_returned) => {
        setViewEditDialog({
            isOpen: true,
            title: <main>
                <div className="wrapper">
                    <div className="forms">
                        <h1>Reservation Request</h1>
                        <div className="input_fields">
                            <label>Full Name:<span className="required_symbol">*</span></label>
                            <input type="text" className="inputs" autoComplete="off" value={full_name} disabled />
                        </div>
                        <div className="input_fields">
                            <label>Address</label>
                            <input type="textarea" className="textarea" autoComplete="off" value={address} disabled />
                        </div>
                        <div className="input_fields">
                            <label>Contact</label>
                            <input type="text" className="inputs" autoComplete="off" value={contact} disabled />
                        </div>
                        <div className="input_fields">
                            <label>Item</label>
                            <input type="text" className="inputs" autoComplete="off" value={item} disabled />
                        </div>
                        <div className="input_fields">
                            <label>Quantity</label>
                            <input type="text" className="inputs" autoComplete="off" value={quantity} disabled />
                        </div>
                        <div className="input_fields">
                            <label>Date Requested</label>
                            <input type="text" className="inputs" autoComplete="off" value={date_requested} disabled />
                        </div>
                        <div className="input_fields">
                            <label>Date Needed</label>
                            <input type="text" className="inputs" autoComplete="off" value={date_need} disabled />
                        </div>
                        <div className="input_fields">
                            <label>Date Borrowed</label>
                            <input type="text" className="inputs" autoComplete="off" value={date_borrowed} disabled />
                        </div>
                        <div className="input_fields">
                            <label>Date Returned</label>
                            <input type="text" className="inputs" autoComplete="off" value={date_returned} disabled />
                        </div>
                    </div>
                </div>
            </main>,
            noButton: <button onClick={() => setViewEditDialog({ ...viewEditDialog, isOpen: false })} className="alert_backBtn">Back</button>

        })
    }

    return (
        <div>
            <ViewEditDialog viewEditDialog={viewEditDialog} setViewEditDialog={setViewEditDialog} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            <SuccessDialog successDialog={successDialog} setSuccessDialog={setSuccessDialog} />
            <Notification notify={notify} setNotify={setNotify} />
            <input type="text" hidden value={displaytodaysdate} onChange={(e) => setDateToday(e.target.value)} />
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeaderCell}>Full Name</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Item</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Quantity</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Date Needed</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Date Requested</TableCell>
                            <TableCell className={classes.tableHeaderCell} >Status</TableCell>
                            <TableCell className={classes.tableHeaderCell} >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow >
                                    <TableCell style={{ cursor: 'pointer' }} onClick={() => check_request(row.full_name, row.address, row.contact, row.item, row.quantity, row.date_need, row.date_borrowed, row.date_requested, row.date_returned)}>
                                        <Grid container>
                                            <Grid item lg={2}>
                                                <Avatar alt={row.full_name} src="." className={classes.avatar} />
                                            </Grid>
                                            <Grid item lg={10} >
                                                <Typography className={classes.name} style={{ cursor: 'pointer' }}>{row.full_name}</Typography>
                                                <Typography className={classes.tableCell}>{row.indv_inhabitant_id}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell className={classes.tableCell} onClick={() => check_request(row.full_name, row.address, row.contact, row.item, row.quantity, row.date_need, row.date_borrowed, row.date_requested, row.date_returned)} style={{ cursor: 'pointer' }}> {row.item}</TableCell>
                                    <TableCell className={classes.tableCell} onClick={() => check_request(row.full_name, row.address, row.contact, row.item, row.quantity, row.date_need, row.date_borrowed, row.date_requested, row.date_returned)} style={{ cursor: 'pointer' }}> {row.quantity}</TableCell>
                                    <TableCell className={classes.tableCell} onClick={() => check_request(row.full_name, row.address, row.contact, row.item, row.quantity, row.date_need, row.date_borrowed, row.date_requested, row.date_returned)} style={{ cursor: 'pointer' }}> {row.date_need}</TableCell>
                                    <TableCell className={classes.tableCell} onClick={() => check_request(row.full_name, row.address, row.contact, row.item, row.quantity, row.date_need, row.date_borrowed, row.date_requested, row.date_returned)} style={{ cursor: 'pointer' }}> {row.date_requested}</TableCell>
                                    <TableCell> <Typography className={classes.status} style={{
                                        backgroundColor: ((row.status === "Borrowed" && 'green') ||
                                            (row.status === "Pending" && 'red') || (row.status === "Returned" && '#0061a8'))
                                    }}>
                                        {row.status}
                                    </Typography></TableCell>
                                    <TableCell>
                                        {row.status === "Pending" && <button className="view_edit" onClick={() => confirm_request(row.id_req_facilities)}>Approve</button> || row.status === "Borrowed" && <button className="view_edit" onClick={() => confirm_return(row.id_req_facilities)}>Return</button>}
                                    </TableCell>
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
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </TableFooter>
                </Table>
            </TableContainer>

        </div>
    )
}

export default ReservationTable
