import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MenuItem from "@mui/material/MenuItem";
import { avatarLetters } from "../../helper/helper";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);

  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar disableGutters sx={{ height: 69 }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: "flex" }}
          >
            Organisations
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Button
              sx={{
                color: "white",
                fontWeight: 400,
                fontSize: 12,
                "& .MuiButton-endIcon": { ml: 0 },
                display: { xs: "none", sm: "inline-flex" },
              }}
              endIcon={<ArrowRightIcon />}
            >
              English (USA)
            </Button>
            <Box component="span" sx={{ display: { xs: "none", sm: "block" } }}>
              |
            </Box>
            <Typography
              variant="small"
              sx={{ px: 1, display: { xs: "none", sm: "block" } }}
            >
              University of London
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                <Avatar
                  sx={{
                    backgroundColor: "#ecf0f3",
                    color: "prePrimary.main",
                    fontSize: 22,
                  }}
                >
                  {avatarLetters("Muhammad")}
                </Avatar>
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting}>
                    <Typography variant="small" textAlign="center">
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
