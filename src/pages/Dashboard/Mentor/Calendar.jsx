import React from "react";
import "../Dashboard.css";
import SideMenu from "../Mentor/SideMenu";
import Paper from "@mui/material/Paper";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosInstance";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  DragDropProvider,
} from "@devexpress/dx-react-scheduler-material-ui";

const PREFIX = "Demo";
// #FOLD_BLOCK
export const classes = {
  container: `${PREFIX}-container`,
  text: `${PREFIX}-text`,
  formControlLabel: `${PREFIX}-formControlLabel`,
};
// #FOLD_BLOCK
const StyledDiv = styled("div")(({ theme }) => ({
  [`&.${classes.container}`]: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  [`& .${classes.text}`]: theme.typography.h6,
  [`& .${classes.formControlLabel}`]: {
    ...theme.typography.caption,
    fontSize: "1rem",
  },
}));

const currentDate = "2018-06-27";

function Calendar() {
  const [bookingData, setBookingData] = useState([]);
  const data_test = [
    {
      title: "Website Re-Design Plan",
      startDate: "2023-09-13 10:10",
      endDate: "2023-09-13 11:10",
      id: 0,
      location: "Room 1",
    },
    {
      title: "Book Flights to San Fran for Sales Trip",
      startDate: "2023-09-13T19:07:07",
      endDate: "2023-09-13T19:07:07",
      id: 1,
      location: "Room 1",
    },
    {
      title: "Install New Router in Dev Room",
      startDate: new Date(2018, 5, 25, 14, 30),
      endDate: new Date(2018, 5, 25, 15, 35),
      id: 2,
      location: "Room 2",
    },
  ];
  useEffect(() => {
    // alert("Yes")
    const fetchBookingData = async () => {
      try {
        const response = await axiosInstance.get("/ScheduleBookings/list");
        // Convert date strings in the response data
        const convertedData = response.data.map((item) => {
          if (item.endDate && typeof item.endDate === "string") {
            const dateParts = item.endDate.split(' ');
            if (dateParts.length === 2) {
              const [datePart, timePart] = dateParts;
              const [year, month, day] = datePart.split('-').map(Number);
              const [hours, minutes] = timePart.split(':').map(Number);
        
              if (!isNaN(year) && !isNaN(month) && !isNaN(day) && !isNaN(hours) && !isNaN(minutes)) {
                const date = new Date(year, month - 1, day, hours, minutes);
        
                const options = {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  second: 'numeric',
                  timeZoneName: 'short',
                  timeZone: 'Africa/Kigali', // Central Africa Time
                };
        
                const formattedDate = date.toLocaleString('en-US', options);
                return { ...item, endDate: formattedDate };
              }
            }
          }
        
          // If the date cannot be parsed or is missing, return the item as is
          return item;
        });

        setBookingData(convertedData);
        console.log(convertedData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchBookingData();
  }, []);
  // console.log(data_test);
  const [data, setData] = React.useState(data_test);
  const [editingOptions, setEditingOptions] = React.useState({
    allowAdding: true,
    allowDeleting: true,
    allowUpdating: true,
    allowDragging: true,
    allowResizing: true,
  });
  const [addedAppointment, setAddedAppointment] = React.useState({});
  const [isAppointmentBeingCreated, setIsAppointmentBeingCreated] =
    React.useState(false);

  const {
    allowAdding,
    allowDeleting,
    allowUpdating,
    allowResizing,
    allowDragging,
  } = editingOptions;

  const onCommitChanges = React.useCallback(
    ({ added, changed, deleted }) => {
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        setData([...data, { id: startingAddedId, ...added }]);
      }
      if (changed) {
        setData(
          data.map((appointment) =>
            changed[appointment.id]
              ? { ...appointment, ...changed[appointment.id] }
              : appointment
          )
        );
      }
      if (deleted !== undefined) {
        setData(data.filter((appointment) => appointment.id !== deleted));
      }
      setIsAppointmentBeingCreated(false);
    },
    [setData, setIsAppointmentBeingCreated, data]
  );
  const onAddedAppointmentChange = React.useCallback((appointment) => {
    setAddedAppointment(appointment);
    setIsAppointmentBeingCreated(true);
  });
  const handleEditingOptionsChange = React.useCallback(({ target }) => {
    const { value } = target;
    const { [value]: checked } = editingOptions;
    setEditingOptions({
      ...editingOptions,
      [value]: !checked,
    });
  });

  const TimeTableCell = React.useCallback(
    React.memo(({ onDoubleClick, ...restProps }) => (
      <WeekView.TimeTableCell
        {...restProps}
        onDoubleClick={allowAdding ? onDoubleClick : undefined}
      />
    )),
    [allowAdding]
  );

  const CommandButton = React.useCallback(
    ({ id, ...restProps }) => {
      if (id === "deleteButton") {
        return (
          <AppointmentForm.CommandButton
            id={id}
            {...restProps}
            disabled={!allowDeleting}
          />
        );
      }
      return <AppointmentForm.CommandButton id={id} {...restProps} />;
    },
    [allowDeleting]
  );

  const allowDrag = React.useCallback(
    () => allowDragging && allowUpdating,
    [allowDragging, allowUpdating]
  );
  const allowResize = React.useCallback(
    () => allowResizing && allowUpdating,
    [allowResizing, allowUpdating]
  );
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
                  <div className="mb-4" style={{ maxWidth: "536px" }}>
                    <h1 className="mb-4">Let's setup your calendar!</h1>
                    <p>
                      This set up allows you to see your bookings directly into
                      your calendar. Once setup, members on Mentor.rw will find
                      your available times and book directly on the platform
                      where you can manage.
                    </p>
                  </div>
                </div>
              </div>

              <React.Fragment>
                <Paper>
                  <Scheduler data={data} height={800}>
                    <ViewState currentDate={currentDate} />
                    <EditingState
                      onCommitChanges={onCommitChanges}
                      addedAppointment={addedAppointment}
                      onAddedAppointmentChange={onAddedAppointmentChange}
                    />

                    <IntegratedEditing />
                    <WeekView
                      startDayHour={9}
                      endDayHour={19}
                      timeTableCellComponent={TimeTableCell}
                    />

                    <Appointments />

                    <AppointmentTooltip
                      showOpenButton
                      showDeleteButton={allowDeleting}
                    />
                    <AppointmentForm
                      commandButtonComponent={CommandButton}
                      readOnly={
                        isAppointmentBeingCreated ? false : !allowUpdating
                      }
                    />
                    <DragDropProvider
                      allowDrag={allowDrag}
                      allowResize={allowResize}
                    />
                  </Scheduler>
                </Paper>
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
