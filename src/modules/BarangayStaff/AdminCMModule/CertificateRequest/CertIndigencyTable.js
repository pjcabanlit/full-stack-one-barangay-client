import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Grid, Typography, TablePagination, TableFooter } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios'
import './ProcessTable.css'
import Notification from './../../../../components/Dialog/Notification';
import ConfirmDialog from './../../../../components/Dialog/ConfirmDialog';
import ViewEditDialog from './../../../../components/Dialog/ViewEditDialog';



const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 200,
    },
    tableContainer: {
        borderRadius: 5,
        margin: '10px 10px',
        maxWidth: 1400,
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)

    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark,
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 5,
        padding: '3px 10px',
        display: 'inline-block'
    }
}))


function CertIndigencyTable({ data }) {
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [viewEditDialog, setViewEditDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });

    const [indv_inhabitant_id, setInhabitantId] = useState("");

    const [document_type, setDocumentType] = useState("");

    const history = useHistory();

    const classes = useStyles();

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

    // const approveDialog = (reqpaper_id) => {
    //     setConfirmDialog({
    //         isOpen: true,
    //         title: "Confirmation",
    //         subtitle: "Are you sure you want to process this application?",
    //         noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn">No</button>,
    //         yesButton: <button onClick={() => setApprove(reqpaper_id)} className="alert_yesBtn"> Yes </button>
    //     })
    // }

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

    // const declineDialog = (reqpaper_id) => {
    //     setConfirmDialog({
    //         isOpen: true,
    //         title: "Confirmation",
    //         subtitle: "Are you sure you want to decline this application?",
    //         noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn">No</button>,
    //         yesButton: <button onClick={() => setDecline(reqpaper_id)} className="alert_yesBtn"> Yes </button>
    //     })
    // }

    const setDelete = (reqpaper_id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        Axios.delete(`http://localhost:3001/delete/${reqpaper_id}`)
        setNotify({ isOpen: true, message: "Application Deleted", type: "success" })
        window.location.reload();
    }

    // const deleteDialog = (reqpaper_id) => {
    //     setConfirmDialog({
    //         isOpen: true,
    //         title: "Confirmation",
    //         subtitle: "Are you sure you want to decline this application?",
    //         noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn">No</button>,
    //         yesButton: <button onClick={() => setDelete(reqpaper_id)} className="alert_yesBtn"> Yes </button>
    //     })
    // }

    const CheckFullDetails = () => {
        history.push("/ConstituentDetails")
    }

    // const checkRequest = (indv_inhabitant_id) => {
    //     if (indv_inhabitant_id !== "") {
    //         setConfirmDialog({
    //             isOpen: true,
    //             title: "Confirmation",
    //             subtitle: "This is a official resident. Would you like to see full details?",
    //             noButton: <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="alert_noBtn">No</button>,
    //             yesButton: <button onClick={() => CheckFullDetails()} className="alert_yesBtn"> Yes </button>
    //         });
    //     }
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

    const generate_certificate = (document_type) => {
        history.push("/generate-certificate");
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
                            <TableCell className={classes.tableHeaderCell} >Generate</TableCell>
                            <TableCell className={classes.tableHeaderCell} >Status</TableCell>
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

                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell onChange={(e) => setDocumentType(e.target.value)}>{row.document_type}</TableCell>
                                    <TableCell>{row.purpose}</TableCell>
                                    <TableCell>{row.date_requested}</TableCell>
                                    <TableCell><button className="approve_btn" onClick={() => generate_certificate()}>Check</button></TableCell>
                                    <TableCell>
                                        <Typography className={classes.status} style={{
                                            backgroundColor: ((row.status === "Processed" && 'green') ||
                                                (row.status === "Pending" && 'red'))
                                        }}>
                                            {row.status}
                                        </Typography>
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

export default CertIndigencyTable