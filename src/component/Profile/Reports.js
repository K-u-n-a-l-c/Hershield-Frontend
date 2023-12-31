import { useMemo, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';


const Users = () => {
    const [rowId, setRowId] = useState(null);
    const rows = [
        {
          id: "google.com",
          name: 'Olivier',
          email:'sqjbsqi',
          role: 'Pending',
          active:'',
          createdAt:'121212'
        },
        {
          id: "google.com",
          name: 'Olivier',
          email:'sqjbsqi',
          status:"In Progress",
          active:"",
          createdAt:'121212'
        },
        {
          id: 3,
          name: 'Olivier',
          email:'sqjbsqi',
          status:"Completed",
          active:"",
          createdAt:'121212'
        },
      ];

  const [pageSize, setPageSize] = useState(5);
  

  const columns = useMemo(
    () => [
      { field: 'name', headerName: 'Name', width: 170 },
      { field: 'email', headerName: 'Email', width: 200 },
      {
        field: 'status',
        headerName: 'Status',
        width: 150
      },
      {
        field: "id",
        headerName: "ID",
        width: 150,
        renderCell: (params) => 
          <a href={`/viewwitnesscomplain/${params.row.id}`}>{`${params.row.id}`}</a>,
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        width: 200,
        renderCell: (params) =>
          moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS'),
      },
    ],
    [rowId]
  );

  return (
    <Box>
    <Box sx={{display:'flex', justifyContent:'center'}}>
    <Box sx={{width:'85%'}}>
        <Box sx={{height:'79vh'}}>
      <DataGrid
        columns={columns}
        rows={rows}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },}}
          pageSizeOptions={[5, 10, 25]}
        onCellEditStop={(params) => {setRowId(params.id)
        console.log(params)}}
      />
      </Box>
    </Box>
    </Box>
    </Box>
  );
};

export default Users;

