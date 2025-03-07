import { useTheme } from "@emotion/react";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import ProfileBadge from "../profileBadge.tsx";

const ChatElement = (props: ChatElementProps) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        width: "97%",
        borderRadius: 1,
        marginY: 1,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.default,
      }}
      p={2}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <ProfileBadge {...props} />

        <Box p="0px 5px">
          <Typography fontSize="14px">{props.time}</Typography>
          {props.unread !== 0 && (
            <Box
              sx={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                color: "white",
                backgroundColor: "#0162C4",
                margin: "5px auto",
              }}
            >
              <Typography
                p="0px 30%"
                sx={{ fontWeight: "bold", fontSize: "15px" }}
              >
                {props.unread}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default ChatElement;
