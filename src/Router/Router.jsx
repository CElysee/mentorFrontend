import {
  BrowserRouter,
  Routes,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import FindMentor from "../Pages/FindMentor";
import HowBecomeMentor from "../Pages/HowBecomeMentor";
import UserMentorProfile from "../Pages/UserMentorProfile";
// import SignUpPage from '../Pages/SignUpPage'
import MentorThankYou from "../Pages/Authentication/MentorThankYou";
import MenteeThankYou from "../Pages/Authentication/MenteeThankYou";
import BookingMessage from "../components/MentorProfile/BookingMessage";
import SignUpPage from "../Pages/Authentication/SignUpPage";
import SetUpMentee from "../Pages/Authentication/SetUpMentee";
import SetUpMentor from "../Pages/Authentication/SetUpMentor";
import SignIn from "../Pages/Authentication/SignIn";
import MenteeDashboard from "../Pages/Dashboard/Mentee/Dashboard";
import MentorDashboard from "../Pages/Dashboard/Mentor/Dashboard";
import AdminDashboard from "../Pages/Dashboard/Admin/Dashboard";
import AdminUsers from "../Pages/Dashboard/Admin/Users"
import MenteeProfile from "../Pages/Dashboard/Mentee/Profile";
import MentorDashProfile from "../Pages/Dashboard/Mentor/Profile";
import MenteeBookings from "../Pages/Dashboard/Mentee/Bookings";
import MentorBookings from "../Pages/Dashboard/Mentor/Bookings";
import AdminBookings from "../Pages/Dashboard/Admin/Bookings";
import MenteeConnections from "../Pages/Dashboard/Mentee/Connections";
import MentorConnections from "../Pages/Dashboard/Mentor/Connections";
import MentorCalendar from "../Pages/Dashboard/Mentor/Calendar";
import AdminCalendar from "../Pages/Dashboard/Admin/Calendar";
import Support from "../Pages/Dashboard/Admin/Support";
import MenteeSupport from "../Pages/Dashboard/Mentee/Support";
import MentorSupport from "../Pages/Dashboard/Mentor/Support";
import FindMentorByInterest from "../Pages/FindMentorByInterest";
import FeelEmpowered from "../Pages/FeelEmpowered";
import ToolsToMentor from "../Pages/ToolsToMentor";
import DiverseCommunity from "../Pages/DiverseCommunity";
// Retrieve the token from localStorage

function Router() {
  // const navigate = useNavigate();
  // const token = localStorage.getItem("access_token");
  // const isExpired = isTokenExpired(token);
  // if (isExpired) {
  //   navigate("/signIn");
  // }
  return (
      <Routes>
        
        {/* <Route path='/' element={<Navigate to='/'/>} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/findMentor" element={<FindMentor />} />
        <Route path="/becomeMentor" element={<HowBecomeMentor />} />
        <Route path="/mentorProfile/:id" element={<UserMentorProfile />} />
        <Route
          path="/findMentorByInterest/:id"
          element={<FindMentorByInterest />}
        />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/setUpMentor" element={<SetUpMentor />} />
        <Route path="/SetUpMentee" element={<SetUpMentee />} />
        <Route path="/thankyou" element={<MentorThankYou />} />
        <Route path="/thankYouMessage" element={<MenteeThankYou />} />
        <Route path="/bookingMessage" element={<BookingMessage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/FeelEmpowered" element={<FeelEmpowered />} />
        <Route path="/ToolsToMentor" element={<ToolsToMentor />} />
        <Route path="/DiverseCommunity" element={<DiverseCommunity />} />
        <Route path="/mentee/*">
          <Route path="dashboard" element={<MenteeDashboard />} />
          <Route path="profile/:id" element={<MenteeProfile />} />
          <Route path="bookings/:id" element={<MenteeBookings />} />
          <Route path="connections" element={<MenteeConnections />} />
          <Route path="support" element={<MenteeSupport />} />
        </Route>
        <Route path="/mentor/*">
          <Route path="dashboard" element={<MentorDashboard />} />
          <Route path="profile/:id" element={<MentorDashProfile />} />
          <Route path="bookings/:id" element={<MentorBookings />} />
          <Route path="calendar/:id" element={<MentorCalendar />} />
          <Route path="connections" element={<MentorConnections />} />
          <Route path="support" element={<MentorSupport />} />
        </Route>
        <Route path="/admin/*">
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="calendar" element={<AdminCalendar />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
  );
}

export default Router;
