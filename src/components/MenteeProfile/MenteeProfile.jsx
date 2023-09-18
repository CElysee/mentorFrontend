import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CoverImage from "../../assets/images/coverpic.jpg";
import ProfileImage from "../../assets/images/profilepic.jpg";
import "../MenteeProfile/MenteeProfile.css";
import IndustrySvg from "../../assets/images/industry.svg";
import SideMenu from "../../pages/Dashboard/Mentee/SideMenu";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import UserInfo from "../EditUserProfile/UserInfo";
import Expertise from "../EditUserProfile/Expertise";
import Bio from "../EditUserProfile/Bio";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RiseLoader from "react-spinners/RiseLoader";
import { isTokenExpired } from "../../../utils/tokenUtils";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#e55812",
  paddingRight: "10px",
};
function MenteeProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [menteeId, setMenteeId] = useState(id);
  const [responseError, setResponseError] = useState("");
  const [color, setColor] = useState("#fff");
  const [loading, setLoading] = useState(false);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission
  const imageBaseUrl = import.meta.env.VITE_REACT_APP_API;
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    bio: "",
    social_twitter: "",
    social_linkedin: "",
    company: "",
    company_title: "",
    website: "",
    expertise: [],
    languages: [],
    industry: [],
    interest: [],
    country: "",
    gender: "",
    profile_image: "",
    userId: "",
  });
  const [userDetails, setUserDetails] = useState({
    profile_picture: null,
    name: "",
    gender: "",
    country_id: "",
    languages: [],
    industry: [],
    interest: [],
    expertise: [],
  });
  const token = localStorage.getItem("access_token");
  const isExpired = isTokenExpired(token);

  useEffect(() => {
    if (isExpired) {
      navigate("/signIn");
    } else {
      const fetchUserProfile = async () => {
        const url = `/auth/users/profile?user_id=${menteeId}`;
        try {
          const user_profile = await axiosInstance.post(url, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (user_profile.data) {
            setProfileData((prevState) => ({
              ...prevState,
              name: user_profile.data.name,
              bio: user_profile.data.user_profile.bio,
              social_twitter: user_profile.data.user_profile.social_twitter,
              social_linkedin: user_profile.data.user_profile.social_linkedin,
              company: user_profile.data.user_profile.company,
              company_title: user_profile.data.user_profile.company_title,
              website: user_profile.data.user_profile.website,
              expertise: user_profile.data.user_profile.expertise,
              languages: user_profile.data.user_profile.languages,
              industry: user_profile.data.user_profile.industry,
              interest: user_profile.data.user_profile.interest,
              country: user_profile.data.user_profile.country,
              gender: user_profile.data.user_profile.gender,
              profile_image: user_profile.data.user_profile.profile_picture,
            }));
          }
        } catch (error) {
          console.error("Error fetching data", error);
        }
      };
      // Call the async function
      fetchUserProfile();
    }
  }, [token, formSubmitted]);

  const handleModelOpen = () => {
    setIsModelOpen(true);
    document.querySelector(".modal-backdrop").style.display = "block";
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const dataSignUp = new FormData();
    dataSignUp.append("name", profileData.name);
    dataSignUp.append("gender", profileData.gender);
    dataSignUp.append("country_id", userDetails.country_id);
    dataSignUp.append("languages_id", userDetails.languages);
    dataSignUp.append("user_id", profileData.userId);
    if (userDetails.profile_picture === File) {
      dataSignUp.append("profile_picture", userDetails.profile_picture);
    }
    try {
      const submitForm = await axiosInstance.post(
        "/auth/users/profile/update_basic_info",
        dataSignUp,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(JSON.stringify(submitForm.data.message));
      setResponseError(submitForm.data.message);
      await delay(1000);
      setLoading(false);
      notify(submitForm.data.message, "success");
      // Set formSubmitted to true to trigger useEffect
      setFormSubmitted(true);
      setIsModelOpen(false);
      document.querySelector(".modal-backdrop").style.display = "none";
      document.querySelector(".modal").style.display = "none";
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log(error.response.data.detail);
        console.log(error.response.status);
        if (error.response.statu === 200) {
          setLoading(false);
          setResponseError(error.response.data.detail);
          notify(error.response.data.detail, "success");
        } else {
          setLoading(false);
          notify(error.response.data.detail, "error");
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
        setResponseError(error.request);
        setLoading(false);
        notify(error.request, "error");
      } else {
        // Something happened in setting up the request that triggered an error
        console.log("Error:", error.message);
        setLoading(false);
        setResponseError(error.message);
        notify(error.request, "error");
      }
    }
  };
  const handleSubmitExperience = async (e) => {
    e.preventDefault();
    setLoading(true);
    const dataEditExpertise = new FormData();
    dataEditExpertise.append("industry", userDetails.industry);
    dataEditExpertise.append("interest", userDetails.interest);
    dataEditExpertise.append("expertise", userDetails.expertise);
    dataEditExpertise.append("user_id", profileData.userId);

    try {
      const submitForm = await axiosInstance.post(
        "/auth/users/profile/update_expertise",
        dataEditExpertise,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(JSON.stringify(submitForm.data.message));
      setResponseError(submitForm.data.message);
      await delay(1000);
      setLoading(false);
      notify(submitForm.data.message, "success");
      // Set formSubmitted to true to trigger useEffect
      setFormSubmitted(true);
      setIsModelOpen(false);
      document.querySelector(".modal-backdrop").style.display = "none";
      document.querySelector(".modal").style.display = "none";
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log(error.response.data.detail);
        console.log(error.response.status);
        if (error.response.statu === 200) {
          setLoading(false);
          setResponseError(error.response.data.detail);
          notify(error.response.data.detail, "success");
        } else {
          setLoading(false);
          notify(error.response.data.detail, "error");
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
        setResponseError(error.request);
        setLoading(false);
        notify(error.request, "error");
      } else {
        // Something happened in setting up the request that triggered an error
        console.log("Error:", error.message);
        setLoading(false);
        setResponseError(error.message);
        notify(error.request, "error");
      }
    }
  };
  const handleSubmitBio = async (e) => {
    e.preventDefault();
    setLoading(true);
    const dataEditBio = new FormData();
    dataEditBio.append("company", profileData.company);
    dataEditBio.append("company_title", profileData.company_title);
    dataEditBio.append("website", profileData.website);
    dataEditBio.append("social_twitter", profileData.social_twitter);
    dataEditBio.append("social_linkedin", profileData.social_linkedin);
    dataEditBio.append("bio", profileData.bio);
    dataEditBio.append("user_id", profileData.userId);

    console.log(Object.fromEntries(dataEditBio.entries()));

    try {
      const submitForm = await axiosInstance.post(
        "/auth/users/profile/update_bio",
        dataEditBio,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(JSON.stringify(submitForm.data.message));
      setResponseError(submitForm.data.message);
      await delay(1000);
      setLoading(false);
      notify(submitForm.data.message, "success");
      // Set formSubmitted to true to trigger useEffect
      setFormSubmitted(true);
      setIsModelOpen(false);
      document.querySelector(".modal-backdrop").style.display = "none";
      document.querySelector(".modal").style.display = "none";
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log(error.response.data.detail);
        console.log(error.response.status);
        if (error.response.statu === 200) {
          setLoading(false);
          setResponseError(error.response.data.detail);
          notify(error.response.data.detail, "success");
        } else {
          setLoading(false);
          notify(error.response.data.detail, "error");
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
        setResponseError(error.request);
        setLoading(false);
        notify(error.request, "error");
      } else {
        // Something happened in setting up the request that triggered an error
        console.log("Error:", error.message);
        setLoading(false);
        setResponseError(error.message);
        notify(error.request, "error");
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
          <div className="v2__content p-0">
            <div className="CoverPicture__Wrapper-sc-d03l4u-0 xttQm">
              <img
                src={CoverImage}
                className="h-100 w-100 img-fit"
                alt="Cover"
              />
            </div>
            <div className="Member__Wrapper-sc-ium6kc-1 ctkkI">
              <div className="Member__Wrapper-sc-7ba904-0 bCxVyC">
                <div className="ProfilePhoto__Wrapper-sc-1h7ebjw-1 bylpUd">
                  <div className="ProfilePhoto__Picture-sc-1h7ebjw-0 ekArRz">
                    <img
                      src={
                        profileData.profile_image
                          ? `${imageBaseUrl}/UserProfiles/${profileData.profile_image}`
                          : ProfileImage
                      }
                      className="img-fit w-100 h-100"
                      alt="Profile"
                    />
                    <a href="/" className="picture__action">
                      <svg
                        fill="none"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6168 3.75204C16.8552 3.51361 17.1383 3.32448 17.4498 3.19545C17.7613 3.06641 18.0952 3 18.4324 3C18.7696 3 19.1035 3.06641 19.415 3.19545C19.7265 3.32448 20.0095 3.51361 20.248 3.75204C20.4864 3.99046 20.6755 4.27351 20.8046 4.58503C20.9336 4.89655 21 5.23043 21 5.56761C21 5.90479 20.9336 6.23868 20.8046 6.55019C20.6755 6.86171 20.4864 7.14476 20.248 7.38319L7.99283 19.6383L3 21L4.36168 16.0072L16.6168 3.75204Z"
                          stroke="var(--black)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="InfoAndActions__Wrapper-sc-2sav9c-2 dTmJfN">
                  <div className="InfoAndActions__Name-sc-2sav9c-0 fNsuqv">
                    <h2 className="sc-fqkvVR jcuFgw flex-wrap mb-1">
                      <span className="mr-1">{profileData.name}</span>
                    </h2>
                    <p className="sc-gsFSXq fJiOdH name__role">
                      {profileData.company_title}
                      <span className="grey-2-text"> at </span>{" "}
                      {profileData.company}
                      {profileData.country ? (
                        <>
                          <span
                            role="img"
                            aria-label={profileData.country.name}
                            title={profileData.country.name}
                          >
                            <img
                              src={`/assets/flags/${profileData.country.code.toLowerCase()}.png`}
                              alt={profileData.country.name}
                            />
                          </span>
                        </>
                      ) : (
                        <>
                          <img src="/assets/flags/rw.png" />
                        </>
                      )}
                    </p>
                    <div className="d-flex align-items-center"></div>
                  </div>
                  <div className="Actions__Wrapper-sc-9xetoo-1 cJXdIa">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      bg="#fff"
                      height="50"
                      color="var(--grey-1)"
                      className="sc-jlZhew klINlq text-truncate py-0 px-3 btn btn-default"
                      border="var(--grey-3)"
                      onClick={handleModelOpen}
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>

              <div className="sc-fUnMCh epgYHv">
                <nav
                  className="Member__TabWrapper-sc-ium6kc-0 tcqie nav nav-tabs"
                  id="myTab"
                  role="tablist"
                >
                  <a
                    className="nav-item nav-link active"
                    id="overview-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#overview"
                    type="button"
                    role="tab"
                    aria-controls="overview"
                    aria-selected="true"
                  >
                    <span>Overview</span>
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="commendations-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#commendations"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    <span>Commendations</span>
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="mentors-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#mentors"
                    type="button"
                    role="tab"
                    aria-controls="mentors"
                    aria-selected="false"
                  >
                    <span>My Mentors</span>
                  </a>
                </nav>
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="overview"
                  role="tabpanel"
                  aria-labelledby="overview-tab"
                >
                  <div className="Layout__Wrapper-sc-1js8544-0 oKXVt">
                    <div style={{ marginBottom: "8rem" }}>
                      <div className="line-height-16 mb-3">
                        <div
                          className="line-height-16 multi-truncate"
                          style={{ WebkitLineClamp: "3", maxHeight: "4.5rem" }}
                        >
                          <p>{profileData.bio}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="sc-gsFSXq fJiOdH font-weight-700 mb-3">
                          Social links
                        </p>
                        <div className="About__Social-sc-tmc6zy-1 lbfmew mb-4">
                          <Link
                            to={profileData.social_linkedin}
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
                            to={profileData.social_twitter}
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
                      </div>
                      <div className="profile_info xYlXD mb-4">
                        <div>
                          <p className="grey-2-text mb-3">Languages</p>
                          <div className="items">
                            {profileData.languages ? (
                              <>
                                {profileData.languages.map((item, index) => (
                                  <div
                                    color="#ce82ff"
                                    className="ExpertiseAndLang__Item-sc-1ltorum-0 kGxxlD"
                                    key={index}
                                  >
                                    <p className="sc-jXbUNg kFsvSZ position-relative font-weight-700">
                                      {item.language_name}
                                    </p>
                                  </div>
                                ))}
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div>
                          <p className="grey-2-text mb-3">Expertise</p>
                          <div className="items">
                            {profileData.languages ? (
                              <>
                                {profileData.expertise.map((item, index) => (
                                  <div
                                    className="ExpertiseAndLang__Item-sc-1ltorum-0 jvssHl"
                                    key={index}
                                  >
                                    <p className="sc-jXbUNg kFsvSZ position-relative font-weight-700">
                                      {item.expertise_name}
                                    </p>
                                  </div>
                                ))}
                              </>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="profile_info xYlXD mb-4">
                        <div>
                          <p className="grey-2-text mb-3">Industry</p>
                          <div className="items">
                            {profileData.industry ? (
                              <>
                                {profileData.industry.map((item, index) => (
                                  <div
                                    className="ExpertiseAndLang__Item-sc-1ltorum-0 jvssHl"
                                    key={index}
                                  >
                                    <p className="sc-jXbUNg kFsvSZ position-relative font-weight-700">
                                      {item.industry_name}
                                    </p>
                                  </div>
                                ))}
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div>
                          <p className="grey-2-text mb-3">Interest</p>
                          <div className="items">
                            {profileData.interes ? (
                              <>
                                {" "}
                                {profileData.interest.map((item, index) => (
                                  <div
                                    color="#ce82ff"
                                    className="ExpertiseAndLang__Item-sc-1ltorum-0 kGxxlD"
                                    key={index}
                                  >
                                    <p className="sc-jXbUNg kFsvSZ position-relative font-weight-700">
                                      {item.category_name}
                                    </p>
                                  </div>
                                ))}
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="Experience__Wrapper-sc-1fzo8v-0 euYruo">
                        <div className="section-header d-flex justify-content-between align-items-center">
                          <p className="sc-gsFSXq fJiOdH font-weight-700">
                            Experience
                          </p>
                          <div
                            color="#fafafa"
                            radius="8"
                            width="28px"
                            height="28px"
                            className="sc-bDpDS kwfMeA cursor-pointer"
                          >
                            <svg
                              fill="none"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.6168 3.75204C16.8552 3.51361 17.1383 3.32448 17.4498 3.19545C17.7613 3.06641 18.0952 3 18.4324 3C18.7696 3 19.1035 3.06641 19.415 3.19545C19.7265 3.32448 20.0095 3.51361 20.248 3.75204C20.4864 3.99046 20.6755 4.27351 20.8046 4.58503C20.9336 4.89655 21 5.23043 21 5.56761C21 5.90479 20.9336 6.23868 20.8046 6.55019C20.6755 6.86171 20.4864 7.14476 20.248 7.38319L7.99283 19.6383L3 21L4.36168 16.0072L16.6168 3.75204Z"
                                stroke="var(--black)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <div
                            type="list"
                            className="InfoCard__Wrapper-sc-1s9rrnh-0 btOVqP"
                          >
                            <div className="main-content">
                              <div className="item__photo">
                                <img
                                  src={IndustrySvg}
                                  alt="industry logo"
                                  className=""
                                />
                              </div>
                              <div className="item__content">
                                <p className="sc-gsFSXq fJiOdH mb-1 font-weight-500">
                                  Software engineer
                                </p>
                                <p className="sc-jXbUNg kFsvSZ">Google</p>
                              </div>
                              <div className="item__badge">Present</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-1">
                      <div className="sc-bdOgaJ kKdhCQ">
                        <div className="d-flex justify-content-between mb-4">
                          <h3 className="sc-dcJsrY eXeELN title">
                            Community statistics
                          </h3>
                        </div>
                        <div
                          className="sc-eldPxv jznVFK mt-4 overflow-auto pb-2"
                          width="1440"
                        >
                          <div className="d-flex align-items-center">
                            <div className="icon-wrapper muted-blue-bg">
                              <svg
                                fill="none"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.231 2.71764C17.3059 1.57646 19.6382 0.985092 22.0061 0.999779C22.556 1.00319 22.9999 1.4499 22.9999 1.99976C22.9999 4.81006 22.2116 9.70747 17.1476 13.4164C17.2328 13.774 17.3297 14.2446 17.3967 14.7647C17.4699 15.3321 17.511 15.9852 17.4513 16.6279C17.3923 17.2619 17.2287 17.9597 16.832 18.5547L16.8311 18.556C16.1522 19.5709 14.8717 20.1594 13.9772 20.4838C13.4965 20.6582 13.0524 20.7818 12.7293 20.862C12.4857 20.9224 12.307 20.9591 12.226 20.9749C11.9178 21.0335 11.6037 20.9719 11.3591 20.7677C11.1315 20.5777 10.9999 20.2965 10.9999 20V15.414L8.58599 13H3.99995C3.70347 13 3.42229 12.8685 3.23229 12.6409C3.04229 12.4133 2.96308 12.1131 3.01603 11.8214C3.04975 11.6365 3.09272 11.453 3.13795 11.2707C3.21811 10.9475 3.34178 10.5035 3.51613 10.0228C3.84059 9.12829 4.42901 7.84779 5.44392 7.16885L5.44525 7.16797C6.04024 6.77131 6.73803 6.60762 7.37209 6.54869C8.01477 6.48895 8.66789 6.5301 9.23527 6.60322C9.76079 6.67095 10.2358 6.76921 10.5947 6.85508C11.8056 5.1461 13.3898 3.73032 15.231 2.71764Z"
                                  fill="#17C2FF"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.0031 14.9883C5.21994 14.9641 4.45542 15.2299 3.85615 15.7346C3.32938 16.1774 2.94259 16.7872 2.65611 17.3738C2.36392 17.9719 2.14188 18.6175 1.97602 19.1973C1.80925 19.7804 1.69334 20.3181 1.61908 20.7092C1.58181 20.9055 1.5547 21.0666 1.53671 21.1801C1.52694 21.2417 1.51778 21.3035 1.50905 21.3653L1.50883 21.3669C1.46754 21.6758 1.57252 21.9866 1.79285 22.2069C2.01318 22.4273 2.32448 22.5322 2.63332 22.4909C2.69552 22.4821 2.75765 22.4729 2.81969 22.4631C2.93322 22.4451 3.0943 22.418 3.29056 22.3807C3.6817 22.3065 4.21944 22.1905 4.80247 22.0238C5.38232 21.8579 6.02785 21.6359 6.62604 21.3437C7.21235 21.0573 7.82202 20.6707 8.26469 20.1442C9.28572 18.935 9.30096 17.0516 8.11255 15.8782L8.1004 15.8664C7.53341 15.3253 6.78653 15.0126 6.0031 14.9883Z"
                                  fill="#17C2FF"
                                ></path>
                              </svg>
                            </div>
                            <div>
                              <p className="sc-gsFSXq fJiOdH font-weight-500">
                                0 mins
                              </p>
                              <p className="sc-jXbUNg kFsvSZ grey-2-text">
                                Total learning time
                              </p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="icon-wrapper muted-red-bg">
                              <svg
                                fill="none"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.5 2C5.5 1.44772 5.05228 1 4.5 1C3.94772 1 3.5 1.44772 3.5 2V3.5H2C1.44772 3.5 1 3.94772 1 4.5C1 5.05228 1.44772 5.5 2 5.5H3.5V7C3.5 7.55228 3.94772 8 4.5 8C5.05228 8 5.5 7.55228 5.5 7V5.5H7C7.55228 5.5 8 5.05228 8 4.5C8 3.94772 7.55228 3.5 7 3.5H5.5V2Z"
                                  fill="var(--danger)"
                                ></path>
                                <path
                                  d="M5.5 17C5.5 16.4477 5.05228 16 4.5 16C3.94772 16 3.5 16.4477 3.5 17V18.5H2C1.44772 18.5 1 18.9477 1 19.5C1 20.0523 1.44772 20.5 2 20.5H3.5V22C3.5 22.5523 3.94772 23 4.5 23C5.05228 23 5.5 22.5523 5.5 22V20.5H7C7.55228 20.5 8 20.0523 8 19.5C8 18.9477 7.55228 18.5 7 18.5H5.5V17Z"
                                  fill="var(--danger)"
                                ></path>
                                <path
                                  d="M13.9333 2.64102C13.7848 2.25483 13.4138 2 13 2C12.5862 2 12.2152 2.25483 12.0667 2.64102L10.3325 7.14988C10.0321 7.93093 9.93768 8.156 9.80855 8.33759C9.67899 8.5198 9.5198 8.67899 9.33759 8.80855C9.156 8.93768 8.93093 9.03207 8.14988 9.33248L3.64102 11.0667C3.25483 11.2152 3 11.5862 3 12C3 12.4138 3.25483 12.7848 3.64102 12.9333L8.14988 14.6675C8.93093 14.9679 9.156 15.0623 9.33759 15.1914C9.5198 15.321 9.67899 15.4802 9.80855 15.6624C9.93768 15.844 10.0321 16.0691 10.3325 16.8501L12.0667 21.359C12.2152 21.7452 12.5862 22 13 22C13.4138 22 13.7848 21.7452 13.9333 21.359L15.6675 16.8501C15.9679 16.0691 16.0623 15.844 16.1914 15.6624C16.321 15.4802 16.4802 15.321 16.6624 15.1914C16.844 15.0623 17.0691 14.9679 17.8501 14.6675L22.359 12.9333C22.7452 12.7848 23 12.4138 23 12C23 11.5862 22.7452 11.2152 22.359 11.0667L17.8501 9.33248C17.0691 9.03207 16.844 8.93768 16.6624 8.80855C16.4802 8.67899 16.321 8.5198 16.1914 8.33759C16.0623 8.156 15.9679 7.93093 15.6675 7.14988L13.9333 2.64102Z"
                                  fill="var(--danger)"
                                ></path>
                              </svg>
                            </div>
                            <div>
                              <p className="sc-gsFSXq fJiOdH font-weight-500">
                                0
                              </p>
                              <p className="sc-jXbUNg kFsvSZ grey-2-text">
                                Sessions completed
                              </p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="icon-wrapper muted-orange-bg">
                              <svg
                                fill="none"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M22.7071 15.7929C23.0976 16.1834 23.0976 16.8166 22.7071 17.2071L18.2071 21.7071C17.8166 22.0976 17.1834 22.0976 16.7929 21.7071L14.7929 19.7071C14.4024 19.3166 14.4024 18.6834 14.7929 18.2929C15.1834 17.9024 15.8166 17.9024 16.2071 18.2929L17.5 19.5858L21.2929 15.7929C21.6834 15.4024 22.3166 15.4024 22.7071 15.7929Z"
                                  fill="var(--warning)"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2V3H9V2C9 1.44772 8.55229 1 8 1C7.44772 1 7 1.44772 7 2V3.00163C6.52454 3.00489 6.10898 3.01472 5.74818 3.04419C5.18608 3.09012 4.66938 3.18868 4.18404 3.43597C3.43139 3.81947 2.81947 4.43139 2.43598 5.18404C2.18868 5.66937 2.09012 6.18608 2.0442 6.74817C1.99998 7.28936 1.99999 7.95373 2 8.75869V17.2413C1.99999 18.0463 1.99998 18.7106 2.0442 19.2518C2.09012 19.8139 2.18868 20.3306 2.43598 20.816C2.81947 21.5686 3.43139 22.1805 4.18404 22.564C4.66938 22.8113 5.18608 22.9099 5.74818 22.9558C6.28937 23 6.95372 23 7.75868 23H13.326C13.9318 23 14.2347 23 14.375 22.8802C14.4967 22.7763 14.5613 22.6203 14.5487 22.4608C14.5342 22.2769 14.32 22.0627 13.8917 21.6343L13.3787 21.1213C12.2071 19.9497 12.2071 18.0503 13.3787 16.8787C14.5095 15.7478 16.3186 15.7085 17.4966 16.7608L19.8787 14.3787C20.2615 13.9959 20.7219 13.7382 21.2093 13.6055C21.5544 13.5116 21.727 13.4647 21.8055 13.4041C21.8891 13.3396 21.9219 13.2966 21.9622 13.199C22 13.1074 22 12.9716 22 12.7V8.75868C22 7.95372 22 7.28936 21.9558 6.74817C21.9099 6.18608 21.8113 5.66937 21.564 5.18404C21.1805 4.43139 20.5686 3.81947 19.816 3.43597C19.3306 3.18868 18.8139 3.09012 18.2518 3.04419C17.891 3.01472 17.4755 3.00489 17 3.00163V2ZM7 6V5.00176C6.55447 5.00489 6.20463 5.01357 5.91104 5.03755C5.47262 5.07337 5.24842 5.1383 5.09202 5.21799C4.7157 5.40973 4.40974 5.7157 4.21799 6.09202C4.1383 6.24842 4.07337 6.47262 4.03755 6.91104C4.00078 7.36113 4 7.94342 4 8.8V9H20V8.8C20 7.94342 19.9992 7.36113 19.9624 6.91104C19.9266 6.47262 19.8617 6.24842 19.782 6.09202C19.5903 5.7157 19.2843 5.40973 18.908 5.21799C18.7516 5.1383 18.5274 5.07337 18.089 5.03755C17.7954 5.01357 17.4455 5.00489 17 5.00176V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V5H9V6C9 6.55228 8.55229 7 8 7C7.44772 7 7 6.55228 7 6Z"
                                  fill="var(--warning)"
                                ></path>
                              </svg>
                            </div>
                            <div>
                              <p className="sc-gsFSXq fJiOdH font-weight-500">
                                0%
                              </p>
                              <p className="sc-jXbUNg kFsvSZ grey-2-text">
                                Average attendance
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9 12V9M9 6H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                    stroke="var(--grey-2)"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="icon-wrapper transparent-green-bg">
                              <svg
                                fill="none"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.992 10.5455C16.1473 8.34649 14.001 6.79594 11.3331 7.29093C8.38389 7.83815 6.45042 10.5187 6.85266 13.4356C6.99659 14.4793 7.44958 16.151 7.91427 17.7148C8.38612 19.3026 8.89469 20.8594 9.17745 21.7096C9.1796 21.716 9.18178 21.7226 9.18401 21.7293C9.21637 21.8268 9.25663 21.948 9.30133 22.0536C9.35482 22.1799 9.4397 22.3476 9.59039 22.5072C9.79047 22.7191 10.0509 22.8694 10.3344 22.9368C10.548 22.9875 10.7357 22.9771 10.8718 22.9603C10.9856 22.9462 11.1107 22.9205 11.2113 22.8998C11.2182 22.8984 11.225 22.897 11.2317 22.8956C12.1093 22.7154 13.7118 22.3774 15.3229 21.9921C16.9095 21.6127 18.5837 21.1691 19.5595 20.7719C22.2734 19.6673 23.6886 16.6567 22.6361 13.8066C21.698 11.2661 19.3167 10.176 16.992 10.5455Z"
                                  fill="#66D554"
                                ></path>
                                <path
                                  d="M14.5952 1.49282C12.1355 0.359819 9.68086 1.27275 8.29831 3.1779C6.1461 2.22022 3.53199 2.64153 1.99558 4.87797C0.29708 7.35035 0.825343 10.613 3.17234 12.3911C3.59193 12.709 4.17918 13.0846 4.84321 13.4791C4.4244 9.58226 7.05667 6.05027 10.9683 5.3245C13.773 4.8041 16.1321 5.90788 17.6302 7.72748C18.2268 5.25389 17.0637 2.62986 14.5952 1.49282Z"
                                  fill="#66D554"
                                ></path>
                              </svg>
                            </div>
                            <div>
                              <p className="sc-gsFSXq fJiOdH font-weight-500">
                                3
                              </p>
                              <p className="sc-jXbUNg kFsvSZ grey-2-text">
                                Karma Points
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9 12V9M9 6H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                    stroke="var(--grey-2)"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="commendations"
                  role="tabpanel"
                  aria-labelledby="commendations-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="mentors"
                  role="tabpanel"
                  aria-labelledby="mentors-tab"
                >
                  ...
                </div>
              </div>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
                  {isModelOpen && (
                    <>
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Update your profile details
                          </h5>
                          <button
                            type="button"
                            className="btn-close dMqjor"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="sc-fUnMCh epgYHv">
                            <nav
                              className="EditProfileModal__TabWrapper-sc-oe3pyj-1 ddwiUs nav nav-tabs"
                              id="myTab"
                              role="tablist"
                            >
                              <a
                                className="nav-item nav-link active"
                                id="basic_info-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#basic_info"
                                type="button"
                                role="tab"
                                aria-controls="basic_info"
                                aria-selected="true"
                              >
                                <span>Basic Info</span>
                              </a>
                              <a
                                className="nav-item nav-link"
                                id="experience-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#experience"
                                type="button"
                                role="tab"
                                aria-controls="experience"
                                aria-selected="false"
                              >
                                <span>Experience</span>
                              </a>
                              <a
                                className="nav-item nav-link"
                                id="bio-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#bio"
                                type="button"
                                role="tab"
                                aria-controls="bio"
                                aria-selected="false"
                              >
                                <span>Bio</span>
                              </a>
                            </nav>
                          </div>
                          <div className="tab-content" id="myTabContent">
                            <div
                              className="tab-pane fade show active"
                              id="basic_info"
                              role="tabpanel"
                              aria-labelledby="basic_info-tab"
                            >
                              <form
                                className="py-lg mx-auto"
                                // style={{ maxWidth: "382px" }}
                                onSubmit={handleSubmit}
                              >
                                <UserInfo
                                  profileData={profileData}
                                  userDetails={userDetails}
                                  setProfileData={setProfileData}
                                  setUserDetails={setUserDetails}
                                />
                                <button
                                  className="sc-jlZhew cKRinY text-truncate px-5 btn--default btn btn-default"
                                  type="submit"
                                  style={{ width: "100%" }}
                                >
                                  {loading ? (
                                    <RiseLoader
                                      color={color}
                                      loading={loading}
                                      cssOverride={override}
                                      size={10}
                                      aria-label="Loading Spinner"
                                      data-testid="loader"
                                    />
                                  ) : (
                                    "Update"
                                  )}
                                </button>
                              </form>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="experience"
                              role="tabpanel"
                              aria-labelledby="experience-tab"
                            >
                              <form
                                className="py-lg mx-auto"
                                // style={{ maxWidth: "382px" }}
                                onSubmit={handleSubmitExperience}
                              >
                                <Expertise
                                  profileData={profileData}
                                  userDetails={userDetails}
                                  setProfileData={setProfileData}
                                  setUserDetails={setUserDetails}
                                />
                                <button
                                  className="sc-jlZhew cKRinY text-truncate px-5 btn--default btn btn-default"
                                  type="submit"
                                  style={{ width: "100%" }}
                                >
                                  {loading ? (
                                    <RiseLoader
                                      color={color}
                                      loading={loading}
                                      cssOverride={override}
                                      size={10}
                                      aria-label="Loading Spinner"
                                      data-testid="loader"
                                    />
                                  ) : (
                                    "Update"
                                  )}
                                </button>
                              </form>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="bio"
                              role="tabpanel"
                              aria-labelledby="bio-tab"
                            >
                              <form
                                className="py-lg mx-auto"
                                // style={{ maxWidth: "382px" }}
                                onSubmit={handleSubmitBio}
                              >
                                <Bio
                                  profileData={profileData}
                                  userDetails={userDetails}
                                  setProfileData={setProfileData}
                                  setUserDetails={setUserDetails}
                                />
                                <button
                                  className="sc-jlZhew cKRinY text-truncate px-5 btn--default btn btn-default"
                                  type="submit"
                                  style={{ width: "100%" }}
                                >
                                  {loading ? (
                                    <RiseLoader
                                      color={color}
                                      loading={loading}
                                      cssOverride={override}
                                      size={10}
                                      aria-label="Loading Spinner"
                                      data-testid="loader"
                                    />
                                  ) : (
                                    "Update"
                                  )}
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary dMqjof"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenteeProfile;
