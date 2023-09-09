import React, { useEffect, useState, useMemo } from "react";
import Select from "react-select";
import axiosInstance from "../../axiosInstance";

function UserInfo(props) {
  const imageBaseUrl = import.meta.env.VITE_REACT_APP_API;
  // Fetch Api for user registration
  const [countryData, setCountryData] = useState([]);
  const [languageData, setLanguageData] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  // Fetch country and language data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const countryApi = await axiosInstance.get("country/list");
        const languageApi = await axiosInstance.get("languages/list");
        setCountryData(countryApi.data);
        setLanguageData(languageApi.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // Map saved language data to options for Select component
  const savedLanguageOptions = useMemo(() => {
    return props.profileData.languages.map((language) => ({
      value: language.id,
      label: language.language_name,
    }));
  }, [props.profileData.languages]);

  // Set the initial state of selectedLanguages with savedLanguageOptions
  useEffect(() => {
    setSelectedLanguages(savedLanguageOptions);
  }, [savedLanguageOptions]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "profile_picture") {
      // props.setProfileData({
      //   ...props.profileData,
      //   profile_image: e.target.files[0],
      // });
      props.setUserDetails({
        ...props.userDetails,
        profile_picture: e.target.files[0],
      });
    } else if (name === "country_id") {
      props.setUserDetails({
        ...props.userDetails,
        country_id: value,
      });
    } else {
      props.setProfileData({
        ...props.profileData,
        [name]: value,
      });
    }
  };
  const handleLanguageChange = (selectedOption) => {
    setSelectedLanguages(selectedOption);
    const selectedLanguages = selectedOption.map((option) => option.value);
    props.setUserDetails({
      ...props.userDetails,
      languages: selectedLanguages,
    });
  };
  const shouldComponentUpdate = () => {
    const { countryData, languageData } = this.state;
    return (
      countryData !== props.profileData.country ||
      languageData !== props.profileData.languages
    );
  };
  return (
    <>
      <div className="form-group">
        <label className="form-label" htmlFor="profile_picture">
          Upload profile photo
        </label>
        <div className="d-flex align-items-center">
          <div>
            <div className="sc-enkILE hKKIbj cursor-pointer grey-3-bg mb-2">
              {props.userDetails.profile_picture ? (
                <img
                  src={URL.createObjectURL(props.userDetails.profile_picture)}
                  alt="Profile"
                  className="profile-image"
                />
              ) : (
                <img
                  src={`${imageBaseUrl}/UserProfiles/${props.profileData.profile_image}`}
                  alt="Profile"
                  className="profile-image"
                />
              )}
            </div>
          </div>
          <div className="ml-3">
            <label
              htmlFor="profile_picture"
              className="teal-text text-decoration-none font-weight-600"
              style={{ cursor: "pointer" }}
            >
              Update file
            </label>
            <p className="sc-jXbUNg kFsvSZ grey-2-text mt-1">
              Make sure the file is below 2mb
            </p>
          </div>
        </div>

        <input
          name="profile_picture"
          type="file"
          id="profile_picture"
          className="d-none"
          accept="image/*"
          onChange={handleChange} /* Handle value change */
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="name">
          Your full name
        </label>
        <input
          name="name"
          placeholder="First and last name"
          type="text"
          id="name"
          className="form-control"
          value={props.profileData.name} /* Use state for value */
          onChange={handleChange} /* Handle value change */
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="gender">
          What gender do you identify as?
        </label>
        <div className="position-relative d-flex align-items-center">
          <div className="sc-ikkxIA borKZa form-control px-0 --border-none css-b62m3t-container">
            <div className="css-co5psr-control">
              <div className="css-a3yyxf">
                <select
                  name="gender"
                  value={props.userDetails.gender} /* Use state for value */
                  onChange={handleChange} /* Handle vaxlue change */
                >
                  <option value={props.profileData.gender} selected>
                    {props.profileData.gender}
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="country_iso">
          Which country do you live in?
        </label>
        <div className="position-relative d-flex align-items-center">
          <div className="sc-ikkxIA borKZa form-control px-0 --border-none css-b62m3t-container">
            <div className="css-co5psr-control">
              <div className="css-a3yyxf">
                <select
                  name="country_id"
                  value={props.userDetails.country_id} /* Use state for value */
                  onChange={handleChange} /* Handle vaxlue change */
                >
                  <option value={props.profileData.country.id} selected>
                    {props.profileData.country.name}
                  </option>
                  {countryData.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="country_iso">
          Languages spoken
        </label>
        <Select
          name="languages_id"
          className="basic-multi-select"
          isMulti
          options={languageData.map((language) => ({
            value: language.id,
            label: language.language_name,
          }))}
          value={selectedLanguages}
          onChange={handleLanguageChange}
        />
      </div>
    </>
  );
}
export default UserInfo;
