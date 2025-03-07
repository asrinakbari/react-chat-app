import logo from "../assets/images/icon.ico";
import { useTheme } from "@emotion/react";
import React, { useState } from "react";
import useSettings from "../hooks/useSettings.tsx";
import { useNavigate } from "react-router-dom";

import {
  Stack,
  Box,
  IconButton,
  Divider,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { SettingOutlined } from "@ant-design/icons";

const getMenuPath = (index) => {
  switch (index) {
    case 0:
      return "/profile";

    case 1:
      return "/settings";

    case 2:
      return "/auth/login";

    default:
      break;
  }
};

const getPath = (index) => {
  switch (index) {
    case 0:
      return "/app";
    case 1:
      return "/group";
    case 2:
      return "/call";
    case 3:
      return "/settings";
    default:
      break;
  }
};

const Nav_Buttons = [
  {
    index: 0,
    icon: <MapsUgcOutlinedIcon />,
  },
  {
    index: 1,
    icon: <GroupOutlinedIcon />,
  },
  {
    index: 2,
    icon: <CallOutlinedIcon />,
  },
];

const Profile_Menu = [
  {
    index: 0,
    title: "Profile",
    path: "/profile",
    icon: <AccountCircleOutlinedIcon />,
  },
  {
    index: 1,
    title: "Setting",
    path: "/setting",
    icon: <SettingsOutlinedIcon />,
  },
];

const SideBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    navigate();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      p={2}
      sx={{
        with: "100px",
        height: "100vh",
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        display: "flex",
      }}
    >
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
        height={"100vh"}
        spacing={3}
      >
        <Stack spacing={4} alignItems={"center"}>
          <Box width="64px" height="64px">
            <img src={logo} alt="logo" style={{ borderRadius: "1.5rem" }} />
          </Box>
          <Stack
            sx={{ width: "max-content" }}
            direction="column"
            alignItems="center"
            spacing={3}
          >
            {Nav_Buttons.map((item) =>
              item.index === selected ? (
                <Box
                  key={item.index}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{ width: "max-content", color: "#fff" }}
                    key={item.index}
                  >
                    {item.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(item.index);
                    navigate(getPath(item.index));
                  }}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                  key={item.index}
                >
                  {item.icon}
                </IconButton>
              )
            )}
            <Divider sx={{ width: "48px" }} />
            {selected === 3 ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ width: "max-content", color: "#fff" }}>
                  <SettingOutlined />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  setSelected(3);
                  navigate(getPath(3));
                }}
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
              >
                <SettingOutlined />
              </IconButton>
            )}
          </Stack>
        </Stack>

        <Stack spacing={4} alignItems={"center"}>
          <Switch
            onChange={() => {
              onToggleMode();
            }}
          />
          <Box display="flex" alignItems="center">
            <AccountCircleOutlinedIcon
              onClick={handleClick}
              sx={{ margin: "25px auto 20px ", fontSize: "2.5rem" }}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
              <Stack spacing={1} px={1}>
                {Profile_Menu.map((el, idx) => (
                  <MenuItem
                    key={idx}
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    <Stack
                      onClick={() => {
                        navigate(getMenuPath(idx));
                      }}
                      sx={{ width: 100 }}
                      direction="row"
                      alignItems={"center"}
                      justifyContent="space-between"
                    >
                      <span>{el.title}</span>
                      {el.icon}
                    </Stack>
                  </MenuItem>
                ))}
              </Stack>
            </Menu>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
