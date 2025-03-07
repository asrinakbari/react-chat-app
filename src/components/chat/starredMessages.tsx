import { Box, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import React from "react";
import { UpdateSidebarType } from "../../redux/slices/app.tsx";
import { useTheme } from "@mui/material/styles";
import Conversation from "../conversation/conversation.tsx";

const StarredMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box mt={"40px"} width="450px" height="100vh">
      <Stack
        direction="row"
        backgroundColor={
          theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background
        }
        spacing={2}
        alignContent="center"
        ml="40px"
      >
        <ArrowBackIosOutlinedIcon
          onClick={() => dispatch(UpdateSidebarType("CONTACT"))}
        />
        <Typography fontWeight="bold" fontSize="0.9rem">
          Starred Messages
        </Typography>
      </Stack>
      <Box sx={{ display: "inline-block" }}>
        <Conversation />
      </Box>
    </Box>
  );
};
export default StarredMessages;
