import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Dashboard.css";
import SideMenu from "./SideMenu";
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
function Vouchers() {
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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [voucher_number, setVoucherNumber] = useState("");
  const [voucher_amount, setVoucherAmount] = useState("");

  useEffect(() => {
    // Fetch data from your API endpoint
    // Replace 'API_ENDPOINT' with your actual API endpoint
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("BookingVoucher/list");
        // console.log(response.data)
        setData(response.data); // Set the data
        setTotalRecords(response.data.length); // Set the total number of records
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [formSubmitted]);

  const getCellClass = (value) => {
    return value === "Active" ? "active-cell" : "used-cell";
  };

  const columns = [
    {
      field: "voucher_status",
      header: "Voucher Status",
      body: (rowData) => (
        <div className={getCellClass(rowData.voucher_status)}>
          {rowData.voucher_status}
        </div>
      ),
    },
    // Other columns...
  ];

  const DeleteBodyTemplate = (rowData) => {
    return (
      <button
        className="btn used-cell"
        type="submit"
        onClick={() => deleteVoucher(rowData.id)}
      >
        <svg
          fill="#ffff"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
          </g>
        </svg>
      </button>
    );
  };
  const deleteVoucher = (value) => {
    console.log("Yes");
    const deleteUrl = `BookingVoucher/delete?voucher_id=${value}`;
    const deleteRequest = async () => {
      try {
        const deleteRecord = await axiosInstance.delete(deleteUrl);
        notify(deleteRecord.data.message, "success");
        setFormSubmitted(true)
      } catch (error) {
        console.error(error);
        notify(error, "error");
      }
    };
    deleteRequest();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "voucher_number") {
      setVoucherNumber(value);
    } else if (name == "voucher_amount") {
      setVoucherAmount(value);
    }
  };

  useEffect(() => {
    setIsSubmitDisabled(
      voucher_amount.trim() === "" || voucher_number.trim() === ""
    );
  }, [voucher_number, voucher_amount]);

  const createVouchers = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      voucher_number: voucher_number,
      voucher_amount: voucher_amount,
    };
    const submitData = async () => {
      try {
        const submitForm = await axiosInstance.post(
          "/BookingVoucher/create",
          data,
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        setResponseError(submitForm.data.message);
        notify(submitForm.data.message, "success");
        setLoading(false);
        setFormSubmitted(true);
        document.querySelector(".modal-backdrop").style.display = "none";
        document.querySelector(".addNewAdmin").style.display = "none";
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
    submitData();
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
        Add new voucher
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
                Add new voucher
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
              onSubmit={createVouchers}
            >
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label" htmlFor="voucher_number">
                    Number of vouchers
                  </label>
                  <input
                    name="voucher_number"
                    placeholder="100"
                    type="number"
                    id="voucher_number"
                    className="form-control"
                    value={voucher_number} /* Use state for value */
                    onChange={handleChange} /* Handle value change */
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="voucher_amount">
                    Voucher amount
                  </label>
                  <input
                    name="voucher_amount"
                    placeholder="50000"
                    type="number"
                    id="voucher_amount"
                    className="form-control"
                    value={voucher_amount}
                    onChange={handleChange}
                  />
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
                      "Adding new voucher"
                    ) : (
                      "Add new voucher"
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
      <ToastContainer autoClose={1000} />
      <div width="1440" className="sc-bddgXz ejKczW container">
        <SideMenu />
        <div className="v2__content p-0">
          <div height="10px" className="sc-fPXMVe dWzyEM"></div>
          <div className="sc-cMRZhK dYqkqL container">
            <div className="child__content">
              <div className="mb-4" style={{ maxWidth: "660px" }}>
                <h1 className="mb-4">
                  Emphasize voucher management capabilities
                </h1>
                <p>
                  Manage and control all vouchers from this centralized
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
                <Column
                  field="voucher_amount"
                  sortable
                  header="Voucher Amount"
                ></Column>
                <Column
                  field="voucher_code"
                  sortable
                  header="Voucher Code"
                ></Column>
                {columns.map((col) => (
                  <Column
                    key={col.field}
                    field={col.field}
                    header={col.header}
                    body={col.body}
                  />
                ))}
                <Column
                  field="created_at"
                  sortable
                  header="Created At"
                ></Column>
                <Column
                  field="Delete"
                  header="Action"
                  body={DeleteBodyTemplate}
                ></Column>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Vouchers;
