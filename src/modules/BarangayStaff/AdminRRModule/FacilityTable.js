import React, { useState } from 'react'
import './FacilityTable.css'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Grid, Typography, TablePagination, TableFooter } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import ViewEditDialog from './../../../components/Dialog/ViewEditDialog';
import ConfirmDialog from '../../../components/Dialog/ConfirmDialog';
import Notification from '../../../components/Dialog/Notification';
import LoginAuthPop from '../../../components/Dialog/LoginAuthPop';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 200,
        fontFamily: "Montserrat, sans-serif",
    },

    tableContainer: {
        borderRadius: 5,
        margin: '10px 10px',
        maxWidth: 700,

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
        display: 'inline-block'
    },
    tablePagination: {
        fontFamily: "Montserrat, sans-serif",
    }
}))

function FacilityTable({ data }) {
    const classes = useStyles();

    const [indv_inhabitant_id, setInhabitantId] = useState("")
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [viewEditDialog, setViewEditDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [errorDialog, setErrorDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });
    Axios.defaults.withCredentials = true;
    const [facility_name, setFacilityName] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    const check_facility = (facility_name, quantity) => {
        const save_changes = () => {
            if (!facility_name || !quantity) {
                setErrorDialog({
                    isOpen: true,
                    title: "All fields must not be empty.",
                    subtitle: "",
                    noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
                })
            }
        }

        setViewEditDialog({
            isOpen: true,
            title: <main>
                <div className="EditProfile_container">
                    <div className="wrapper">
                        <div className="titles">
                            Edit {facility_name}
                        </div>
                        <div className="forms">
                            <div className="input_fields">
                                <label>Facility Name</label>
                                <input type="text" className="inputs" value={facility_name} onChange={(e) => setFacilityName(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <label>Quantity</label>
                                <input type="text" className="inputs" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                            </div>
                            <div className="input_fields">
                                <input type="submit" value="Save Changes" className="btn" onClick={save_changes} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>,
            noButton: <button onClick={() => setViewEditDialog({ ...viewEditDialog, isOpen: false })} className="alert_backBtn">Back</button>
        })
    }

    return (
        <div className="">
            <ViewEditDialog viewEditDialog={viewEditDialog} setViewEditDialog={setViewEditDialog} />
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            <LoginAuthPop errorDialog={errorDialog} setErrorDialog={setErrorDialog} />
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeaderCell} >Facility</TableCell>
                            <TableCell className={classes.tableHeaderCell} >Quantity</TableCell>
                            <TableCell className={classes.tableHeaderCell} ></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow>
                                    <TableCell className={classes.tableCell}>
                                        <Grid container>
                                            <Grid item lg={10} >
                                                <Typography className={classes.name}>{row.facility_name}
                                                </Typography>


                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell className={classes.tableCell}> {row.quantity}</TableCell>
                                    <TableCell><button className="view_edit" onClick={() => check_facility(row.facility_name, row.quantity)} >Check</button></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                    <TableFooter >
                        <TablePagination className={classes.tablePagination}
                            rowsPerPageOptions={[5, 10, 15]}
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

export default FacilityTable