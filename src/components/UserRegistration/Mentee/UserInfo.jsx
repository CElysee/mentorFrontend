import React, { useEffect, useState } from "react";
import Select from "react-select";
import PropTypes from "prop-types";

function UserInfo(props) {
  const {
    userDetails,
    setUserDetails,
    countryData,
    languageData,
  } = props;

  UserInfo.propTypes = {
    userDetails: PropTypes.object,
    setUserDetails: PropTypes.func.isRequired,
    countryData: PropTypes.array,
    languageData: PropTypes.array,
  };

  const languageOptions = languageData.map((language) => ({
    value: language.id,
    label: language.language_name,
  }));

  const countryOptions = countryData.map((country) => ({
    value: country.id,
    label: country.name,
  }));

  const { name, gender, profile_picture, languages} = userDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "profile_picture") {
      setUserDetails({
        ...userDetails,
        profile_picture: e.target.files[0],
      });
    }
     else {
      setUserDetails({
        ...userDetails,
        [name]: value,
      });
    }
  };
  const handleLanguageChange = (selectedOptions) => {
    const selectedLanguages = selectedOptions.map(option => option.value);
    setUserDetails({
      ...userDetails,
      languages: selectedLanguages,
    });
  };

  const handleCountryChange = (selectedOptions) => {
    const selectedCountry = selectedOptions.value;
    setUserDetails({
      ...userDetails,
      country_id: selectedCountry,
    });
  };
  return (
    <>
      <h2 className="sc-fqkvVR jcuFgw mb-32">Tell us your origin story</h2>
      <div className="mb-4 form-group">
        <label className="mb-3 form-label" htmlFor="profile_picture">
          Upload profile photo *
        </label>
        <div className="d-flex align-items-center">
          <div>
            <div className="sc-enkILE hKKIbj cursor-pointer grey-3-bg mb-2">
              {profile_picture ? (
                <img
                  src={URL.createObjectURL(profile_picture)}
                  alt="Profile"
                  className="profile-image"
                />
              ) : (
                <div className="sc-enkILE hKKIbj icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-180.000000, -2159.000000)"
                        fill="#000000"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M134,2008.99998 C131.783496,2008.99998 129.980955,2007.20598 129.980955,2004.99998 C129.980955,2002.79398 131.783496,2000.99998 134,2000.99998 C136.216504,2000.99998 138.019045,2002.79398 138.019045,2004.99998 C138.019045,2007.20598 136.216504,2008.99998 134,2008.99998 M137.775893,2009.67298 C139.370449,2008.39598 140.299854,2006.33098 139.958235,2004.06998 C139.561354,2001.44698 137.368965,1999.34798 134.722423,1999.04198 C131.070116,1998.61898 127.971432,2001.44898 127.971432,2004.99998 C127.971432,2006.88998 128.851603,2008.57398 130.224107,2009.67298 C126.852128,2010.93398 124.390463,2013.89498 124.004634,2017.89098 C123.948368,2018.48198 124.411563,2018.99998 125.008391,2018.99998 C125.519814,2018.99998 125.955881,2018.61598 126.001095,2018.10898 C126.404004,2013.64598 129.837274,2010.99998 134,2010.99998 C138.162726,2010.99998 141.595996,2013.64598 141.998905,2018.10898 C142.044119,2018.61598 142.480186,2018.99998 142.991609,2018.99998 C143.588437,2018.99998 144.051632,2018.48198 143.995366,2017.89098 C143.609537,2013.89498 141.147872,2010.93398 137.775893,2009.67298"
                            id="profile-[#1341]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              )}
            </div>
          </div>
          <div className="ml-3">
            <label
              htmlFor="profile_picture"
              className="teal-text text-decoration-none font-weight-600"
              style={{ cursor: "pointer" }}
            >
              Select a file
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
          Your full name *
        </label>
        <input
          name="name"
          placeholder="First and last name"
          type="text"
          id="employer"
          className="form-control"
          value={name} /* Use state for value */
          onChange={handleChange} /* Handle value change */
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="gender">
          What gender do you identify as? *
        </label>
        <div className="position-relative d-flex align-items-center">
          <div className="sc-ikkxIA borKZa form-control px-0 --border-none css-b62m3t-container">
            <div className="css-co5psr-control">
              <div className="css-a3yyxf">
                <select
                  name="gender"
                  value={gender} /* Use state for value */
                  onChange={handleChange} /* Handle vaxlue change */
                >
                  <option value="">Select one</option>
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
          Which country do you live in? *
        </label>
        <Select
          name="country_id"
          className="basic-multi-select"
          options={countryOptions}
          // onChange={(e) => setCountry(e.target.value)}
          onChange={handleCountryChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="country_iso">
          Languages spoken
        </label>
        <Select
          name="languages_id"
          className="basic-multi-select"
          isMulti
          options={languageOptions}
          // onChange={(e)=>props.setLanguages(e.target.value)}
          value={languageOptions.filter(option => languages.includes(option.value))}
          onChange={handleLanguageChange}
        />
      </div>
    </>
  );
}

export default UserInfo;
