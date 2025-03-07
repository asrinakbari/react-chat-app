import React from "react";
import messageProps from "../../interface/messageProps.tsx";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import ChatOpentions from "./chatOpentions.tsx";

const MediaMsg = (props: messageProps) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={props.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: props.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={1}>
          <img
            src={props.img}
            alt={props.message}
            style={{ maxHeight: 210, borderRadius: "10px" }}
          />
          <Typography
            variant="body2"
            color={props.incoming ? theme.palette.text : "#fff"}
          >
            {props.message}
          </Typography>
        </Stack>
      </Box>
      {props.menu && <ChatOpentions />}
    </Stack>
  );
};

export default MediaMsg;
