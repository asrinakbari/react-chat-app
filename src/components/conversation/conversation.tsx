import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import Header from "./header.tsx";
import Message from "./message.tsx";
import Footer from "./footer.tsx";

const Conversation = (userId: number) => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      <Header userId={userId} />
      <Box
        className="scrollbar"
        width={"100%"}
        sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }}
      >
        <Message menu={true} />
      </Box>
      <Footer />
    </Stack>
  );
};
export default Conversation;
