import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import PropTypes from "prop-types";

function MentorshipProfile(props) {
  const {
    userDetails,
    setUserDetails,
    industryData,
    interestData,
    expertiseData,
    targetMenteeData,
  } = props;

  MentorshipProfile.propTypes = {
    userDetails: PropTypes.object,
    setUserDetails: PropTypes.func.isRequired,
    industryData: PropTypes.array,
    interestData: PropTypes.array,
    expertiseData: PropTypes.array,
  };
  const { industry, interest, expertise, target_mentee, level_of_experience, relationship_preferences} = userDetails;
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

  const targetMenteeOptions = targetMenteeData.map((targeMentee) => ({
    value: targeMentee.id,
    label: targeMentee.target_mentee_name,
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

  const handleTargetMentee = (selectedOptions) => {
    const selectedTargetMentee = selectedOptions.map((option) => option.value);
    setUserDetails({
      ...userDetails,
      target_mentee: selectedTargetMentee,
    });
  };

  const handleChange = (e)=>{
    const {name, value} = e.target
    setUserDetails({
      ...userDetails,
      [name]:value
    })
  }

  return (
    <>
      <h2 className="sc-fqkvVR jcuFgw mb-32">Great! What’s your superpower?</h2>
      <div className="form-group">
        <label className="form-label" htmlFor="level_of_experience">
          What Level of experience?
        </label>
        <div className="position-relative d-flex align-items-center">
          <div className="sc-ikkxIA borKZa form-control px-0 --border-none css-b62m3t-container">
            <div className="css-co5psr-control">
              <div className="css-a3yyxf">
                <select
                  name="level_of_experience"
                  value={level_of_experience} /* Use state for value */
                  onChange={handleChange}/* Handle vaxlue change */
                >
                  <option value="">Select one</option>
                  <option value="Entry Level">Entry Level</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Senior">Senior</option>
                  <option value="Manager">Manager</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="industry_id">
          What’s your Industry?
        </label>
        <Select
          name="industry_id"
          isMulti
          options={industryOptions}
          value={industryOptions.filter((option) =>
            industry.includes(option.value)
          )}
          onChange={handleIndustryChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="interest_id">
          What’s your Interest?
        </label>
        <Select
          name="interest_id"
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
          What’s your Expertise?
        </label>
        <Select
          isMulti
          name="expertise_id"
          options={expertiseOptions}
          value={expertiseOptions.filter((option) =>
            expertise.includes(option.value)
          )}
          onChange={handleExpertise}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="target_mentee_id">
        What are you Target Mentees?
        </label>
        <Select
          isMulti
          name="target_mentee_id"
          options={targetMenteeOptions}
          value={targetMenteeOptions.filter((option) =>
            target_mentee.includes(option.value)
          )}
          onChange={handleTargetMentee}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="relationship_preferences">
            What relationship type do you prefer?
        </label>
        <div className="position-relative d-flex align-items-center">
          <div className="sc-ikkxIA borKZa form-control px-0 --border-none css-b62m3t-container">
            <div className="css-co5psr-control">
              <div className="css-a3yyxf">
                <select
                  name="relationship_preferences"
                  value={relationship_preferences} /* Use state for value */
                  onChange={handleChange}/* Handle vaxlue change */
                >
                  <option value="">Select one</option>
                  <option value="Founder">Long term</option>
                  <option value="Founder">One-off</option>
                  <option value="Senior">No preference</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorshipProfile;
