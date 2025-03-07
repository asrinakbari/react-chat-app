import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import CallElementProps from "../../interface/CallElementProps.tsx";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import OnlineBadge from "../onlineBadge.tsx";

const CallElement = (props: CallElementProps) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      padding={"10px 15px"}
      marginY={"5px"}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.default,
      }}
    >
      <Box sx={{ position: "relative", display: "inline-block" }}>
        <Avatar
          alt="profile"
          src={props.img ?? ""}
          sx={{ width: "45px", height: "45px" }}
        />
        {props.online && <OnlineBadge />}
      </Box>
      <Box m="0px 20px">
        <Typography fontSize="14px" fontWeight="bold">
          {props.name}
        </Typography>
      </Box>
      <Stack direction="row" alignItems="center">
        <IconButton>
          <CallOutlinedIcon sx={{ color: "green" }} />
        </IconButton>
        <IconButton>
          <VideocamOutlinedIcon sx={{ color: "green" }} />
        </IconButton>
      </Stack>
    </Box>
  );
};
export default CallElement;
