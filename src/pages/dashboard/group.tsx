import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { ChatList } from "../../data/index.tsx";
import ChatElement from "../../components/chat/chatElement.tsx";
import CreateGroup from "../../components/group/createGroup.tsx";

const Group = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const onHandleClose = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Stack width={"30%"} direction={"column"} p={"15px"}>
        <Typography fontWeight={"bold"} variant="h6">
          Group
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          size="small"
          type="text"
          name="searchChat"
          placeholder="search"
          sx={{
            borderRadius: "20px",
            marginTop: "10px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          my="20px"
        >
          <Link href="#">Create New Group</Link>
          <IconButton>
            <AddOutlinedIcon onClick={() => setOpenDialog(true)} />
          </IconButton>
        </Box>
        <Divider sx={{ margin: "0px auto", width: "85%" }} />
        <Stack m="10px 0px">
          <Typography>Pinned</Typography>
          {ChatList.filter((el) => el.pinned).map((item) => (
            <ChatElement key={item.id} {...item} />
          ))}
        </Stack>
        <Stack>
          <Typography>All Chats</Typography>
          {ChatList.filter((el) => !el.pinned).map((item) => (
            <ChatElement key={item.id} {...item} />
          ))}
        </Stack>
      </Stack>
      {openDialog && (
        <CreateGroup open={openDialog} handleClose={onHandleClose} />
      )}
    </>
  );
};
export default Group;
