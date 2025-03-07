import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ProfileForm from "../../components/profile/profileForm.tsx";

const Profile = () => {
  return (
    <Stack width={"320px"} padding={"15px"}>
      <Box display={"flex"}>
        <ArrowBackIosOutlinedIcon />
        <Typography variant="h6" fontWeight={"bold"}>
          Profile
        </Typography>
      </Box>
      <ProfileForm />
    </Stack>
  );
};
export default Profile;
