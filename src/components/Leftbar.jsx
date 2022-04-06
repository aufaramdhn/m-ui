import {
  Bookmark,
  CameraAlt,
  Home,
  ListAlt,
  Logout,
  Person,
  PhoneAndroid,
  PlayCircleOutlineSharp,
  Settings,
  Storefront,
} from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { createTheme } from "@mui/material/styles";

const Leftbar = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 800,
        md: 900,
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
    <Container
      sx={{
        paddingTop: 10,
        backgroundColor: colorTheme.palette.primary.main,
        height: "100vh",
        color: colorTheme.palette.white,
        position: "sticky",
        top: 0,
        [theme.breakpoints.up("sm")]: {
          backgroundColor: colorTheme.palette.white,
          color: "#555",
          border: "1px solid #ece7e7",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 3,
          [theme.breakpoints.up("sm")]: {
            marginBottom: 4,
          },
        }}
      >
        <Home
          sx={{
            marginRight: 1,
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: { display: "none" },
          }}
        >
          Homepage
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 3,
          [theme.breakpoints.up("sm")]: {
            marginBottom: 4,
          },
        }}
      >
        <Person
          sx={{
            marginRight: 1,
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: { display: "none" },
          }}
        >
          Friends
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 3,
          [theme.breakpoints.up("sm")]: {
            marginBottom: 4,
          },
        }}
      >
        <ListAlt
          sx={{
            marginRight: 1,
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: { display: "none" },
          }}
        >
          Lists
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 3,
          [theme.breakpoints.up("sm")]: {
            marginBottom: 4,
          },
        }}
      >
        <CameraAlt
          sx={{
            marginRight: 1,
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: { display: "none" },
          }}
        >
          Camera
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 3,
          [theme.breakpoints.up("sm")]: {
            marginBottom: 4,
          },
        }}
      >
        <PlayCircleOutlineSharp
          sx={{
            marginRight: 1,
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: { display: "none" },
          }}
        >
          Videos
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 3,
          [theme.breakpoints.up("sm")]: {
            marginBottom: 4,
          },
        }}
      >
        <PhoneAndroid
          sx={{
            marginRight: 1,
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: { display: "none" },
          }}
        >
          Apps
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 3,
          [theme.breakpoints.up("sm")]: {
            marginBottom: 4,
          },
        }}
      >
        <Bookmark
          sx={{
            marginRight: 1,
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: { display: "none" },
          }}
        >
          Collections
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 3,
          [theme.breakpoints.up("sm")]: {
            marginBottom: 4,
          },
        }}
      >
        <Storefront
          sx={{
            marginRight: 1,
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: { display: "none" },
          }}
        >
          Market Place
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 3,
          [theme.breakpoints.up("sm")]: {
            marginBottom: 4,
          },
        }}
      >
        <Settings
          sx={{
            marginRight: 1,
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: { display: "none" },
          }}
        >
          Settings
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 3,
          [theme.breakpoints.up("sm")]: {
            marginBottom: 4,
          },
        }}
      >
        <Logout
          sx={{
            marginRight: 1,
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: { display: "none" },
          }}
        >
          Logout
        </Typography>
      </Box>
    </Container>
  );
};

export default Leftbar;
