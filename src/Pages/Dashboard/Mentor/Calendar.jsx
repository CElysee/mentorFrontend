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
import { ToastContainer, toast } from "react-toastify";
import RiseLoader from "react-spinners/RiseLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#e55812",
  paddingRight: "10px",
};
function Calendar() {
  // const [events, setEvents] = React.useState([
  //   { title: "Event 1", date: "2023-10-05" },
  //   { title: "Event 2", date: "2023-10-06" },
  // ]);
  const { id } = useParams();
  const [bookingData, setBookingData] = useState([]);
  const [events, setEvents] = useState([]);
  const [modalContent, setModalContent] = useState(""); // Content for the modal
  const [startDate, setStartDate] = useState("");
  const [slotTime, setSlotTime] = useState([]);
  const [formFields, setFormFields] = useState([{ id: 1, value: "" }]);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission
  const [color, setColor] = useState("#fff");

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
  }, [id, formSubmitted]);

  const handleEventClick = (eventClickInfo) => {
    // Set the modal content to the event's details
    setModalContent(eventClickInfo.event.title);

    // Toggle the Bootstrap modal display
    const modal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    modal.toggle();
  };
  const handleDateClick = (info) => {
    // Handle the date click event
    // console.log("Date clicked:", info.dateStr);
    setStartDate(info.dateStr);
    // Toggle the Bootstrap modal display
    const modal = new window.bootstrap.Modal(
      document.getElementById("addSchedules")
    );
    modal.toggle();
  };

  const handleAddField = (e) => {
    e.preventDefault();
    const newId = formFields[formFields.length - 1].id + 1;
    const newField = { id: newId, value: "" };
    setFormFields([...formFields, newField]);
  };

  const handleRemoveField = (id) => {
    const updatedFields = formFields.filter((field) => field.id !== id);
    setFormFields(updatedFields);
  };

  const handleInputChange = (id, event) => {
    const updatedFields = formFields.map((field) =>
      field.id === id ? { ...field, value: event.target.value } : field
    );
    setFormFields(updatedFields);
  };

  const addNewSchedules = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fieldValuesArray = formFields.map((field) => field.value);
    const scheduleData = new FormData();
    scheduleData.append("user_id", id);
    scheduleData.append("startDate", startDate);
    scheduleData.append("endDate", startDate);
    scheduleData.append("booking_title", "Mentor Platform");
    scheduleData.append("slot_time", fieldValuesArray);
    console.log(Object.fromEntries(scheduleData.entries()));
    console.log(fieldValuesArray);
    try {
      const submitData = await axiosInstance.post(
        "/ScheduleBookings/add",
        scheduleData,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log("Response:", submitData.data.message);
      setLoading(false);
      setFormSubmitted(true);
      notify(submitData.data.message, "success");
      document.querySelector(".modal-backdrop").style.display = "none";
      document.querySelector(".timeModal").style.display = "none";
    } catch (error) {
      setLoading(false)
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error Response:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error Request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error:", error.message);
      }
    }
  };
  const notify = (message, type) => {
    if (type === "success") {
      toast.success(message, {
        icon: "👏",
      });
    } else if (type === "error") {
      toast.error(message, {
        icon: "😬",
      });
    }
  };
  return (
    <>
      <div className="Layout__Wrapper-sc-2tn75p-0 fBYEGj">
        <ToastContainer autoClose={4000} />
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
              dateClick={handleDateClick}
              eventClick={handleEventClick}
            />
            {/* Modal for editing schedules */}
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
            {/* Modal for adding schedules */}
            <div
              className="modal fade timeModal"
              id="addSchedules"
              tabIndex="-1"
              aria-labelledby="addSchedulesLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="addSchedulesLabel">
                      Add new schedule to {startDate}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <form
                    className="py-lg mx-auto"
                    style={{ width: "100%" }}
                    onSubmit={addNewSchedules}
                  >
                    <div className="modal-body">
                      <p className="mb-3">
                        <b>Click on the clock icon to pick time</b>
                      </p>
                      {formFields.map((field) => (
                        <div className="time_slot_form" key={field.id}>
                          <div className="form-group">
                            <label className="form-label" htmlFor="name">
                              Slot Time
                            </label>
                            <input
                              type="time"
                              className="appt"
                              id="appt"
                              name="appt"
                              min="07:00"
                              max="18:00"
                              onChange={(event) =>
                                handleInputChange(field.id, event)
                              }
                            />
                          </div>
                          {formFields.length > 1 && (
                            <>
                              <button
                                onClick={() => handleRemoveField(field.id)}
                                className="btn time_button"
                              >
                                <svg
                                  width="30px"
                                  height="30px"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />

                                  <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                      d="M17 12C17 11.4477 16.5523 11 16 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44771 13 8 13H16C16.5523 13 17 12.5523 17 12Z"
                                      fill="#000000"
                                    />{" "}
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
                                      fill="#000000"
                                    />{" "}
                                  </g>
                                </svg>
                              </button>
                            </>
                          )}

                          <button
                            onClick={handleAddField}
                            className="btn time_button"
                          >
                            <svg
                              width="30px"
                              height="30px"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />

                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                />{" "}
                                <path
                                  d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                />{" "}
                              </g>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                    <div
                      className="sc-eldPxv efrIaS justify-content-end"
                      width="1714"
                      style={{ padding: "15px" }}
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
                        type="submit"
                        className="sc-jlZhew gedcqL text-truncate px-3 undefined btn btn-default"
                      >
                        <span style={{ paddingLeft: "10px" }}>
                          {loading ? (
                            <>
                              <RiseLoader
                                color={color}
                                loading={loading}
                                cssOverride={override}
                                size={10}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                            </>
                          ) : (
                            "Add Slot"
                          )}
                        </span>
                      </button>
                    </div>
                  </form>
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
