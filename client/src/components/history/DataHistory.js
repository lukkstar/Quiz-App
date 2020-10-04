import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  {
    field: "_id",
    headerName: "ID",
    width: 250,
  },
  { field: "resultDate", headerName: "Date", width: 220 },
  { field: "level", headerName: "Level", width: 130 },
  { field: "point", headerName: "Point", width: 130 },
  { field: "category", headerName: "Category", width: 150 },
];

export default function DataTable(props) {
  const data = props.data;
  data.forEach((val, index) => {
    val.id = index;
  });
  return (
    <div style={{ height: 400 }}>
      <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
