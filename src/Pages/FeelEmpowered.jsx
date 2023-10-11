import React , { useEffect }from "react";
import { useLocation } from "react-router-dom"
import heroimg from "../assets/images/happy-businessman-back-view.jpg";

function FeelEmpowered() {
  return (
    <div className="Intro__Wrapper-sc-4plfni-1">
      <section
        id="hero-11"
        className=""
        style={{ paddingTop: "120px", paddingBottom: "160px", marginTop: "0px" }}
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className="hero-11-txt wow fadeInRight">
                <h2 className="s-60 w-700">Feel empowered</h2>
                <p className="p-lg">
                  Empower global mentors: A community of inspiration and support
                </p>
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
      <div className="Mentors__Wrapper-sc-uiznoc-2 fXjqxr container">
        <div className="container">
          <div className="mentor_articles">
            <p className="p-lg">
              In the world that constantly evolves and challenges us, finding a
              source of empowerment is crucial. Imagine being part of a
              community where mentors from different backgrounds come together
              to inspire conversations and offer support 24/7. With a goal of
              encouraging empowerment in a collaborative and inclusive
              environment, this global network of mentors aims to uplift
              individuals and foster growth.
            </p>
            <p className="p-lg">
              Being a mentor is more than just sharing knowledge, it's about
              guiding, supporting, and empowering others to reach their full
              potential. A global community of mentors, united by the love of
              empowerment, creates a space for individuals with similar values
              to collaborate and make significant improvement in the lives of
              many.
            </p>
            <p className="p-lg">
              In a world that often demands more than we can handle, being a
              member of a community that supports each other is genuinely
              priceless. The global network of mentors, which fosters
              motivational conversation and offers 24/7 assistance, rises as an
              example of empowerment. Together, they create links between
              wisdom, kindness, and strength, enhancing the power of mentoring
              and fostering a more promising future for everybody.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeelEmpowered;
