import React from "react";
import Tabs from "../../UI/tabs/Tabs";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Users from "./users/Users";

const Info = () => {
  return (
    <section>
      <Container maxWidth="md">
        <Box
          sx={{
            width: "100%",
            backgroundColor: "common.white",
            p: 1.5,
            border: 1,
            borderColor: "secondary.borderLight",
          }}
        >
          <Tabs
            id="info"
            tabs={[
              {
                label: "Basic information",
                content: <Users />,
              },
              {
                label: "Users",
                content: <Users />,
              },
              {
                label: "Notes",
                content: <Users />,
              },
            ]}
          />
        </Box>
      </Container>
    </section>
  );
};
export default Info;
