import { Divider, IconButton, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

import React from "react";

const AuthSocial = () => {
  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&::before, ::after": {
            borderTopStyle: "dashed",
          },
        }}
      >
        OR
      </Divider>
      <Stack direction={"row"} justifyContent="center" spacing={2}>
        <IconButton>
          <GoogleIcon />
        </IconButton>
        <IconButton color="inherit">
          <GitHubIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
      </Stack>
    </div>
  );
};

export default AuthSocial;
