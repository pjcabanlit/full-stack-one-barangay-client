import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import './CrimeIncidentModule.css';
import LoginAuthPop from './../../../components/Dialog/LoginAuthPop';
import ScrollToTop from './../../../components/ScrollToTop/ScrollToTop';
import Navbar from './../../../components/Navbar/Navbar';
import Footer from './../../../components/Footer/Footer';
import evac_plan from './../../../images/emergency_evac.jpg';

function CrimeIncidentModule() {
    const [indv_inhabitant_id, setInhabitantId] = useState("")

    const [errorDialog, setErrorDialog] = useState({ isOpen: false, title: '', subtitle: '', noButton: '' })
    const history = useHistory();

    useEffect(() => {
        Axios.get("http://localhost:3001/InhabitantLogin").then((response) => {
            if (response.data.loggedIn === true) {
                setInhabitantId(response.data.user[0].indv_inhabitant_id);
            }
        });
    }, []);

    const SendEmergencyReport = () => {
        setErrorDialog({
            ...errorDialog,
            isOpen: false
        })
        {
            !indv_inhabitant_id ? setErrorDialog({
                isOpen: true,
                title: "Oops! Access Denied.",
                subtitle: "You must be logged in to send reports.",
                noButton: <button onClick={() => setErrorDialog({ ...errorDialog, isOpen: false })} className="alert_backBtn">Back</button>
            }) : history.push("/EmergencyIncidentReport")
        }

    }

    return (
        <div className="CIEModule_container">
            <Navbar />
            <LoginAuthPop errorDialog={errorDialog} setErrorDialog={setErrorDialog} />
            <ScrollToTop />
            <div className="container">
                <div className="EmergencyReport_container">
                    <div className="EmergencyReport_title">
                        <h1>We are here to assist you!</h1>
                        <p>Reporting and records management software has the ability to make communities safer, increase collaboration through data sharing, and ultimately make the work of data collection and reporting easier for first responders. Our comprehensive platform of Emergency and Reports Module solutions provides the tools needed to get the job done on the go and in the station.</p>
                        <div className="EmergencyReport_button">
                            <p>File emergency report anytime!</p>
                            <center>
                                <button onClick={SendEmergencyReport}>Send Report</button>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="mrgncyHotlines_main_container">
                    <div className="mrgncyHotlines_container">
                        <div className="hotlines_title">
                            <center>
                                <h1>EMERGENCY HOTLINES</h1>
                                <p>List of Emergency Hotlines</p>
                            </center>
                        </div>
                        <div className="hotlines_list">
                            <center>
                                <ul>
                                    <li>National Emergency Hotline in the Philippines : 911</li>
                                    <li>Philippine National Police Hotline: 117 or (02) 8722-0650</li>
                                    <li>Philippine Red Cross: 143 or (02) 8527-8385 to 95</li>
                                    <li>Bureau of Fire Protection: (02) 8426-0219 or (02) 8426-3812</li>
                                </ul>
                            </center>
                        </div>
                    </div>
                </div>

                <div className="emergencyPlan_containerCIE">
                    <div className="brgy_plan">
                        <h1>Barangay Emergency Plan</h1>
                        <p>Barangay 407 Zone 42 is committed to ensuring that in the event of an emergency incident affecting the Barangay, the Barangay will provide an effective response, working with the Emergency Services, Local Authority and Council Emergency Management Unit to minimise the impact of the emergency on the Barangay and the community as a whole.</p>
                    </div>
                    <div className="brgy_aimObjectives">
                        <center>
                            <h1>Aim & Objectives</h1>
                        </center>
                        <h4>Aim</h4>
                        <p>To provide emergency response arrangements that will ensure the well being and safety of all constituents in the care of Barangay.</p>
                        <h4>Objectives</h4>
                        <ul>
                            <li>Establish an effective framework of Emergency Response</li>
                            <li>Ensure that NSC and the emergency services are provided with up-to-date contact details for key Barangay staff</li>
                            <li>Ensure that the emergency incident is communicated quickly and clearly to supporting agencies and partners, enabling supporting arrangements to be rapidly activated</li>
                            <li>Maintain high standards of welfare and duty care arrangements for constituents, staff and carers</li>
                            <li>Ensure that actions and decision making during the Emergency incident is properly recorded</li>
                            <li>To facilitate the return to normal working arrangements at the earliest time</li>
                        </ul>
                    </div>
                    <div className="brgy_emergencyType">
                        <center>
                            <h1>Types of Emergency</h1>
                        </center>
                        <p>An emergency incident can be clarified as an unexpected event which affects the school community. and which cause disruption on a scale which is beyond the normal coping capability of the school. The emergency incident may involve significant threat, damage, or injury to property and individuals, and may have long term impacts on pupils, staff, governors and parents.</p>
                    </div>
                    <div className="brgy_evacPlan">
                        <center><h1>Barangay Evacuation Plan</h1></center>
                        <center>
                            <img src={evac_plan} alt={evac_plan} />
                        </center>
                    </div>
                    <div className="brgy_emergencyTips">
                        <center>
                            <h1>Emergency Tips</h1>
                        </center>
                        <h4>Before an Emergency</h4>
                        <p>Hazards vary depending on where you live. Identify the hazards near you so you can create your emergency plan. Be prepared. Individuals and families should be prepared to take care of themselves for at least 72 hours.</p>
                        <ul>
                            <li>Know the risks: Knowing the risks and hazards can help you and your loved ones prepare for the unexpected. For more information, see Emergency preparedness.</li>
                            <li>Make an emergency plan: A plan will help you cope with the stress of an emergency or disaster.</li>
                            <li>Build an emergency kit: By taking a few simple steps you can become better prepared to face a range of emergencies. Don’t forget to include your pets when building your kit.</li>
                            <li>Download the Alberta Emergency Alert app for critical, life-saving alerts.</li>
                            <li>Check Alberta 511 for current road conditions before you travel</li>
                            <li>Find out where your community will post information and updates during an emergency</li>
                            <li>In many cases, community members such as neighbours, co-workers and friends in the affected area are first on-scene.</li>
                            <li>It is easier to offer help, or ask for help, when you know who is there.</li>
                            <li>A pet carrier stocked with supplies for a quick grab and go ensures your pet will have what it needs.</li>
                            <li>Create a buddy system with a neighbour in case one of you are unable to return home to pick up your pet.</li>
                            <li>Have a phone list of animal shelters, veterinarians and kennel facilities that could house your pets if needed.</li>
                        </ul>
                        <br />
                        <h4>During an Emergency</h4>
                        <p>Emergencies have the potential to cause serious harm to people, property, the economy and the environment. Make sure you know who to call and what to do during an emergency or disaster.</p>
                        <ul>
                            <li>Alerts are issued to provide critical information about an emergency or disaster, including where it is happening and what actions need to be taken.</li>
                            <li>An evacuation alert warns the public of a potential or current threat. If an alert is issued, you should prepare to evacuate.</li>
                            <li>When a mandatory evacuation order is issued, you may be eligible for an Emergency Evacuation Payment.</li>
                            <li>During an emergency, evacuees can apply for the payment at Alberta.ca/emergency.</li>
                            <li>If you’re able to, check your community’s website or social media channels to see what updates they are posting.</li>
                        </ul>
                        <br />
                        <h4>After an Emergency</h4>
                        <p>The lingering effects of unexpected emergencies and disasters are different for everyone. Knowing what to do after an emergency can help reduce stress and aid in a quicker recovery.</p>
                        <ul>
                            <li>Find out where your community will post information on support and recovery after an emergency.</li>
                            <li>If you had to evacuate, you can’t return home until authorities have told you it’s safe to do so. Use extreme caution at all times.</li>
                            <li>Having a sense of community and people you can lean on is an important part of recovery.</li>
                            <li>Disasters can affect people in many ways. Sometimes we have emotional responses right away and sometimes they show up days, weeks, months or even years after.</li>
                            <li>Feelings of stress are normal, but some people can experience more severe distress and may require help.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <input type="text" value={indv_inhabitant_id} onChange={(e) => setInhabitantId(e.target.value)} hidden />
            <Footer />
        </div>

    )
}

export default CrimeIncidentModule;