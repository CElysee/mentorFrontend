import React from "react";
import "./header.css";
import mentorLogoPng from "../../assets/images/mentorlogo.png";
import mentorLogoSvg from "../../assets/images/mentorlogo.svg";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const nav_links = [
    {
      path: "/about",
      display: "About Us",
    },
    {
      path: "/findMentor",
      display: "Find Mentor",
    },
    {
      path: "/becomeMentor",
      display: "Become Mentor",
    },
    {
      path: "/contact",
      display: "Contact Us",
    },
  ];
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <>
      <div className="sc-isRoRg fuhKSU">
        <div className="sc-satoz gqKKum container-fluid">
          <div className="nav-left-container">
            <div className="sc-fsvrbR eoXzvi">
              <Link
                to={"/"}
                aria-label="Mentor logo"
                className="sc-kFWlue kfPNKu"
              >
                <img src={mentorLogoSvg} alt="Mentor logo" width={"100"} />
              </Link>
            </div>
          </div>
          <div className="nav-right-container">
            <div className="sc-eNSrOW iSkied">
              <div className="sc-dhFUGM hzgUZB">
                {nav_links.map((item, index) => (
                  <Link key={index} className="nav__item" to={item.path}>
                    <span>{item.display}</span>
                  </Link>
                ))}

                <div className="nav__item px-1">
                  <button
                    type="button"
                    className="sc-jlZhew cKRinY text-truncate px-4 mr-0 btn--default-outline btn btn-default"
                  >
                    Log in
                  </button>
                </div>
                <div className="nav__item pr-0 pl-1">
                  <button
                    type="button"
                    onClick={navigateToSignUp}
                    className="sc-jlZhew cKRinY text-truncate px-4 btn--default btn btn-default"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sc-hBtRBD cakEth sidenav">
        <div className="d-flex justify-content-end mb-1 px-4 pt-12 pb-0">
          <a
            href="/"
            aria-label="close icon"
            className="black-text text-decoration-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="32"
              width="32"
              fill="var(--black)"
              aria-hidden="true"
            >
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
            </svg>
          </a>
        </div>
        <div className="mt-12">
          {nav_links.map((item, index) => (
            <Link key={index} className="sc-kCMKrZ dlzjez" to={item.path}>
              <span className="action__content">
              <svg
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                variant="outline"
              >
                <path
                  d="M11.7666 20.7552C16.7308 20.7552 20.7552 16.7309 20.7552 11.7666C20.7552 6.80236 16.7308 2.77805 11.7666 2.77805C6.80235 2.77805 2.77804 6.80236 2.77804 11.7666C2.77804 16.7309 6.80235 20.7552 11.7666 20.7552Z"
                  stroke="var(--grey-2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M18.0183 18.4851L21.5423 22"
                  stroke="var(--grey-2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Find a mentor</span>
            </span>
            <svg
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 5L15.5 12L8.5 19"
                stroke="var(--grey-3)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            </Link>
          ))}
          <hr className="sc-dJiZtA ffmvFq" />
          <div className="sc-eldPxv ddyEfb py-32 px-4" width="1440">
            <button
              aria-label="Log in"
              type="button"
              className="sc-jlZhew cKRinY text-truncate undefined btn--default-outline btn btn-default"
            >
              Log in
            </button>
            <button
              aria-label="Sign up"
              type="button"
              onClick={navigateToSignUp}
              className="sc-jlZhew cKRinY text-truncate undefined btn--default btn btn-default"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
