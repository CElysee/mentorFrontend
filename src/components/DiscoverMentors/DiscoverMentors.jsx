import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DiscoverMentors.css";
import axiosInstance from "../../axiosInstance";

function DiscoverMentors() {
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
      <div className="Mentors__Wrapper-sc-uiznoc-2 fXjqxr container">
        <div className="container">
          <div className="mentor">
            <h3
              aria-level="3"
              className="sc-dcJsrY eXeELN mentor__heading font-weight-600"
            >
              Discover the Rwanda's top mentors
            </h3>
            <div className="styles__Actions-sc-1gutphy-1 egZZaN mentor__actions">
              <button
                height="32"
                type="button"
                className="sc-jlZhew iuoDZQ text-truncate font-size-12 btn--default-outline btn btn-default"
              >
                Explore all
              </button>
              <div className="ScrollToggle__Wrapper-sc-1523nzt-0 dmYQRy togglers">
                <div id="mentor-cards" className="toggler grey-4-bg">
                  <svg
                    fill="none"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 19L8.5 12L15.5 5"
                      stroke="var(--black)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="toggler false">
                  <svg
                    fill="none"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 5L15.5 12L8.5 19"
                      stroke="var(--black)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
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
                        <div className="sc-eldPxv bJvagg mb-4" width="1440">
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
                                <span>{item.profile.company_title}</span>{" "}
                                <span className="grey-2-text">at</span>{" "}
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
              <a className="carousel-control-prev" role="button" href="#">
                <span
                  aria-hidden="true"
                  className="carousel-control-prev-icon"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" role="button" href="#">
                <span
                  aria-hidden="true"
                  className="carousel-control-next-icon"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4 d-md-none">
            <button
              type="button"
              className="sc-jlZhew cKRinY text-truncate px-5 w-100 btn--default btn btn-default"
            >
              Explore all mentors
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscoverMentors;
