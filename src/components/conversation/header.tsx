import { useTheme } from "@emotion/react";
import { ChatList } from "../../data/index.tsx";
import { Box, Divider, IconButton, Stack } from "@mui/material";
import React from "react";
import ProfileBadge from "../profileBadge.tsx";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useDispatch } from "react-redux";
import { ToggleSidebar } from "../../redux/slices/app.tsx";

const Header = ({ userId }: { userId: number }) => {
  const profileData = ChatList.find((item) => item.id === userId.userId);

  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack
        alignItems={"center"}
        direction="row"
        justifyContent={"space-between"}
        sx={{ width: "100%", height: "100%" }}
      >
        <Stack
          onClick={() => {
            dispatch(ToggleSidebar());
          }}
          direction={"row"}
          spacing={2}
        >
          <ProfileBadge {...profileData} />
        </Stack>
        <Stack direction="row" alignItems="center" spacing={3}>
          <IconButton>
            <VideocamOutlinedIcon />
          </IconButton>
          <IconButton>
            <CallOutlinedIcon />
          </IconButton>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton>
            <KeyboardArrowDownOutlinedIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};
export default Header;
