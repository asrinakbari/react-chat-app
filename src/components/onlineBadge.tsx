import { Box, keyframes } from "@mui/material";
import React from "react";

const OnlineBadge = () => {
  const ripple = keyframes`
      0% {
        transform: scale(0.8);
        opacity: 1;
      }
      100% {
        transform: scale(1.1);
        opacity: 0;
      }
    `;

  return (
    <Box
      ml="40px"
      mt="-13px"
      sx={{
        bottom: 0,
        right: 0,
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        backgroundColor: "green",
        border: "2px solid white",
        opacity: 0.3,
        animation: `${ripple} 1.5s infinite ease-out`,
        animationDelay: "0.75s",
      }}
    ></Box>
  );
};

export default OnlineBadge;
