import React from "react";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import CallElementProps from "../../interface/CallElementProps.tsx";
import { Box, IconButton, Typography } from "@mui/material";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import CallReceivedOutlinedIcon from "@mui/icons-material/CallReceivedOutlined";

const CallLogElement = (props: CallElementProps) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      backgroundColor={(theme) =>
        theme.palette.mode === "light"
          ? "#fff"
          : theme.palette.background.default
      }
      p={"10px"}
      sx={{ borderRadius: 1 }}
    >
      <Box width={"30%"}>
        <img
          src={props.img}
          alt={props.name}
          width={"50px"}
          height={"50px"}
          style={{ "border-radius": "10px" }}
        />
      </Box>

      <Box width={"60%"}>
        <Box>
          <Typography>{props.name}</Typography>
          <Box>
            {props.incoming ? (
              <CallReceivedOutlinedIcon
                sx={{ color: props.missed ? "red" : "green" }}
              />
            ) : (
              <CallMadeOutlinedIcon
                sx={{ color: props.missed ? "red" : "green" }}
              />
            )}
            <Typography variant="caption" display={"inline-flex"}>
              Yesterday 21:34
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box width={"10%"}>
        <IconButton>
          <PhoneOutlinedIcon sx={{ color: "green" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CallLogElement;
