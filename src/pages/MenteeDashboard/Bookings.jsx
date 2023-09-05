import React from "react";
import SideMenu from "./SideMenu";

function Bookings() {
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
                  opacity: "1",
                }}
              ></div>
              <div
                style={{
                  transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
                  transform: "none",
                  opacity: "1",
                }}
              >
                <div className="sc-bStcSt eYWfWP">
                  <h2 className="sc-fqkvVR jcuFgw">Bookings</h2>

                  <div
                    className="sc-eONNys blzOEo text-left mb-4 mt-3"
                    style={{ backgroundColor: "rgba(230, 244, 249, 0.7)" }}
                  >
                    <div className="d-flex">
                      <span className="mr-2 my-md-auto">
                        <svg
                          fill="none"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.865 5.1238C19.302 5.2768 19.594 5.6888 19.594 6.1518V12.9248C19.594 14.8178 18.906 16.6248 17.691 18.0248C17.08 18.7298 16.307 19.2788 15.486 19.7228L11.928 21.6448L8.364 19.7218C7.542 19.2778 6.768 18.7298 6.156 18.0238C4.94 16.6238 4.25 14.8158 4.25 12.9208V6.1518C4.25 5.6888 4.542 5.2768 4.979 5.1238L11.561 2.8108C11.795 2.7288 12.05 2.7288 12.283 2.8108L18.865 5.1238Z"
                            stroke="var(--teal)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M9.32251 11.9177L11.2145 13.8107L15.1125 9.91269"
                            stroke="var(--teal)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <p className="font-weight-400">
                        The session timings are following your mentor schedules
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
                  transform: "none",
                  opacity: "1",
                }}
              >
                <div className="sc-fUnMCh epgYHv">
                  <nav className="mb-4 nav nav-tabs" role="tablist">
                    <a
                      href="#"
                      role="tab"
                      data-rb-event-key="upcoming"
                      aria-selected="true"
                      className="nav-item nav-link active"
                    >
                      <span>Upcoming</span>
                    </a>
                    <a
                      href="#"
                      role="tab"
                      data-rb-event-key="pending"
                      aria-selected="false"
                      className="nav-item nav-link"
                    >
                      <span>Pending</span>
                    </a>
                    <a
                      href="#"
                      role="tab"
                      data-rb-event-key="history"
                      aria-selected="false"
                      className="nav-item nav-link"
                    >
                      History
                    </a>
                  </nav>
                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      aria-hidden="false"
                      className="fade tab-pane active show"
                    ></div>
                    <div
                      role="tabpanel"
                      aria-hidden="true"
                      className="fade tab-pane"
                    ></div>
                    <div
                      role="tabpanel"
                      aria-hidden="true"
                      className="fade tab-pane"
                    ></div>
                    <div
                      role="tabpanel"
                      aria-hidden="true"
                      className="fade tab-pane"
                    ></div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
                  transform: "none",
                  opacity: "1",
                }}
              >
                <div width="1440" className="sc-eldPxv ddyETa">
                  <div>
                    <p className="grey-2-text line-height-16 mb-0">
                      You have no upcoming bookings - start sharing a
                      conversation with a mentor.
                    </p>
                    <button
                      type="button"
                      className="sc-jlZhew cKRinY text-truncate px-4 mt-4 btn--default btn btn-default"
                    >
                      Explore mentors
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookings;
