import React from "react";
import SideMenu from "./SideMenu";
import HelpImage from "../../assets/images/customerservice.png";
import ChatImage from "../../assets/images/bubblechat.png";
import BugImage from "../../assets/images/bug.png";

function Support() {
  return (
    <>
      <div className="Layout__Wrapper-sc-2tn75p-0 fBYEGj">
        <div width="1440" className="sc-bddgXz ejKczW container">
          <SideMenu />
          <div className="v2__content">
            <div>
              <div
                style={{
                  transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
                  transform: "none",
                  opacity: " 1",
                }}
              >
                <h2 className="sc-fqkvVR jcuFgw mb-4">Support</h2>
              </div>
              <div
                style={{
                  transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
                  transform: "none",
                  opacity: " 1",
                }}
              >
                <div width="1440" className="sc-eldPxv ctTwvK">
                  <a href="/" className="sc-kdIgRK dLFvHk">
                    <div className="card__image">
                      <img src={ChatImage} className="img-fluid" />
                    </div>
                    <div className="card__body">
                      <p>Help Center</p>
                    </div>
                  </a>
                  <a href="/" className="sc-kdIgRK dLFvHk">
                    <div className="card__image">
                      <img src={HelpImage} className="img-fluid" />
                    </div>
                    <div className="card__body">
                      <p>Chat with us</p>
                    </div>
                  </a>
                  <a href="/" className="sc-kdIgRK dLFvHk">
                    <div className="card__image">
                      <img src={BugImage} className="img-fluid" />
                    </div>
                    <div className="card__body">
                      <p>Report a bug</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Support;
