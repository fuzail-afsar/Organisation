import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import RoleActions from "./RoleActions";
import RolesAvailable from "./RolesAvailable";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const availableRoles = {
  0: {
    id: 0,
    title: "Static Data (MM only)",
    items: {
      0: {
        id: 0,
        title: "View data",
      },
      1: {
        id: 1,
        title: "Manage data",
      },
      2: {
        id: 2,
        title: "Add data",
      },
      3: {
        id: 3,
        title: "Delete data",
      },
    },
  },
  1: {
    id: 1,
    title: "Organisations (MM only)",
    items: {
      0: {
        id: 0,
        title: "View organisations",
      },
      1: {
        id: 1,
        title: "Manage organisations",
      },
    },
  },
  2: {
    id: 2,
    title: "Users",
    items: {
      0: {
        id: 0,
        title: "View Users",
      },
      1: {
        id: 1,
        title: "Manage Users",
      },
    },
  },
  3: {
    id: 3,
    title: "Question Creation (MM only)",
    items: {
      0: {
        id: 0,
        title: "View question",
      },
      1: {
        id: 1,
        title: "Manage question",
      },
    },
  },
  4: {
    id: 4,
    title: "Question Creation",
    items: {
      0: {
        id: 0,
        title: "View question",
      },
      1: {
        id: 1,
        title: "Manage question",
      },
    },
  },
};
const assignRolesData = {
  0: {
    id: 0,
    title: "Static Data (MM only)",
    items: {
      0: {
        id: 0,
        title: "View data",
      },
      1: {
        id: 1,
        title: "Manage data",
      },
    },
  },
  1: {
    id: 1,
    title: "Organisations (MM only)",
    items: {},
  },
  2: {
    id: 2,
    title: "Users",
    items: {},
  },
  3: {
    id: 3,
    title: "Question Creation (MM only)",
    items: {},
  },
  4: {
    id: 4,
    title: "Question Creation",
    items: {},
  },
};

const Roles = () => {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [assignRoles, setAssignRoles] = useState(assignRolesData);

  const roleItemClickHandler = (roleId, roleItemId, itemTitle) =>
    setSelectedRoles((prevSelectedRoles) => [
      ...prevSelectedRoles,
      { roleId, roleItemId, itemTitle },
    ]);

  const assignClickHandler = () => {
    const assignRolesClone = { ...assignRoles };
    selectedRoles.map(
      ({ roleId, roleItemId, itemTitle }) =>
        (assignRolesClone[roleId].items[roleItemId] = {
          id: roleItemId,
          title: itemTitle,
        })
    );
    setAssignRoles(assignRolesClone);
    setSelectedRoles([]);
  };

  const rescindClickHandler = () => {
    const assignRolesClone = { ...assignRoles };
    selectedRoles.map(
      ({ roleId, roleItemId }) =>
        delete assignRolesClone[roleId].items[roleItemId]
    );
    setAssignRoles(assignRolesClone);
    setSelectedRoles([]);
  };

  return (
    <Grid container flexDirection="column" justifyContent="space-between">
      <Grid item xs={12} sx={{ minHeight: { md: 470 } }}>
        <Grid container>
          <Grid item xs={12} sm={6} md={5} sx={{ mb: { xs: 2.25, sm: 0 } }}>
            <RolesAvailable
              title="Available Roles"
              roles={availableRoles}
              onRoleItemClick={roleItemClickHandler}
            />
          </Grid>
          <Grid item xs={12} sx={{ order: { xs: 1, md: 0 } }} md={2}>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  md: "column",
                  sm: "row-reverse",
                  xs: "column",
                },
                justifyContent: "center",
                height: "100%",
                pt: { xs: 2.25 },
                px: { xs: 2, sm: 0 },
              }}
            >
              <Button
                size="small"
                variant="contained"
                className="fullwidth-xs"
                sx={{
                  mb: { xs: 1.25, sm: 0, md: 1.25 },
                  mx: { xs: 0, sm: 0.5, md: 0 },
                }}
                endIcon={<ArrowForwardIcon />}
                onClick={assignClickHandler}
              >
                Assign
              </Button>
              <Button
                size="small"
                variant="contained"
                className="fullwidth-xs"
                sx={{ mx: { xs: 0, sm: 0.625, md: 0 } }}
                startIcon={<ArrowBackIosIcon />}
                onClick={rescindClickHandler}
              >
                Rescind
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <RolesAvailable
              title="Assign Roles"
              roles={assignRoles}
              onRoleItemClick={roleItemClickHandler}
              isAssign={true}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <RoleActions />
      </Grid>
    </Grid>
  );
};

export default Roles;
