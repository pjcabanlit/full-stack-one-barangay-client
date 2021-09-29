import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import './ViewAllDetails.css';
import m1 from './../../../images/p1.jpg';

function ViewAllDetails({ inhabitantId }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [indv_inhabitant_id, setInhabitantId] = useState("");
    const [first_name, setFirstName] = useState("");
    const [middle_name, setMiddleName] = useState("");
    const [last_name, setLastName] = useState("");
    const [suffix, setPrefix] = useState("");
    const [contact, setContact] = useState("");
    const [complete_address, setAddress] = useState("");
    const [gender, setSex] = useState("");
    const [email, setEmail] = useState("");
    const [BirthDate, setBirthdate] = useState("");
    const [birthplace, setPlaceOfBirth] = useState("");
    const [civil_status, setCivilStatus] = useState("");
    const [nationality, setNationality] = useState("");
    const [residence_years, setResidenceYear] = useState("");
    const [household_head, setHouseHoldHead] = useState("");
    const [rel_to_household, setRelationshipToHousehold] = useState("");
    const [religion, setReligion] = useState("");
    const [disable, setDisable] = useState("");
    const [disable_kind, setDisableKind] = useState("");
    const [disability_card, setDisabilityCard] = useState("");
    const [fourPs, setFourPs] = useState("");
    const [fourPsYear, setFourPsYear] = useState("");
    const [is_voter, setIsVoter] = useState("")
    const [voter_reg_location, setVoterRegLocation] = useState("")
    const [occupation, setOccupation] = useState("")
    const [prim_school_name, setPrimSchoolName] = useState("")
    const [prim_school_year, setPrimSchoolYear] = useState("")
    const [prim_school_address, setPrimSchoolAddress] = useState("")
    const [sec_school_name, setSecSchoolName] = useState("")
    const [sec_school_year, setSecSchoolYear] = useState("")
    const [sec_school_address, setSecSchoolAddress] = useState("")
    const [ter_school_name, setTerSchoolName] = useState("")
    const [ter_school_year, setTerSchoolYear] = useState("")
    const [ter_school_address, setTerSchoolAddress] = useState("")
    const [region, setRegion] = useState("")
    const [province, setProvince] = useState("")
    const [city, setCity] = useState("")
    const [barangay, setBarangay] = useState("");
    const [postal, setPostal] = useState("")

    const [role, setRole] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/InhabitantInfo").then((response) => {
            if (response.data.loggedIn === true) {
                setInhabitantId(response.data.user[0].indv_inhabitant_id)
                setFirstName(response.data.user[0].first_name);
                setMiddleName(response.data.user[0].middle_name);
                setLastName(response.data.user[0].last_name);
                setPrefix(response.data.user[0].suffix)
                setContact(response.data.user[0].contact)
                setAddress(response.data.user[0].complete_address);
                setSex(response.data.user[0].gender);
                setEmail(response.data.user[0].email)
                setBirthdate(response.data.user[0].BirthDate);
                setPlaceOfBirth(response.data.user[0].birthplace);
                setCivilStatus(response.data.user[0].civil_status);
                setNationality(response.data.user[0].nationality);
                setResidenceYear(response.data.user[0].residence_years);
                setHouseHoldHead(response.data.user[0].household_head);
                setRelationshipToHousehold(response.data.user[0].rel_to_household);
                setReligion(response.data.user[0].religion);
                setDisable(response.data.user[0].disable);
                setDisableKind(response.data.user[0].disable_kind);
                setDisabilityCard(response.data.user[0].disability_card);
                setFourPs(response.data.user[0].fourPs);
                setFourPsYear(response.data.user[0].fourPsYear);
                setIsVoter(response.data.user[0].is_voter);
                setVoterRegLocation(response.data.user[0].voter_reg_location);
                setOccupation(response.data.user[0].occupation);
                setPrimSchoolName(response.data.user[0].prim_school_name);
                setPrimSchoolYear(response.data.user[0].prim_school_year);
                setPrimSchoolAddress(response.data.user[0].prim_school_address);
                setSecSchoolName(response.data.user[0].sec_school_name);
                setSecSchoolYear(response.data.user[0].sec_school_year);
                setSecSchoolAddress(response.data.user[0].sec_school_address);
                setTerSchoolName(response.data.user[0].ter_school_name);
                setTerSchoolYear(response.data.user[0].ter_school_year);
                setTerSchoolAddress(response.data.user[0].ter_school_address);
                setRegion(response.data.user[0].region);
                setProvince(response.data.user[0].province);
                setCity(response.data.user[0].city);
                setBarangay(response.data.user[0].barangay);
                setPostal(response.data.user[0].postal);

                setRole(response.data.user[0].role);
                setUsername(response.data.user[0].username)
                setPassword(response.data.user[0].password);

            }
        });
    }, []);

    const history = useHistory();

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
    return (
        <main>
            <div className="row">
                <div className="editProfile_container">
                    <input type="submit" className="editProfile_btn" value="Back" onClick={BackToList} />
                </div>
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
                                        <input type="text" name="first_name" id="first_name" value={inhabitantId} required className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> Middle Name:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="middle_name" id="middle_name" value={middle_name} required className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> Last Name:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="last_name" id="last_name" value={last_name} required className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> Suffix:</label>
                                    <div className="inputfield_view">
                                        <input type="text" name="suffix" id="suffix" value={suffix} className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> Gender:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="sex" id="sex" value={gender} required className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="controllabel" htmlFor="first_name"> Contact:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="contact" id="contact" value={complete_address} required className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> E-mail:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="birthdate" id="birthdate" value={email} className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> Date Of Birth:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="birthdate" id="birthdate" value={BirthDate} className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> Place Of Birth:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="birthplace" value={birthplace} id="birthplace" className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>

                            </div>
                            <div className="personal_info_col">
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> Nationality:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="nationality" id="nationality" value={nationality} required className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> Civil Status:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="civil_status" id="civil_status" value={civil_status} required className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> Occupation:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="civil_status" id="civil_status" value={occupation} required className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> Residence Years:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="civil_status" id="civil_status" value={residence_years} required className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> Religion:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="civil_status" id="civil_status" value={religion} required className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> 4Ps Member:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="civil_status" id="civil_status" value={fourPs} required className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> 4Ps Year:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="civil_status" id="civil_status" value={fourPsYear} required className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> Disabled:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="civil_status" id="civil_status" value={disable} required className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> Disability Kind:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="civil_status" id="civil_status" value={disable_kind} required className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> Disability Card:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="civil_status" id="civil_status" value={disability_card} required className="form-control" autoComplete="off" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control_label" htmlFor="first_name"> Is Voter:
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="inputfield_view">
                                        <input type="text" name="civil_status" id="civil_status" value={is_voter} required className="form-control" autoComplete="off" disabled />
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
                                        <input type="text" className="inputs" autoComplete="off" value={region} disabled />
                                    </div>
                                    <div className="input_fields">
                                        <label>Province</label>
                                        <input type="text" className="inputs" autoComplete="off" value={province} disabled />
                                    </div>
                                    <div className="input_fields">
                                        <label>City<span className="required_symbol">*</span></label>
                                        <input type="text" className="inputs" autoComplete="off" value={city} disabled />
                                    </div>
                                    <div className="input_fields">
                                        <label>Barangay<span className="required_symbol">*</span></label>
                                        <input type="text" className="inputs" autoComplete="off" value={barangay} disabled />
                                    </div>
                                    <div className="input_fields">
                                        <label>Postal</label>
                                        <input type="text" className="inputs" autoComplete="off" value={postal} disabled />
                                    </div>
                                    <div className="input_fields">
                                        <label>Complete Address<span className="required_symbol">*</span></label>
                                        <textarea className="textarea" autoComplete="off" value={complete_address} disabled></textarea>
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
                                        <input type="text" className="inputs" autoComplete="off" value={prim_school_name} disabled />
                                    </div>
                                    <div className="input_fields">
                                        <label>School Year</label>
                                        <input type="text" className="inputs" autoComplete="off" value={prim_school_year} disabled />
                                    </div>
                                    <div className="input_fields">
                                        <label>School Address<span className="required_symbol">*</span></label>
                                        <textarea className="textarea" value={prim_school_address} disabled></textarea>
                                    </div>
                                    <h3>Secondary</h3>
                                    <div className="input_fields">
                                        <label>School Name<span className="required_symbol">*</span></label>
                                        <input type="text" className="inputs" value={sec_school_name} disabled autoComplete="off" />
                                    </div>
                                    <div className="input_fields">
                                        <label>School Year</label>
                                        <input type="text" className="inputs" value={sec_school_year} disabled autoComplete="off" />
                                    </div>
                                    <div className="input_fields">
                                        <label>School Address<span className="required_symbol">*</span></label>
                                        <textarea className="textarea" value={sec_school_address} disabled autoComplete="off"></textarea>
                                    </div>
                                    <h3>Tertiary</h3>
                                    <div className="input_fields">
                                        <label>School Name<span className="required_symbol">*</span></label>
                                        <input type="text" className="inputs" value={ter_school_name} disabled autoComplete="off" />
                                    </div>
                                    <div className="input_fields">
                                        <label>School Year</label>
                                        <input type="text" className="inputs" value={ter_school_year} disabled autoComplete="off" />
                                    </div>
                                    <div className="input_fields">
                                        <label>School Address<span className="required_symbol">*</span></label>
                                        <textarea className="textarea" value={ter_school_address} disabled autoComplete="off"></textarea>
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
                                        <input type="text" className="inputs" onChange={(e) => {
                                            setFirstName(e.target.value);
                                        }} autoComplete="off" />
                                    </div>
                                    <div className="input_fields" >
                                        <label>Full Name<span className="required_symbol">*</span></label>
                                        <input type="text" className="inputs" onChange={(e) => {
                                            setFirstName(e.target.value);
                                        }} autoComplete="off" />
                                    </div>
                                    <div className="input_fields">
                                        <label>Occupation</label>
                                        <input type="text" className="inputs" onChange={(e) => {
                                            setMiddleName(e.target.value);
                                        }} autoComplete="off" />
                                    </div>
                                    <div className="input_fields">
                                        <label>Complete Address:<span className="required_symbol">*</span></label>
                                        <textarea className="textarea" onChange={(e) => {
                                            setAddress(e.target.value);
                                        }} autoComplete="off"></textarea>
                                    </div>
                                    <hr />

                                    <div className="input_fields" >
                                        <label>Relationship:<span className="required_symbol">*</span></label>
                                        <input type="text" className="inputs" onChange={(e) => {
                                            setFirstName(e.target.value);
                                        }} autoComplete="off" />
                                    </div>
                                    <div className="input_fields">
                                        <label>Full Name<span className="required_symbol">*</span></label>
                                        <input type="text" className="inputs" onChange={(e) => {
                                            setFirstName(e.target.value);
                                        }} autoComplete="off" />
                                    </div>
                                    <div className="input_fields">
                                        <label>Occupation</label>
                                        <input type="text" className="inputs" onChange={(e) => {
                                            setMiddleName(e.target.value);
                                        }} autoComplete="off" />
                                    </div>
                                    <div className="input_fields">
                                        <label>Complete Address<span className="required_symbol">*</span></label>
                                        <textarea className="textarea" onChange={(e) => {
                                            setAddress(e.target.value);
                                        }} autoComplete="off"></textarea>
                                    </div>
                                    <hr />

                                    <div className="input_fields" >
                                        <label>Relationship:<span className="required_symbol">*</span></label>
                                        <input type="text" className="inputs" onChange={(e) => {
                                            setFirstName(e.target.value);
                                        }} autoComplete="off" />
                                    </div>
                                    <div className="input_fields">
                                        <label>Full Name<span className="required_symbol">*</span></label>
                                        <input type="text" className="inputs" onChange={(e) => {
                                            setFirstName(e.target.value);
                                        }} autoComplete="off" />
                                    </div>
                                    <div className="input_fields">
                                        <label>Occupation</label>
                                        <input type="text" className="inputs" onChange={(e) => {
                                            setMiddleName(e.target.value);
                                        }} autoComplete="off" />
                                    </div>
                                    <div className="input_fields">
                                        <label>Complete Address<span className="required_symbol">*</span></label>
                                        <textarea className="textarea" onChange={(e) => {
                                            setAddress(e.target.value);
                                        }} autoComplete="off"></textarea>
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

        </main>

    )
}

export default ViewAllDetails;