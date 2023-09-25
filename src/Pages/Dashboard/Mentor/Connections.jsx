import React from "react";
import { Link } from "react-router-dom"
import "../Dashboard.css";
import SideMenu from "../Mentor/SideMenu";

function Connections() {
  return (
    <>
      <div className="Layout__Wrapper-sc-2tn75p-0 fBYEGj">
        <div width="1440" className="sc-bddgXz ejKczW container">
          <SideMenu />
          <div className="v2__content">
            <div style={{}}>
              <div style={{transition: "opacity 400ms ease 0s, transform 400ms ease 0s", transform: "none", opacity: "1"}}>
                <div style={{maxWidth: "472px"}} className="mb-4">
                  <h2 className="sc-fqkvVR jcuFgw mb-12">My Connections</h2>
                  <p>
                    Community members you've met and connected with will appear
                    here. Click the profile to view your journey with a member.
                  </p>
                </div>
              </div>
              <div style={{transition: "opacity 400ms ease 0s, transform 400ms ease 0s", transform: "none", opacity: "1"}}>
                <div className="sc-fUnMCh epgYHv">
                  <nav className="mb-4 nav nav-tabs" role="tablist">
                    <a
                      href="#"
                      role="tab"
                      data-rb-event-key="mentors"
                      aria-selected="true"
                      className="nav-item nav-link active"
                    >
                      <span>Mentors</span>
                    </a>
                  </nav>
                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      aria-hidden="false"
                      className="fade tab-pane active show"
                    ></div>
                  </div>
                </div>
              </div>
              <div style={{transition: "opacity 400ms ease 0s, transform 400ms ease 0s", transform: "none", opacity: "1"}}>
                <div className="sc-feoqov dkGJcB">
                  <div className="form-group">
                    <div className="position-relative d-flex align-items-center input-container">
                      <div>
                        <svg
                          fill="none"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
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
                      </div>
                      <input
                        placeholder="Search for mentors"
                        title="Search for mentors"
                        className="form-control px-0 --border-none --adorned form-control"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      aria-haspopup="true"
                      aria-expanded="false"
                      type="button"
                      className="dropdown-toggle btn btn-primary"
                    >
                      <svg
                        fill="none"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4 6.25C4.41421 6.25 4.75 6.58579 4.75 7V15.1893L6.46967 13.4697C6.76256 13.1768 7.23744 13.1768 7.53033 13.4697C7.82322 13.7626 7.82322 14.2374 7.53033 14.5303L4.53033 17.5303C4.23744 17.8232 3.76256 17.8232 3.46967 17.5303L0.46967 14.5303C0.176777 14.2374 0.176777 13.7626 0.46967 13.4697C0.762563 13.1768 1.23744 13.1768 1.53033 13.4697L3.25 15.1893V7C3.25 6.58579 3.58579 6.25 4 6.25ZM10.25 7C10.25 6.58579 10.5858 6.25 11 6.25H19C19.4142 6.25 19.75 6.58579 19.75 7C19.75 7.41421 19.4142 7.75 19 7.75H11C10.5858 7.75 10.25 7.41421 10.25 7ZM10.25 12C10.25 11.5858 10.5858 11.25 11 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H11C10.5858 12.75 10.25 12.4142 10.25 12ZM10.25 17C10.25 16.5858 10.5858 16.25 11 16.25H23C23.4142 16.25 23.75 16.5858 23.75 17C23.75 17.4142 23.4142 17.75 23 17.75H11C10.5858 17.75 10.25 17.4142 10.25 17Z"
                          fill="var(--black)"
                        ></path>
                      </svg>
                      <p className="sc-jXbUNg kFsvSZ">Sort by</p>
                    </button>
                  </div>
                  <div className="dropdown">
                    <button
                      aria-haspopup="true"
                      aria-expanded="false"
                      type="button"
                      className="dropdown-toggle btn btn-primary"
                    >
                      <svg
                        fill="none"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.1172 17.9866H2.88306"
                          stroke="var(--black)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21.1179 17.9866C21.1179 19.5772 19.8285 20.8666 18.2379 20.8666C16.6473 20.8666 15.3579 19.5772 15.3579 17.9866C15.3579 16.3948 16.6473 15.1066 18.2379 15.1066C19.8285 15.1066 21.1179 16.3948 21.1179 17.9866Z"
                          stroke="var(--black)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M13.8827 6.26212H21.118"
                          stroke="var(--black)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.8826 6.26211C2.8826 7.85388 4.17201 9.14211 5.7626 9.14211C7.35319 9.14211 8.6426 7.85388 8.6426 6.26211C8.6426 4.67152 7.35319 3.38211 5.7626 3.38211C4.17201 3.38211 2.8826 4.67152 2.8826 6.26211Z"
                          stroke="var(--black)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className="sc-jXbUNg kFsvSZ">Filter</p>
                    </button>
                  </div>
                </div>
                <div className="sc-ha-dNcR exbmkA mb-5">
                  <Link
                    target="_blank"
                    href="#"
                    className="sc-ffZAAA dsxWwM text-decoration-none"
                  >
                    <h4 className="grey-1-text mb-1">Add mentors</h4>
                    <p
                      className="sc-jXbUNg kFsvSZ grey-2-text text-center mb-4"
                      style={{maxWidth: "194px"}}
                    >
                      Learn and grow with over <b> 50+ </b> mentors today.
                    </p>
                    <button
                      height="38"
                      type="button"
                      className="sc-jlZhew ivTWmS text-truncate px-3 btn--default btn btn-default"
                    >
                      Discover Mentors
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Connections;
