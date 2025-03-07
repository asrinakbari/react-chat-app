import { useTheme } from "@emotion/react";
import {
  Box,
  IconButton,
  InputAdornment,
  Popover,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { EmojiEmotions } from "@mui/icons-material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import EmojiPicker from "emoji-picker-react";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import { useSelector } from "react-redux";
import { sendMessage } from "../../DataBase/indexedDb.tsx";

const Footer = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);

  const [anchorEl, setAnchorEl] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const onEmojiClick = (emojiObject) => {
    setInputValue((prev) => prev + emojiObject.emoji);
  };

  const handleClick = () => {
    sendMessage(inputValue);
    setInputValue("");
  };
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
      <Stack direction="row" alignItems={"center"} spacing={3}>
        <Stack sx={{ width: "100%" }}>
          <Box
            sx={{
              zIndex: 10,
              width: "46.5%",
              position: "fixed",
              bottom: 10,
              left: 430,
            }}
          >
            <TextField
              value={inputValue}
              variant="outlined"
              onChange={(event) => setInputValue(event.target.value)}
              sx={{
                width: sidebar.open
                  ? "calc(100vw - 840px)"
                  : "calc(100vw - 520px)",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <AttachFileOutlinedIcon />
                  </InputAdornment>
                ),

                endAdornment: (
                  <IconButton onClick={handleOpen}>
                    <EmojiEmotions />
                  </IconButton>
                ),
              }}
            ></TextField>
          </Box>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </Popover>
        </Stack>

        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton>
              <SendOutlinedIcon
                sx={{
                  color: "white",
                  padding: "auto",
                  margin: "12px 10px",
                  transform: "rotate(-35deg)",
                }}
                onClick={handleClick}
              />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
export default Footer;
