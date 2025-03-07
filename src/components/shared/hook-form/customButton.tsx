import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
  background: "blue",
  color: "white",
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: "darkblue",
  },
}));

export default CustomButton;
