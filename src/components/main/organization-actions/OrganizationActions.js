import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SearchForm from "../../UI/form/SearchForm";

const OrganizationActions = () => {
  return (
    <Box sx={{ mb: 2.5 }} component="section">
      <Container maxWidth="md">
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={5} md={4}>
            <div className="mb-10">
              <SearchForm placeholder="Organization Search" />
            </div>
          </Grid>
          <Grid item xs={12} sm="auto" md>
            <Button
              sx={{ ml: { md: 2.8 } }}
              variant="outlined"
              className="fullwidth-xs mb-10"
            >
              Advance Search
            </Button>
          </Grid>
          <Grid item xs={12} sm="auto">
            <Button variant="contained" className="fullwidth-xs">
              New Organization
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OrganizationActions;
