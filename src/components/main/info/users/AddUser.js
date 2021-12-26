import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import React from "react";

const AddUser = () => {
  return (
    <Button
      fullWidth
      variant="contained"
      sx={{ borderRadius: 0, minHeight: 63 }}
      startIcon={<AddCircleIcon />}
    >
      Invite user
    </Button>
  );
};

export default AddUser;
