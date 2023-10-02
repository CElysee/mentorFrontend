import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import heroImage4 from "../../assets/images/close-up-portrait.jpg";
import heroImage5 from "../../assets/images/portrait-happy.jpg";
import heroImage6 from "../../assets/images/portrait-smiley-male.jpg";
import heroImage7 from "../../assets/images/portrait-gorgeous.jpg";
import AMILogo from "../../assets/images/mentor-AMI.png";
import Klab from "../../assets/images/mentor-klab.png";
import UNDP from "../../assets/images/mentor-undp.png";
import Head7Bg from "../../assets/images/head7_bg.png";
import headimg7 from "../../assets/images/head_img7.png";
import head7rock from "../../assets/images/head7_rock.png";
import line_l from "../../assets/images/line_l.png";
import heroimg from "../../assets/images/hero-11-img.png";
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
      <div className="Intro__Wrapper-sc-4plfni-1">
        <section id="hero-11" className="bg--scroll hero-section">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <div className="hero-11-txt wow fadeInRight">
                  <h2 className="s-60 w-700">
                    Personalized 1:1 mentorship in Rwanda
                  </h2>
                  <p className="p-lg">
                  Seize this remarkable opportunity to shape a successful future and make a lasting impact on your life, guided by world-class professionals.
                  </p>

                  <a
                    href="#banner-3"
                    className="sc-jlZhew bVwUif text-truncate undefined btn btn-default"
                    style={{padding: "0.375rem 2.75rem", display: "inline-flex"}}
                  >
                    Get started
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="hero-11-img text-center wow fadeInLeft">
                  <img className="img-fluid" src={heroimg} alt="hero-image" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
