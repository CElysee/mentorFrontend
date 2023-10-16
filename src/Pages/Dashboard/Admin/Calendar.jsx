import React from "react";
import "../Dashboard.css";
import SideMenu from "../Admin/SideMenu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosInstance";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { ToastContainer, toast } from "react-toastify";
import RiseLoader from "react-spinners/RiseLoader";
import Select from "react-select";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#e55812",
  paddingRight: "10px",
};
function Calendar() {
  const [bookingData, setBookingData] = useState([]);
  const [events, setEvents] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission
  const [color, setColor] = useState("#fff");
  const [mentorId, setMentorId] = useState("");
  const [mentorUsers, setMentorUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/auth/all_mentors");
        setMentorUsers(response.data);
      } catch (error) {
        console.error("Error fetching mentor data:", error);
      }
    };

    fetchData();
  }, []);

  const mentorsOptions = mentorUsers.map((mentor) => ({
    value: mentor.id,
    label: mentor.name,
  }));

  const mentorSelect = (selectedOptions) => {
    const selectedMentor = selectedOptions.map((option) => option.value);
    setMentorId(selectedMentor);
    const dataUrl = `/ScheduleBookings/mentor_calendar_all`;
    const fetchData = async () => {
      const arrayToConvert = selectedMentor;
      const convertedString = arrayToConvert.toString();
      const data = {
        user_id: convertedString,
      };
      axiosInstance
        .post(dataUrl, data, {
          headers: {
            accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          console.log(response.data);
          setEvents(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
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
            <div className="form-group col-md-4">
              <label className="form-label" htmlFor="country_iso">
                Filter Mentors
              </label>
              <Select
                name="languages_id"
                className="basic-multi-select"
                isMulti
                options={mentorsOptions}
                value={mentorsOptions.filter((option) =>
                  mentorId.includes(option.value)
                )}
                onChange={mentorSelect}
              />
            </div>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              editable={true}
              selectable={true}
              selectMirror={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
