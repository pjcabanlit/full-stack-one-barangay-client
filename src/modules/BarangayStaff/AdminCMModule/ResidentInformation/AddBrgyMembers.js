import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import "./AddBrgyMembers.css";

function AddBrgyMembers() {
    const history = useHistory();

    const backToList = () => {
        history.push("/ConstituentDetails");
    }
    const [region, setRegion] = useState();
    const [province, setProvince] = useState();
    const [city, setCity] = useState();
    const [barangay, setBarangay] = useState();
    const [householdHead, setHouseholdHead] = useState();
    const [fourPs, setFourPs] = useState();
    const [fourPsYear, setFourPsYear] = useState();
    const [disable, setDisable] = useState();
    const [disabilityKind, setDisabilityKind] = useState();
    return (
        <main>
            <div className="AddBrgyMembers_container">
                <form>
                    <div className="AddBrgyMembers_upperContainer">
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Region</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <div className="custom_select">
                                    <select className="form-control" onChange={(e) => setRegion(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="NCR - National Capital Region">NCR - National Capital Region</option>
                                        <option value="CAR - Cordillera Administrative Region">CAR - Cordillera Administrative Region</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {region === "NCR - National Capital Region" ? <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Province</label>
                            <div className="custom_select">
                                <select className="form-control" onChange={(e) => setProvince(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="NCR, First District">NCR, First District</option>
                                    <option value="NCR, Second District">NCR, Second District</option>
                                </select>
                            </div>
                        </div> : ""}
                        {province === "NCR, First District" ? <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">City</label>
                            <div className="custom_select">
                                <select className="form-control" onChange={(e) => setCity(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="City of Manila">City Of Manila</option>
                                </select>
                            </div>
                        </div> : ""}
                        {city === "City of Manila" ? <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Barangay</label>
                            <div className="custom_select">
                                <select className="form-control" onChange={(e) => setBarangay(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="Barangay 407">Barangay 407</option>
                                    <option value="Barangay 412">Barangay 412</option>
                                </select>
                            </div>
                        </div> : ""}
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label" htmlFor="first_name">
                                {" "}
                                Household Number (HN):
                                <span className="text-danger">*</span>
                            </label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="AddBrgyMembers_Inhabitant">
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">First Name</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Middle Name</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Last Name</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Suffix</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div>

                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Complete Address</label>
                            <div className="AddBrgyMembers_textarea">
                                <textarea className="textarea"></textarea>
                            </div>
                        </div>
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Birthdate</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="date"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Place Of Birth</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Gender</label>
                            <div className="custom_select">
                                <select className="inputs">
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Civil Status</label>
                            <div className="custom_select">
                                <select className="inputs">
                                    <option value="">Select</option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                    <option value="Separated">Separated</option>
                                    <option value="Widow/er">Widow/er</option>
                                </select>
                            </div>
                        </div>
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Contact</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Occupation</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Citizenship</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Household Head</label>
                            <div className="custom_select">
                                <select className="inputs" onChange={(e) => setHouseholdHead(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>

                        {householdHead == "No" ? <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Household Head</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div> : ""}
                        {householdHead === "No" ? <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Relationship to Household Head</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div> : ""}
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Residence Years</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Citizenship</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Religion</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">4Ps Member</label>
                            <div className="custom_select">
                                <select className="inputs" onChange={(e) => setFourPs(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        {fourPs === "Yes" ? <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">4Ps Year</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div> : ""}

                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Disabled</label>
                            <div className="custom_select">
                                <select className="inputs" onChange={(e) => setDisable(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>

                        {disable === "Yes" ? <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Disability Kind</label>
                            <div className="custom_select">
                                <select className="inputs" onChange={(e) => setDisabilityKind(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="Blind">Blind</option>
                                    <option value="Deaf">Deaf</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                        </div> : ""}

                        {disabilityKind === "Others" ? <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Specify Disability</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div> : ""}

                        {disable === "Yes" ? <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Disability Card</label>
                            <div className="custom_select">
                                <select className="inputs" >
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="None">None</option>
                                </select>
                            </div>
                        </div> : ""}

                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Is Voter?</label>
                            <div className="custom_select">
                                <select className="inputs" >
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="None">None</option>
                                </select>
                            </div>
                        </div>


                        <div className="AddBrgyMembers_form_group">
                            <label className="AddBrgyMembers_control_label">Image</label>
                            <div className="AddBrgyMembers_inputfield_view">
                                <input
                                    type="file"
                                    name="myImage"
                                    accept="image/png, image/gif, image/jpeg"
                                    required
                                    className="form-control"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="AddBrgyMembers_form_group">
                    <input type="submit" value="Submit" className="btn" />
                </div>
                <div className="AddBrgyMembers_form_group">
                    <input type="submit" value="Back" className="btn" onClick={backToList} />
                </div>
            </div>
        </main >
    );
}

export default AddBrgyMembers;
