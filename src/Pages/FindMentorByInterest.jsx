import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import NoResultImage from "../assets/images/no-results.png";

function FindMentorByInterest() {
  const { id } = useParams();
  const [interestId, setInterestId] = useState("");
  const [profileMentor, setProfileMentor] = useState([]);
  const [mentorCategories, setMentorCategories] = useState([]);
  const imageBaseUrl = import.meta.env.VITE_REACT_APP_API;

  useEffect(() => {
    const mentorRequestUrl = `/mentors/findMentorByInterest/${id}`;
    const fetchData = async () => {
      try {
        const profileApi = await axiosInstance.post(mentorRequestUrl);
        const categoryApi = await axiosInstance.get("/interests/list");
        if (profileApi.status == 200) {
          setProfileMentor(profileApi.data);
          setMentorCategories(categoryApi.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
  const handleFilter = (value) =>{
    console.log(value)
  }
  return (
    <>
      {profileMentor.length > 0 ? (
        <>
          <div className="explore__Wrapper-sc-wikv8h-0 kTYjaS container">
            <div>
              <div
                style={{
                  transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
                  transform: "none",
                  opacity: "1",
                }}
              >
                <div className="Mentors__FilterWrapper-sc-16jv56v-0 eowcYl">
                  <div className="main-wrapper false">
                    <div className="CategoryFilter__Wrapper-sc-12epgxv-1 jmqjbq">
                      <div className="react-horizontal-scrolling-menu--wrapper">
                        <div className="react-horizontal-scrolling-menu--header"></div>
                        <div className="react-horizontal-scrolling-menu--inner-wrapper">
                          <div className="react-horizontal-scrolling-menu--arrow-left">
                            <div
                              className="Arrows__StyledArrow-sc-kci6kk-0 lhRKAX"
                              style={{ display: "none", marginLeft: "-32px" }}
                            >
                              <svg
                                fill="none"
                                width="16"
                                height="16"
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
                          </div>
                          <div className="react-horizontal-scrolling-menu--scroll-container">
                            <div className="react-horizontal-scrolling-menu--item">
                              <button
                                height="50"
                                color="var(--black)"
                                border="var(--grey-3)"
                                type="button"
                                className="sc-jlZhew fjUACt text-truncate font-weight-400 btn btn-default"
                              >
                                <svg
                                  fill="none"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.1172 17.9866H2.88306"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M21.1179 17.9866C21.1179 19.5772 19.8285 20.8666 18.2379 20.8666C16.6473 20.8666 15.3579 19.5772 15.3579 17.9866C15.3579 16.3948 16.6473 15.1066 18.2379 15.1066C19.8285 15.1066 21.1179 16.3948 21.1179 17.9866Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M13.8827 6.26212H21.118"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M2.8826 6.26211C2.8826 7.85388 4.17201 9.14211 5.7626 9.14211C7.35319 9.14211 8.6426 7.85388 8.6426 6.26211C8.6426 4.67152 7.35319 3.38211 5.7626 3.38211C4.17201 3.38211 2.8826 4.67152 2.8826 6.26211Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                <span className="ml-12 d-none d-md-block">
                                  All
                                </span>
                              </button>
                            </div>
                            <div
                              className="react-horizontal-scrolling-menu--separator"
                              data-key=".0:$0-separator"
                              data-index="0.1"
                            ></div>
                            {mentorCategories.map((item, index) => (
                              <button
                                key={index}
                                height="50"
                                color="var(--black)"
                                border="var(--grey-3)"
                                type="button"
                                className="sc-jlZhew fjUACt text-truncate font-weight-400 btn btn-default"
                                onClick={()=>{handleFilter(item.id)}}
                              >
                                <span className="ml-12 d-none d-md-block">
                                  {item.category_name}
                                </span>
                              </button>
                            ))}
                          </div>
                          <div className="react-horizontal-scrolling-menu--arrow-right">
                            <div
                              className="Arrows__StyledArrow-sc-kci6kk-0 lhRKAX"
                              style={{
                                display: "flex",
                                marginLeft: "0px",
                                paddingLeft: "0px",
                              }}
                            >
                              <svg
                                fill="none"
                                width="16"
                                height="16"
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
                        <div className="react-horizontal-scrolling-menu--footer"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-eldPxv jGbpTU mb-5 pt-3" width="1440">
                  {profileMentor.map((item, index) => (
                    <Link
                      key={index}
                      className="sc-dBmzty dGxpIk text-decoration-none"
                      to={`/mentorProfile/${item.id}`}
                    >
                      <div className="mentor-avatar overflow-hidden">
                        <div className="image-dimmer"></div>
                        <img
                          src={
                            item.userprofilementor[0].profile_picture
                              ? `${imageBaseUrl}/UserProfiles/${item.userprofilementor[0].profile_picture}`
                              : null
                          }
                          className="img-fit w-100 h-100"
                          alt={item.name}
                          title={item.name}
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="sc-eldPxv bJvagg mb-4" width="1440">
                        <p className="sc-kAyceB cCBfKf preview__content__name d-flex align-items-center text-truncate">
                          <span className="black-text font-weight-600 text-truncate">
                            {item.name}&nbsp;
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
                                {item.userprofilementor[0].company_title}
                              </span>{" "}
                              <span className="grey-2-text">at</span>{" "}
                              <span>{item.userprofilementor[0].company}</span>
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
                            {item.userprofilementor[0].level_of_experience}
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
                <div>
                  <div className="mb-5 d-flex justify-content-center">
                    <button
                      type="button"
                      className="sc-jlZhew cKRinY text-truncate btn--default px-5 false btn btn-default"
                    >
                      Load more mentors
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <NoResults />
      )}
    </>
  );
}

function NoResults() {
  return (
    <>
      <div className="sc-camqpD kqoYzK">
        <img src={NoResultImage} alt="..." className="icon" />
        <h1>Oppss Something went wrong.</h1>
        <p>
          Unfortunately, we could not find any mentors in that particular
          interest. Would you like to try a different interest?
        </p>
        <Link
          to={"/"}
          style={{ width: "fit-content" }}
          className="sc-jlZhew cKRinY text-truncate px-5 mx-auto btn--default btn btn-default"
        >
          Back to homepage
        </Link>
      </div>
    </>
  );
}
export default FindMentorByInterest;
