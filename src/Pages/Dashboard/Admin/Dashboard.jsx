import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Dashboard.css";
import SideMenu from "../Admin/SideMenu";
import axiosInstance from "../../../axiosInstance";

function Dashboard() {
  const [profileMentor, setProfileMentor] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [bookings, setBookings] = useState([]);
  const imageBaseUrl = import.meta.env.VITE_REACT_APP_API;
  const [dashboardCount, setDashboardCount] = useState("");
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileApi = await axiosInstance.get("/mentors/list");
        const counts = await axiosInstance.get("auth/count_users");
        const responseProfile = await axiosInstance.get("/BookMentor/list/all");
        setProfileMentor(profileApi.data);
        setBookings(responseProfile.data);
        setDashboardCount(counts.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="Layout__Wrapper-sc-2tn75p-0 fBYEGj">
        <div width="1440" className="sc-bddgXz ejKczW container">
          <SideMenu />
          <div className="v2__content p-0">
            <div>
              <div
                style={{
                  transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
                  transform: "none",
                  opacity: "1",
                }}
              >
                <div className="sc-feoqov evXagc">
                  <div className="sc-iaJaUu fTurZy py-4 px-lg-5 py-xl-5 px-xl-3 ml-xl-3">
                    <div className="border-bottom grey-3-border mb-4">
                      <div className="sc-fatcLD rdVON mb-4">
                        <h2 className="sc-fqkvVR jcuFgw mb-2">Welcome 👋</h2>
                      </div>
                      <div
                        className="sc-eONNys cwDSrr text-left mb-4 mt-3"
                        style={{ backgroundColor: "rgba(230, 244, 249, 0.7)" }}
                      ></div>
                      <div className="sc-fscmHZ bIYoiF">
                        <svg
                          fill="none"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="banner__close"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="var(--grey-3)"
                          ></circle>
                          <path
                            d="M11.9854 11.9853L9.15693 9.15686M11.9854 11.9853L14.8138 9.15686L11.9854 11.9853ZM11.9854 11.9853L9.15693 14.8137L11.9854 11.9853ZM11.9854 11.9853L14.8138 14.8137L11.9854 11.9853Z"
                            stroke="var(--black)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <h2 className="banner__header mb-2">
                          Pending Bookings
                        </h2>
                        <div className="mb-4">
                          <div className="d-md-flex align-items-center justify-content-between mb-2 mb-md-3">
                            <p className="mb-3 mb-md-0 grey-2-text">
                              Get more active by checking recent bookings.
                            </p>
                          </div>
                          <div className="sc-fPXMVe fyyVTl"></div>
                        </div>
                        <div className="banner__content">
                          {bookings.length ? (
                            bookings.map((item, index) => (
                              <div
                                className="banner__content__item"
                                key={index}
                              >
                                <div className="item__check">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    height="16"
                                    width="16"
                                    fill="var(--black)"
                                  >
                                    <path
                                      d="M0 0h24v24H0V0z"
                                      fill="none"
                                    ></path>
                                    <path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"></path>
                                  </svg>
                                </div>
                                <p className="item__content">
                                  <a href="#">{item.schedule_date}</a> — with{" "}
                                  {item.name} at{" "}
                                  <b>
                                    {
                                      item.booking.mentorBookingScheduleSlots
                                        .slot_time
                                    }
                                  </b>
                                </p>
                              </div>
                            ))
                          ) : (
                            <p className="sc-gsFSXq fJiOdH grey-2-text mb-4">
                              You have no upcoming sessions
                            </p>
                          )}
                          {bookings.length ? (
                            <Link
                              to={`/mentor/bookings/${userId}`}
                              className="sc-ePDLzJ duYmkE font-size-14 line-height-18 grey-1-text mt-3"
                              style={{ width: "max-content" }}
                            >
                              <span className="mr-2">
                                <svg
                                  fill="none"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16.6168 3.75204C16.8552 3.51361 17.1383 3.32448 17.4498 3.19545C17.7613 3.06641 18.0952 3 18.4324 3C18.7696 3 19.1035 3.06641 19.415 3.19545C19.7265 3.32448 20.0095 3.51361 20.248 3.75204C20.4864 3.99046 20.6755 4.27351 20.8046 4.58503C20.9336 4.89655 21 5.23043 21 5.56761C21 5.90479 20.9336 6.23868 20.8046 6.55019C20.6755 6.86171 20.4864 7.14476 20.248 7.38319L7.99283 19.6383L3 21L4.36168 16.0072L16.6168 3.75204Z"
                                    stroke="var(--grey-2)"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </span>
                              View all bookings
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="sc-dISpDn ukEd"></div>
                    <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                      <div className="col-xl-6">
                        <div
                          className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100"
                          style={{
                            backgroundColor: "rgb(13 71 74)",
                            backgroundImage:
                              'url("https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/shapes/wave-bg-red.svg")',
                          }}
                        >
                          <div className="card-header pt-5 mb-3">
                            <div
                              className="d-flex flex-center rounded-circle h-80px w-80px"
                              style={{
                                border: "1px dashed rgba(255, 255, 255, 0.4)",
                                backgroundColor: "#e55812",
                              }}
                            >
                              <svg
                                fill="#fff"
                                width="80px"
                                height="80px"
                                viewBox="-4.5 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                <g
                                  id="SVGRepo_tracerCarrier"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />

                                <g id="SVGRepo_iconCarrier">
                                  {" "}
                                  <title>users-alt</title>{" "}
                                  <path d="M11.24 14.76c0.88-0.8 1.44-2 1.44-3.28 0-2.48-2-4.48-4.48-4.48s-4.48 2-4.48 4.48c0 1.32 0.56 2.48 1.44 3.28-1 0.36-1.88 0.92-2.64 1.72-2.68 2.88-2.52 7.52-2.52 7.72 0.040 0.48 0.4 0.84 0.88 0.8s0.8-0.4 0.8-0.88c0-0.040-0.16-4.12 2.12-6.52 1.080-1.12 2.56-1.72 4.44-1.72 1.84 0 3.32 0.56 4.4 1.68 2.28 2.36 2.12 6.48 2.12 6.52-0.040 0.48 0.32 0.84 0.8 0.88 0 0 0.040 0 0.040 0 0.44 0 0.8-0.36 0.84-0.8 0-0.2 0.2-4.84-2.6-7.72-0.72-0.76-1.6-1.32-2.6-1.68zM5.44 11.48c0-1.52 1.24-2.8 2.8-2.8s2.8 1.24 2.8 2.8c0 1.52-1.24 2.8-2.8 2.8s-2.8-1.28-2.8-2.8zM21.4 13.36c-0.4-0.44-0.88-0.76-1.4-1 0.44-0.56 0.72-1.24 0.72-2 0-1.76-1.4-3.16-3.16-3.16s-3.16 1.4-3.16 3.16c0 0.76 0.28 1.44 0.72 2-0.4 0.2-0.8 0.44-1.12 0.76-0.36 0.32-0.36 0.84-0.080 1.2 0.32 0.36 0.84 0.36 1.2 0.080 0.64-0.56 1.44-0.84 2.44-0.84 1.12 0 1.96 0.32 2.6 1 1.36 1.44 1.28 3.92 1.28 3.96-0.040 0.48 0.32 0.84 0.8 0.88 0 0 0.040 0 0.040 0 0.44 0 0.8-0.36 0.84-0.8 0.040-0.16 0.12-3.28-1.72-5.24zM16.080 10.4c0-0.8 0.68-1.48 1.48-1.48s1.48 0.68 1.48 1.48-0.68 1.48-1.48 1.48c-0.8 0-1.48-0.68-1.48-1.48z" />{" "}
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="card-body d-flex align-items-end mb-3">
                            <div className="d-flex align-items-center">
                              <span className="fs-4hx text-white fw-bold me-6">
                                {dashboardCount.mentee}
                              </span>

                              <div className="fw-bold fs-6 text-white">
                                <span className="d-block">Mentee</span>
                                <span className="">Users</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div
                          className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100"
                          style={{
                            backgroundColor: "rgb(13 71 74)",
                            backgroundImage:
                              'url("https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/shapes/wave-bg-red.svg")',
                          }}
                        >
                          <div className="card-header pt-5 mb-3">
                            <div
                              className="d-flex flex-center rounded-circle h-80px w-80px"
                              style={{
                                border: "1px dashed rgba(255, 255, 255, 0.4)",
                                backgroundColor: "#e55812",
                              }}
                            >
                              <svg
                                fill="#fff"
                                width="80px"
                                height="80px"
                                viewBox="-4.5 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                <g
                                  id="SVGRepo_tracerCarrier"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />

                                <g id="SVGRepo_iconCarrier">
                                  {" "}
                                  <title>users-alt</title>{" "}
                                  <path d="M11.24 14.76c0.88-0.8 1.44-2 1.44-3.28 0-2.48-2-4.48-4.48-4.48s-4.48 2-4.48 4.48c0 1.32 0.56 2.48 1.44 3.28-1 0.36-1.88 0.92-2.64 1.72-2.68 2.88-2.52 7.52-2.52 7.72 0.040 0.48 0.4 0.84 0.88 0.8s0.8-0.4 0.8-0.88c0-0.040-0.16-4.12 2.12-6.52 1.080-1.12 2.56-1.72 4.44-1.72 1.84 0 3.32 0.56 4.4 1.68 2.28 2.36 2.12 6.48 2.12 6.52-0.040 0.48 0.32 0.84 0.8 0.88 0 0 0.040 0 0.040 0 0.44 0 0.8-0.36 0.84-0.8 0-0.2 0.2-4.84-2.6-7.72-0.72-0.76-1.6-1.32-2.6-1.68zM5.44 11.48c0-1.52 1.24-2.8 2.8-2.8s2.8 1.24 2.8 2.8c0 1.52-1.24 2.8-2.8 2.8s-2.8-1.28-2.8-2.8zM21.4 13.36c-0.4-0.44-0.88-0.76-1.4-1 0.44-0.56 0.72-1.24 0.72-2 0-1.76-1.4-3.16-3.16-3.16s-3.16 1.4-3.16 3.16c0 0.76 0.28 1.44 0.72 2-0.4 0.2-0.8 0.44-1.12 0.76-0.36 0.32-0.36 0.84-0.080 1.2 0.32 0.36 0.84 0.36 1.2 0.080 0.64-0.56 1.44-0.84 2.44-0.84 1.12 0 1.96 0.32 2.6 1 1.36 1.44 1.28 3.92 1.28 3.96-0.040 0.48 0.32 0.84 0.8 0.88 0 0 0.040 0 0.040 0 0.44 0 0.8-0.36 0.84-0.8 0.040-0.16 0.12-3.28-1.72-5.24zM16.080 10.4c0-0.8 0.68-1.48 1.48-1.48s1.48 0.68 1.48 1.48-0.68 1.48-1.48 1.48c-0.8 0-1.48-0.68-1.48-1.48z" />{" "}
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="card-body d-flex align-items-end mb-3">
                            <div className="d-flex align-items-center">
                              <span className="fs-4hx text-white fw-bold me-6">
                                {dashboardCount.mentors}
                              </span>

                              <div className="fw-bold fs-6 text-white">
                                <span className="d-block">Mentor</span>
                                <span className="">Users</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div
                          className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100"
                          style={{
                            backgroundColor: "rgb(13 71 74)",
                            backgroundImage:
                              'url("https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/shapes/wave-bg-red.svg")',
                          }}
                        >
                          <div className="card-header pt-5 mb-3">
                            <div
                              className="d-flex flex-center rounded-circle h-80px w-80px"
                              style={{
                                border: "1px dashed rgba(255, 255, 255, 0.4)",
                                backgroundColor: "#e55812",
                              }}
                            >
                              <svg
                                fill="#fff"
                                width="80px"
                                height="80px"
                                viewBox="-4.5 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                <g
                                  id="SVGRepo_tracerCarrier"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />

                                <g id="SVGRepo_iconCarrier">
                                  {" "}
                                  <title>users-alt</title>{" "}
                                  <path d="M11.24 14.76c0.88-0.8 1.44-2 1.44-3.28 0-2.48-2-4.48-4.48-4.48s-4.48 2-4.48 4.48c0 1.32 0.56 2.48 1.44 3.28-1 0.36-1.88 0.92-2.64 1.72-2.68 2.88-2.52 7.52-2.52 7.72 0.040 0.48 0.4 0.84 0.88 0.8s0.8-0.4 0.8-0.88c0-0.040-0.16-4.12 2.12-6.52 1.080-1.12 2.56-1.72 4.44-1.72 1.84 0 3.32 0.56 4.4 1.68 2.28 2.36 2.12 6.48 2.12 6.52-0.040 0.48 0.32 0.84 0.8 0.88 0 0 0.040 0 0.040 0 0.44 0 0.8-0.36 0.84-0.8 0-0.2 0.2-4.84-2.6-7.72-0.72-0.76-1.6-1.32-2.6-1.68zM5.44 11.48c0-1.52 1.24-2.8 2.8-2.8s2.8 1.24 2.8 2.8c0 1.52-1.24 2.8-2.8 2.8s-2.8-1.28-2.8-2.8zM21.4 13.36c-0.4-0.44-0.88-0.76-1.4-1 0.44-0.56 0.72-1.24 0.72-2 0-1.76-1.4-3.16-3.16-3.16s-3.16 1.4-3.16 3.16c0 0.76 0.28 1.44 0.72 2-0.4 0.2-0.8 0.44-1.12 0.76-0.36 0.32-0.36 0.84-0.080 1.2 0.32 0.36 0.84 0.36 1.2 0.080 0.64-0.56 1.44-0.84 2.44-0.84 1.12 0 1.96 0.32 2.6 1 1.36 1.44 1.28 3.92 1.28 3.96-0.040 0.48 0.32 0.84 0.8 0.88 0 0 0.040 0 0.040 0 0.44 0 0.8-0.36 0.84-0.8 0.040-0.16 0.12-3.28-1.72-5.24zM16.080 10.4c0-0.8 0.68-1.48 1.48-1.48s1.48 0.68 1.48 1.48-0.68 1.48-1.48 1.48c-0.8 0-1.48-0.68-1.48-1.48z" />{" "}
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="card-body d-flex align-items-end mb-3">
                            <div className="d-flex align-items-center">
                              <span className="fs-4hx text-white fw-bold me-6">
                                {dashboardCount.bookings}
                              </span>

                              <div className="fw-bold fs-6 text-white">
                                <span className="d-block">Bookings</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-bStcSt jBOpKl">
                    <div className="card card-flush h-md-50 mb-xl-10">
                      <div className="card-header pt-3">
                        <div className="card-title d-flex flex-column">
                          <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">
                            {dashboardCount.monthly_mentee}
                          </span>

                          <span className="text-gray-400 pt-1 fw-semibold fs-6">
                            New Mentee This Month
                          </span>
                        </div>
                      </div>
                      <div className="card-body d-flex flex-column justify-content-end pe-0">
                        <span className="fs-6 fw-bolder text-gray-800 d-block mb-2">
                          Today’s Mentee
                        </span>
                        <div className="symbol-group symbol-hover flex-nowrap">
                          {dashboardCount.today_mentee_profiles &&
                            dashboardCount.today_mentee_profiles.length > 0 &&
                            dashboardCount.today_mentee_profiles.slice(0, 6).map(
                              (profile, index) => (
                                <div
                                  key={index}
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  aria-label="Michael Eberon"
                                  data-bs-original-title="Michael Eberon"
                                  data-kt-initialized="1"
                                >
                                  <img
                                    alt="Pic"
                                    src={`${imageBaseUrl}/UserProfiles/${profile}`}
                                  />
                                </div>
                              )
                            )}
                          <a
                            href="#"
                            className="symbol symbol-35px symbol-circle"
                            data-bs-toggle="modal"
                            data-bs-target="#kt_modal_view_users"
                          >
                            <span className="symbol-label bg-orange text-white fs-8 fw-bold">
                              {dashboardCount.today_mentee_profiles &&
                            dashboardCount.today_mentee_profiles.length == 0 ? `+${dashboardCount.today_mentee_profiles.length - 6}` : ""}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card card-flush h-md-50 mb-xl-10">
                      <div className="card-header pt-3">
                        <div className="card-title d-flex flex-column">
                          <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">
                            {dashboardCount.monthly_mentors}
                          </span>

                          <span className="text-gray-400 pt-1 fw-semibold fs-6">
                            New Mentor This Month
                          </span>
                        </div>
                      </div>
                      <div className="card-body d-flex flex-column justify-content-end pe-0">
                        <span className="fs-6 fw-bolder text-gray-800 d-block mb-2">
                          Today’s Mentor
                        </span>
                        <div className="symbol-group symbol-hover flex-nowrap">
                        {dashboardCount.today_mentors_profiles &&
                            dashboardCount.today_mentors_profiles.length > 0 &&
                            dashboardCount.today_mentors_profiles.slice(0, 6).map(
                              (profile, index) => (
                                <div
                                  key={index}
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  aria-label="Michael Eberon"
                                  data-bs-original-title="Michael Eberon"
                                  data-kt-initialized="1"
                                >
                                  <img
                                    alt="Pic"
                                    src={`${imageBaseUrl}/UserProfiles/${profile}`}
                                  />
                                </div>
                              )
                            )}
                          <a
                            href="#"
                            className="symbol symbol-35px symbol-circle"
                            data-bs-toggle="modal"
                            data-bs-target="#kt_modal_view_users"
                          >
                            <span className="symbol-label bg-orange text-white fs-8 fw-bold">
                              {dashboardCount.today_mentors_profiles &&
                            dashboardCount.today_mentors_profiles.length == 0 ? `+${dashboardCount.today_mentors_profiles.length - 6}` : ""}
                            </span>
                          </a>
                        </div>
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

export default Dashboard;
