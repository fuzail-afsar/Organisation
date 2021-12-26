import { Box, Button } from "@mui/material";
import React from "react";

const RoleActions = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.alternateLight",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: { xs: "center", sm: "flex-end" },
        alignItems: "center",
        px: { xs: 2, sm: 3 },
        py: 2,
        mt: 3,
        minHeight: 63,
      }}
    >
      <Button
        variant="outlined"
        className="fullwidth-xs"
        sx={{ mb: { xs: 1.25, sm: 0 } }}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        className="fullwidth-xs"
        sx={{ ml: { sm: 1.25 } }}
      >
        Update
      </Button>
    </Box>
  );
};

export default RoleActions;
