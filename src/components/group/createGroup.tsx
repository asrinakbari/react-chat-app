import { Dialog, Slide, DialogContent, DialogTitle } from "@mui/material";
import CreateGroupProps from "../../interface/CreateGroupProps.tsx";
import CreateGroupForm from "./createGroupForm.tsx";
import React, { useState } from "react";

const CreateGroup = (props: CreateGroupProps) => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const onHandleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      sx={{ p: 4 }}
    >
      <DialogTitle sx={{ mb: 3 }}>Create New Group</DialogTitle>
      <DialogContent>
        <CreateGroupForm handleClose={props.handleClose} />
      </DialogContent>
    </Dialog>
  );
};
export default CreateGroup;
