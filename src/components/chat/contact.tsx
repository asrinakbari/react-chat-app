import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ProfileBadge from "../../components/profileBadge.tsx";
import CustomButton from "../shared/customComponent/customButton.tsx";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useDispatch } from "react-redux";
import { ToggleSidebar, UpdateSidebarType } from "../../redux/slices/app.tsx";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Stack
      backgroundColor={
        theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background
      }
      sx={{ width: "300px" }}
      direction="column"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        height="105px"
        p="20px 10px"
        sx={{
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "4px",
            boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <Typography fontSize="1rem" fontWeight="bold" pt="15px">
          Contact Info
        </Typography>
        <IconButton>
          <CloseOutlinedIcon onClick={() => dispatch(ToggleSidebar())} />
        </IconButton>
      </Box>

      <Box mt="10px" p="10px 20px">
        <ProfileBadge />
      </Box>
      <Box p="5px 50px" mt="10px" display="flex" justifyContent="space-between">
        <PhoneOutlinedIcon />
        <VideocamOutlinedIcon />
      </Box>
      <Box p="5px 50px" mb="5px" display="flex" justifyContent="space-between">
        <Typography fontWeight="bold" fontSize="0.8rem">
          Voice
        </Typography>
        <Typography fontWeight="bold" fontSize="0.8rem">
          Video
        </Typography>
      </Box>
      <Divider sx={{ width: "80%", margin: "0px auto" }} />
      <Box mt="10px" p="10px 20px" display="flex" flexDirection="column">
        <Typography variant="h5" component="h5">
          About
        </Typography>
        <Typography fontSize="0.8rem" fontWeight="bold">
          Hi I'm working
        </Typography>
      </Box>
      <Divider sx={{ width: "80%", margin: "0px auto" }} />
      <Box
        my="10px"
        p="10px 20px"
        display="flex"
        flexDirection="row"
        justifyContent={"space-between"}
      >
        <Typography>Media, Links & Docs</Typography>

        <Button
          onClick={() => dispatch(UpdateSidebarType("SHARED"))}
          variant="outlined"
          sx={{ border: "none" }}
          endIcon={<ArrowForwardIosOutlinedIcon />}
        >
          401
        </Button>
      </Box>
      <Divider sx={{ width: "80%", margin: "0px auto" }} />
      <Box
        my="10px"
        p="10px 20px"
        display="flex"
        flexDirection="row"
        justifyContent={"space-between"}
      >
        <Box display={"flex"}>
          <StarBorderOutlinedIcon />
          <Typography>Starred Messages</Typography>
        </Box>
        <ArrowForwardIosOutlinedIcon
          onClick={() => dispatch(UpdateSideBarType("STARRED"))}
        />
      </Box>

      <Divider sx={{ width: "80%", margin: "0px auto" }} />
      <Box mt="10px" p="10px 20px" display="flex" flexDirection="row">
        <NotificationsOutlinedIcon />
        <Typography fontWeight="bold" variant="caption" mt="5px">
          Mute Notifications
        </Typography>
        <Switch sx={{ marginLeft: "20px" }} defaultChecked />
      </Box>
      <Divider sx={{ width: "90%", margin: "0px auto" }} />
      <Box mt="10px" p="10px 20px" display="flex" flexDirection="column">
        <Typography fontSize="0.8rem" fontWeight="bold">
          1 group in common
        </Typography>
        <Box my="20px">
          <ProfileBadge />
        </Box>
        <Box m="20px auto" display="flex" flexDirection="row">
          <CustomButton
            sx={{
              margin: "0px 5px",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "8px",
            }}
            variant="outlined"
            startIcon={<BlockOutlinedIcon />}
          >
            Block
          </CustomButton>
          <CustomButton
            sx={{
              margin: "0px 5px",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "8px",
            }}
            variant="outlined"
            startIcon={<DeleteForeverOutlinedIcon />}
          >
            Delete
          </CustomButton>
        </Box>
      </Box>
    </Stack>
  );
};
export default Contact;
