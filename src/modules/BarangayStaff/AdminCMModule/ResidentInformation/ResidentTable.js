import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import './ResidentTable.css'
import ViewEditDialog from '../../../../components/Dialog/ViewEditDialog'
import m1 from './../../../../images/m1.png';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Grid, Typography, TablePagination, TableFooter } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

export default function ResidentTable({ data }) {

    const [indv_inhabitant_id, setInhabitantId] = useState("")
    Axios.defaults.withCredentials = true;
    const [viewEditDialog, setViewEditDialog] = useState({ isOpen: false, title: '', subtitle: '', yesButton: '', noButton: '' });

    const history = useHistory();

    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    const edit_personalInfo = () => {
        history.push("/Edit-Personal-Information");
    }
    const edit_address = () => {
        history.push("/Edit-Address-Information");
    }
    const edit_educationBackground = () => {
        history.push("/Edit-Educational-Background");
    }
    const edit_familyBackground = () => {
        history.push("/Edit-family-background");
    }

    function BackToList() {
        history.push("/ConstituentDetails")
    }


    function viewInformation(indv_inhabitant_id, first_name, middle_name, last_name, suffix, contact, complete_address, gender, email, birthdate, birthplace, civil_status, nationality, residence_years, household_head, rel_to_household, religion, disable, disable_kind, disability_card, fourPs, fourPsYear, is_voter, voter_reg_location, occupation, prim_school_name, prim_school_year, prim_school_address, sec_school_name, sec_school_year, sec_school_address, ter_school_name, ter_school_year, ter_school_address, region, province, city, barangay, postal, role) {
        setViewEditDialog({
            isOpen: true,
            title: <main>
                <div className="row">
                    <div className="upper_profile">
                        <div className="MyProfile_img_container">
                            <img src={m1} alt={m1} />
                        </div>
                        <div className="MyProfile_fullname">
                            <h1 className="FN">{first_name + " " + middle_name + " " + last_name + " " + suffix}</h1>
                            <span className="MyProfile_role">
                                <small className="R">
                                    <small>Role: </small>
                                    {role}
                                </small>
                            </span>
                            <table className="MyProfile_table">
                                <tbody>
                                    <tr>
                                        <td className="text-success">
                                            <i className="fa fa-id-card-alt">
                                            </i>
                                            &nbsp; Household Number
                                        </td>
                                        <td>
                                            {indv_inhabitant_id}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-success">
                                            <i className="fa fa-building"></i>
                                            &nbsp; Barangay
                                        </td>
                                        <td>{barangay}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="personal_info">
                    <form>
                        <div className="container_fluid">
                            <fieldset className="fieldset_container">
                                <legend>
                                    <i className="fa fa-info-circle"></i>
                                    Personal Information
                                </legend>
                                <div className="personal_info_col">
                                    <input type="hidden" id="student_id" name="student_id" value={indv_inhabitant_id} />
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> First Name:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="first_name" id="first_name" value={first_name} required className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> Middle Name:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="middle_name" id="middle_name" value={middle_name} required className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> Last Name:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="last_name" id="last_name" value={last_name} required className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> Suffix:</label>
                                        <div className="inputfield_view">
                                            <input type="text" name="suffix" id="suffix" value={suffix} className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> Gender:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="sex" id="sex" value={gender} required className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="controllabel" htmlFor="first_name"> Contact:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="contact" id="contact" value={contact} required className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> E-mail:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="birthdate" id="birthdate" value={email} className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> Date Of Birth:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="birthdate" id="birthdate" value={birthdate} className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> Place Of Birth:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="birthplace" value={birthplace} id="birthplace" className="form-control" autoComplete="off" />
                                        </div>
                                    </div>

                                </div>
                                <div className="personal_info_col">
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> Nationality:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="nationality" id="nationality" value={nationality} required className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> Civil Status:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="civil_status" id="civil_status" value={civil_status} required className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> Occupation:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="civil_status" id="civil_status" value={occupation} required className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> Residence Years:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="civil_status" id="civil_status" value={residence_years} required className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> Religion:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="civil_status" id="civil_status" value={religion} required className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> 4Ps Member:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="civil_status" id="civil_status" value={fourPs} required className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> 4Ps Year:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="civil_status" id="civil_status" value={fourPsYear} required className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> Disabled:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="civil_status" id="civil_status" value={disable} required className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> Disability Kind:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="civil_status" id="civil_status" value={disable_kind} required className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> Disability Card:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="civil_status" id="civil_status" value={disability_card} required className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> Is Voter:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="civil_status" id="civil_status" value={is_voter} required className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control_label" htmlFor="first_name"> Voter Registration Location:
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="inputfield_view">
                                            <input type="text" name="civil_status" id="civil_status" value={voter_reg_location} required className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>

                    </form>
                    <div className="editProfile_container">
                        <input type="submit" className="editProfile_btn" value="Edit" onClick={edit_personalInfo} />
                    </div>
                </div>
                <div className="personal_info">
                    <form>
                        <div className="container_fluid">
                            <fieldset className="fieldset_container">
                                <legend>
                                    <i className="fa fa-info-circle"></i>
                                    Address
                                </legend>
                                <div className="wrapper" id="wrapper_profile">
                                    <div className="forms" id="inputfields_profile">
                                        <div className="input_fields" >
                                            <label>Region<span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" autoComplete="off" value={region} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Province</label>
                                            <input type="text" className="inputs" autoComplete="off" value={province} />
                                        </div>
                                        <div className="input_fields">
                                            <label>City<span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" autoComplete="off" value={city} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Barangay<span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" autoComplete="off" value={barangay} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Postal</label>
                                            <input type="text" className="inputs" autoComplete="off" value={postal} />
                                        </div>
                                        <div className="input_fields">
                                            <label>Complete Address<span className="required_symbol">*</span></label>
                                            <textarea className="textarea" autoComplete="off" value={complete_address}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </form>
                    <div className="editProfile_container">
                        <input type="submit" className="editProfile_btn" value="Edit" onClick={edit_address} />
                    </div>
                </div>
                <div className="personal_info">
                    <form>
                        <div className="container_fluid">
                            <fieldset className="fieldset_container">
                                <legend>
                                    <i className="fa fa-info-circle"></i>
                                    Educational Background
                                </legend>
                                <input type="hidden" id="student_id" name="student_id" value={indv_inhabitant_id} />
                                <div className="wrapper" id="wrapper_profile">
                                    <div className="forms" id="inputfields_profile">
                                        <h3>Primary</h3>
                                        <div className="input_fields" >
                                            <label>School Name<span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" autoComplete="off" value={prim_school_name} />
                                        </div>
                                        <div className="input_fields">
                                            <label>School Year</label>
                                            <input type="text" className="inputs" autoComplete="off" value={prim_school_year} />
                                        </div>
                                        <div className="input_fields">
                                            <label>School Address<span className="required_symbol">*</span></label>
                                            <textarea className="textarea" value={prim_school_address} ></textarea>
                                        </div>
                                        <h3>Secondary</h3>
                                        <div className="input_fields">
                                            <label>School Name<span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" value={sec_school_name} autoComplete="off" />
                                        </div>
                                        <div className="input_fields">
                                            <label>School Year</label>
                                            <input type="text" className="inputs" value={sec_school_year} autoComplete="off" />
                                        </div>
                                        <div className="input_fields">
                                            <label>School Address<span className="required_symbol">*</span></label>
                                            <textarea className="textarea" value={sec_school_address} autoComplete="off"></textarea>
                                        </div>
                                        <h3>Tertiary</h3>
                                        <div className="input_fields">
                                            <label>School Name<span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" value={ter_school_name} autoComplete="off" />
                                        </div>
                                        <div className="input_fields">
                                            <label>School Year</label>
                                            <input type="text" className="inputs" value={ter_school_year} autoComplete="off" />
                                        </div>
                                        <div className="input_fields">
                                            <label>School Address<span className="required_symbol">*</span></label>
                                            <textarea className="textarea" value={ter_school_address} autoComplete="off"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </form>
                    <div className="editProfile_container">
                        <input type="submit" className="editProfile_btn" value="Edit" onClick={edit_educationBackground} />
                    </div>
                </div>
                <div className="personal_info">
                    <form>
                        <div className="container_fluid">
                            <fieldset className="fieldset_container">
                                <legend>
                                    <i className="fa fa-info-circle"></i>
                                    Family Background
                                </legend>
                                <div className="wrapper" id="wrapper_profile">
                                    <div className="forms" id="inputfields_profile">
                                        <div className="input_fields" >
                                            <label>Relationship:<span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" autoComplete="off" />
                                        </div>
                                        <div className="input_fields" >
                                            <label>Full Name<span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" autoComplete="off" />
                                        </div>
                                        <div className="input_fields">
                                            <label>Occupation</label>
                                            <input type="text" className="inputs" autoComplete="off" />
                                        </div>
                                        <div className="input_fields">
                                            <label>Complete Address:<span className="required_symbol">*</span></label>
                                            <textarea className="textarea" autoComplete="off"></textarea>
                                        </div>
                                        <hr />

                                        <div className="input_fields" >
                                            <label>Relationship:<span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" autoComplete="off" />
                                        </div>
                                        <div className="input_fields">
                                            <label>Full Name<span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" autoComplete="off" />
                                        </div>
                                        <div className="input_fields">
                                            <label>Occupation</label>
                                            <input type="text" className="inputs" autoComplete="off" />
                                        </div>
                                        <div className="input_fields">
                                            <label>Complete Address<span className="required_symbol">*</span></label>
                                            <textarea className="textarea" autoComplete="off"></textarea>
                                        </div>
                                        <hr />

                                        <div className="input_fields" >
                                            <label>Relationship:<span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" autoComplete="off" />
                                        </div>
                                        <div className="input_fields">
                                            <label>Full Name<span className="required_symbol">*</span></label>
                                            <input type="text" className="inputs" autoComplete="off" />
                                        </div>
                                        <div className="input_fields">
                                            <label>Occupation</label>
                                            <input type="text" className="inputs" autoComplete="off" />
                                        </div>
                                        <div className="input_fields">
                                            <label>Complete Address<span className="required_symbol">*</span></label>
                                            <textarea className="textarea" autoComplete="off"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>

                    </form>
                    <div className="editProfile_container">
                        <input type="submit" className="editProfile_btn" value="Edit" onClick={edit_familyBackground} />
                    </div>
                </div>

            </main>,

            noButton: <button onClick={() => setViewEditDialog({ ...viewEditDialog, isOpen: false })} className="alert_backBtn">Back</button>
        })
        // return (
        //     <ViewAllDetails inhabitantId={indv_inhabitant_id} />
        // )
    }

    function ArchiveResident() {
    }

    return (
        <div>
            <ViewEditDialog viewEditDialog={viewEditDialog} setViewEditDialog={setViewEditDialog} />
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeaderCell}>Full Name</TableCell>
                            <TableCell className={classes.tableHeaderCell} >Address</TableCell>
                            <TableCell className={classes.tableHeaderCell} >Action</TableCell>
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
                                                <Typography onChange={(e) => { setInhabitantId(e.target.value) }}>
                                                    {row.indv_inhabitant_id}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell> {row.complete_address}</TableCell>
                                    <TableCell><button className="view_edit" onClick={() => viewInformation(row.indv_inhabitant_id, row.first_name, row.middle_name, row.last_name, row.suffix, row.contact, row.complete_address, row.gender, row.email, row.birthdate, row.birthplace, row.civil_status, row.nationality, row.residence_years, row.household_head, row.rel_to_household, row.religion, row.disable, row.disable_lind, row.disability_card, row.fourPs, row.is_voter, row.voter_reg_location, row.occupation, row.prim_school_name, row.prim_school_year, row.prim_school_address, row.sec_school_name, row.sec_school_year, row.sec_school_address, row.ter_school_name, row.ter_school_year, row.ter_school_address, row.region, row.province, row.city, row.barangay, row.postal, row.role)}>View/Edit</button>
                                        <button className="archive_button" onClick={ArchiveResident}>Archive</button></TableCell>
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