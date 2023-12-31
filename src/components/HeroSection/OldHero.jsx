import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import heroImage4 from "../../assets/images/close-up-portrait.jpg";
import heroImage5 from "../../assets/images/portrait-happy.jpg";
import heroImage6 from "../../assets/images/portrait-smiley-male.jpg";
import heroImage7 from "../../assets/images/portrait-gorgeous.jpg";
import axiosInstance from "../../axiosInstance";

function HeroSection() {
  const [interestData, setInterestData] = useState([]);
  const [expertiseData, setExpertiseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const interestApi = await axiosInstance.get("interests/list");
        setInterestData(interestApi.data);

        const expertiseApi = await axiosInstance.get("expertise/list");
        setExpertiseData(expertiseApi.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="Intro__Wrapper-sc-4plfni-1 djBjss container">
        <div className="sc-fUnMCh mSDZY">
          <div className="tab-content">
            <div
              role="tabpanel"
              aria-hidden="false"
              className="fade tab-pane active show"
            >
              <div>
                <div className="intro-content--mentee">
                  <h1 className="sc-eqUAAy bYPSFE mb-3">
                    Seize this remarkable opportunity to shape a successful
                    future and make a lasting impact on your life, guided by
                    world-class professionals.
                  </h1>
                  <h4
                    className="sc-iGgWBj inuyVc font-weight-400"
                    style={{ maxWidth: "530px" }}
                  >
                    Experience personalized <b>1:1</b> mentorship with <b>50+</b> accomplished mentors in Rwanda 
                  </h4>
                </div>
                <div className="Search__Wrapper-sc-14oyn11-0 hkQcKB intro-search">
                  <div className="intro-search__container">
                    <div className="Search__Group-sc-14oyn11-1 cLWvGv input-container d-flex align-items-center white-bg form-group">
                      <svg
                        fill="none"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-3"
                      >
                        <path
                          d="M11.7666 20.7552C16.7308 20.7552 20.7552 16.7309 20.7552 11.7666C20.7552 6.80236 16.7308 2.77805 11.7666 2.77805C6.80235 2.77805 2.77804 6.80236 2.77804 11.7666C2.77804 16.7309 6.80235 20.7552 11.7666 20.7552Z"
                          stroke="var(--teal)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M18.0183 18.4851L21.5423 22"
                          stroke="var(--teal)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <input
                        placeholder="Search by name"
                        type="search"
                        className="Search__Control-sc-14oyn11-2 eMwErl px-0 h-100 text-truncate form-control"
                      />
                    </div>
                  </div>
                  <div className="intro-search__country pr-md-3">
                    <div className="css-cnw7yi-container">
                      <span
                        id="react-select-3-live-region"
                        className="css-7pg0cj-a11yText"
                      ></span>
                      <span
                        aria-live="polite"
                        aria-atomic="false"
                        aria-relevant="additions text"
                        className="css-7pg0cj-a11yText"
                      ></span>
                      <div className="css-15eamma-control">
                        <div className="css-a3yyxf">
                          <select
                            className="hero_select"
                            name="gender"
                            value="{gender}" /* Use state for value */
                            onChange="{handleChange}" /* Handle vaxlue change */
                          >
                            <option value="">Interest</option>
                            {interestData.map((item, index) => (
                              <option key={index} value={item.id}>
                                {item.category_name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="intro-search__country pr-md-3">
                    <div className="css-cnw7yi-container">
                      <span
                        id="react-select-3-live-region"
                        className="css-7pg0cj-a11yText"
                      ></span>
                      <span
                        aria-live="polite"
                        aria-atomic="false"
                        aria-relevant="additions text"
                        className="css-7pg0cj-a11yText"
                      ></span>
                      <div className="css-15eamma-control">
                        <div className="css-a3yyxf">
                          <select
                            className="hero_select"
                            name="gender"
                            value="{gender}" /* Use state for value */
                            onChange="{handleChange}" /* Handle vaxlue change */
                          >
                            <option value="">Expertise</option>
                            {expertiseData.map((item, index) => (
                              <option key={index} value={item.id}>
                                {item.expertise_name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="sc-jlZhew cKRinY text-truncate px-32 border-0 white-text btn btn-default"
                    style={{ background: "var(--adp-grad-2)" }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            {/* <div role="tabpanel" aria-hidden="true" className="fade tab-pane">
              <div>
                <div className="intro-content--mentor">
                  <h1 className="sc-eqUAAy bYPSFE mb-3">
                    Your next chapter, made possible by mentoring
                  </h1>
                  <h4 className="sc-iGgWBj inuyVc font-weight-400">
                    Build confidence as a leader, grow your network, and define
                    your legacy.
                  </h4>
                </div>
                <button
                  type="button"
                  className="sc-jlZhew cKRinY text-truncate white-text w-100 btn btn-default"
                  style={{ background: "var(--adp-grad-2)", maxWidth: "330px" }}
                >
                  Become a Mentor
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <div
          size="170"
          className="Intro__Avatar-sc-4plfni-0 iaKzg"
          style={{ top: "264px", right: "56px" }}
        >
          <img
            width="100%"
            height="100%"
            src={heroImage4}
            alt="avatar"
            className=""
          />
        </div>
        <div
          size="105"
          className="Intro__Avatar-sc-4plfni-0 fkhfTM"
          style={{ top: "518px", right: "374px" }}
        >
          <img
            width="100%"
            height="100%"
            src={heroImage5}
            alt="avatar"
            className=""
          />
        </div>
        <div
          size="80"
          className="Intro__Avatar-sc-4plfni-0 fXgRkI"
          style={{ top: "518px", right: "195px" }}
        >
          <img
            width="100%"
            height="100%"
            src={heroImage6}
            alt="avatar"
            className=""
          />
        </div>
        <div
          size="105"
          className="Intro__Avatar-sc-4plfni-0 fkhfTM"
          style={{ top: "506px", right: "15px" }}
        >
          <img
            width="100%"
            height="100%"
            src={heroImage7}
            alt="avatar"
            className=""
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
