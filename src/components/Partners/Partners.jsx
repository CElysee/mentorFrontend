import React from "react";
import "../Partners/Partners.css";
import AMILogo from "../../assets/images/mentor-AMI.png";
import Klab from "../../assets/images/mentor-klab.png";
import UNDP from "../../assets/images/mentor-undp.png";

function Partners() {
  return (
    <>
      <div className="Companies__Wrapper-sc-1rbzcw0-0 gusIrI" id="partners">
        <p className="sc-gsFSXq fJiOdH mb-32 text-center font-weight-700">
          Over 5000+ companies joined us
        </p>
        <div className="partners_logo">
        <div className="slick-slide slick-active">
          <div>
            <div style={{ width: "100%", display: "inline-block" }}>
              <div className="px-5">
                <img
                  aria-label="Avatar of users"
                  src={UNDP}
                  alt="avatar"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="slick-slide slick-active">
          <div>
            <div style={{ width: "100%", display: "inline-block" }}>
              <div className="px-5">
                <img
                  aria-label="Avatar of users"
                  src={AMILogo}
                  alt="avatar"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="slick-slide slick-active">
          <div>
            <div
              tabIndex="-1"
              style={{ width: "100%", display: "inline-block" }}
            >
              <div className="px-5">
                <img
                  aria-label="Avatar of users"
                  src={Klab}
                  alt="avatar"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
