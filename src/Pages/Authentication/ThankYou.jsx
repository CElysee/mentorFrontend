import React from "react";
import "../Authentication/Authentication.css";
import {Link, useLocation} from "react-router-dom"

function ThankYou() {
  const location = useLocation();

  return (
    <>
      <div className="Layout__Wrapper-sc-2tn75p-0 fBYEGj">
        <div className="h-100">
          <div className="overflow-auto h-100 container">
            <div id="main-content"></div>
            <div width="394" className="sc-pKqro fJHraE">
              <div className="sc-gvPdwL cRlQbk text-center px-2">
                <div className="sc-dBFDNq eetzUf">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="76"
                    height="76"
                    fill="currentColor"
                    className="bi bi-bag-check"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
                <h2 className="sc-fqkvVR jcuFgw my-4">
                Welcome to Our Community - Registration Completed 🎉
                </h2>
                <p className="line-height-16 mb-4">
                  Dear <strong>{location.state.name}</strong>, We are absolutely thrilled to welcome you to our vibrant community! Your registration has been confirmed, and we're excited to have you on board.
                  
                </p>
                <p className="text-center mb-32">
                  Log in to your account to get started
                  <br></br><br></br>
                  <Link
                    style={{ display: "inline-block" }}
                    className="teal-text hzgUZB sc-jlZhew text-truncate px-4 btn--default btn"
                    to={'/signIn'}
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYou;
