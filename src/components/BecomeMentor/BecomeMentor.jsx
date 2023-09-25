import React from "react";
import "./BecomeMentor.css";
import BecomeMentorImage1 from "../../assets/images/happy-businessman-back-view.jpg"
import BecomeMentorImage2 from "../../assets/images/afro-american-woman-pointing-computer.jpg"
import BecomeMentorImage3 from "../../assets/images/community.jpg"
import TestimonialsImage1 from "../../assets/images/businesswoman.jpg";
import TestimonialsImage2 from "../../assets/images/Designermale.jpg";
import TestimonialsImage3 from "../../assets/images/businesswoman-smiling.jpg";

function becomeMentor() {
  return (
    <>
      <div className="becomeAMentor__Wrapper-sc-11bsio4-0 ihhFES">
        <div className="section section-with-padding section-centered">
          <div className="container w-container">
            <div className="center-tewxt-container">
              <h2>
                Mentoring can help you<span> turn your </span>
                <span className="grad-bg">passion into conversations</span>,
                friendships and network globally.
              </h2>
            </div>
          </div>
          <div className="slider_contain">
            <div className="wrapper">
            <div className="slick-list">
                 
                    <div
                      className="slick-slide slick-active slick-current col-md-4"
                    >
                      <div>
                        <div
                          className="carousel-card"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            src={TestimonialsImage1}
                            loading="lazy"
                            alt="mentor"
                            className="image"
                          />
                          <div className="testimonial-content con">
                            <div className="testimonial">
                              Because I've had to learn everything the hard way,
                              I mentor to help others learn an easier way. If I
                              can make a difference in one person’s life, it
                              will all have been worth it.
                            </div>
                            <div className="name">Cami</div>
                            <div className="title">owner, camiimac</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active slick-current col-md-4"
                      
                    >
                      <div>
                        <div
                          className="carousel-card"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            src={TestimonialsImage2}
                            loading="lazy"
                            alt="mentor"
                            className="image"
                          />
                          <div className="testimonial-content con">
                            <div className="testimonial">
                              Mentoring is the ultimate evolution of networking:
                              direct, honest, growth &amp; value driven. A
                              win-win for everyone, what are you waiting for?
                            </div>
                            <div className="name">Federico</div>
                            <div className="title">
                              Prin. Exp. Designer, Facebook
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active slick-current col-md-4"
                      aria-hidden="false"
                     
                    >
                      <div>
                        <div
                          className="carousel-card"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            src={TestimonialsImage3}
                            loading="lazy"
                            alt="mentor"
                            className="image"
                          />
                          <div className="testimonial-content con">
                            <div className="testimonial">
                              Mentoring is a two-way street. Nothing feels
                              better than helping others with what I know. In
                              return, I have become a more confident, empathetic
                              leader.
                            </div>
                            <div className="name">Jacalin</div>
                            <div className="title">Head of Design, Hotelr</div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="section section-with-padding grey-bg">
          <div className="container w-container">
            <div className="center-tewxt-container left">
              <h2>
                It’s easier than you think.
                <br />
                <span className="grad-bg">Join us.</span> We’ll help you every
                step of the way.
              </h2>
              <div className="spacing-20"></div>
              <button className="button w-button">Become a mentor</button>
            </div>
            <div className="w-layout-grid grid">
              <div className="col-md-4">
                <img
                  src={BecomeMentorImage1}
                  className="feature-image"
                />
                <h3>Feel empowered</h3>
                <p className="bb">
                  Be part of a community of mentors globally that supports each
                  other to inspire conversations; supported 24/7.
                </p>
              </div>
              <div className="col-md-4">
                <img
                  src={BecomeMentorImage2}
                  alt=""
                  className="feature-image"
                />
                <h3>Tools to Mentor</h3>
                <p className="bb">
                  Our tools like Send notes, Group session hosting, Calendar
                  Management and more — helps you be successful in mentoring.
                </p>
              </div>
              <div className="col-md-4">
                <img
                  src={BecomeMentorImage3}
                  alt=""
                  className="feature-image"
                />
                <h3>A diverse community</h3>
                <p className="bb">
                  From over 40+ mentors in Rwanda, it’s time to scale your
                  impact beyond the local community.
                </p>
              </div>
              
            </div>
          </div>
        </div>
        <div className="section section-with-padding"></div>
      </div>
    </>
  );
}

export default becomeMentor;
