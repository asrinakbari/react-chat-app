import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data/index.tsx";
import React from "react";
import TimeLine from "./timeLine.tsx";
import MediaMsg from "./mediaMsg.tsx";
import DocMsg from "./docMsg.tsx";
import LinkMsg from "./linkMsg.tsx";
import ReplyMsg from "./replyMsg.tsx";
import TextMsg from "./textMsg.tsx";

const Message = ({ menu }) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((item) => {
          const data = { ...item, menu: menu };

          switch (item.type) {
            case "divider":
              return <TimeLine {...data} />;

            case "msg":
              switch (item.subtype) {
                case "img":
                  return <MediaMsg {...data} />;
                case "doc":
                  return <DocMsg {...data} />;

                case "link":
                  return <LinkMsg {...data} />;
                case "reply":
                  return <ReplyMsg {...data} />;

                default:
                  return <TextMsg {...data} />;
              }
          }
        })}
      </Stack>
    </Box>
  );
};
export default Message;
