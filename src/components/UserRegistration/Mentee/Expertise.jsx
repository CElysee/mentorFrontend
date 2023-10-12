import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import PropTypes from "prop-types";

function Expertise(props) {
  const {
    userDetails,
    setUserDetails,
    industryData,
    interestData,
    expertiseData,
  } = props;

  Expertise.propTypes = {
    userDetails: PropTypes.object,
    setUserDetails: PropTypes.func.isRequired,
    industryData: PropTypes.array,
    interestData: PropTypes.array,
    expertiseData: PropTypes.array,
  };
  const { industry, interest, expertise} = userDetails;
  const industryOptions = industryData.map((industry) => ({
    value: industry.id,
    label: industry.industry_name,
  }));

  const interestOptions = interestData.map((interest) => ({
    value: interest.id,
    label: interest.category_name,
  }));

  const expertiseOptions = expertiseData.map((expertise) => ({
    value: expertise.id,
    label: expertise.expertise_name,
  }));

  const handleIndustryChange = (selectedOptions) => {
    const selectedIndustry = selectedOptions.map((option) => option.value);
    setUserDetails({
      ...userDetails,
      industry: selectedIndustry,
    });
  };

  const handleInterestChange = (selectedOptions) => {
    const selectedInterest = selectedOptions.map((option) => option.value);
    setUserDetails({
      ...userDetails,
      interest: selectedInterest,
    });
  };

  const handleExpertise = (selectedOptions) => {
    const selectedExpertise = selectedOptions.map((option) => option.value);
    setUserDetails({
      ...userDetails,
      expertise: selectedExpertise,
    });
  };

  // const handleChange = (e)=>{
  //   const {name, value} = e.target
  //   setUserDetails({
  //     ...userDetails,
  //     [name]:value
  //   })
  // }

  return (
    <>
      <h2 className="sc-fqkvVR jcuFgw mb-32">Great! What’s your superpower?</h2>
      <div className="form-group">
        <label className="form-label" htmlFor="industry">
          What’s your Industry? *
        </label>
        <Select
          name="industry"
          isMulti
          options={industryOptions}
          value={industryOptions.filter((option) =>
            industry.includes(option.value)
          )}
          onChange={handleIndustryChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="interest">
          What’s your Interest? *
        </label>
        <Select
          name="interest"
          isMulti
          options={interestOptions}
          value={interestOptions.filter((option) =>
            interest.includes(option.value)
          )}
          onChange={handleInterestChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="expertise">
          What’s your Expertise? *
        </label>
        <Select
          isMulti
          name="expertise"
          options={expertiseOptions}
          value={expertiseOptions.filter((option) =>
            expertise.includes(option.value)
          )}
          onChange={handleExpertise}
        />
      </div>
    </>
  );
}

export default Expertise;
