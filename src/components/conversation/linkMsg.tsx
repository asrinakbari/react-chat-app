import React from "react";
import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import messageProps from "../../../interfaces/messageProps.tsx";
import ChatOpentions from "./chatOpentions.tsx";

const LinkMsg = (props: messageProps) => {
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
            alignItems="start"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <img
              src={props.preview}
              alt={props.message}
              style={{ maxHeight: 210, borderRadius: "10px" }}
            />
            <Stack spacing={2}>
              <Typography variant="subtitle2">Creating Chat App</Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: theme.palette.primary.main,
                }}
                component={Link}
                to="//https://www.youtube.com"
              >
                www.youtube.com
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              color={props.incoming ? "black" : theme.palette.text}
            >
              {props.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <ChatOpentions />
    </Stack>
  );
};

export default LinkMsg;
