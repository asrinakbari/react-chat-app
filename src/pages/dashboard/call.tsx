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
import { CallLogs } from "../../data/index.tsx";
import StartCall from "../../components/call/StartCall.tsx";
import CallLogElement from "../../components/call/CallLogElement.tsx";

const Call = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const onCloseHandler = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Stack
        width={"30%"}
        direction={"column"}
        p={"15px"}
        backgroundColor={(theme) =>
          theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background
        }
      >
        <Typography fontWeight={"bold"} variant="h6">
          Call Log
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
          <Link href="#">Start Conversation</Link>
          <IconButton>
            <AddOutlinedIcon onClick={() => setOpenDialog(true)} />
          </IconButton>
        </Box>
        <Divider sx={{ margin: "0px auto", width: "85%" }} />
        <Stack m="10px 0px">
          {CallLogs.filter((el) => el.pinned).map((item) => (
            <CallLogElement key={item.id} {...item} />
          ))}
        </Stack>
      </Stack>
      {openDialog && (
        <StartCall open={openDialog} closeHandler={onCloseHandler} />
      )}
    </>
  );
};
export default Call;
