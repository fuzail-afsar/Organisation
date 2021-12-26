import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ShowMoreText from "react-show-more-text";

const About = () => {
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };
  return (
    <Box sx={{ mb: 1.875 }} component="section">
      <Container maxWidth="md">
        <Box
          sx={{
            px: 2.5,
            py: 0.5,
            bgcolor: "secondary.main",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        >
          <Typography
            sx={{ color: "common.white" }}
            variant="h6"
            component="h1"
          >
            About Organization
          </Typography>
        </Box>
        <Box
          sx={{
            px: 2.5,
            py: 2,
            bgcolor: "common.white",
            borderRight: 1,
            borderBottom: 1,
            borderLeft: 1,
            borderColor: "secondary.borderLight",
          }}
        >
          <Typography component="div" variant="body2">
            <ShowMoreText
              lines={1}
              more="Read More"
              less="Read Less"
              anchorClass="text-decoration-none font-bold"
              onClick={onClick}
              expanded={expand}
              truncatedEndingComponent=" "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </ShowMoreText>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
