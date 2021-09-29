import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useHistory } from 'react-router-dom'
import './ApplicationModule.css';
import Footer from './../../../components/Footer/Footer';
import LoginAuthPop from './../../../components/Dialog/LoginAuthPop';
import Navbar from './../../../components/Navbar/Navbar';
import ScrollToTop from './../../../components/ScrollToTop/ScrollToTop';

function ApplicationModule() {
    const [errorDialog, setErrorDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' });
    const history = useHistory();
    const [indv_inhabitant_id, setInhabitantId] = useState("")

    useEffect(() => {
        Axios.get("http://localhost:3001/InhabitantLogin").then((response) => {
            if (response.data.loggedIn == true) {
                setInhabitantId(response.data.user[0].indv_inhabitant_id);
            }
        });
    }, []);

    const ApplyCertificate = () => {
        setErrorDialog({
            ...errorDialog,
            isOpen: false
        })
        {
            !indv_inhabitant_id ? setErrorDialog({
                isOpen: true,
                title: "Oops! Access Denied.",
                subtitle: "You must be logged in to apply this document.",
                noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
            }) : history.push("/Barangay-Certificates")
        }
    }

    return (
        <div>
            <Navbar />
            <ScrollToTop />
            <LoginAuthPop errorDialog={errorDialog} setErrorDialog={setErrorDialog} />
            <div className="main-container">
                <div className="container">

                    <div className="brgyClearanceInfo_container">
                        <div className="clearance_title">
                            <h1>Barangay Clearance</h1>
                            <p>A Barangay Clearance is a document issued by the Barangay Secretary and signed by the Barangay Captain stating that you are a living at that specific place and you are of good moral character. Somehow, a smaller version of NBI or Police clearance.</p>
                        </div>

                        <div className="reasons_container">
                            <h3>Possible reasons why you need Barangay Clearance</h3>
                            <ul>
                                <li>Job Requirement</li>
                                <li>Bank Requirement</li>
                                <li>NBI Clearance</li>
                                <li>Police Clearance</li>
                                <li>Postal ID</li>
                                <li>UMID Card</li>
                                <li>Driver's License</li>
                                <li>Business Requirement</li>
                                <li>Indigent Certification for Philhealth</li>
                            </ul>
                        </div>
                        <div className="requirements_container">
                            <h3>Requirements to get a Barangay Clearance</h3>
                            <ul>
                                <li>Cedula</li>
                                <ul className="inner_li">
                                    <li>You can get it from the Barangay.</li>
                                    <li>Payment is Php 5.00 plus Php 1.00 for every Php 1,000 income. So if you have declared you earned Php 100,000 last year, then you will pay Php 105.00</li>
                                </ul>
                                <li>Valid ID</li>
                                <ul className="inner_li">
                                    <li>You can submit an ID with your name</li>
                                </ul>
                                <li>Application Form</li>
                                <ul className="inner_li">
                                    <li>You can personally go to the Barangay and fill out the form.</li>

                                </ul>
                                <li>Barangay Clearance Fee</li>
                                <ul className="inner_li">
                                    <li>This will also depend on the Barangay, it would be either free or less than Php 100.00, our barangay clearance fee is Php 25.00 only</li>
                                </ul>
                            </ul>
                        </div>
                        <div className="steps_container">
                            <h3>Steps in Getting a Barangay Clearance</h3>
                            <ul>
                                <li>Go to the Barangay Hall and look for the Barangay Secretary. Make sure it is an office day – Monday – Friday from 8 AM to 5 PM, as they may be busy</li>
                                <li>Inform the Barangay secretary that you want to have a Barangay Clearance. Fill-up the form that is given to you or a piece of paper.</li>
                                <li>Give the form or paper as well as your identification documents to the Barangay Secretary. Pay the Barangay clearance fee also. You might sometimes get interviewed, so answer the question honestly. This isn’t formal, so feel free to speak your dialect.</li>
                                <li>Wait for your Barangay Certificate. The secretary will just edit and print the document easily if you are the only one asking for it. It will also be signed by the Barangay Chairman, so if s/he is not there, you might as well go back at a specified time. But if the Barangay Chair is present, then you can have your Barangay Clearance immediately.</li>
                                <li>Receive the Barangay Clearance; check your name (if the spelling is correct) and the correct purpose is stated.</li>
                            </ul>
                        </div>

                        <div className="finalNote_container">
                            <p>Getting a Barangay Clearance is easy and fast, especially if the Barangay Secretary and Chairman are present. However, if they’re not another person in command might sign if s/he was given authority. Please also note that you must be living in the Barangay for at least 3 or 6 months to be issued one.</p>
                            <p>With your Barangay clearance, you can now apply for an NBI Clearance, a Postal ID, or a UMID ID to get a Valid Passport. You can also use it to apply for a Bank Account especially if you are still a student. Having a Bank Account is great as you can save for your future travels there.</p>
                        </div>
                        <div className="clearance_btn">
                            <button className="clearance_submit" onClick={ApplyCertificate}>Apply Now</button>

                        </div>
                    </div>
                    <div className="brgyIDInfo_container">
                        <div className="id_title">
                            <h1>Barangay Identification Card</h1>
                        </div>
                        <div className="certifies_you">
                            <h3>It certifies that you:</h3>
                            <ul>
                                <li>are living in a certain Barangay</li>
                                <li>are of good moral character</li>
                                <li>are without any bad record within the community</li>
                            </ul>
                        </div>
                        <div className="use_it">
                            <h3>You can use it when:</h3>
                            <ul>
                                <li>you apply for a job.</li>
                                <li>you apply for business establishment/business permit</li>
                                <li>you apply for a loan or any lending transactions with a bank or financing agency</li>
                                <li>you want to open a bank account</li>
                                <li>you apply for IDs and other clearance applications like Postal ID, NBI clearance, Solo Parent ID</li>
                                <li>you have other transactions that require you to prove that you reside in a certain barangay</li>
                            </ul>
                        </div>
                        <div className="id_steps">
                            <h3>Steps in getting Barangay ID:</h3>
                            <ul>
                                <li>Go to your Barangay and seek assistance to get application form to fill out necessary information</li>
                                <li>Submit your application form and wait for further instruction</li>
                                <li>You will be asked to take a photo for your Barangay ID</li>
                                <li>Pay the corresponding fee it may take to P70 - P100.</li>
                            </ul>

                        </div>
                        <div className="id_btn">
                            <button type="submit" className="id_submit" onClick={ApplyCertificate}>Apply Now</button>
                        </div>

                    </div>
                    <div className="brgyBusPermitInfo_container">
                        <div className="buspermit_title">
                            <h1>Barangay Business Clearance</h1>
                            <p>Barangay Business Permit is one of the permits or documents required when registering a new business in the Philippines. This certificate is also needed when renewing your expired Mayor’s Permit or Business License, changing a new business location, and changing a new business commercial name.</p>
                        </div>
                        <div className="buspermit_whereToApply">
                            <h3>Where to apply Business Clearance?</h3>
                            <p>You must visit your Barangay Hall or Office of the Barangay Captain in your area where your business jurisdiction is covered. You may always know this information when you have a business in the Philippines because you will need to renew your Mayor’s Permit or Business License every year or at the beginning of a new year unless you will be closing your company.</p>
                        </div>
                        <div className="buspermit_requirements">
                            <h3>Barangay Business Clearance Requirements</h3>
                            <ul>
                                <li>Latest Community Tax Certicicate or Cedula</li>
                                <li>DTI Business Name Registration</li>
                                <li>Barangay Business Permit Fee</li>
                            </ul>
                        </div>
                        <div className="buspermit_steps">
                            <h3>Steps in getting Barangay Business Clearance</h3>
                            <h4>Step 1: Prepare your business documents</h4>
                            <p>Prepare the necessary documents listed above and the funds to pay your Business Clearance or Permit. For first time applicants, the documents required include Community Tax Certificate, valid DTI Permit, and the clearance fee.</p>
                            <h4>Step 2: Go to the Barangay Hall or the Office of the Barangay Captain</h4>
                            <p>To apply for a new business clearance, go to your Barangay Hall or Office of the Barangay Captain where your business is located. Documentation and processing of clearance will only take a while, and it will be finished after few minutes, depending on the transactions being made in your barangay when you got there.</p>
                            <h4>Step 3: Pay your Business Clearance fee</h4>
                            <p>Processing fees ranges from 500 to 1,000 pesos depending on the location of the business or the type of the city where your business is registered.</p>
                            <h4>Step 4: Claim your Barangay Business Clearance</h4>
                            <p>The last step is the release of your business permit. You will be asked to sign a confirmation that you received your certificate and the date when you claimed it.</p>
                        </div>
                        <div className="buspermit_tips">
                            <h3>Tips in getting Barangay Business Clearance</h3>
                            <p>After your clearance has been issued, make sure you check all information on the certificate and do not leave the Barangay Hall unless every word and detail on the certificate is accurate. Some info like your CTC number and Business Name must always be correct.</p>
                            <p>It is important to mention that an Official Receipt is attached on your Barangay Business Clearance certificate. Some Municipal’s Offices would always require the attached receipt.</p>

                        </div>
                        <div className="buspermit_renew">
                            <h3>How to Renew a Barangay Business Clearance?</h3>
                            <h4>1. Prepare your business documents including:</h4>
                            <ul>
                                <li>Old business permit</li>
                                <li>Latest Cedula</li>
                                <li>Valid DTI Permit</li>
                                <li>Processing Fee</li>
                            </ul>
                            <h4>2. Apply for a renewal of your Business Permit at the Barangay Hall where your business is located</h4>
                            <h4>Pay the processing Fee</h4>
                            <h4>Claim your new Business Permit</h4>
                        </div>
                        <div className="buspermit_btn">
                            <button className="buspermit_submit" type="submit" onClick={ApplyCertificate}>Apply Now</button>
                        </div>
                    </div>

                    <div className="brgyIndigencyInfo_container">
                        <div className="indigency_title">
                            <h1>Barangay Indigency</h1>
                            <p>A certificate of indigency is required to avail of the services of charitable institutions, government and non-government organizations and institutions and for legal assistance.</p>
                        </div>
                        <div className="indigency_requirements">
                            <h3>Requirements:</h3>
                            <ul>
                                <li>Barangay certification of Residency and indigency</li>
                                <li>Certification from the Municipal Assessor’s Office that the party concerned doesn’t own real property.</li>
                            </ul>
                            <h3>Processing Time: About 40 minutes.</h3>
                            <h3>Fee/Charge: None</h3>
                        </div>
                        <div className="indigency_steps">
                            <h3>Steps in getting Barangay Indigency</h3>
                            <h4>Step 1: Write your name and purpose of the visit on a client logbook. Submit requirement. </h4>
                            <h4>Step 2: Submit yourself to an interview. Cooperate and give all the necessary information.</h4>
                            <h4>Step 3: Wait while the MSWDO Staff prepares the Certificate of Indigency.</h4>
                            <h4>Step 4: Secure the certificate of indigency and sign logbook. Submit the same to the agency concerned.</h4>
                        </div>
                        <div className="indigency_btn">
                            <button className="indigency_submit" type="submit" onClick={ApplyCertificate}>Apply Now</button>
                        </div>

                    </div>

                    <input type="text" value={indv_inhabitant_id} onChange={(e) => setInhabitantId(e.target.value)} hidden />
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default ApplicationModule;