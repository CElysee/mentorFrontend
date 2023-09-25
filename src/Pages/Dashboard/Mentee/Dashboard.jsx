import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Dashboard.css";
import SideMenu from "../Mentee/SideMenu";
import axiosInstance from "../../../axiosInstance";

function Dashboard() {
  const [profileMentor, setProfileMentor] = useState([]);
  const imageBaseUrl = import.meta.env.VITE_REACT_APP_API;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileApi = await axiosInstance("/mentors/list");
        if (profileApi.status == 200) {
          setProfileMentor(profileApi.data);
        }
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
                        <p className="sc-gsFSXq fJiOdH grey-2-text mb-4">
                          You have no upcoming sessions
                        </p>
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
                          Let’s start with the basics
                        </h2>
                        <div className="mb-4">
                          <div className="d-md-flex align-items-center justify-content-between mb-2 mb-md-3">
                            <p className="mb-3 mb-md-0 grey-2-text">
                              Get more by setting up a profile you love.
                            </p>
                            <p className="grey-2-text">50% completed</p>
                          </div>
                          <div className="sc-fPXMVe fyyVTl"></div>
                        </div>
                        <div className="banner__content">
                          <div className="banner__content__item undefined">
                            <div className="item__check">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                height="16"
                                width="16"
                                fill="var(--black)"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                <path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"></path>
                              </svg>
                            </div>
                            <p className="item__content">
                              <a href="#">
                                Book your first session
                              </a>{" "}
                              — Learn/network with mentors.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="sc-ggqIjW hrKGOz">
                      <div className="d-flex align-items-center justify-content-between mb-16">
                        <p className="sc-gsFSXq fJiOdH font-weight-600">
                          Discover the Rwanda's top mentors
                        </p>

                        <div className="d-flex align-items-center">
                          <button
                            height="32"
                            type="button"
                            className="sc-jlZhew iuoDZQ text-truncate font-size-12 btn--default-outline btn btn-default"
                          >
                            Explore all
                          </button>
                        </div>
                      </div>
                      <div className="Mentors__CarouselWrapper-sc-uiznoc-0 fDuWxS">
                        <div className="carousel slide">
                          <div className="carousel-inner">
                            <div className="active carousel-item">
                              <div className="Mentors__Grid-sc-uiznoc-1 epLwlm">
                                {profileMentor.map((item, index) => (
                                  <Link
                                    key={index}
                                    className="sc-dBmzty dGxpIk text-decoration-none"
                                    to={`/mentorProfile/${item.mentor.id}`}
                                  >
                                    <div className="mentor-avatar overflow-hidden">
                                      <div className="image-dimmer"></div>
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
                                    <div
                                      className="sc-eldPxv bJvagg mb-4"
                                      width="1440"
                                    >
                                      <p className="sc-kAyceB cCBfKf preview__content__name d-flex align-items-center text-truncate">
                                        <span className="black-text font-weight-600 text-truncate">
                                          {item.mentor.name}&nbsp;
                                        </span>
                                        <span>
                                          <img
                                            src={`/assets/flags/${item.country.code.toLowerCase()}.png`}
                                            alt={item.country.name}
                                            className="country_flag"
                                          />
                                        </span>
                                      </p>
                                      <div className="preview__content__job grey-1-text">
                                        <div className="item">
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 17 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.1667 4.95833H2.83335C2.05095 4.95833 1.41669 5.59259 1.41669 6.37499V13.4583C1.41669 14.2407 2.05095 14.875 2.83335 14.875H14.1667C14.9491 14.875 15.5834 14.2407 15.5834 13.4583V6.37499C15.5834 5.59259 14.9491 4.95833 14.1667 4.95833Z"
                                              stroke="var(--grey-1)"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            ></path>
                                            <path
                                              d="M11.3334 14.875V3.54167C11.3334 3.16594 11.1841 2.80561 10.9184 2.53993C10.6527 2.27426 10.2924 2.125 9.91669 2.125H7.08335C6.70763 2.125 6.3473 2.27426 6.08162 2.53993C5.81594 2.80561 5.66669 3.16594 5.66669 3.54167V14.875"
                                              stroke="var(--grey-1)"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            ></path>
                                          </svg>
                                          <p className="sc-jXbUNg kFsvSZ ml-2 line-clamp">
                                            <span>
                                              {item.profile.company_title}
                                            </span>{" "}
                                            <span className="grey-2-text">
                                              at
                                            </span>{" "}
                                            <span>{item.profile.company}</span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="preview__content__metadata grey-4-bg p-3  d-flex justify-content-between">
                                      <div>
                                        <p className="sc-dhKdcB fwahpz grey-2-text">
                                          Experience
                                        </p>
                                        <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                                          {item.profile.level_of_experience}
                                        </p>
                                      </div>
                                      <div className="d-flex align-items-center">
                                        <svg
                                          fill="none"
                                          width="18"
                                          height="18"
                                          viewBox="0 0 24 24"
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="mr-2"
                                        >
                                          <path
                                            d="M12 2.00003L15.09 8.26003L22 9.27003L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27003L8.91 8.26003L12 2.00003Z"
                                            fill="#FFC200"
                                            stroke="#FFC200"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                        </svg>
                                        <p className="sc-jXbUNg kFsvSZ grey-1-text">
                                          New mentor
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                          <a
                            className="carousel-control-prev"
                            role="button"
                            href="#"
                          >
                            <span
                              aria-hidden="true"
                              className="carousel-control-prev-icon"
                            ></span>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a
                            className="carousel-control-next"
                            role="button"
                            href="#"
                          >
                            <span
                              aria-hidden="true"
                              className="carousel-control-next-icon"
                            ></span>
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="sc-dISpDn ukEd"></div>
                    <div className="sc-iowXnY gVJEOe">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <p className="sc-jXbUNg kFsvSZ grey-1-text">
                          #1 Tips for Success
                        </p>
                        <div className="d-flex align-items-center">
                          <a href="/" className="px-2">
                            <svg
                              fill="none"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.5 19L8.5 12L15.5 5"
                                stroke="var(--grey-3)"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </a>
                          <a href="/" className="px-2">
                            <svg
                              fill="none"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.5 5L15.5 12L8.5 19"
                                stroke="var(--default)"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <p className="sc-gsFSXq fJiOdH font-weight-700 grey-1-text mb-1">
                        How to prepare for your first meeting?
                      </p>
                      <p className="sc-jXbUNg kFsvSZ grey-2-text">
                        Plan an agenda! Plan out the questions and topics you'd
                        like to discuss. If you'd like to work together on
                        long-term goals, set some time to discuss expectations
                        for each other.
                      </p>
                    </div>
                  </div>
                  <div className="sc-bStcSt jBOpKl">
                    <div className="sc-fThUAz hckRhi cursor-pointer">
                      <div className="accordion">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div>
                            <div className="profile-strength__name d-flex flex-column">
                              <p className="sc-jXbUNg kFsvSZ mb-1 grey-6-text">
                                My Experience
                              </p>
                              <span className="current-level font-weight-700">
                                Youngling 🔰
                              </span>
                            </div>
                          </div>
                          <svg
                            fill="none"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="cursor-pointer"
                          >
                            <path
                              d="M8.5 5L15.5 12L8.5 19"
                              stroke="var(--white)"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div className="sc-fPXMVe dwWqlx"></div>
                        
                      </div>
                    </div>
                    <div className="sc-bVVIoq jVRdKh p-3 border">
                      <div className="mb-2 justify-content-between d-flex">
                        <p className="sc-kAyceB cCBfKf">
                          <svg
                            fill="none"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.80408 15.477C2.80408 15.477 2.94608 17.215 2.97908 17.763C3.02308 18.498 3.30708 19.319 3.78108 19.889C4.45008 20.697 5.23808 20.982 6.29008 20.984C7.52708 20.986 16.5221 20.986 17.7591 20.984C18.8111 20.982 19.5991 20.697 20.2681 19.889C20.7421 19.319 21.0261 18.498 21.0711 17.763C21.1031 17.215 21.2451 15.477 21.2451 15.477"
                              stroke="var(--grey-1)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M8.49597 5.32949V4.95849C8.49597 3.73849 9.48397 2.75049 10.704 2.75049H13.286C14.505 2.75049 15.494 3.73849 15.494 4.95849L15.495 5.32949"
                              stroke="var(--grey-1)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M11.995 16.6782V15.3842"
                              stroke="var(--grey-1)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.74988 8.38912V11.8561C4.66788 13.1211 6.96588 14.0071 9.48788 14.3581C9.78988 13.2571 10.7829 12.4501 11.9899 12.4501C13.1779 12.4501 14.1909 13.2571 14.4729 14.3681C17.0049 14.0171 19.3119 13.1311 21.2399 11.8561V8.38912C21.2399 6.69512 19.8769 5.33112 18.1829 5.33112H5.81688C4.12288 5.33112 2.74988 6.69512 2.74988 8.38912Z"
                              stroke="var(--grey-1)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span className="ml-2 grey-1-text font-weight-600">
                            I am open to
                          </span>
                        </p>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="cursor-pointer"
                        >
                          <path
                            d="M9 12V9M9 6H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                            stroke="var(--grey-2)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <p
                          className="sc-jXbUNg kFsvSZ mt-2 grey-2-text"
                          style={{ maxWidth: "206px" }}
                        >
                          Share what career opportunities you are open to in the
                          commmunity
                        </p>
                        <a
                          href="/"
                          className="sc-ePDLzJ duYmkE font-size-14 line-height-18 grey-1-text mt-3"
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
                          Edit Profile
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
    </>
  );
}

export default Dashboard;
