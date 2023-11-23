import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Dashboard.css";
import SideMenu from "../Admin/SideMenu";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import axiosInstance from "../../../axiosInstance";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { ToastContainer, toast } from "react-toastify";
import RiseLoader from "react-spinners/RiseLoader";
import Select from "react-select";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#e55812",
  paddingRight: "10px",
};
function Users() {
  const [data, setData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(true);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [globalFilter, setGlobalFilter] = useState("");
  const [responseError, setResponseError] = useState("");
  const [color, setColor] = useState("#fff");
  const [showpassword, setShowPassword] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [userStatus, setUserStatus] = useState("");
  const [userId, setUserId] = useState("");
  const [dataSubmit, setDataSubmit] = useState(false);

  const [userDetails, setUserDetails] = useState({
    password: "",
    name: "",
    email: "",
    phone_number: "",
    profile_picture: null,
    country_id: "",
  });
  useEffect(() => {
    // Fetch data from your API endpoint
    // Replace 'API_ENDPOINT' with your actual API endpoint
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/auth/all");
        const countryApi = await axiosInstance.get("country/list");
        setCountryData(countryApi.data);
        // console.log(response.data)
        setData(response.data); // Set the data
        setTotalRecords(response.data.length); // Set the total number of records
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dataSubmit]);

  const profileBodyTemplate = (rowData) => {
    return rowData.role === "mentor" ? (
      <Link
        to={`/mentorProfile/${rowData.id}`}
        target="_blank"
        className="account_status_active sc-jlZhew cKRinY text-truncate w-100 btn--default btn btn-default"
      >
        View Profile
      </Link>
    ) : (
      ""
    );
  };

  const getCellClass = (value) => {
    return value === true ? "account_status_active" : "account_status_inactive";
  };

  const columns = [
    {
      field: "account_status",
      header: "Account Status",
      body: (rowData) => (
        <div
          className={getCellClass(rowData.account_status)}
          data-bs-toggle="modal"
          data-bs-target="#UpdateUserStatusLabel"
          onClick={() => setUserId(rowData.id)}
        >
          {rowData.account_status == true ? "Active" : "Inactive"}
        </div>
      ),
    },
    // Other columns...
  ];

  function handleShowPassword(e) {
    setShowPassword(!showpassword);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "profile_picture") {
      setUserDetails({
        ...userDetails,
        profile_picture: e.target.files[0],
      });
      console.log(userDetails.profile_picture);
    } else {
      setUserDetails({
        ...userDetails,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    setIsSubmitDisabled(
      userDetails.email.trim() === "" ||
        userDetails.name.trim() === "" ||
        userDetails.password.trim() === "" ||
        userDetails.phone_number.trim() === "" ||
        userDetails.country_id.length > 0 ||
        userDetails.profile_picture.length > 0
    );
  }, [userDetails]);

  const countryOptions = countryData.map((country) => ({
    value: country.id,
    label: country.name,
  }));

  const handleCountryChange = (selectedOptions) => {
    const selectedCountry = selectedOptions.value;
    setUserDetails({
      ...userDetails,
      country_id: selectedCountry,
    });
  };
  const addNewAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formElement = e.target; // Get the form element
    const dataForm = new FormData(formElement);

    // console.log(Object.fromEntries(dataForm.entries()));
    const profilePictureFile = dataForm.get("profile_picture");
    const profilePictureFileName = profilePictureFile.name;

    const dataSignUp = new FormData();
    dataSignUp.append("name", userDetails.name);
    dataSignUp.append("email", userDetails.email);
    dataSignUp.append("password", userDetails.password);
    dataSignUp.append("phone_number", userDetails.phone_number);
    dataSignUp.append("profile_picture", userDetails.profile_picture);
    dataSignUp.append("country_id", userDetails.country_id);

    // console.log(signUpData)
    console.log(Object.fromEntries(dataSignUp.entries()));

    try {
      const submitForm = await axiosInstance.post(
        "/auth/create_admin",
        dataSignUp,
        {
          headers: {
            // "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(JSON.stringify(submitForm.data));
      setResponseError(submitForm.data.message);
      notify("User successfully created", "success");
      setLoading(false);
      document.querySelector(".modal-backdrop").style.display = "none";
      document.querySelector(".addNewAdmin").style.display = "none";
      // await delay(1000);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // console.log(error.response.data.detail);
        // console.log(error.response.status);
        if (error.response.statu === 406) {
          setLoading(false);
          setResponseError(error.response.data.detail);
          notify(error.response.data.detail, "success");
        } else {
          setLoading(false);
          notify(error.response.data.detail, "error");
        }
      } else if (error.request) {
        // The request was made but no response was received
        // console.log(error.request);
        setResponseError(error.request);
        setLoading(false);
        notify(error.request, "error");
      } else {
        // Something happened in setting up the request that triggered an error
        console.log("Error:", error.message);
        setLoading(false);
        setResponseError(error.message);
        notify(error.request, "error");
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
  const handleUserStatus = (e) => {
    setUserStatus(e.target.value);
  };

  const handleUserStatusChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = `/auth/users/change_status?id=${userId}&status=${userStatus}`;
    console.log(url);
    if (userStatus != ""){
      try {
        const response = await axiosInstance.post(url, {
          headers: { "Content-Type": "application/json" },
        });
        console.log(response.data);
        notify("User status changed successfully", "success");
        setDataSubmit(true);
        document.querySelector(".modal-backdrop").style.display = "none";
        document.querySelector(".UpdateUserStatusLabel").style.display = "none";
      } catch (error) {
        console.error(error);
      }
    }else{
      notify("Please select a status", "error");
    }
  };

  const header = (
    <div className="datatable_search gap-2">
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#addNewAdmin"
        bg="#fff"
        height="50"
        color="var(--grey-1)"
        className="sc-jlZhew klINlq text-truncate py-0 px-3 btn btn-default"
        style={{ marginTop: "15px", fontFamily: "Circular" }}
        border="var(--grey-3)"
      >
        Add new admin
      </button>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Keyword Search"
        />
      </span>
      {/* Modal for adding schedules */}
      <div
        className="modal fade addNewAdmin"
        id="addNewAdmin"
        tabIndex="-1"
        aria-labelledby="addSchedulesLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addSchedulesLabel">
                Add new admin account
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
              onSubmit={addNewAdmin}
            >
              <div className="modal-body">
                <div className="mb-4 form-group">
                  <label className="mb-3 form-label" htmlFor="profile_picture">
                    Upload profile photo *
                  </label>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="sc-enkILE hKKIbj cursor-pointer grey-3-bg mb-2">
                        {userDetails.profile_picture ? (
                          <img
                            src={URL.createObjectURL(
                              userDetails.profile_picture
                            )}
                            alt="Profile"
                            className="profile-image"
                          />
                        ) : (
                          <div className="sc-enkILE hKKIbj icon">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 20 20"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <defs></defs>
                              <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  id="Dribbble-Light-Preview"
                                  transform="translate(-180.000000, -2159.000000)"
                                  fill="#000000"
                                >
                                  <g
                                    id="icons"
                                    transform="translate(56.000000, 160.000000)"
                                  >
                                    <path
                                      d="M134,2008.99998 C131.783496,2008.99998 129.980955,2007.20598 129.980955,2004.99998 C129.980955,2002.79398 131.783496,2000.99998 134,2000.99998 C136.216504,2000.99998 138.019045,2002.79398 138.019045,2004.99998 C138.019045,2007.20598 136.216504,2008.99998 134,2008.99998 M137.775893,2009.67298 C139.370449,2008.39598 140.299854,2006.33098 139.958235,2004.06998 C139.561354,2001.44698 137.368965,1999.34798 134.722423,1999.04198 C131.070116,1998.61898 127.971432,2001.44898 127.971432,2004.99998 C127.971432,2006.88998 128.851603,2008.57398 130.224107,2009.67298 C126.852128,2010.93398 124.390463,2013.89498 124.004634,2017.89098 C123.948368,2018.48198 124.411563,2018.99998 125.008391,2018.99998 C125.519814,2018.99998 125.955881,2018.61598 126.001095,2018.10898 C126.404004,2013.64598 129.837274,2010.99998 134,2010.99998 C138.162726,2010.99998 141.595996,2013.64598 141.998905,2018.10898 C142.044119,2018.61598 142.480186,2018.99998 142.991609,2018.99998 C143.588437,2018.99998 144.051632,2018.48198 143.995366,2017.89098 C143.609537,2013.89498 141.147872,2010.93398 137.775893,2009.67298"
                                      id="profile-[#1341]"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="ml-3">
                      <label
                        htmlFor="profile_picture"
                        className="teal-text text-decoration-none font-weight-600"
                        style={{ cursor: "pointer" }}
                      >
                        Select a file
                      </label>
                      <p className="sc-jXbUNg kFsvSZ grey-2-text mt-1">
                        Make sure the file is below 2mb
                      </p>
                    </div>
                  </div>
                  <input
                    name="profile_picture"
                    type="file"
                    id="profile_picture"
                    className="d-none"
                    accept="image/*"
                    onChange={handleChange} /* Handle value change */
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Your full name *
                  </label>
                  <input
                    name="name"
                    placeholder="First and last name"
                    type="text"
                    id="employer"
                    className="form-control"
                    value={userDetails.name} /* Use state for value */
                    onChange={handleChange} /* Handle value change */
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="country_iso">
                    Which country do you live in? *
                  </label>
                  <Select
                    name="country_id"
                    className="basic-multi-select"
                    options={countryOptions}
                    // onChange={(e) => setCountry(e.target.value)}
                    onChange={handleCountryChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="employer">
                    Email address *
                  </label>
                  <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    id="email"
                    className="form-control"
                    value={userDetails.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="employer">
                    Phone Number *
                  </label>
                  <input
                    name="phone_number"
                    placeholder="0782384772"
                    type="number"
                    id="phone_number"
                    className="form-control"
                    value={userDetails.phone_number}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="password">
                    Create a password *
                  </label>
                  <div className="position-relative d-flex align-items-center input-container">
                    <input
                      name="password"
                      className="form-control password"
                      placeholder="••••••••"
                      title="••••••••"
                      type={showpassword ? "text" : "password"}
                      aria-required="true"
                      value={userDetails.password}
                      onChange={handleChange}
                      autoComplete=""
                    />
                    <div
                      className="cursor-pointer grey-2-text"
                      onClick={handleShowPassword}
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
                          d="M15.1615 12.0531C15.1615 13.7991 13.7455 15.2141 11.9995 15.2141C10.2535 15.2141 8.8385 13.7991 8.8385 12.0531C8.8385 10.3061 10.2535 8.89105 11.9995 8.89105C13.7455 8.89105 15.1615 10.3061 15.1615 12.0531Z"
                          stroke="var(--black)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48891 15.806 4.75092 11.998 4.75092H12.002C8.194 4.75092 4.711 7.48891 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z"
                          stroke="var(--black)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
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
                  disabled={isSubmitDisabled}
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
                    ) : loading ? (
                      "Adding new user"
                    ) : (
                      "Add new user"
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="Layout__Wrapper-sc-2tn75p-0 fBYEGj">
      <ToastContainer autoClose={4000} />
      <div width="1440" className="sc-bddgXz ejKczW container">
        <SideMenu />
        <div className="v2__content p-0">
          <div height="10px" className="sc-fPXMVe dWzyEM"></div>
          <div className="sc-cMRZhK dYqkqL container">
            <div className="child__content">
              <div className="mb-4" style={{ maxWidth: "660px" }}>
                <h1 className="mb-4">Emphasize user management capabilities</h1>
                <p>
                  Manage and control all user accounts from this centralized
                  dashboard.
                </p>
              </div>
            </div>
            <div className="card">
              <DataTable
                value={data}
                globalFilter={globalFilter}
                totalRecords={totalRecords}
                header={header}
                sortMode="multiple"
                paginator
                rows={10}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                rowsPerPageOptions={[10, 25, 50, 100]}
                stripedRows
                tableStyle={{ minWidth: "50rem" }}
              >
                <Column field="name" sortable header="Name"></Column>
                <Column field="email" sortable header="Email"></Column>
                <Column
                  field="phone_number"
                  sortable
                  header="Phone Number"
                ></Column>
                <Column field="role" sortable header="Role"></Column>
                {/* <Column
                  field="account_status"
                  sortable
                  header="Account status"
                  body={statusBodyTemplate}
                  style={{ textAlign: "center" }}
                  
                ></Column> */}
                {columns.map((col) => (
                  <Column
                    key={col.field}
                    field={col.field}
                    header={col.header}
                    body={col.body}
                  />
                ))}
                <Column field="last_login" header="Last login"></Column>
                <Column
                  field=""
                  header="Profile"
                  body={profileBodyTemplate}
                ></Column>
              </DataTable>
            </div>
            <div
              className="modal fade UpdateUserStatusLabel"
              id="UpdateUserStatusLabel"
              tabIndex="-1"
              aria-labelledby="UpdateUserStatusLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="UpdateUserStatusLabel">
                      Update user status
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <form className="py-lg mx-auto" style={{ width: "100%" }}>
                    <div className="modal-body">
                      <div className="form-group">
                        <label className="form-label" htmlFor="voucher_number">
                          Account status
                        </label>
                        <select
                          className="form-control"
                          value={userStatus}
                          onChange={handleUserStatus}
                        >
                          <option>Select Status</option>
                          <option>Approve</option>
                          <option>Reject</option>
                        </select>
                      </div>
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
                        onClick={handleUserStatusChange}
                        disabled={userStatus === "" && "disabled"} 
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
                          ) : loading ? (
                            "Changing Status"
                          ) : (
                            "Change Status"
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
    </div>
  );
}
export default Users;
