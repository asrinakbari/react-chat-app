import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)({
  background: "blue",
  color: "white",
  padding: "10px 20px",
  borderRadius: 1,
  "&:hover": {
    backgroundColor: "darkblue",
  },
});

export default CustomButton;
