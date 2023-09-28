import React, { useEffect, useState } from "react";
import "./Header.css";
import mentorLogoPng from "../../assets/images/mentorlogo.png";
import mentorLogoSvg from "../../assets/images/mentorlogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { isTokenExpired } from "../../../utils/tokenUtils";

function Header() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const token = localStorage.getItem("access_token");
  const isExpired = isTokenExpired(token);
  const navigate = useNavigate();
  useEffect(() => {
    if (isExpired === null || isExpired) {
      // navigate("/signIn");
    } else {
      setIsLoggedIn(true);
    }
  }, [isExpired]);
  const nav_links = [
    // {
    //   path: "/about",
    //   display: "About Us",
    // },
    {
      path: "/findMentor",
      display: "Find Mentor",
    },
    {
      path: "/becomeMentor",
      display: "Become Mentor",
    },
    {
      path: "/#partners",
      display: "Partners",
    },
  ];
  
  const navigateToSignUp = () => {
    navigate("/sign-up");
  };
  const navigateToSignIn = () => {
    navigate("/signIn");
  };
  const handleLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('user_role')
    setIsLoggedIn(false);
    navigate("/signIn")
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
                {isLoggedIn ? (
                  <>
                    <div className="nav-right-container">
                      <div className="sc-eNSrOW iSkied">
                        <div className="sc-dhFUGM hzgUZB">
                          <div className="nav__item px-2" title="Messages">
                            <a
                              aria-label="View your messages"
                              href="#"
                              className="sc-bJBgwP dqgbhX"
                            >
                              <svg
                                fill="none"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                              >
                                <path
                                  d="M3 8V19.2271C3 20.0058 3.85082 20.4857 4.51729 20.0829L7.19371 18.4651C8.13005 17.8992 9.20333 17.6 10.2974 17.6H17C19.2091 17.6 21 15.8091 21 13.6V8C21 5.79086 19.2091 4 17 4H7C4.79086 4 3 5.79086 3 8Z"
                                  stroke="var(--black)"
                                  strokeWidth="1.5"
                                ></path>
                                <line
                                  x1="7.75"
                                  y1="9.25"
                                  x2="16.25"
                                  y2="9.25"
                                  stroke="var(--black)"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                ></line>
                                <line
                                  x1="7.75"
                                  y1="13.25"
                                  x2="12.25"
                                  y2="13.25"
                                  stroke="var(--black)"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                ></line>
                              </svg>
                            </a>
                          </div>
                          <div className="nav__item px-2" title="Notifications">
                            <div className="sc-fbKhjd geEmTZ dropdown">
                              <button
                                aria-haspopup="true"
                                aria-expanded="false"
                                id="notification"
                                aria-label="View your notifications"
                                type="button"
                                className="sc-dGCmGc kgbLYq dropdown-toggle btn btn-primary"
                              >
                                <svg
                                  fill="none"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.50083 13.7871V13.5681C3.53295 12.9202 3.7406 12.2925 4.10236 11.7496C4.7045 11.0975 5.1167 10.2983 5.29571 9.43598C5.29571 8.7695 5.29571 8.0935 5.35393 7.42703C5.65469 4.21842 8.82728 2 11.9611 2H12.0387C15.1725 2 18.345 4.21842 18.6555 7.42703C18.7137 8.0935 18.6555 8.7695 18.704 9.43598C18.8854 10.3003 19.2972 11.1019 19.8974 11.7591C20.2618 12.2972 20.4698 12.9227 20.4989 13.5681V13.7776C20.5206 14.648 20.2208 15.4968 19.6548 16.1674C18.907 16.9515 17.8921 17.4393 16.8024 17.5384C13.607 17.8812 10.383 17.8812 7.18762 17.5384C6.09914 17.435 5.08576 16.9479 4.33521 16.1674C3.778 15.4963 3.48224 14.6526 3.50083 13.7871Z"
                                    stroke="var(--black)"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M9.55493 20.8518C10.0542 21.4784 10.7874 21.884 11.5922 21.9787C12.3971 22.0734 13.2072 21.8495 13.8433 21.3564C14.0389 21.2106 14.2149 21.041 14.3672 20.8518"
                                    stroke="var(--black)"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                <span className="notif__badge">9+</span>
                              </button>
                            </div>
                          </div>
                          <div className="nav__item px-2">
                            <div className="nav__item pr-0 pl-2">
                              <a
                                onClick={handleLogout}
                                aria-label="Get a match"
                                className="grey-5-bg grey-2-text btn px-3"
                                role="button"
                              >
                                <span className="item_icon">
                                  <svg
                                    fill="none"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    variant="outline"
                                  >
                                    <path
                                      d="M15.4361 11.8778L3.39511 11.8778"
                                      stroke="var(--grey-2)"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12.5084 8.96179L15.4364 11.8778L12.5084 14.7938"
                                      stroke="var(--grey-2)"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M8.12802 7.245L8.12802 6.312C8.12802 4.277 9.77702 2.628 11.813 2.628L16.697 2.628C18.727 2.628 20.372 4.273 20.372 6.303L20.372 17.443C20.372 19.478 18.722 21.128 16.687 21.128L11.802 21.128C9.77302 21.128 8.12802 19.482 8.12802 17.453L8.12802 16.511"
                                      stroke="var(--grey-2)"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </span>
                                <span style={{marginLeft: "5px"}}>Logout</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="nav__item px-1">
                      <button
                        type="button"
                        className="sc-jlZhew cKRinY text-truncate px-4 mr-0 btn--default-outline btn btn-default"
                        onClick={navigateToSignIn}
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
                  </>
                )}
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
