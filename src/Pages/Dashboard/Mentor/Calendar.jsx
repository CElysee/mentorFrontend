import React from "react";
import "../Dashboard.css";
import SideMenu from "../Mentor/SideMenu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosInstance";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  // const [events, setEvents] = React.useState([
  //   { title: "Event 1", date: "2023-10-05" },
  //   { title: "Event 2", date: "2023-10-06" },
  // ]);
  const { id } = useParams();
  const [bookingData, setBookingData] = useState([]);
  const [events, setEvents] = useState([]);
  const [modalContent, setModalContent] = useState(""); // Content for the modal

  useEffect(() => {
    const dataUrl = `/ScheduleBookings/mentorCalender/${id}`;

    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(dataUrl);
        // console.log(response.data)
        setEvents(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const handleEventClick = (eventClickInfo) => {
    // Set the modal content to the event's details
    setModalContent(eventClickInfo.event.title);

    // Toggle the Bootstrap modal display
    const modal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    modal.toggle();
  };

  return (
    <>
      <div className="Layout__Wrapper-sc-2tn75p-0 fBYEGj">
        <div width="1440" className="sc-bddgXz ejKczW container">
          <SideMenu />
          <div className="sc-xwuxA bXmtny">
            <div height="10px" className="sc-fPXMVe dWzyEM"></div>
            <div className="sc-cMRZhK dYqkqL container">
              <div className="child__content">
                <div className="mb-4" style={{ maxWidth: "536px" }}>
                  <h1 className="mb-4">Let's setup your calendar!</h1>
                  <p>
                    This set up allows you to see your bookings directly into a
                    calendar. Once setup, members on Mentor.rw will find your
                    available times and book directly on the platform.
                  </p>
                </div>
              </div>
            </div>

            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              editable={true}
              selectable={true}
              selectMirror={true}
              eventClick={handleEventClick}
            />

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">1</div>
                  <div
                    className="sc-eldPxv efrIaS justify-content-end"
                    width="1714"
                  >
                    <button
                      data-bs-dismiss="modal"
                      border="black"
                      type="button"
                      className="sc-jlZhew dSkGVF text-truncate px-3 undefined btn btn-default"
                    >
                      Go Back
                    </button>

                    <button
                      style={{ backgroundColor: "black" }}
                      color="white"
                      type="button"
                      className="sc-jlZhew gedcqL text-truncate px-3 undefined btn btn-default"
                    >
                      <span style={{ paddingLeft: "10px" }}>Book Now</span>
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
