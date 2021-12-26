import { Box, Container } from "@mui/material";
import React from "react";
import About from "./about/About";
import Info from "./info/Info";
import OrganizationActions from "./organization-actions/OrganizationActions";

const Main = () => {
  return (
    <Box sx={{ pt: 2.5, pb: 4.25 }} component="main">
      <OrganizationActions />
      <About />
      <Info />
    </Box>
  );
};

export default Main;
