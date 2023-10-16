import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Dashboard.css";
import SideMenu from "../Admin/SideMenu";
import axiosInstance from "../../../axiosInstance";
import "../Mentee/Mentee.css";
import Logo from "../../../assets/images/mentorlogo.svg";

function Bookings() {
  const { id } = useParams();
  const [bookings, setBookings] = useState([]);
  const imageBaseUrl = import.meta.env.VITE_REACT_APP_API;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestUrl = `/BookMentor/list/all`;
        const responseProfile = await axiosInstance.get(requestUrl);
        setBookings(responseProfile.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(bookings);
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
                        The session timings are following your schedules
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
                  <nav
                    className="Member__TabWrapper-sc-ium6kc-0 tcqie nav nav-tabs"
                    id="myTab"
                    role="tablist"
                  >
                    <a
                      className="nav-item nav-link active"
                      id="upcoming-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#upcoming"
                      type="button"
                      role="tab"
                      aria-controls="upcoming"
                      aria-selected="true"
                    >
                      <span>Upcoming</span>
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="history-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#history"
                      type="button"
                      role="tab"
                      aria-controls="history"
                      aria-selected="false"
                    >
                      <span>History</span>
                    </a>
                  </nav>

                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      id="upcoming"
                      aria-labelledby="upcoming-tab"
                      className="fade tab-pane active show active"
                    >
                      {bookings ? (
                        <>
                          {bookings.map((item, index) => (
                            <div
                              className="sc-bizigk kpPxit"
                              id={index}
                              key={index}
                            >
                              <div className="sc-eFRcpv jCTTTR">
                                <div className="item__photo">
                                  <img
                                    src={`${imageBaseUrl}/UserProfiles/${item.profile_picture}`}
                                    className="img-fit rounded-circle"
                                    alt={item.name}
                                    title={item.name}
                                    width="100%"
                                    height="100%"
                                  />
                                </div>
                                <div className="item__content">
                                  <div className="d-flex justify-content-between mb-12">
                                    <p className="sc-kAyceB cCBfKf progress__title font-weight-600">
                                      {item.name}
                                    </p>
                                    <p className="sc-jXbUNg kFsvSZ progress__target grey-2-text text-nowrap">
                                      works at {item.company} as{" "}
                                      {item.company_title}
                                    </p>
                                  </div>
                                  <p className="sc-jXbUNg kFsvSZ grey-2-text mt-12">
                                    Booking session is scheduled on{" "}
                                    <strong>{item.schedule_date}</strong> at{" "}
                                    <strong>
                                      {
                                        item.booking.mentorBookingScheduleSlots
                                          .slot_time
                                      }
                                    </strong>
                                  </p>
                                  <p className="sc-jXbUNg kFsvSZ grey-2-text mt-12">
                                    Status:{" "}
                                    <strong>
                                      {item.booking.schedule_status}
                                    </strong>
                                  </p>
                                  <div className="sc-etVdmn CiLZB my-2 my-md-0">
                                    <span className="dot d-block"></span>
                                    <div className="d-flex align-items-center">
                                      <div>
                                        <svg
                                          width="18"
                                          height="18"
                                          viewBox="0 0 16 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="mr-2"
                                        >
                                          <g clipPath="url(#clip0_391_4528)">
                                            <mask
                                              id="path-1-inside-1_391_4528"
                                              fill="white"
                                            >
                                              <path d="M1.83413 12.9998C1.77055 12.9984 1.70758 12.9872 1.64746 12.9665C1.54672 12.9244 1.46203 12.8513 1.40568 12.7577C1.34934 12.6642 1.32427 12.5552 1.33413 12.4465C1.54067 10.5331 2.41899 8.75494 3.81296 7.42811C5.20693 6.10127 7.02623 5.31172 8.94746 5.19979V3.49979C8.94655 3.40294 8.97379 3.30792 9.02586 3.22626C9.07793 3.1446 9.1526 3.07982 9.2408 3.03979C9.33057 3.00353 9.42868 2.99306 9.52409 3.00955C9.61949 3.02604 9.7084 3.06884 9.7808 3.13312L14.5075 7.45312C14.5579 7.49993 14.5982 7.55666 14.6258 7.61975C14.6533 7.68284 14.6675 7.75095 14.6675 7.81979C14.6675 7.88864 14.6533 7.95674 14.6258 8.01983C14.5982 8.08293 14.5579 8.13965 14.5075 8.18646L9.7808 12.5131C9.70881 12.5775 9.61972 12.6197 9.52429 12.6345C9.42886 12.6493 9.33117 12.6362 9.24304 12.5967C9.1549 12.5573 9.08009 12.4931 9.02763 12.412C8.97518 12.3309 8.94734 12.2364 8.94746 12.1398V10.0731C8.60953 10.0255 8.26873 10.001 7.92746 9.99979C6.82561 9.99279 5.7373 10.2428 4.74898 10.73C3.76067 11.2173 2.89959 11.9282 2.23413 12.8065C2.18652 12.867 2.12576 12.9158 2.05645 12.9493C1.98714 12.9828 1.91111 13.0001 1.83413 12.9998ZM7.92746 8.99979C8.4692 8.99987 9.0096 9.05347 9.5408 9.15979C9.65439 9.1839 9.75645 9.24582 9.83031 9.33542C9.90417 9.42502 9.94547 9.53702 9.94746 9.65312V10.9865L13.4275 7.79979L9.94746 4.66646V5.67979C9.94746 5.8124 9.89478 5.93958 9.80102 6.03334C9.70725 6.12711 9.58007 6.17979 9.44746 6.17979C7.98456 6.17718 6.55603 6.62315 5.35444 7.45758C4.15286 8.29201 3.236 9.47479 2.72746 10.8465C4.1901 9.63925 6.03103 8.98548 7.92746 8.99979Z"></path>
                                            </mask>
                                            <path
                                              d="M1.83413 12.9998C1.77055 12.9984 1.70758 12.9872 1.64746 12.9665C1.54672 12.9244 1.46203 12.8513 1.40568 12.7577C1.34934 12.6642 1.32427 12.5552 1.33413 12.4465C1.54067 10.5331 2.41899 8.75494 3.81296 7.42811C5.20693 6.10127 7.02623 5.31172 8.94746 5.19979V3.49979C8.94655 3.40294 8.97379 3.30792 9.02586 3.22626C9.07793 3.1446 9.1526 3.07982 9.2408 3.03979C9.33057 3.00353 9.42868 2.99306 9.52409 3.00955C9.61949 3.02604 9.7084 3.06884 9.7808 3.13312L14.5075 7.45312C14.5579 7.49993 14.5982 7.55666 14.6258 7.61975C14.6533 7.68284 14.6675 7.75095 14.6675 7.81979C14.6675 7.88864 14.6533 7.95674 14.6258 8.01983C14.5982 8.08293 14.5579 8.13965 14.5075 8.18646L9.7808 12.5131C9.70881 12.5775 9.61972 12.6197 9.52429 12.6345C9.42886 12.6493 9.33117 12.6362 9.24304 12.5967C9.1549 12.5573 9.08009 12.4931 9.02763 12.412C8.97518 12.3309 8.94734 12.2364 8.94746 12.1398V10.0731C8.60953 10.0255 8.26873 10.001 7.92746 9.99979C6.82561 9.99279 5.7373 10.2428 4.74898 10.73C3.76067 11.2173 2.89959 11.9282 2.23413 12.8065C2.18652 12.867 2.12576 12.9158 2.05645 12.9493C1.98714 12.9828 1.91111 13.0001 1.83413 12.9998ZM7.92746 8.99979C8.4692 8.99987 9.0096 9.05347 9.5408 9.15979C9.65439 9.1839 9.75645 9.24582 9.83031 9.33542C9.90417 9.42502 9.94547 9.53702 9.94746 9.65312V10.9865L13.4275 7.79979L9.94746 4.66646V5.67979C9.94746 5.8124 9.89478 5.93958 9.80102 6.03334C9.70725 6.12711 9.58007 6.17979 9.44746 6.17979C7.98456 6.17718 6.55603 6.62315 5.35444 7.45758C4.15286 8.29201 3.236 9.47479 2.72746 10.8465C4.1901 9.63925 6.03103 8.98548 7.92746 8.99979Z"
                                              fill="#212121"
                                            ></path>
                                            <path
                                              d="M1.64746 12.9665L1.26194 13.8892L1.29141 13.9015L1.32161 13.9119L1.64746 12.9665ZM1.33413 12.4465L0.339904 12.3391L0.338986 12.3476L0.338213 12.3562L1.33413 12.4465ZM8.94746 5.19979L9.00562 6.1981L9.94746 6.14323V5.19979H8.94746ZM8.94746 3.49979H9.94751L9.94742 3.49039L8.94746 3.49979ZM9.2408 3.03979L8.86632 2.11256L8.84674 2.12046L8.82751 2.12919L9.2408 3.03979ZM9.7808 3.13312L10.4554 2.39498L10.4501 2.39014L10.4448 2.38538L9.7808 3.13312ZM14.5075 7.45312L15.1873 6.71977L15.1821 6.71498L14.5075 7.45312ZM14.5075 8.18646L15.1827 8.9241L15.1873 8.91979L14.5075 8.18646ZM9.7808 12.5131L10.4475 13.2585L10.456 13.2508L9.7808 12.5131ZM8.94746 12.1398L9.94746 12.1411V12.1398H8.94746ZM8.94746 10.0731H9.94746V9.20417L9.08701 9.08291L8.94746 10.0731ZM7.92746 9.99979L7.92111 10.9998L7.92392 10.9998L7.92746 9.99979ZM2.23413 12.8065L3.01998 13.4249L3.02564 13.4177L3.03117 13.4104L2.23413 12.8065ZM1.83413 12.9998L1.81262 13.9996L1.82156 13.9998L1.83051 13.9998L1.83413 12.9998ZM9.5408 9.15979L9.74846 8.18152L9.73706 8.17924L9.5408 9.15979ZM9.94746 9.65312H10.9475V9.64454L10.9473 9.63596L9.94746 9.65312ZM9.94746 10.9865H8.94746V13.2581L10.6228 11.724L9.94746 10.9865ZM13.4275 7.79979L14.1028 8.5373L14.915 7.79354L14.0966 7.05664L13.4275 7.79979ZM9.94746 4.66646L10.6166 3.92331L8.94746 2.42046V4.66646H9.94746ZM9.94746 5.67979H10.9475H9.94746ZM9.44746 6.17979L9.44567 7.17979H9.44746V6.17979ZM2.72746 10.8465L1.78983 10.4988L0.498032 13.9832L3.36401 11.6177L2.72746 10.8465ZM7.92746 8.99979L7.91992 9.99979L7.92731 9.99979L7.92746 8.99979ZM1.85563 12C1.89571 12.0009 1.93541 12.008 1.97331 12.021L1.32161 13.9119C1.47975 13.9664 1.6454 13.996 1.81262 13.9996L1.85563 12ZM2.03299 12.0438C2.12849 12.0837 2.20879 12.153 2.26221 12.2416L0.549161 13.2739C0.715276 13.5495 0.964958 13.7651 1.26194 13.8892L2.03299 12.0438ZM2.26221 12.2416C2.31563 12.3303 2.33939 12.4337 2.33004 12.5367L0.338213 12.3562C0.309152 12.6767 0.383046 12.9982 0.549161 13.2739L2.26221 12.2416ZM2.32835 12.5538C2.5095 10.8757 3.27983 9.31614 4.50241 8.15244L3.12351 6.70377C1.55816 8.19374 0.571842 10.1905 0.339904 12.3391L2.32835 12.5538ZM4.50241 8.15244C5.72499 6.98874 7.32061 6.29626 9.00562 6.1981L8.8893 4.20148C6.73186 4.32717 4.68887 5.2138 3.12351 6.70377L4.50241 8.15244ZM9.94746 5.19979V3.49979H7.94746V5.19979H9.94746ZM9.94742 3.49039C9.94833 3.58724 9.92109 3.68226 9.86902 3.76392L8.1827 2.68859C8.02648 2.93357 7.94478 3.21865 7.94751 3.50919L9.94742 3.49039ZM9.86902 3.76392C9.81695 3.84558 9.74228 3.91036 9.65408 3.95039L8.82751 2.12919C8.56293 2.24927 8.33892 2.44361 8.1827 2.68859L9.86902 3.76392ZM9.61527 3.96703C9.53241 4.00049 9.44184 4.01016 9.35377 3.99494L9.6944 2.02416C9.41553 1.97596 9.12873 2.00657 8.86632 2.11256L9.61527 3.96703ZM9.35377 3.99494C9.26571 3.97972 9.18364 3.94021 9.11681 3.88087L10.4448 2.38538C10.2332 2.19746 9.97328 2.07236 9.6944 2.02416L9.35377 3.99494ZM9.10616 3.87127L13.8328 8.19127L15.1821 6.71498L10.4554 2.39498L9.10616 3.87127ZM13.8276 8.18646C13.7771 8.13966 13.7368 8.08293 13.7093 8.01983L15.5422 7.21967C15.4596 7.03038 15.3388 6.8602 15.1873 6.71979L13.8276 8.18646ZM13.7093 8.01983C13.6817 7.95673 13.6675 7.88863 13.6675 7.81979H15.6675C15.6675 7.61327 15.6249 7.40896 15.5422 7.21967L13.7093 8.01983ZM13.6675 7.81979C13.6675 7.75096 13.6817 7.68285 13.7093 7.61975L15.5422 8.41991C15.6249 8.23062 15.6675 8.02631 15.6675 7.81979H13.6675ZM13.7093 7.61975C13.7368 7.55665 13.7771 7.49993 13.8276 7.45312L15.1873 8.91979C15.3388 8.77938 15.4596 8.6092 15.5422 8.41991L13.7093 7.61975ZM13.8323 7.44883L9.10559 11.7755L10.456 13.2508L15.1827 8.92409L13.8323 7.44883ZM9.11413 11.7678C9.18612 11.7034 9.27521 11.6612 9.37063 11.6464L9.67795 13.6226C9.96423 13.5781 10.2315 13.4516 10.4475 13.2585L9.11413 11.7678ZM9.37063 11.6464C9.46606 11.6315 9.56375 11.6447 9.65189 11.6841L8.83419 13.5094C9.0986 13.6278 9.39166 13.6672 9.67795 13.6226L9.37063 11.6464ZM9.65189 11.6841C9.74002 11.7236 9.81484 11.7878 9.86729 11.8689L8.18798 12.9551C8.34534 13.1984 8.56978 13.3909 8.83419 13.5094L9.65189 11.6841ZM9.86729 11.8689C9.91974 11.95 9.94759 12.0445 9.94746 12.1411L7.94746 12.1385C7.94708 12.4282 8.03062 12.7118 8.18798 12.9551L9.86729 11.8689ZM9.94746 12.1398V10.0731H7.94746V12.1398H9.94746ZM9.08701 9.08291C8.70401 9.02894 8.31778 9.00117 7.93101 8.9998L7.92392 10.9998C8.21969 11.0008 8.51504 11.0221 8.80792 11.0633L9.08701 9.08291ZM7.93381 8.99981C6.67647 8.99183 5.43459 9.27715 4.30682 9.83311L5.19115 11.627C6.04 11.2085 6.97474 10.9938 7.92111 10.9998L7.93381 8.99981ZM4.30682 9.83311C3.17905 10.3891 2.19645 11.2004 1.43709 12.2025L3.03117 13.4104C3.60272 12.6561 4.3423 12.0454 5.19115 11.627L4.30682 9.83311ZM1.44828 12.188C1.49463 12.1291 1.55379 12.0816 1.62128 12.049L2.49162 13.8497C2.69773 13.75 2.87842 13.6048 3.01998 13.4249L1.44828 12.188ZM1.62128 12.049C1.68877 12.0163 1.7628 11.9995 1.83775 11.9998L1.83051 13.9998C2.05942 14.0006 2.28551 13.9493 2.49162 13.8497L1.62128 12.049ZM7.92731 9.99979C8.40319 9.99986 8.8779 10.0469 9.34453 10.1403L9.73706 8.17924C9.14129 8.05999 8.5352 7.99988 7.92762 7.99979L7.92731 9.99979ZM9.33315 10.138C9.22546 10.1151 9.1287 10.0564 9.05868 9.97149L10.6019 8.69935C10.3842 8.43519 10.0833 8.25267 9.74844 8.18159L9.33315 10.138ZM9.05868 9.97149C8.98865 9.88654 8.9495 9.78036 8.94761 9.67029L10.9473 9.63596C10.9414 9.29367 10.8197 8.9635 10.6019 8.69935L9.05868 9.97149ZM8.94746 9.65312V10.9865H10.9475V9.65312H8.94746ZM10.6228 11.724L14.1028 8.5373L12.7521 7.06229L9.27212 10.249L10.6228 11.724ZM14.0966 7.05664L10.6166 3.92331L9.27834 5.40961L12.7583 8.54294L14.0966 7.05664ZM8.94746 4.66646V5.67979H10.9475V4.66646H8.94746ZM8.94746 5.67979C8.94746 5.54718 9.00014 5.42 9.09391 5.32624L10.5081 6.74045C10.7894 6.45915 10.9475 6.07762 10.9475 5.67979H8.94746ZM9.09391 5.32624C9.18768 5.23247 9.31485 5.17979 9.44746 5.17979V7.17979C9.84529 7.17979 10.2268 7.02175 10.5081 6.74045L9.09391 5.32624ZM9.44925 5.17979C7.78184 5.17681 6.15361 5.68513 4.78405 6.63621L5.92484 8.27895C6.95845 7.56117 8.18728 7.17754 9.44567 7.17979L9.44925 5.17979ZM4.78405 6.63621C3.41449 7.58729 2.36945 8.93542 1.78983 10.4988L3.6651 11.1941C4.10254 10.0142 4.89123 8.99673 5.92484 8.27895L4.78405 6.63621ZM3.36401 11.6177C4.64548 10.56 6.25839 9.98723 7.91992 9.99976L7.93501 7.99982C5.80368 7.98374 3.73471 8.71849 2.09091 10.0752L3.36401 11.6177Z"
                                              fill="var(--green)"
                                              mask="url(#path-1-inside-1_391_4528)"
                                            ></path>
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_391_4528">
                                              <rect
                                                width="18"
                                                height="18"
                                                fill="white"
                                              ></rect>
                                            </clipPath>
                                          </defs>
                                        </svg>
                                      </div>
                                      <p className="sc-jXbUNg kFsvSZ">
                                        Check Profile
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <EmptyBooking />
                      )}
                    </div>
                    <div
                      role="tabpanel"
                      id="history"
                      aria-labelledby="history-tab"
                      className="fade tab-pane"
                    >
                      <div
                        style={{
                          transition:
                            "opacity 400ms ease 0s, transform 400ms ease 0s",
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function EmptyBooking() {
  return (
    <>
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
              You have no upcoming bookings - start sharing a conversation with
              a mentor.
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
    </>
  );
}
export default Bookings;
