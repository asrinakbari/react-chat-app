import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import React from "react";
import SideBar from "../../components/sideBar.tsx";

const DashboardLayout = () => {
  return (
    <Stack direction="row" sx={{ overflowY: "hidden", overflowX: "hidden" }}>
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
