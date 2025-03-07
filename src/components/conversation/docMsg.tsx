import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import messageProps from "../../../interfaces/messageProps.tsx";
import React from "react";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ChatOpentions from "./chatOpentions.tsx";

const DocMsg = (props: messageProps) => {
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
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            direction="row"
            alignItems="center"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            {/* <img size={48} /> */}
            <FileDownloadOutlinedIcon />
            <Typography variant="caption">Abstract.png</Typography>
            <IconButton>
              <BrokenImageOutlinedIcon />
            </IconButton>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              color: props.incoming ? "white" : theme.palette.text,
            }}
          >
            {props.message}
          </Typography>
        </Stack>
      </Box>
      <ChatOpentions />
    </Stack>
  );
};

export default DocMsg;
