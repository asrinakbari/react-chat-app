import { Box, Stack, Typography } from "@mui/material";
import messageProps from "../../../interfaces/messageProps.tsx";
import React from "react";
import ChatOpentions from "./chatOpentions.tsx";
import { useTheme } from "@mui/material/styles";

const TextMsg = (props: messageProps) => {
  const theme = useTheme();

  return (
    <Stack
      mt="10px"
      direction="row"
      justifyContent={props.incoming ? "start" : "end"}
    >
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
        <Typography
          variant="body2"
          color={props.incoming ? "#0162C4" : theme.palette.text}
        >
          {props.message}
        </Typography>
      </Box>
      <ChatOpentions />
    </Stack>
  );
};

export default TextMsg;
