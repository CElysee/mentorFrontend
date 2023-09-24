import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FindMentor from "../pages/FindMentor";
import BecomeMentor from "../pages/BecomeMentor";
import UserMentorProfile from "../pages/UserMentorProfile";
// import SignUpPage from '../pages/SignUpPage'
import ThankYou from "../pages/Authentication/ThankYou";
import BookingThankYou from "../components/MentorProfile/BookingThankYou";
import SignUpPage from "../pages/Authentication/SignUpPage";
import SetUpMentee from "../pages/Authentication/SetUpMentee";
import SetUpMentor from "../pages/Authentication/SetUpMentor";
import SignIn from "../pages/Authentication/SignIn";
import MenteeDashboard from "../pages/Dashboard/Mentee/Dashboard";
import MentorDashboard from "../pages/Dashboard/Mentor/Dashboard";
import MenteeProfile from "../pages/Dashboard/Mentee/Profile";
import MentorDashProfile from "../pages/Dashboard/Mentor/Profile";
import MenteeBookings from "../pages/Dashboard/Mentee/Bookings";
import MentorBookings from "../pages/Dashboard/Mentor/Bookings";
import MenteeConnections from "../pages/Dashboard/Mentee/Connections";
import MentorConnections from "../pages/Dashboard/Mentor/Connections";
import MentorCalendar from "../pages/Dashboard/Mentor/Calendar";
import Support from "../pages/Dashboard/Support";
import FindMentorByInterest from "../pages/FindMentorByInterest";
// Retrieve the token from localStorage

function Routers() {
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
      <Route path="/becomeMentor" element={<BecomeMentor />} />
      <Route path="/mentorProfile/:id" element={<UserMentorProfile />} />
      <Route path="/findMentorByInterest/:id" element={<FindMentorByInterest />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/setUpMentor" element={<SetUpMentor />} />
      <Route path="/SetUpMentee" element={<SetUpMentee />} />
      <Route path="/thankyou" element={<ThankYou />} />
      <Route path="/bookingMessage" element={<BookingThankYou />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/mentee/*">
        <Route path="dashboard" element={<MenteeDashboard />} />
        <Route path="profile/:id" element={<MenteeProfile />} />
        <Route path="bookings/:id" element={<MenteeBookings />} />
        <Route path="connections" element={<MenteeConnections />} />
        <Route path="support" element={<Support />} />
      </Route>
      <Route path="/mentor/*">
        <Route path="dashboard" element={<MentorDashboard />} />
        <Route path="profile/:id" element={<MentorDashProfile />} />
        <Route path="bookings/:id" element={<MentorBookings />} />
        <Route path="calendar" element={<MentorCalendar />} />
        <Route path="connections" element={<MentorConnections />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
}

export default Routers;
