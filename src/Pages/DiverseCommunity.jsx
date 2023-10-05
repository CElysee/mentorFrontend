import React from "react";
import heroimg from "../assets/images/community.jpg";

function DiverseCommunity() {
  return (
    <div className="Intro__Wrapper-sc-4plfni-1">
      <section
        id="hero-11"
        className="bg--scroll hero-section"
        style={{
          paddingTop: "120px",
          paddingBottom: "160px",
          marginTop: "0px",
        }}
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className="hero-11-txt wow fadeInRight">
                <h2 className="s-60 w-700">A diverse community</h2>
                <p className="p-lg">
                  Empowering a diverse community through mentorship
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
              A thriving community of more than 40 mentors has formed in the
              center of Rwanda, and they are all working for the same thing:
              using mentorship to strengthen and empower the communities they
              live in. It is time to expand the reach of their effect beyond the
              boundaries of their own country since their commitment and
              enthusiasm have produced amazing outcomes. Reaching out to a
              larger, more varied audience and making a difference on a global
              level are the goals of scaling this effort
            </p>
            <p className="p-lg">
              In Rwanda this mentorship community aims to be a source of hope
              and empowerment. With a wide range of expertise and experience,
              these mentors will spend countless hours helping others in the
              community. They will inspire change, promote growth, and bring
              about a good transition in many people's lives via mentoring,
              advice, and a strong feeling of community.
            </p>
            <p className="p-lg">
              The variety of mentors we want to create in our mentor groups is
              what sets us apart from others. Hailing from various professional
              backgrounds, industries, and cultural contexts, these mentors
              offer a wide range of expertise and experiences. This diversity
              enriches the mentorship experience, providing a multifaceted
              approach to guidance and problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiverseCommunity;
