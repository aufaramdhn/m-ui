import { Mail, Search } from "@mui/icons-material";
import { AppBar, InputBase, Toolbar, Typography, Badge, Avatar, Box, alpha } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "./Navbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CancelIcon from "@mui/icons-material/Cancel";
import React from "react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 600,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  const colorTheme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
      white: "#ffffff",
    },
  });
  return (
    <AppBar sx={{ backgroundColor: colorTheme.palette.primary.main }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            display: "none",
            [theme.breakpoints.up("sm")]: {
              display: "block",
            },
          }}
        >
          Atsumu Dev
        </Typography>
        <Typography
          variant="h6"
          sx={{
            display: "block",
            [theme.breakpoints.up("sm")]: {
              display: "none",
            },
          }}
        >
          ATSUMU
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: alpha(colorTheme.palette.white, 0.15),
            // opacity: 0.15,
            "&:hover": {
              backgroundColor: alpha(colorTheme.palette.white, 0.25),
              // opacity: 0.25,
            },
            borderRadius: 2,
            width: "50%",
            [theme.breakpoints.down("sm")]: {
              display: open ? "flex" : "none",
              width: "70%",
            },
          }}
        >
          <Search color={colorTheme.palette.white} sx={{ marginLeft: 2 }} />
          <InputBase placeholder="Search..." sx={{ marginLeft: 2, width: "100%" }} />
          <CancelIcon
            sx={{
              [theme.breakpoints.up("sm")]: {
                display: open ? "flex" : "none",
                width: "30%",
              },
            }}
            onClick={() => setOpen(false)}
          />
        </Box>
        <Box
          sx={{
            alignItems: "center",
            display: open ? "none" : "flex",
          }}
        >
          <Search
            sx={{
              marginRight: 2,
              [theme.breakpoints.up("sm")]: {
                display: "none",
              },
            }}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" sx={{ marginRight: 2 }}>
            <Mail color="white" />
          </Badge>
          <Badge badgeContent={4} color="secondary" sx={{ marginRight: 2 }}>
            <NotificationsIcon color="white" />
          </Badge>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
