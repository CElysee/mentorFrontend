import React from "react";
import FeatureImage1 from "../../assets/images/career_growth.jpg"
import FeatureImage2 from "../../assets/images/networking.jpg"
import FeatureImage3 from "../../assets/images/talent.jpg"
import "./feauturesSection.css"

function feauturesSection() {
  return (
    <>
      <div className="Features__Wrapper-sc-ogzs7c-0 kLSuSB container">
        <div className="TextAndImage__Wrapper-sc-p876aq-0 lnjUrQ row">
          <div className="col-12 col-sm-6 col-md-5 d-flex flex-column justify-content-center align-items-center">
            <img src={FeatureImage1} alt="" className="w-100 h-100" />
          </div>
          <div className="text-container col-12 col-sm-6 col-md-7 d-flex flex-column justify-content-center align-items-start">
            <h2 className="sc-fqkvVR jcuFgw text-title mb-8 w-75">
              Leap 10x career growth with iconic mentors
            </h2>
            <p className="sc-kAyceB cCBfKf text-description">
              If you’re looking for advice, jamming or networking - ADPList lets
              you freely schedule a 1:1 mentorship session in fun new ways and
              work with them directly.
            </p>
            <button
              height="45"
              bg="var(--adp-grad-2)"
              type="button"
              className="sc-jlZhew jcAJjj text-truncate white-text px-24 mt-32 btn btn-default"
            >
              <p className="sc-jXbUNg kFsvSZ">Explore all mentors</p>
            </button>
          </div>
        </div>
        <div className="TextAndImage__Wrapper-sc-p876aq-0 lnjUrQ row flex-row-reverse">
          <div className="col-12 col-sm-6 col-md-5 d-flex flex-column justify-content-center align-items-center">
            <img src={FeatureImage2} alt="" className="w-100 h-100" />
          </div>
          <div className="text-container col-12 col-sm-6 col-md-7 d-flex flex-column justify-content-center align-items-start">
            <h2 className="sc-fqkvVR jcuFgw text-title mb-8 w-75">
              Speed your way to new knowledge and network
            </h2>
            <p className="sc-kAyceB cCBfKf text-description">
              Designed for quick wins - experience a lineup of extraordinary
              mentors from all around the way in just a click with our super
              matching system.
            </p>
            <button
              height="45"
              bg="var(--adp-grad-2)"
              type="button"
              className="sc-jlZhew jcAJjj text-truncate white-text px-24 mt-32 btn btn-default"
            >
              <p className="sc-jXbUNg kFsvSZ">Get a match today</p>
            </button>
          </div>
        </div>
        <div className="TextAndImage__Wrapper-sc-p876aq-0 lnjUrQ row">
          <div className="col-12 col-sm-6 col-md-5 d-flex flex-column justify-content-center align-items-center">
            <img src={FeatureImage3} alt="" className="w-100 h-100" />
          </div>
          <div className="text-container col-12 col-sm-6 col-md-7 d-flex flex-column justify-content-center align-items-start">
            <h2 className="sc-fqkvVR jcuFgw text-title mb-8 w-75">
              More visible, get scouted as a talent
            </h2>
            <p className="sc-kAyceB cCBfKf text-description">
              Out of a job, not out of touch. ADPList lets you list yourself as
              a talent in the community and get vouched by mentors - boosting
              your credentials to get hired fast.
            </p>
            <button
              height="45"
              bg="var(--adp-grad-2)"
              type="button"
              className="sc-jlZhew jcAJjj text-truncate white-text px-24 mt-32 btn btn-default"
            >
              <p className="sc-jXbUNg kFsvSZ">Sign up as talent</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default feauturesSection;
