import React, { useEffect, useState, useMemo} from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import PropTypes from "prop-types";
import axiosInstance from "../../axiosInstance";

function Expertise(props) {
  const { userDetails, setUserDetails } = props;
  const {
    industry,
    interest,
    expertise,
    social_twitter,
    social_linkedin,
  } = userDetails;
  // Fetch Api for user registration
  const [countryData, setCountryData] = useState([]);
  const [languageData, setLanguageData] = useState([]);
  const [industryData, setIndustryData] = useState([]);
  const [interestData, setInterestData] = useState([]);
  const [expertiseData, setExpertiseData] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState([]);
  const [selectedExpertise, setSelectedExpertise] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [countryApi, languageApi, industryApi, interestApi, expertiseApi] =
          await Promise.all([
            axiosInstance.get("country/list"),
            axiosInstance.get("languages/list"),
            axiosInstance.get("industry/list"),
            axiosInstance.get("interests/list"),
            axiosInstance.get("expertise/list"),
          ]);

        setCountryData(countryApi.data);
        setLanguageData(languageApi.data);
        setIndustryData(industryApi.data);
        setInterestData(interestApi.data);
        setExpertiseData(expertiseApi.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // Map saved language data to options for Select component
  const savedIndustryOptions = useMemo(() => {
    return props.profileData.industry.map((industry) => ({
      value: industry.id,
      label: industry.industry_name,
    }));
  }, []);

    // Map saved language data to options for Select component
    const savedInterestOptions = useMemo(() => {
      return props.profileData.interest.map((interest) => ({
        value: interest.id,
        label: interest.category_name,
      }));
    }, []);

      // Map saved language data to options for Select component
    const savedExpertiseOptions = useMemo(() => {
      return props.profileData.expertise.map((expertise) => ({
        value: expertise.id,
        label: expertise.expertise_name,
      }));
    }, []);

    


   // Set the initial state of selectedLanguages with savedLanguageOptions
   useEffect(() => {
    setSelectedIndustries(savedIndustryOptions);
    setSelectedInterest(savedInterestOptions);
    setSelectedExpertise(savedExpertiseOptions);
  }, [savedIndustryOptions, savedInterestOptions, savedExpertiseOptions]);


  const handleIndustryChange = (selectedOption) => {
    setSelectedIndustries(selectedOption);
    const selectedIndustry = selectedOption.map((option) => option.value);
    setUserDetails({
      ...userDetails,
      industry: selectedIndustry,
    });
  };

  const handleInterestChange = (selectedOption) => {
    setSelectedInterest(selectedOption);
    const selectedInterest = selectedOption.map((option) => option.value);
    setUserDetails({
      ...userDetails,
      interest: selectedInterest,
    });
  };

  const handleExpertise = (selectedOption) => {
    setSelectedExpertise(selectedOption);
    const selectedExpertise = selectedOption.map((option) => option.value);
    setUserDetails({
      ...userDetails,
      expertise: selectedExpertise,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  return (
    <>
      <div className="form-group">
        <label className="form-label" htmlFor="expertise">
          What’s your Industry?
        </label>
        <Select
          name="industry_id"
          isMulti
          options={industryData.map((industry) => ({
            value: industry.id,
            label: industry.industry_name,
          }))}
          value={selectedIndustries}
          onChange={handleIndustryChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="expertise">
          What’s your Interest?
        </label>
        <Select
          name="interest_id"
          isMulti
          options={interestData.map((interest) => ({
            value: interest.id,
            label: interest.category_name,
          }))}
          value={selectedInterest}
          onChange={handleInterestChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="expertise">
          What’s your Expertise?
        </label>
        <Select
          isMulti
          name="expertise_id"
          options={expertiseData.map((expertise) => ({
            value: expertise.id,
            label: expertise.expertise_name,
          }))}
          value={selectedExpertise}
          onChange={handleExpertise}
        />
      </div>
    </>
  );
}
Expertise.propTypes = {
  userDetails: PropTypes.object,
  setUserDetails: PropTypes.func.isRequired,
  industryData: PropTypes.array,
  interestData: PropTypes.array,
  expertiseData: PropTypes.array,
};
export default Expertise;
