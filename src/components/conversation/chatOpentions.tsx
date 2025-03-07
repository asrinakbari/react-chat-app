import { ListItemText, Menu, MenuItem } from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import React, { useState } from "react";

const ChatOpentions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MoreVertOutlinedIcon
        onClick={handleClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
          <ListItemText>Reply</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>React to message</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Forward message</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Star message</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Report</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Delete message</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ChatOpentions;
