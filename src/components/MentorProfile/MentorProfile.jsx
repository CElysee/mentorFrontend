import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./MentorProfile.css";
import axiosInstance from "../../axiosInstance";
import LostPage from "../LostPage/LostPage";
import RiseLoader from "react-spinners/RiseLoader";
import { ToastContainer, toast } from "react-toastify";
import CoverPic from "../../assets/images/coverpic.jpg";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#e55812",
  paddingRight: "10px",
};

function MentorProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [mentorId, setMentorId] = useState(id);
  const [color, setColor] = useState("#fff");
  const [profileData, setProfileData] = useState([]);
  const [bookingSchedules, setBookingSchedules] = useState([]);
  const [mentorName, setMentorName] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [bookingActive, setBookingActive] = useState(null);
  const [timeBookingActive, setTimeBookingActive] = useState(null);
  const [bookingMode, setBookingMode] = useState(null);
  const url = `/mentors/profile?mentor_id=${id}`;
  const schedulesUrl = `/ScheduleBookings/list/${id}`;
  const imageBaseUrl = import.meta.env.VITE_REACT_APP_API;
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [voucherCode, setVoucherCode] = useState("");
  const [responseError, setResponseError] = useState("");
  const [loading, setLoading] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponseData = await axiosInstance.post(url);
        const ScheduleData = await axiosInstance.get(schedulesUrl);
        if (reponseData.status === 200) {
          setProfileData(reponseData.data);
          setMentorName(reponseData.data[0].mentor.name);
        }
        if (ScheduleData.status === 200) {
          setBookingSchedules(ScheduleData.data);
          setScheduledTime();
          const user_role = localStorage.getItem("user_role");
          setUserRole(user_role);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url, schedulesUrl, bookingActive]);
  const handleBookingSlotChange = (value) => {
    console.log(value);
    setBookingActive(value);
  };
  const handleSlotSelection = (value) => {
    setTimeBookingActive(value);
  };
  const handleChange = async (e) => {
    setBookingMode(e.target.value);
  };
  const handleVoucher = async (e) => {
    setVoucherCode(e.target.value);
  };
  const bookMentorUrl = `/BookMentor/book/`;
  
  const handleBookingVoucher = async (e) => {
    e.preventDefault();
    const bookMentordata = {
      user_id: "1",
      mentor_id: mentorId,
      schedule_id: bookingSchedules[bookingActive].id,
      slot_id: timeBookingActive,
      voucher_code: voucherCode,
    };
    try {
      const response = await axiosInstance.post(bookMentorUrl, null, {
        params: bookMentordata,
      });
      notify(response.data.message, "success");
      setResponseError("");
      document.querySelector(".modal-backdrop").style.display = "none";
      document.querySelector(".modal").style.display = "none";
      navigate("/bookingMessage", {
        state: {
          mentorName: mentorName,
          scheduleDate: scheduleDate,
          scheduledTime: scheduledTime,
        },
      });
    } catch (error) {
      notify(error.response.data.detail, "error");
      setResponseError(error.response.data.detail);
    }
  };
  const notify = (message, type) => {
    if (type === "success") {
      toast.success(message, {
        icon: "👏",
      });
    } else if (type === "error") {
      toast.error(message, {
        icon: "😬",
      });
    }
  };
  return (
    <>
      {profileData ? (
        profileData.map((item, index) => (
          <div key={index}>
            <div className="CoverPicture__Wrapper-sc-d03l4u-0 xttQm">
              <img src={CoverPic} className="h-100 w-100 img-fit" />
            </div>

            <div className="Mentor__Wrapper-sc-1ep7oak-1 hBuqpx">
              <ToastContainer autoClose={5000} />
              <div className="Mentor__Wrapper-sc-oybawt-0 fjvYTO">
                <div className="ProfilePhoto__Wrapper-sc-1fl76in-2 hYcJhf">
                  <div className="ProfilePhoto__Picture-sc-1fl76in-1 CKDXj">
                    <img
                      src={
                        item.profile.profile_picture
                          ? `${imageBaseUrl}/UserProfiles/${item.profile.profile_picture}`
                          : null
                      }
                      className="img-fit w-100 h-100"
                      alt={item.mentor.name}
                      title={item.mentor.name}
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
                <div className="InfoAndActions__Wrapper-sc-1q6dxh5-1 bxIYjp">
                  <div className="InfoAndActions__Name-sc-1q6dxh5-0 gtWrCs">
                    <h2 className="sc-fqkvVR jcuFgw flex-wrap mb-1">
                      <span className="mr-1">{item.mentor.name}</span>
                      <span role="img" aria-label="Malaysia" title="Malaysia">
                        <img
                          src={`/assets/flags/${item.country.code.toLowerCase()}.png`}
                          alt={item.country.name}
                          className="country_flag"
                        />
                      </span>
                    </h2>
                    <p className="sc-gsFSXq fJiOdH name__role">
                      {item.profile.company_title}
                      <span className="grey-2-text"> at </span>
                      {item.profile.company}
                    </p>
                  </div>
                  <div className="Actions__Wrapper-sc-6lchtg-0 nLQQv">
                    <a href="/" className="action__item">
                      <svg
                        fill="none"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 20C12.1903 20 12.4622 19.878 12.6616 19.7647C17.7644 16.6275 21 12.976 21 9.26362C21 6.17865 18.7976 4 15.9517 4C14.247 4 12.9217 4.87558 12.0898 6.22794C12.0492 6.29399 11.9514 6.29366 11.9111 6.2274C11.0942 4.88307 9.75241 4 8.04834 4C5.20242 4 3 6.17865 3 9.26362C3 12.976 6.23565 16.6275 11.3474 19.7647C11.5378 19.878 11.8097 20 12 20Z"
                          stroke="var(--black)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </a>
                    <div className="dropdown">
                      <div
                        className="ProfileDropdown__Action-sc-dwzfvb-1 hsFFci action__item dropdown-toggle"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <svg
                          fill="none"
                          width="27"
                          height="27"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6 10C7.10457 10 8 10.8954 8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12Z"
                            fill="var(--black)"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      bg="#fff"
                      height="50"
                      color="var(--grey-1)"
                      className="sc-jlZhew klINlq  py-0  btn btn-default"
                      border="var(--grey-3)"
                      // onClick={handleModelOpen}
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="Layout__Wrapper-sc-1js8544-0 oKXVt"
                id={userRole == "mentor" && "mentor_side"}
              >
                <div style={{ marginBottom: "8rem" }}>
                  <div className="line-height-16 mb-3">
                    <div className="line-height-16 multi-truncate">
                      <p className="sc-gsFSXq fJiOdH font-weight-700 mb-16">
                        More about me
                      </p>
                      <p>{item.profile.bio}</p>
                    </div>
                  </div>
                  <div className="About__Social-sc-tmc6zy-1 lbfmew mb-4">
                    <Link
                      to={item.profile.social_linkedin}
                      target="_blanket"
                      className="social__item d-flex"
                    >
                      <svg
                        fill="none"
                        width="19"
                        height="18"
                        viewBox="0 0 25 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="m-auto"
                      >
                        <path
                          d="M18.68 0.920013H3.32001C1.99521 0.920013 0.920013 1.99521 0.920013 3.32001V18.68C0.920013 20.0048 1.99521 21.08 3.32001 21.08H18.68C20.0048 21.08 21.08 20.0048 21.08 18.68V3.32001C21.08 1.99521 20.0048 0.920013 18.68 0.920013ZM7.16001 8.60001V17.72H4.28001V8.60001H7.16001ZM4.28001 5.94561C4.28001 5.27361 4.85601 4.76001 5.72001 4.76001C6.58401 4.76001 7.12641 5.27361 7.16001 5.94561C7.16001 6.61761 6.62241 7.16001 5.72001 7.16001C4.85601 7.16001 4.28001 6.61761 4.28001 5.94561ZM17.72 17.72H14.84C14.84 17.72 14.84 13.2752 14.84 12.92C14.84 11.96 14.36 11 13.16 10.9808H13.1216C11.96 10.9808 11.48 11.9696 11.48 12.92C11.48 13.3568 11.48 17.72 11.48 17.72H8.60001V8.60001H11.48V9.82881C11.48 9.82881 12.4064 8.60001 14.2688 8.60001C16.1744 8.60001 17.72 9.91041 17.72 12.5648V17.72Z"
                          fill="var(--black)"
                        ></path>
                      </svg>
                    </Link>
                    <Link
                      to={item.profile.social_twitter}
                      target="_blanket"
                      className="social__item d-flex"
                    >
                      <svg
                        fill="#000000"
                        width="19"
                        height="18"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 310 310"
                        className="m-auto"
                      >
                        <g id="XMLID_826_">
                          <path
                            d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
		c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
		c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
		C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
		c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
		c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
		c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
		c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
		c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
		c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
		c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
		C307.394,57.037,305.009,56.486,302.973,57.388z"
                          />
                        </g>
                      </svg>
                    </Link>
                  </div>
                  <div className="ExperienceSection__Wrapper-sc-dr685y-2 iXdsSl">
                    <p className="sc-gsFSXq fJiOdH font-weight-700 mb-16">
                      Experience
                    </p>
                    <div className="experience-container">
                      <div className="experience-category">
                        <p className="sc-kAyceB cCBfKf grey-2-text">
                          Expertise
                        </p>
                        <div className="items">
                          {item.expertise.map((item, index) => (
                            <div
                              key={index}
                              color="#3D9AE8"
                              className="ExperienceSection__Item-sc-dr685y-1 eCqMRJ"
                            >
                              <p className="sc-jXbUNg kFsvSZ position-relative font-weight-700">
                                {item.expertise_name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="experience-category">
                        <p className="sc-kAyceB cCBfKf grey-2-text">Industry</p>
                        <div className="items">
                          {item.industry.map((item, index) => (
                            <div
                              key={index}
                              className="ExperienceSection__Item-sc-dr685y-1 dVoQPv"
                            >
                              <p className="sc-jXbUNg kFsvSZ position-relative font-weight-700">
                                {item.industry_name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="experience-category">
                        <p className="sc-kAyceB cCBfKf grey-2-text">
                          Fluent in
                        </p>
                        <div className="items">
                          {item.languages.map((item, index) => (
                            <div
                              key={index}
                              className="ExperienceSection__Item-sc-dr685y-1 dVoQPv"
                            >
                              <p className="sc-jXbUNg kFsvSZ position-relative font-weight-700">
                                {item.language_name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="experience-category">
                        <p className="sc-kAyceB cCBfKf grey-2-text">Interest</p>
                        <div className="items">
                          {item.interest.map((item, index) => (
                            <div
                              key={index}
                              color="#3D9AE8"
                              className="ExperienceSection__Item-sc-dr685y-1 eCqMRJ"
                            >
                              <p className="sc-jXbUNg kFsvSZ position-relative font-weight-700">
                                {item.category_name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  {bookingSchedules.length > 0 ? (
                    <>
                      {" "}
                      <div
                        className="Availability__DesktopWrapper-sc-189eqiz-3 lhABAW"
                        id={userRole == "mentor" && "mentor_book"}
                      >
                        <div className="Availability__Desktop-sc-189eqiz-2 cLqnWb mb-4">
                          <div className="pb-4">
                            <p className="sc-gsFSXq fJiOdH font-weight-600">
                              Available sessions
                            </p>
                            <p className="sc-jXbUNg kFsvSZ grey-2-text mt-1">
                              Book 1:1 sessions from the options based on your
                              needs
                            </p>
                          </div>
                          <div className="Availability__DateWrapper-sc-189eqiz-0 fiTtId">
                            {bookingSchedules.map((item, index) => (
                              <div
                                key={index}
                                height="74px"
                                slot="8"
                                className={`Styles__Item-sc-z9xbh7-0 DatePicker__Wrapper-sc-1ddgz1i-0 eoQfdP ${
                                  index === bookingActive ? "drqGEo" : "eJWdRQ"
                                }`}
                                role="button"
                                onClick={() => handleBookingSlotChange(index)}
                              >
                                <div className="m-auto">
                                  <p className="sc-jXbUNg kFsvSZ date__date">
                                    {item.startDate}
                                  </p>
                                  <small className="date__slot">
                                    {item.slots_count}
                                  </small>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mb-4">
                            <div className="pb-3 d-flex align-items-center justify-content-between border-bottom grey-3-border mb-3">
                              <p> Available time slots </p>
                            </div>
                            {bookingActive == null ? (
                              <>
                                <p className="sc-gsFSXq fJiOdH font-weight-600">
                                  Select date to see available sessions
                                </p>
                              </>
                            ) : (
                              <>
                                <div className="TimePicker__Wrapper-sc-11a0i3h-0 jiYbol">
                                  {bookingSchedules[
                                    bookingActive
                                  ].mentorBookingScheduleSlots.map(
                                    (item, index) => (
                                      <div
                                        role="button"
                                        key={index}
                                        className={`Styles__Item-sc-z9xbh7-0 ${
                                          timeBookingActive == item.id
                                            ? "eRxXKn"
                                            : "iPJjWT"
                                        }`}
                                        onClick={() =>
                                          handleSlotSelection(item.id)
                                        }
                                      >
                                        <span className="m-auto" height="50px">
                                          {item.slot_time}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </>
                            )}
                          </div>
                          {timeBookingActive && (
                            <>
                              <div className="SingleSessions__ButtonWrapper-sc-3tj6m9-0 bTmmwR">
                                <button
                                  style={{ backgroundColor: "var(--teal)" }}
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  className="sc-jlZhew gAyusE text-truncate undefined btn btn-default"
                                >
                                  Book Session for{" "}
                                  {bookingSchedules[bookingActive].startDate}
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                        data-backdrop="static"
                      >
                        <div
                          role="dialog"
                          aria-modal="true"
                          className="fade modal show"
                          tabIndex="-1"
                          style={{ display: "block" }}
                        >
                         {timeBookingActive && ( 
                          <div className="modal-dialog modal-sm modal-dialog-centered">
                            <div className="modal-content">
                              <div className="sc-cwHptR dOVyAW p-4 modal-body">
                                <h3 className="sc-dcJsrY eXeELN mb-5">
                                  You are about to book a session with{" "}
                                  {profileData[0].mentor.name} on{" "}
                                  {bookingSchedules[bookingActive].startDate}
                                </h3>
                                <div className="sc-kAyceB cCBfKf mb-32">
                                  <div className="checkbox-wrapper-44 form-check form-check-inline">
                                    <label className="toggleButton">
                                      <span
                                        style={{
                                          paddingTop: "5px",
                                          paddingRight: "10px",
                                        }}
                                      >
                                        Use voucher
                                      </span>
                                      <input
                                        type="checkbox"
                                        value="useVoucher"
                                        onChange={handleChange}
                                        checked={bookingMode === "useVoucher"}
                                      />
                                      <div>
                                        <svg viewBox="0 0 44 44">
                                          <path
                                            d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"
                                            transform="translate(-2.000000, -2.000000)"
                                          ></path>
                                        </svg>
                                      </div>
                                    </label>
                                  </div>
                                  <div className="checkbox-wrapper-44 form-check form-check-inline">
                                    <label className="toggleButton">
                                      <span style={{ padding: "5px 10px" }}>
                                        Pay to Book a session
                                      </span>
                                      <input
                                        type="checkbox"
                                        value="pay"
                                        onChange={handleChange}
                                        checked={bookingMode === "pay"}
                                      />
                                      <div>
                                        <svg viewBox="0 0 44 44">
                                          <path
                                            d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"
                                            transform="translate(-2.000000, -2.000000)"
                                          ></path>
                                        </svg>
                                      </div>
                                    </label>
                                  </div>
                                  {bookingMode == "useVoucher" && (
                                    <>
                                      <div className="form-group">
                                        <label
                                          className="form-label"
                                          htmlFor="name"
                                        >
                                          Your Voucher Code
                                        </label>
                                        <input
                                          name="voucher_code"
                                          placeholder="MENT-VSX034"
                                          type="text"
                                          id="handleVoucher"
                                          className="form-control"
                                          value={
                                            voucherCode
                                          } /* Use state for value */
                                          onChange={
                                            handleVoucher
                                          } /* Use onChange to update value */
                                        />
                                        <p className="text-center error_response">
                                          {responseError}
                                        </p>
                                      </div>
                                    </>
                                  )}
                                  {bookingMode == "pay" && (
                                    <>
                                      {" "}
                                      <div className="onlinePayment mb-5">
                                        <div
                                          className="sc-eldPxv efrIaS"
                                          width="1714"
                                        >
                                          <button
                                            data-bs-dismiss="modal"
                                            border="black"
                                            type="button"
                                            className="sc-jlZhew dSkGVF text-truncate px-3 undefined btn btn-default momo_payment"
                                          >
                                            Pay with Momo
                                          </button>
                                          <button
                                            bg="black"
                                            color="white"
                                            type="button"
                                            className="sc-jlZhew gedcqL text-truncate px-3 undefined btn btn-default"
                                          >
                                            Pay with Cards
                                          </button>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </div>

                                {bookingMode != "pay" && (
                                  <>
                                    <div
                                      className="sc-eldPxv efrIaS justify-content-end"
                                      width="1714"
                                    >
                                      <button
                                        data-bs-dismiss="modal"
                                        border="black"
                                        type="button"
                                        className="sc-jlZhew dSkGVF text-truncate px-3 undefined btn btn-default"
                                      >
                                        Go Back
                                      </button>

                                      <button
                                        style={{ backgroundColor: "black" }}
                                        color="white"
                                        type="button"
                                        className="sc-jlZhew gedcqL text-truncate px-3 undefined btn btn-default"
                                        onClick={handleBookingVoucher}
                                        disabled={bookingMode !== "useVoucher"}
                                      >
                                        <RiseLoader
                                          color={color}
                                          loading={loading}
                                          cssOverride={override}
                                          size={10}
                                          aria-label="Loading Spinner"
                                          data-testid="loader"
                                          className="loader"
                                        />
                                        {loading ? null : "Book Now"}
                                      </button>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                         )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <NoSchedule />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <LostPage />
      )}
    </>
  );
}
function NoSchedule() {
  return (
    <>
      <div
        className="Availability__DesktopWrapper-sc-189eqiz-3 lhABAW"
        // id={userRole == "mentor" && "mentor_book"}
      >
        <div className="Availability__Desktop-sc-189eqiz-2 cLqnWb mb-4">
          <p className="sc-gsFSXq fJiOdH font-weight-600 text-center">
            No Available sessions
          </p>
        </div>
      </div>
    </>
  );
}
export default MentorProfile;
