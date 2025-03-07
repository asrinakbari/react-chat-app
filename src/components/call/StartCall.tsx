import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CallElement from "./CallElement.tsx";
import { MembersList } from "../../data/index.tsx";
import StartCallProps from "../../interfaces/StartCallProps.tsx";

const StartCall = (props: StartCallProps) => {
  return (
    <Dialog
      open={props.open}
      fullWidth
      maxWidth="xs"
      sx={{ borderRadius: "15px", p: "5px", my: "5px" }}
    >
      <DialogTitle>Start Call</DialogTitle>
      <DialogContent>
        <TextField
          type="text"
          name="searchChat"
          placeholder="search"
          variant="outlined"
          size="small"
          fullWidth
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
        />

        {MembersList.map((item) => (
          <CallElement key={item.id} {...item} />
        ))}
      </DialogContent>
      <DialogActions>
        <Button sx={{ p: "10px" }} onClick={props.closeHandler}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StartCall;
