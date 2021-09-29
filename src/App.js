import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserHome from './modules/BarangayResident/UserHome/UserHome';
import SignUp from './pages/SignUp';
import AdminHome from './modules/BarangayStaff/AdminHome/AdminHome';
import Login from './pages/Login'
import RefreshToScroll from './components/ScrollToTop/RefreshToScroll';
import './App.css';

function App() {

    return (
        <div className="oneb_root">
            <Router>
                <RefreshToScroll />
                <Route path="/" exact render={(props) => <Login />} />
                <Route path="/MyProfile" exact render={(props) => <UserHome />} />
                <Route path="/home" exact render={(props) => <UserHome />} />
                <Route path="/CIEModule" exact render={(props) => <UserHome />} />
                <Route path="/Programs&Events" exact render={(props) => <UserHome />} />
                <Route path="/BarangayClearanceStep2" exact render={(props) => <UserHome />} />
                <Route path="/register" exact render={(props) => <SignUp />} />
                <Route path="/ApplicationModule" exact render={(props) => <UserHome />} />
                <Route path="/Barangay-Certificates" exact render={(props) => <UserHome />} />
                <Route path='/EmergencyIncidentReport' exact render={(props) => <UserHome />} />
                <Route path='/Submit-Complain-Report' exact render={(props) => <UserHome />} />
                <Route path='/Announcement' exact render={(props) => <UserHome />} />
                <Route path='/HealthProgram' exact render={(props) => <UserHome />} />
                <Route path='/Seminar' exact render={(props) => <UserHome />} />
                <Route path='/Reservation-Module' exact render={(props) => <UserHome />} />
                <Route path='/RequestUtilities' exact render={(props) => <UserHome />} />
                <Route path='/RequestVenues' exact render={(props) => <UserHome />} />
                <Route path='/Payments' exact render={(props) => <UserHome />} />
                <Route path='/ModeOfPayment' exact render={(props) => <UserHome />} />
                <Route path='/ProofOfPayment' exact render={(props) => <UserHome />} />
                <Route path='/Transaction-History' exact render={(props) => <UserHome />} />
                <Route path='/Forums' exact render={(props) => <UserHome />} />
                <Route path='/Feedbacks' exact render={(props) => <UserHome />} />
                <Route path='/FAQs' exact render={(props) => <UserHome />} />
                <Route path="/EditProfile" exact render={(props) => <UserHome />} />
                <Route path="/EditAccount" exact render={(props) => <UserHome />} />
                <Route path="/MyAccount" exact render={(props) => <UserHome />} />
                <Route path="/MyApplication" exact render={(props) => <UserHome />} />
                <Route path='/Edit-Personal-Information' exact render={(props) => <UserHome />} />
                <Route path='/Edit-Address-Information' exact render={(props) => <UserHome />} />
                <Route path='/Edit-Educational-Background' exact render={(props) => <UserHome />} />
                <Route path='/Edit-family-background' exact render={(props) => <UserHome />} />
                <Route path='/AdminHome' exact render={(props) => <AdminHome />} />
                <Route path='/ConstituentDetails' exact render={(props) => <AdminHome />} />
                <Route path='/ProcessRequest' exact render={(props) => <AdminHome />} />
                <Route path='/ProcessRequest-Requests' exact render={(props) => <AdminHome />} />
                <Route path='/PaymentTransaction' exact render={(props) => <AdminHome />} />
                <Route path='/ConstituentApplications' exact render={(props) => <AdminHome />} />
                <Route path='/ManageScholarships' exact render={(props) => <AdminHome />} />
                <Route path='/AdminPrograms-&-Events' exact render={(props) => <AdminHome />} />
                <Route path='/ConstituentRegistrations' exact render={(props) => <AdminHome />} />
                <Route path='/BrgyEvacuationPlan' exact render={(props) => <AdminHome />} />
                <Route path='/MyBrgyReports' exact render={(props) => <AdminHome />} />
                <Route path='/BrgyReports' exact render={(props) => <AdminHome />} />
                <Route path='/Reservations-&-Requests' exact render={(props) => <AdminHome />} />
                <Route path='/Availability-Utilities-&-Venues' exact render={(props) => <AdminHome />} />
                <Route path='/Feedbacks-&-Concerns' exact render={(props) => <AdminHome />} />
                <Route path='/ViewInformation-BarangayMembers' exact render={(props) => <AdminHome />} />
                <Route path='/add-brgy-community-member' exact render={(props) => <AdminHome />} />
                <Route path='/generate-certificate' exact render={(props) => <AdminHome />} />

                {/* <ProtectedRoute path="/home" component={UserHome} isAuth={isAuth} /> */}
            </Router>
        </div>
    )
}
export default App;