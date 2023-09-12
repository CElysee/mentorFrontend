import React from "react";
import "../Dashboard.css";
import SideMenu from "../Mentor/SideMenu";

function Calendar() {
  return (
    <>
      <div className="Layout__Wrapper-sc-2tn75p-0 fBYEGj">
        <div width="1440" className="sc-bddgXz ejKczW container">
          <SideMenu />
          <div className="sc-xwuxA bXmtny">
            <div height="10px" className="sc-fPXMVe dWzyEM"></div>
            <div className="sc-cepbVR iurznM">
              <div className="sc-cMRZhK dYqkqL container">
                <div className="child__content">
                  <div className="mb-4 text-center" style={{ maxWidth: "700px" }}>
                    <h1 className="mb-4">Let's setup your calendar!</h1>
                    <p>
                      This set up allows you receive bookings directly into your
                      calendar. Once setup, members on ADPList will find your
                      available times and book directly on the platform where
                      you can manage.
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "24px" }}
                  >
                    
                    <button
                      type="button"
                      className="sc-jlZhew cKRinY text-truncate px-32 btn--default btn btn-default"
                    >
                      Let's get started
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

export default Calendar;
