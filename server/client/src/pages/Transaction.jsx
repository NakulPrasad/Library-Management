import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "services/api";
import Header from "components/Header";

const Transactions = () => {
  const theme = useTheme();

  const { data } = useGetTransactionsQuery();
  // console.log(data);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      minWidth: 250,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 150,
    },
    {
      field: "bookID",
      headerName: "Book ID",
      minWidth: 150,
    },
    {
      field: "outstanding",
      headerName: "Outstanding",
      minWidth: 150,
    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 150,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      minWidth: 150,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="TRANSCTIONS" subtitle="List of Transactions" />
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
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Transactions;
