import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import WallpaperOutlinedIcon from "@mui/icons-material/WallpaperOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { faker } from "@faker-js/faker";

const Settings = () => {
  return (
    <Box width={"300px"} py={"20px"}>
      <Box
        py={"20px"}
        px={"30px"}
        display={"flex"}
        justifyContent={"start"}
        flexDirection={"row"}
      >
        <ArrowBackIosNewOutlinedIcon />
        <Typography marginLeft={3}>Settings</Typography>
      </Box>
      <Box py={"20px"} px={"20px"} display={"flex"} flexDirection={"row"}>
        <img
          src={faker.image.url()}
          alt=""
          width={"50px"}
          height={"50px"}
          style={{ borderRadius: "16px" }}
        />
        <Box px={2} flexDirection={"column"} display={"flex"}>
          <Typography>{faker.name.fullName()}</Typography>
          <Typography>{faker.location.country()}</Typography>
        </Box>
      </Box>
      <Box py={"20px"} px={"20px"}>
        <NotificationsNoneOutlinedIcon />
        <Typography px={2} variant="button">
          Notifications
        </Typography>
      </Box>
      <Divider />
      <Box py={"20px"} px={"20px"}>
        <HttpsOutlinedIcon />
        <Typography px={2} variant="button">
          Privacy
        </Typography>
      </Box>
      <Divider />
      <Box py={"20px"} px={"20px"}>
        <VpnKeyOutlinedIcon />
        <Typography px={2} variant="button">
          Security
        </Typography>
      </Box>
      <Divider />
      <Box py={"20px"} px={"20px"}>
        <WallpaperOutlinedIcon />
        <Typography px={2} variant="button">
          Chat Wallpaper
        </Typography>
      </Box>
      <Divider />
      <Box py={"20px"} px={"20px"}>
        <FeedOutlinedIcon />
        <Typography px={2} variant="button">
          Request Account Info
        </Typography>
      </Box>
      <Divider />
      <Box py={"20px"} px={"20px"}>
        <FeedOutlinedIcon />
        <Typography px={2} variant="button">
          Keyboard Shortcuts
        </Typography>
      </Box>
      <Divider />
      <Box py={"20px"} px={"20px"}>
        <InfoOutlinedIcon />
        <Typography px={2} variant="button">
          Help
        </Typography>
      </Box>
    </Box>
  );
};
export default Settings;
