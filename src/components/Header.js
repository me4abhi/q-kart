import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const username = localStorage.getItem("username");
  const history = useHistory();

  const logoutUser = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>

      {children}

      {hasHiddenAuthButtons ? (
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={() => {
            history.push("/");
          }}
        >
          Back to explore
        </Button>
      ) : username ? (
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          alignItems="center"
        >
          <Avatar src="public/avatar.png" alt={username} />
          <p style={{ color: "black" }}>{username}</p>
          <Button
            className="explore-button"
            variant="text"
            onClick={logoutUser}
          >
            LOGOUT
          </Button>
        </Stack>
      ) : (
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Button
            className="explore-button"
            variant="text"
            onClick={() => {
              history.push("/login");
            }}
          >
            LOGIN
          </Button>
          <Button
            className="explore-button"
            variant="button"
            onClick={() => {
              history.push("/register");
            }}
          >
            REGISTER
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default Header;
