import { Box, Avatar, Typography } from "@mui/material";
import ChatElementProps from "../interface/chatElementProps.tsx";
import React from "react";
import OnlineBadge from "./onlineBadge.tsx";

const ProfileBadge = (props: ChatElementProps) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      p={1}
      sx={{ overflowX: "hidden" }}
    >
      <Box sx={{ position: "relative", display: "inline-block" }}>
        <Avatar
          alt="profile"
          src={props.img ?? ""}
          sx={{ width: "60px", height: "60px" }}
        />
        {props.online && <OnlineBadge />}
      </Box>
      <Box m="0px 20px">
        <Typography fontSize="14px" fontWeight="bold">
          {props.name}
        </Typography>
        <Typography mt="5px" fontSize="12px">
          {props.msg}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileBadge;
