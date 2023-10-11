import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CoverImage from "../../assets/images/coverpic.jpg";
import ProfileImage from "../../assets/images/profilepic.jpg";
import "../MenteeProfile/MenteeProfile.css";
import IndustrySvg from "../../assets/images/industry.svg";
import SideMenu from "../../Pages/Dashboard/Mentee/SideMenu";
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
function MenteeProfile(props) {
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
  const [userRole, setUserRole] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("userId")
  );
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
          const response = await axiosInstance.post(url, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.status == 200) {
            setProfileData((prevState) => ({
              ...prevState,
              name: response.data.name,
              bio: response.data.user_profile[0].bio,
              social_twitter: response.data.user_profile[0].social_twitter,
              social_linkedin: response.data.user_profile[0].social_linkedin,
              company: response.data.user_profile[0].company,
              company_title: response.data.user_profile[0].company_title,
              website: response.data.user_profile[0].website,
              expertise: response.data.user_profile[0].expertise,
              languages: response.data.user_profile[0].languages,
              industry: response.data.user_profile[0].industry,
              interest: response.data.user_profile[0].interest,
              country: response.data.user_profile[0].country,
              gender: response.data.user_profile[0].gender,
              profile_image: response.data.user_profile[0].profile_picture,
            }));
            const user_role = localStorage.getItem("user_role");
            setUserRole(user_role);
            console.log(response.data.user_profile[0].interest);
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
            "Content-Type": "application/x-www-form-urlencoded",
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
            accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
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
                    {loggedInUser == id ? (
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
                    ) : null}
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
                  <div
                    className="Layout__Wrapper-sc-1js8544-0 oKXVt"
                    id={userRole == "mentee" && "mentor_side"}
                  >
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
                              {profileData.expertise.map((item, index) => (
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
                            <p className="sc-kAyceB cCBfKf grey-2-text">
                              Industry
                            </p>
                            <div className="items">
                              {profileData.industry.map((item, index) => (
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
                              {profileData.languages.map((item, index) => (
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
                            <p className="sc-kAyceB cCBfKf grey-2-text">
                              Interest
                            </p>
                            <div className="items">
                              {profileData.interest.map((item, index) => (
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
