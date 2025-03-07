import { Box, Stack, Typography, useTheme } from "@mui/material";
import messageProps from "../../../interfaces/messageProps.tsx";
import React from "react";
import ChatOpentions from "./chatOpentions.tsx";

const ReplyMsg = (props: messageProps) => {
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
            direction="column"
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" color={theme.palette.text}>
              {props.message}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color={props.incoming ? "#000" : theme.palette.text}
          >
            {props.reply}
          </Typography>
        </Stack>
      </Box>
      <ChatOpentions />
    </Stack>
  );
};

export default ReplyMsg;
