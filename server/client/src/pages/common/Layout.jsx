import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "components/Sidebar";

const Layout = () => {
  return (
    <Box display="flex" width="100%" height="100%">
      <Sidebar drawerWidth="250px" />
      <Box flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
