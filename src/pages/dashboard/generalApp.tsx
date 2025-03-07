import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import Chats from "../../components/chat/chats.tsx";
import Conversation from "../../components/conversation/conversation.tsx";
import Contact from "../../components/chat/contact.tsx";
import StarredMessages from "../../components/chat/starredMessages.tsx";
import SharedMessages from "../../components/chat/sharedMessages.tsx";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);

  return (
    <Stack direction={"row"} width={"100%"} sx={{ overflowY: "hidden" }}>
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 750px)" : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.default,
        }}
      >
        <Conversation userId={2} />
      </Box>
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;

            case "STARRED":
              return <StarredMessages />;

            case "SHARED":
              return <SharedMessages />;

            default:
              break;
          }
        })()}
    </Stack>
  );
};
export default GeneralApp;
