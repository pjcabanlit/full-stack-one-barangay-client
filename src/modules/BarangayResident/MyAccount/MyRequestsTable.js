import React, { useState } from 'react'
import PaymentDialog from './../../../components/Dialog/PaymentDialog'
import SuccessDialog from './../../../components/Dialog/SuccessDialog'
import Notification from './../../../components/Dialog/Notification'
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 5,
        margin: '10px 10px',
        maxWidth: 950,
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
    }
}))

function MyRequestTable({ data }) {

    const [paymentDialog, setPaymentDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });
    const [successDialog, setSuccessDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });

    const classes = useStyles();
    console.log(data)
    return (
        <div>
            <Notification notify={notify} setNotify={setNotify} />
            <PaymentDialog paymentDialog={paymentDialog} setPaymentDialog={setPaymentDialog} />
            <SuccessDialog successDialog={successDialog} setSuccessDialog={setSuccessDialog} />

            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeaderCell}>Full Name</TableCell>
                            <TableCell className={classes.tableHeaderCell} >Type of Document</TableCell>
                            <TableCell className={classes.tableHeaderCell} >Date Requested</TableCell>
                            <TableCell className={classes.tableHeaderCell} >Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => {
                            return (
                                <TableRow>
                                    <TableCell>
                                        <Grid container>
                                            <Grid item lg={2}>
                                                <Avatar alt={row.first_name} src="." className={classes.avatar} />
                                            </Grid>
                                            <Grid item lg={10}>
                                                <Typography className={classes.name}>{row.first_name + " " + row.middle_name + " " + row.last_name + " " + row.suffix}
                                                </Typography>
                                                <Typography>
                                                    {row.address}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>{row.document_type}</TableCell>
                                    <TableCell>{row.date_requested}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}
export default MyRequestTable;