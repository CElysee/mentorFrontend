import React from "react";
import PropTypes from "prop-types";

function MentorBio(props) {
  const { userDetails, setUserDetails } = props;
  MentorBio.propTypes = {
    userDetails: PropTypes.object,
    setUserDetails: PropTypes.func.isRequired,
  };
  const {company_title, company, bio, social_twitter, social_linkedin, website} = userDetails

  const handleChange  = (e) =>{
    const {name, value} = e.target
    setUserDetails({
      ...userDetails,
      [name]: value,
    })
  }
  return (
    <>
      <h2 className="sc-fqkvVR jcuFgw mb-32">
        How would you like to be intro'd?
      </h2>
      <div className="form-group">
        <label className="form-label" htmlFor="company_title">
          Your title
        </label>
        <input
          name="company_title"
          placeholder="Eg. Product Designer, Student etc. "
          type="text"
          className="form-control"
          value={company_title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="company">
          Company Name
        </label>
        <input
          name="company"
          placeholder="Eg. Apple, UCLA, etc."
          type="text"
          className="form-control"
          value={company}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex mb-3">
        <div className="sc-jkTpcO bClMlI">
          <img
            alt="avatar of user"
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
          />
        </div>
        <p className="sc-kAyceB cCBfKf line-height-20">
          Everyone has a story, what's yours?
        </p>
      </div>
      <div className="mb-4">
        <div className="mb-0 form-group">
          <div className="position-relative d-flex align-items-center">
            <textarea
              name="bio"
              className="form-control py-3"
              rows={5}
              placeholder="Tell us more about yourself, your goals and what you love!"
              title="Tell us more about yourself, your goals and what you love!"
              style={{ height: "178px !important" }}
              value={bio}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mb-32">
        <p className="mb-3">Sample bio(Min: 500 characters)</p>
        <div className="p-3 muted-grey-bg" style={{ borderRadius: "10px" }}>
          <p className="sc-kAyceB cCBfKf grey-2-text">
            I am a product designer at Apple who writes about design. I love my
            doggie (oreo) and enjoy collecting new NFTs during my free time!
          </p>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="website">
        Portfolio/Website link
        </label>
        <input
          name="website"
          placeholder="https://mentor.rw"
          type="url"
          id="website"
          className="form-control"
          value={website} /* Use state for value */
          onChange={handleChange} /* Handle value change */
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="social_twitter">
          Twitter profile
        </label>
        <input
          name="social_twitter"
          placeholder="https://twitter.com/mentor"
          type="url"
          id="social_twitter"
          className="form-control"
          value={social_twitter} /* Use state for value */
          onChange={handleChange} /* Handle value change */
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="social_linkedin">
          LinkedIn profile
        </label>
        <input
          name="social_linkedin"
          placeholder="https://www.linkedin.com/in/mentor/"
          type="url"
          id="social_linkedin"
          className="form-control"
          value={social_linkedin} /* Use state for value */
          onChange={handleChange} /* Handle value change */
        />
      </div>
    </>
  );
}

export default MentorBio;
