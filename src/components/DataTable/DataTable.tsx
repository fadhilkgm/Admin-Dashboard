import { Link } from "react-router-dom";
import "./DataTable.scss";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
type Props = {
  columns:GridColDef[],
  rows:object[],
  slug:string
}
const handleDelete = (id:number)=>{
  console.log(id+" deleted")
}
const DataTable = (props:Props) => {
  const actionColumn:GridColDef={
    field:"action",
    headerName:"Action",
    width:200,
    renderCell:(params)=>{
      return <div className="action">
        <Link to={`/${props.slug}/${params.row.id}`}>
        <img src="./view.svg" alt="view" /> 
        </Link>
        <Link to="/">
        <img src="./delete.svg" alt="delete" onClick={()=>handleDelete(params.row.id)} /> 
        </Link>
      </div>
    }
  }
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={props.rows}
        columns={[...props.columns,actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default DataTable;
