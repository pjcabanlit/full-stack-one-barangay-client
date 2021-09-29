import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './AdminHome.css'
import AdminMain from './AdminMain';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import ResidentInformation from '../AdminCMModule/ResidentInformation/ResidentInformation';
import Feedbacks from './../AdminForumModule/Feedbacks';
import Applications from '../AdminProgramModule/Applications'
import EditScholarship from '../AdminProgramModule/EditScholarship'
import EditPrograms from '../AdminProgramModule/EditPrograms'
import Registrations from '../AdminProgramModule/Registrations'
import EvacuationPlan from '../AdminCIEModule/EvacuationPlan'
import MyReports from '../AdminRRModule/MyReports'
import BaranggayReports from '../AdminRRModule/BaranggayReports'
import FacilityReservation from '../AdminRRModule/FacilityReservation'
import ManageAvailability from '../AdminRRModule/ManageAvailability'
import ViewAllDetails from '../AdminCMModule/ViewAllDetails';
import AddBrgyMembers from '../AdminCMModule/ResidentInformation/AddBrgyMembers';
import GenerateCertificate from './../AdminCMModule/CertificateRequest/GenerateCertificate';
import CertificateRequest from '../AdminCMModule/CertificateRequest/CertificateRequest';

const AdminHome = () => {
    const [sideBarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    }
    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return (
        <div className="adminHome_container">
            <Router>
                <AdminNavbar sidebarOpen={sideBarOpen} openSidebar={openSidebar} />
                <Switch>
                    <Route path="/AdminHome" exact component={AdminMain} />
                    <Route path="/ConstituentDetails" exact component={ResidentInformation} />
                    <Route path="/ViewInformation-BarangayMembers" exact component={ViewAllDetails} />
                    <Route path="/ProcessRequest" exact component={CertificateRequest} />
                    <Route path="/ConstituentApplications" exact component={Applications} />
                    <Route path="/ManageScholarships" exact component={EditScholarship} />
                    <Route path="/AdminPrograms-&-Events" exact component={EditPrograms} />
                    <Route path="/ConstituentRegistrations" exact component={Registrations} />
                    <Route path="/BrgyEvacuationPlan" exact component={EvacuationPlan} />
                    <Route path="/MyBrgyReports" exact component={MyReports} />
                    <Route path="/BrgyReports" exact component={BaranggayReports} />
                    <Route path="/Reservations-&-Requests" exact component={FacilityReservation} />
                    <Route path="/Availability-Utilities-&-Venues" exact component={ManageAvailability} />
                    <Route path="/Feedbacks-&-Concerns" exact component={Feedbacks} />
                    <Route path="/add-brgy-community-member" exact component={AddBrgyMembers} />
                    <Route path="/generate-certificate" exact component={GenerateCertificate} />
                </Switch>
                <AdminSidebar sidebarOpen={sideBarOpen} closeSidebar={closeSidebar} />
            </Router>
        </div>

    )
}

export default AdminHome;