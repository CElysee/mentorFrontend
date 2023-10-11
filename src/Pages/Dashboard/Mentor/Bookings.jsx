import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../Dashboard.css";
import SideMenu from "../Mentor/SideMenu";
import axiosInstance from "../../../axiosInstance";
import "../Mentor/Mentor.css";
import Logo from "../../../assets/images/mentorlogo.svg";
import { ToastContainer, toast } from "react-toastify";
import RiseLoader from "react-spinners/RiseLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#e55812",
  paddingRight: "10px",
};
function Bookings() {
  const { id } = useParams();
  const [bookings, setBookings] = useState([]);
  const [scheduleId, setScheduleId] = useState("");
  const [bookingStatus, setBookingStatus] = useState("");
  const [meetingPreference, SetMeetingPreference] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [meetingAddress, setMeetingAddress] = useState("");
  const [bookingComment, setBookingComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission
  const [color, setColor] = useState("#fff");

  const imageBaseUrl = import.meta.env.VITE_REACT_APP_API;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestUrl = `/BookMentor/list/${id}`;
        const responseProfile = await axiosInstance.get(requestUrl);
        setBookings(responseProfile.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [formSubmitted]);

  const handleBookingStatusChange = (e) => {
    setBookingStatus(e.target.value);
  };
  const handleMeetingPreferenceChange = (e) => {
    SetMeetingPreference(e.target.value);
  };
  const handleMeetingLinkChange = (e) => {
    setMeetingLink(e.target.value);
  };
  const handleMeetingAddressChange = (e) => {
    setMeetingAddress(e.target.value);
  };
  const handleMeetingCommentChange = (e) => {
    setBookingComment(e.target.value);
  };

  const updateBookingStatus = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = "/BookMentor/updateBookingStatus/";
    const data = new URLSearchParams();
    data.append("schedule_id", scheduleId);
    data.append("schedule_status", bookingStatus);
    data.append("meeting_preference", meetingPreference);
    data.append("meeting_link", meetingLink);
    data.append("meeting_address", meetingAddress);
    data.append("booking_comment", bookingComment);

    try {
      const response = await axiosInstance.post(url, data, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      console.log("Response:", response.data);
      setLoading(false);
      setFormSubmitted(true);
      notify(response.data.message, "success");
      document.querySelector(".modal-backdrop").style.display = "none";
      document.querySelector(".modal").style.display = "none";
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error Response:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error Request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error:", error.message);
      }
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
      <div className="Layout__Wrapper-sc-2tn75p-0 fBYEGj">
        <ToastContainer autoClose={4000} />
        <div width="1440" className="sc-bddgXz ejKczW container">
          <SideMenu />
          <div className="v2__content">
            <div>
              <div
                style={{
                  transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
                  transform: "none",
                  opacity: "1",
                }}
              ></div>
              <div
                style={{
                  transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
                  transform: "none",
                  opacity: "1",
                }}
              >
                <div className="sc-bStcSt eYWfWP">
                  <h2 className="sc-fqkvVR jcuFgw">Bookings</h2>

                  <div
                    className="sc-eONNys blzOEo text-left mb-4 mt-3"
                    style={{ backgroundColor: "rgba(230, 244, 249, 0.7)" }}
                  >
                    <div className="d-flex">
                      <span className="mr-2 my-md-auto">
                        <svg
                          fill="none"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.865 5.1238C19.302 5.2768 19.594 5.6888 19.594 6.1518V12.9248C19.594 14.8178 18.906 16.6248 17.691 18.0248C17.08 18.7298 16.307 19.2788 15.486 19.7228L11.928 21.6448L8.364 19.7218C7.542 19.2778 6.768 18.7298 6.156 18.0238C4.94 16.6238 4.25 14.8158 4.25 12.9208V6.1518C4.25 5.6888 4.542 5.2768 4.979 5.1238L11.561 2.8108C11.795 2.7288 12.05 2.7288 12.283 2.8108L18.865 5.1238Z"
                            stroke="var(--teal)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M9.32251 11.9177L11.2145 13.8107L15.1125 9.91269"
                            stroke="var(--teal)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <p className="font-weight-400">
                        The session timings are following your schedules
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
                  transform: "none",
                  opacity: "1",
                }}
              >
                <div className="sc-fUnMCh epgYHv">
                  <nav
                    className="Member__TabWrapper-sc-ium6kc-0 tcqie nav nav-tabs"
                    id="myTab"
                    role="tablist"
                  >
                    <a
                      className="nav-item nav-link active"
                      id="upcoming-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#upcoming"
                      type="button"
                      role="tab"
                      aria-controls="upcoming"
                      aria-selected="true"
                    >
                      <span>Upcoming</span>
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="history-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#history"
                      type="button"
                      role="tab"
                      aria-controls="history"
                      aria-selected="false"
                    >
                      <span>History</span>
                    </a>
                  </nav>

                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      id="upcoming"
                      aria-labelledby="upcoming-tab"
                      className="fade tab-pane active show active"
                    >
                      {bookings.length ? (
                        <>
                          {bookings.map((item, index) => (
                            <div
                              className="sc-bizigk kpPxit"
                              id={index}
                              key={index}
                            >
                              <div className="sc-eFRcpv jCTTTR">
                                <div className="item__photo">
                                  <img
                                    src={`${imageBaseUrl}/UserProfiles/${item.profile_picture}`}
                                    className="img-fit rounded-circle"
                                    alt={item.name}
                                    title={item.name}
                                    width="100%"
                                    height="100%"
                                  />
                                </div>
                                <div className="item__content">
                                  <div className="d-flex justify-content-between mb-12">
                                    <p className="sc-kAyceB cCBfKf progress__title font-weight-600">
                                      {item.name}
                                    </p>
                                    <p className="sc-jXbUNg kFsvSZ progress__target grey-2-text text-nowrap">
                                      <b>
                                        {" "}
                                        Works at {item.company} as{" "}
                                        {item.company_title}
                                      </b>
                                    </p>
                                  </div>
                                  <p className="sc-jXbUNg kFsvSZ grey-2-text mt-12">
                                    Booking session is scheduled on{" "}
                                    <strong>{item.schedule_date}</strong> at{" "}
                                    <strong>
                                      {" "}
                                      {
                                        item.booking.mentorBookingScheduleSlots
                                          .slot_time
                                      }
                                    </strong>
                                  </p>

                                  <div className="sc-etVdmn my-2 my-md-0">
                                    <button
                                      type="button"
                                      className="btn d-flex CiLZB"
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                      onClick={() => {
                                        setBookingStatus(
                                          item.booking.schedule_status
                                        );
                                        setScheduleId(item.booking.id);
                                      }}
                                    >
                                      <div>
                                        <svg
                                          width="20px"
                                          height="20px"
                                          viewBox="0 0 14 14"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="#ffffff"
                                        >
                                          <g
                                            id="SVGRepo_bgCarrier"
                                            strokeWidth="0"
                                          />

                                          <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />

                                          <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <g fillRule="evenodd">
                                              {" "}
                                              <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z" />{" "}
                                              <path
                                                d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z"
                                                fill="#FFF"
                                                style={{
                                                  fill: "var(--svg-status-bg, #0d4749)",
                                                }}
                                              />{" "}
                                              <path d="M6.278 7.697L5.045 6.464a.296.296 0 0 0-.42-.002l-.613.614a.298.298 0 0 0 .002.42l1.91 1.909a.5.5 0 0 0 .703.005l.265-.265L9.997 6.04a.291.291 0 0 0-.009-.408l-.614-.614a.29.29 0 0 0-.408-.009L6.278 7.697z" />{" "}
                                            </g>{" "}
                                          </g>
                                        </svg>
                                      </div>
                                      <p
                                        className="sc-jXbUNg kFsvSZ"
                                        style={{ paddingLeft: "5px" }}
                                      >
                                        Status:{" "}
                                        <strong>
                                          {item.booking.schedule_status}
                                        </strong>
                                      </p>
                                    </button>

                                    <div className="d-flex CiLZB">
                                      <div>
                                        <svg
                                          width="20px"
                                          height="20px"
                                          viewBox="0 0 20 20"
                                          version="1.1"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="#000000"
                                        >
                                          <g
                                            id="SVGRepo_bgCarrier"
                                            strokeWidth="0"
                                          />

                                          <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />

                                          <g id="SVGRepo_iconCarrier">
                                            <defs> </defs>{" "}
                                            <g
                                              id="Page-1"
                                              stroke="none"
                                              strokeWidth="1"
                                              fill="none"
                                              fillRule="evenodd"
                                            >
                                              {" "}
                                              <g
                                                id="Dribbble-Light-Preview"
                                                transform="translate(-420.000000, -2119.000000)"
                                                fill="#fff"
                                              >
                                                {" "}
                                                <g
                                                  id="icons"
                                                  transform="translate(56.000000, 160.000000)"
                                                >
                                                  {" "}
                                                  <path
                                                    d="M378.083123,1964.99998 C378.083123,1962.79398 376.251842,1960.99998 374,1960.99998 C371.748158,1960.99998 369.916877,1962.79398 369.916877,1964.99998 C369.916877,1967.20598 371.748158,1968.99998 374,1968.99998 C376.251842,1968.99998 378.083123,1967.20598 378.083123,1964.99998 M381.945758,1978.99998 L380.124685,1978.99998 C379.561214,1978.99998 379.103904,1978.55198 379.103904,1977.99998 C379.103904,1977.44798 379.561214,1976.99998 380.124685,1976.99998 L380.5626,1976.99998 C381.26898,1976.99998 381.790599,1976.30298 381.523154,1975.66198 C380.286989,1972.69798 377.383888,1970.99998 374,1970.99998 C370.616112,1970.99998 367.713011,1972.69798 366.476846,1975.66198 C366.209401,1976.30298 366.73102,1976.99998 367.4374,1976.99998 L367.875315,1976.99998 C368.438786,1976.99998 368.896096,1977.44798 368.896096,1977.99998 C368.896096,1978.55198 368.438786,1978.99998 367.875315,1978.99998 L366.054242,1978.99998 C364.778266,1978.99998 363.773818,1977.85698 364.044325,1976.63598 C364.787453,1973.27698 367.107688,1970.79798 370.163906,1969.67298 C368.769519,1968.57398 367.875315,1966.88998 367.875315,1964.99998 C367.875315,1961.44898 371.023403,1958.61898 374.733941,1959.04198 C377.422678,1959.34798 379.650022,1961.44698 380.05323,1964.06998 C380.400296,1966.33098 379.456073,1968.39598 377.836094,1969.67298 C380.892312,1970.79798 383.212547,1973.27698 383.955675,1976.63598 C384.226182,1977.85698 383.221734,1978.99998 381.945758,1978.99998 M377.185857,1974.46398 C377.584982,1974.85498 377.584982,1975.48798 377.185857,1975.87898 L374,1978.99998 L371.834924,1976.87898 C371.435799,1976.48798 371.435799,1975.85498 371.834924,1975.46398 L371.834924,1975.46398 C372.233028,1975.07398 372.879183,1975.07398 373.278308,1975.46398 L374,1976.17198 L375.742473,1974.46398 C376.141598,1974.07398 376.787752,1974.07398 377.185857,1974.46398"
                                                    id="profile_round-[#1345]"
                                                  >
                                                    {" "}
                                                  </path>{" "}
                                                </g>{" "}
                                              </g>{" "}
                                            </g>{" "}
                                          </g>
                                        </svg>
                                      </div>
                                      <p
                                        className="sc-jXbUNg kFsvSZ"
                                        style={{ paddingLeft: "5px" }}
                                      >
                                        Check Profile
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <EmptyBooking />
                      )}
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Update Booking Status
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <form
                          className="py-lg mx-auto"
                          style={{ width: "100%" }}
                          onSubmit={updateBookingStatus}
                        >
                          <div className="modal-body">
                            <div className="form-group">
                              <label className="form-label" htmlFor="name">
                                Status
                              </label>
                              <select
                                className="form-control"
                                value={bookingStatus}
                                onChange={handleBookingStatusChange}
                              >
                                <option>Select</option>
                                <option>Pending</option>
                                <option>Approved</option>
                                <option>Rejected</option>
                              </select>
                            </div>
                            {bookingStatus == "Approved" && (
                              <>
                                <div className="form-group">
                                  <label className="form-label" htmlFor="name">
                                    Meeting Preference
                                  </label>
                                  <select
                                    className="form-control"
                                    onChange={handleMeetingPreferenceChange}
                                  >
                                    <option>Select</option>
                                    <option>Online</option>
                                    <option>In-Person</option>
                                  </select>
                                </div>
                              </>
                            )}
                            {meetingPreference == "Online" && (
                              <>
                                <div className="form-group">
                                  <label className="form-label" htmlFor="name">
                                    Meeting Link
                                  </label>
                                  <input
                                    name="voucher_code"
                                    placeholder="https://meet.google.com/dha-ryre-wyp"
                                    type="link"
                                    id="handleEmail"
                                    className="form-control"
                                    onChange={handleMeetingLinkChange}
                                  />
                                </div>
                              </>
                            )}
                            {meetingPreference == "In-Person" && (
                              <>
                                {" "}
                                <div className="form-group">
                                  <label className="form-label" htmlFor="name">
                                    Meeting Address
                                  </label>
                                  <input
                                    name="voucher_code"
                                    placeholder="Norrsken House Kigali, 1 KN 78 St, Kigali"
                                    type="text"
                                    id="handleEmail"
                                    className="form-control"
                                    onChange={handleMeetingAddressChange}
                                  />
                                </div>
                              </>
                            )}
                            {bookingStatus == "Rejected" && (
                              <>
                                <div className="form-group">
                                  <label className="form-label" htmlFor="name">
                                    Comment
                                  </label>
                                  <textarea
                                    name="voucher_code"
                                    style={{ padding: "15px" }}
                                    rows={5}
                                    type="text"
                                    id="handleEmail"
                                    className="form-control"
                                    onChange={handleMeetingCommentChange}
                                  />
                                </div>
                              </>
                            )}
                          </div>
                          <div className="modal-footer">
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
                                type="submit"
                                className="sc-jlZhew gedcqL text-truncate px-3 undefined btn btn-default"
                              >
                                {loading ? (
                                  <>
                                    <RiseLoader
                                      color={color}
                                      loading={loading}
                                      cssOverride={override}
                                      size={10}
                                      aria-label="Loading Spinner"
                                      data-testid="loader"
                                    />
                                    Adding new slot
                                  </>
                                ) : (
                                  "Add Slot"
                                )}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function EmptyBooking() {
  return (
    <>
      <div
        style={{
          transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
          transform: "none",
          opacity: "1",
        }}
      >
        <div width="1440" className="sc-eldPxv ddyETa">
          <div>
            <p className="grey-2-text line-height-16 mb-0">
              You have no upcoming bookings - start sharing a conversation with
              a mentor.
            </p>
            <a
              href="/findMentor"
              target="_blanket"
              style={{ width: "fit-content" }}
              className="sc-jlZhew cKRinY text-truncate px-4 mt-4 btn--default btn btn-default"
            >
              Explore mentors
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Bookings;
