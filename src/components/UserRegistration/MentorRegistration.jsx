import React, { useState, useEffect, CSSProperties } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./UserRegistration.css";
import PersonalInfo from "./Mentor/PersonalInfo";
import MentorshipProfile from "./Mentor/MentorshipProfile"
import Bio from "./Mentee/Bio";
import Credentials from "./Mentee/Credentials";
import axiosInstance from "../../axiosInstance";
import RiseLoader from "react-spinners/RiseLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#e55812",
  paddingRight: "10px",
};

function UserRegistration() {
  const navigate = useNavigate();
  // const steps = [<MentorshipProfile />];
  const steps = [<PersonalInfo />, <Bio />,<MentorshipProfile />, <Credentials />];
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#fff");
  const [responseError, setResponseError] = useState("")
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  const location = useLocation();
  // setState to track current step
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState([
    true,
    true,
    true,
    true,
  ]);

  // Fetch Api for user registration
  const [countryData, setCountryData] = useState([]);
  const [languageData, setLanguageData] = useState([]);
  const [industryData, setIndustryData] = useState([]);
  const [interestData, setInterestData] = useState([]);
  const [expertiseData, setExpertiseData] = useState([]);
  const [targetMenteeData, setTargetMenteeData] = useState([]);


  const [userDetails, setUserDetails] = useState({
    profile_picture: null,
    name: "",
    gender: "",
    country_id: "",
    languages: [],
    industry: [],
    interest: [],
    expertise: [],
    target_mentee: [],
    company: "",
    company_title: "",
    bio: "",
    password: "",
    email: "",
    phone_number: "",
    social_twitter: "",
    social_linkedin: "",
    level_of_experience: "",
    relationship_preferences: "",
    role: "",
    website: "",
  });

  useEffect(() => {
    const isCurrentStepButtonDisabled =
      (currentStep === 1 &&
        (userDetails.profile_picture === null ||
          userDetails.name === "" ||
          userDetails.gender === "" ||
          userDetails.country_id === "" ||
          userDetails.languages === "")) ||
      (currentStep === 2 &&
        (userDetails.industry === "" ||
          userDetails.interest === "" ||
          userDetails.expertise === "")) ||
      (currentStep === 3 &&
        (userDetails.bio === "" ||
          userDetails.bio.length < 100 ||
          userDetails.company === "" ||
          userDetails.company_title === "")) ||
      (currentStep === 4 &&
        (userDetails.email === "" ||
          userDetails.phone_number === "" ||
          userDetails.password === "")) ||
      // (currentStep === 2 && expertiseInputIsEmpty) || // Add similar checks for other steps
      // ... Add similar checks for other steps

      setIsButtonDisabled((prevDisabledStatus) => {
        const newDisabledStatus = [...prevDisabledStatus];
        newDisabledStatus[currentStep - 1] = isCurrentStepButtonDisabled;
        return newDisabledStatus;
      });
  }, [
    currentStep,
    userDetails.profile_picture,
    userDetails.name,
    userDetails.gender,
    userDetails.country_id,
    userDetails.languages,
    userDetails.industry,
    userDetails.interest,
    userDetails.expertise,
    userDetails.company,
    userDetails.company_title,
    userDetails.email,
    userDetails.phone_number,
    userDetails.password,
    userDetails.bio /* Add other dependencies */,
  ]);

  function handleNextSteps() {
    // event.preventDefault();
    currentStep === steps.length
      ? setCompleted(true)
      : setCurrentStep((prevStep) => prevStep + 1);
  }
  function handlePrevSteps() {
    // event.preventDefault();
    setCurrentStep((prevStep) => prevStep - 1);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countryApi = await axiosInstance.get("country/list");
        setCountryData(countryApi.data);

        const languageApi = await axiosInstance.get("languages/list");
        setLanguageData(languageApi.data);

        const industryApi = await axiosInstance.get("industry/list");
        setIndustryData(industryApi.data);

        const interestApi = await axiosInstance.get("interests/list");
        setInterestData(interestApi.data);

        const expertiseApi = await axiosInstance.get("expertise/list");
        setExpertiseData(expertiseApi.data);

        const targetMenteeApi = await axiosInstance.get("targetmentees/list");
        setTargetMenteeData(targetMenteeApi.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formElement = e.target; // Get the form element
    const dataForm = new FormData(formElement);

    dataForm.append("languages_id", JSON.stringify(userDetails.languages));
    dataForm.append("industry_id", JSON.stringify(userDetails.industry));
    dataForm.append("expertise_id", JSON.stringify(userDetails.expertise));
    dataForm.append("interest_id", JSON.stringify(userDetails.interest));

    // console.log(Object.fromEntries(dataForm.entries()));
    const profilePictureFile = dataForm.get("profile_picture");
    const profilePictureFileName = profilePictureFile.name;
    
    const dataSignUp = new FormData();
    dataSignUp.append("name", userDetails.name);
    dataSignUp.append("email", userDetails.email);
    dataSignUp.append("username", userDetails.email);
    dataSignUp.append("password", userDetails.password);
    dataSignUp.append("role", location.state.userRole);
    dataSignUp.append("gender", userDetails.gender);
    dataSignUp.append("website", userDetails.company);
    dataSignUp.append("company", userDetails.company);
    dataSignUp.append("company_title", userDetails.company_title);
    dataSignUp.append("social_twitter", userDetails.social_twitter);
    dataSignUp.append("social_linkedin", userDetails.social_linkedin);
    dataSignUp.append("level_of_experience", userDetails.level_of_experience);
    dataSignUp.append("relationship_preferences", userDetails.relationship_preferences);
    dataSignUp.append("bio", userDetails.bio);
    dataSignUp.append("phone_number", userDetails.phone_number);
    dataSignUp.append("profile_picture", userDetails.profile_picture);
    dataSignUp.append("country_id", userDetails.country_id);
    dataSignUp.append("expertise_id", userDetails.expertise);
    dataSignUp.append("languages_id", userDetails.languages);
    dataSignUp.append("industry_id", userDetails.industry);
    dataSignUp.append("interest_id", userDetails.interest);
    dataSignUp.append("target_mentee_id", userDetails.target_mentee);

    // console.log(signUpData)
    console.log(Object.fromEntries(dataSignUp.entries()));
    
    try {
      const submitForm = await axiosInstance.post(
        "/auth/MentorProfile/Register",
        dataSignUp,
        {
          headers: {
            // "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(JSON.stringify(submitForm.data.message));
      setResponseError(submitForm.data.message)
      await delay(1000);
      notify(submitForm.data.message, "success");
      setLoading(false);
      // await delay(1000);
      navigate("/thankyou", {
        state: {
          name: userDetails.name,
        },
      });
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log(error.response.data.detail);
        console.log(error.response.status);
        if (error.response.statu === 201){
          setLoading(false);
          setResponseError(error.response.data.detail)
          notify(error.response.data.detail, "success");
        }else{
          setLoading(false);
          notify(error.response.data.detail, "error");
        }
        
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
        setResponseError(error.request)
        setLoading(false);
        notify(error.request, "error");
      } else {
        // Something happened in setting up the request that triggered an error
        console.log("Error:", error.message);
        setLoading(false);
        setResponseError(error.message)
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
      <div
        height="10px"
        className={`epBPgy progress_track${currentStep}`}
      ></div>
      <div className="h-100">
        <div width="1440" className="sc-iLWXdy bTdCxR">
          <div width="1440" className="sc-DWsrX bslUKk">
            <ToastContainer autoClose={false} />
            <form
              className="py-lg-5 mx-auto"
              style={{ maxWidth: "382px" }}
              onSubmit={handleSubmit}
            >
              {steps?.map((item, index) => (
                <div
                  key={index}
                  className={
                    currentStep === index + 1 ? "active" : "not_active"
                  }
                >
                  {React.cloneElement(item, {
                    userDetails, // Pass the userDetails prop
                    setUserDetails, // Pass the setUserDetails function
                    countryData,
                    languageData,
                    industryData,
                    interestData,
                    expertiseData,
                    targetMenteeData,
                    preserveState: true,
                  })}
                </div>
              ))}
              <div className="d-flex align-items-center justify-content-between mt-32">
                <div className="d-flex align-items-center">
                  <button
                    type="button" // Set the type to "button"
                    className="d-flex align-items-center font-weight-700 grey-1-text btn text-decoration-none mr-28"
                    onClick={handlePrevSteps}
                    disabled={currentStep === 1}
                  >
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
                    <span className="ml-2">Back</span>
                  </button>
                </div>
                <button
                  className="sc-jlZhew cKRinY text-truncate px-5 btn--default btn btn-default"
                  onClick={handleNextSteps}
                  disabled={isButtonDisabled[currentStep - 1]}
                  {...(currentStep === steps.length
                    ? { type: "submit" }
                    : { type: "button" })}
                >
                  <RiseLoader
                    color={color}
                    loading={loading}
                    cssOverride={override}
                    size={10}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                  {currentStep === steps.length ? "Submit" : "Continue"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegistration;
