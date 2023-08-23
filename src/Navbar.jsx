import * as React from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { RiAccountCircleFill } from "react-icons/Ri";
import Button from "@mui/material/Button";
import { AiOutlineShoppingCart } from "react-icons/Ai";

import { BsMic } from "react-icons/Bs";

import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { GrMoreVertical } from "react-icons/Gr";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function NavBar({ cart, handleSearch }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [transcript, setTranscript] = useState("");
  const recognition = new window.webkitSpeechRecognition();
  const startRecognition = async () => {
    recognition.start();
    recognition.lang = "en-US";

    recognition.onresult = async (event) => {
      const speechResult = await event.results[0][0].transcript;
      setTranscript(speechResult);
      handleSearch(speechResult);
    };
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => navigate("/account")}>My Account</MenuItem>
      <MenuItem onClick={logOut}>Log out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          onClick={() => navigate("/cart")}
        >
          <Badge badgeContent={cart} color="error">
            <AiOutlineShoppingCart />
          </Badge>
        </Button>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Button
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <RiAccountCircleFill />
        </Button>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="success">
        <Toolbar>
          <Typography
            onClick={() => navigate("/products")}
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { cursor: "pointer" } }}
            id="website-name"
          >
            Eagle<span>Mart</span>
          </Typography>
          <input
            value={transcript}
            onChange={(e) => {
              handleSearch(e.target.value);
              setTranscript(e.target.value);
            }}
            onClick={() => navigate("/products")}
            className="search-bar"
            placeholder="Search Products"
          />
          <Button
            size="large"
            color="inherit"
            onClick={startRecognition}
            className="voice-button"
          >
            <BsMic size="25px" />
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              size="large"
              color="inherit"
              width=" 50%"
              onClick={() => navigate("/products")}
            >
              <sapn>Products</sapn>
            </Button>
            <Button
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => navigate("/cart")}
            >
              <Badge badgeContent={cart} color="error">
                <AiOutlineShoppingCart size="25px" />
              </Badge>
            </Button>
            <Button
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <RiAccountCircleFill size="25px" />
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Button
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <GrMoreVertical size="25px" />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
