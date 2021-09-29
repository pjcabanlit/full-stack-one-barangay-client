import React, { useState } from 'react';
import Axios from 'axios';
import { saveAs } from 'file-saver';
import './GenerateCertificate.css';

function GenerateCertificate({ document_type }) {
    const [indv_inhabitant_id, setInhabitantId] = useState("");
    const [brgyaccount_id, setBrgyAccountId] = useState("");
    const [first_name, setFirstName] = useState("");
    const [middle_name, setMiddleName] = useState("");
    const [last_name, setLastName] = useState("");
    const [suffix, setSuffix] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [purpose, setPurpose] = useState("");
    const [personToContact, setPersonToContact] = useState("");
    const [addressToContact, setAddressToContact] = useState("");
    const [contactToContact, setContactToContact] = useState("");
    const [years_resided, setYearsResided] = useState("");
    const [business_name, setBusinessName] = useState("");
    const [business_address, setBusinessAddress] = useState("");
    const [business_type, setBusinessType] = useState("");
    const [business_status, setBusinessStatus] = useState("");
    const [civil_status, setCivilStatus] = useState("");
    const [vehicle_type, setVehicleType] = useState("");
    const [plate_no, setPlateNo] = useState("");
    const [destination, setDestination] = useState("");
    const [departure_date, setDepartureDate] = useState("");

    return (
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
                                    <input type="submit" value="Generate" className="btn" />
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
                                    <input className="textarea" value={personToContact} onChange={(e) => setPersonToContact(e.target.value)} />
                                </div>
                                <div className="input_fields">
                                    <label>Address</label>
                                    <textarea className="textarea" value={addressToContact} onChange={(e) => setAddressToContact(e.target.value)} ></textarea>
                                </div>
                                <div className="input_fields">
                                    <label>Contact No</label>
                                    <input className="textarea" value={contactToContact} onChange={(e) => setContactToContact(e.target.value)} />
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
                                    <input type="submit" value="Generate" className="btn" />
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
                                    <input type="submit" value="Generate" className="btn" />
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
                                    <input type="submit" value="Generate" className="btn" />
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
    )
}

export default GenerateCertificate;
