import { Stack, Divider, Typography } from "@mui/material";
import messageProps from "../../../interfaces/messageProps";

const TimeLine = (props: messageProps) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Divider width="46%" />
      <Typography>{props.text}</Typography>
      <Divider width="46%" />
    </Stack>
  );
};
export default TimeLine;
