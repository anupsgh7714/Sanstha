import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Rating } from "@mui/material";

const columns = [
  {
    field: "srNo",
    headerName: "Sr No",
    width: 80,
    // sortable: false,
    // renderCell: (params) => (
    //   <img
    //     src={params.value}
    //     height="30"
    //     width="30"
    //     style={{ marginLeft: "10px" }}
    //     alt="product"
    //   />
    // ),
  },
  {
    field: "name",
    headerName: "Name",
    sortable: false,
    // flex: 1,
    minWidth: 130,
  },
  { field: "email", headerName: "Email",  width: 250 },
  { field: "mobileNo", headerName: "Mobile Number", width: 200 },
  {
    field: "year",
    headerName: "year",
    width: 130,
    // valueFormatter: ({ value }) => value.rate,
    // renderCell: (params) => (
    //   <Rating
    //     size="small"
    //     readOnly
    //     defaultValue={params.value.rate}
    //     precision={0.5}
    //   />
    // ),
    // sortComparator: (a, b) => {
    //   if (a.rate > b.rate) return 1;
    //   if (a.rate < b.rate) return -1;
    //   if (a.rate === b.rate) return 0;
    // },
  },
  { field: "month", headerName: "Month", width: 130 },
  { field: "date", headerName: "Date", width: 130 },
  { field: "amount", headerName: "Amount", width: 130 },
];


const DataTable = ({ products }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid 
        getRowId={(row) => row.srNo}
        rows={products}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        // disableColumnMenu
        // disableSelectionOnClick
      />
    </div>
  );
};

export default DataTable;
