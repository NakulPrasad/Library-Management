import React from "react";
import { Box, useTheme, Button } from "@mui/material";
import { useGetMembersQuery, useDeleteMemberMutation } from "services/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const Members = () => {
  const theme = useTheme();
  const { data } = useGetMembersQuery();
  const [deleteMember] = useDeleteMemberMutation();
  const navigate = useNavigate();
  // console.log("data", data);
  const columns = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.25,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 150,
      flex: 0.25,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      minWidth: 150,
      flex: 0.25,
    },

    {
      field: "bookIssued",
      headerName: "Book Issued",
      minWidth: 150,
      flex: 0.25,
    },
    {
      field: "edit",
      headerName: "Edit",
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleEdit(params.row._id)}
        >
          Edit
        </Button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleDelete(params.row._id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  const handleEdit = (id) => {
    // Call your API to delete member from the database
    // console.log(id);
    navigate(`/management/edit/member/${id}`);
  };

  const handleDelete = (id) => {
    deleteMember(id);
    alert("Member Deleted Successfully");
  };
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Members" subtitle="List of Members" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
        }}
      >
        <DataGrid
          loading={!data}
          getRowId={(row) => row._id} //generates column id //required by DataGrid
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Members;
