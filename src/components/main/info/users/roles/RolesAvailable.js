import { Card, CardHeader, Typography, Box } from "@mui/material";
import React, { useState } from "react";

import Role from "./Role";

const RolesAvailable = ({
  roles,
  title = "",
  onRoleItemClick,
  isAssign = false,
}) => {
  const [expanded, setExpanded] = useState(0);
  const roleChangeHandler = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box sx={{ px: { md: 3, xs: 2 } }}>
      <Card
        square
        sx={{
          borderTop: 1,
          borderLeft: 1,
          borderRight: 1,
          borderColor: "secondary.border",
        }}
      >
        <CardHeader
          sx={{
            bgcolor: isAssign ? "background.alternate" : "prePrimary.main",
            py: 1.25,
            borderBottom: 1,
            borderColor: "common.white",
          }}
          title={
            <Typography
              variant="subtitle2"
              align="center"
              color={!isAssign && "common.white"}
            >
              {title}
            </Typography>
          }
        />
        <div>
          {Object.values(roles).map((role) => (
            <Role
              key={role.id}
              {...role}
              onChangeRole={roleChangeHandler}
              expanded={expanded}
              onRoleItemClick={onRoleItemClick}
            />
          ))}
        </div>
      </Card>
    </Box>
  );
};

export default RolesAvailable;
