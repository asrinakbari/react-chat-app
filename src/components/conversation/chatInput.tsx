import {
  Fab,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  Stack,
  Tooltip,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ImageIcon from "@mui/icons-material/Image";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Actions = [
  {
    color: "#4da5fe",
    icon: <ImageIcon size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#0172e4",
    icon: <CameraAltIcon size={24} />,
    y: 172,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <FilePresentIcon size={24} />,
    y: 242,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <PersonOutlineIcon size={24} />,
    y: 312,
    title: "Contact",
  },
];

const ChatInput = ({ setOpenPicker }) => {
  const [openAction, setOpenAction] = useState(false);
  return (
    <InputBase
      fullWidth
      placeholder="Write a message..."
      inputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            <Stack
              sx={{
                position: "relative",
                display: openAction ? "inline-block" : "none",
              }}
            >
              {Actions.map((el) => (
                <Tooltip placement="right" title={el.title}>
                  <Fab
                    sx={{
                      position: "absolute",
                      top: -el.y,
                      backgroundColor: el.color,
                    }}
                  >
                    {el.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment>
              <IconButton
                onClick={() => {
                  setOpenAction((prev) => !prev);
                }}
              >
                <AttachFileOutlinedIcon />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment>
            <IconButton
              onClick={() => {
                setOpenPicker((prev) => !prev);
              }}
            >
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default ChatInput;
