import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Dashboard.css";
import SideMenu from "../Admin/SideMenu";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import axiosInstance from "../../../axiosInstance";
import 'primereact/resources/themes/lara-light-indigo/theme.css'

function Users() {
  const [data, setData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(true);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [globalFilter, setGlobalFilter] = useState("");

  useEffect(() => {
    // Fetch data from your API endpoint
    // Replace 'API_ENDPOINT' with your actual API endpoint
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/auth/all");
        // console.log(response.data)
        setData(response.data); // Set the data
        setTotalRecords(response.data.length); // Set the total number of records
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  const getStatusColor = (accountStatus) => {
    return accountStatus ? 'account_status_active' : 'account_status_inactive';
  };
  const statusBodyTemplate = (rowData) => {
    const color = getStatusColor(rowData.account_status);
    return <span className={color}>{rowData.account_status ? 'Active' : 'Inactive'}</span>;
  };
  const header = (
    <div className="datatable_search gap-2">
    <h4 className="m-0">Customers</h4>
    <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText value={globalFilter} onChange={e => setGlobalFilter(e.target.value)} placeholder="Keyword Search" />
    </span>
</div>
  );
  return (
    <div className="Layout__Wrapper-sc-2tn75p-0 fBYEGj">
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
            <DataTable value={data} globalFilter={globalFilter} totalRecords={totalRecords}  header={header} sortMode="multiple" paginator rows={10} rowsPerPageOptions={[10, 25, 50, 100]} stripedRows tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" sortable header="Name"></Column>
                <Column field="email" sortable header="Email"></Column>
                <Column field="phone_number" sortable header="Phone Number"></Column>
                <Column field="role"  sortable header="Role"></Column>
                <Column field="account_status" sortable header="Account status"  body={statusBodyTemplate} style={{textAlign: "center"}}></Column>
                <Column field="last_login" header="Last login"></Column>
            </DataTable>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Users;
