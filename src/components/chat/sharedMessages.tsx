import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINKS } from "../../data/index.tsx";
import LinkMsg from "../../components/conversation/linkMsg.tsx";
import DocMsg from "../../components/conversation/docMsg.tsx";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../../redux/slices/app.tsx";
import { useTheme } from "@mui/material/styles";

const SharedMessages = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(2);
  const handleChange = (event) => {
    setValue(event.target.tabIndex);
  };
  const theme = useTheme();
  return (
    <Box mt={"40px"} width="450px" height="100vh">
      <Stack
        direction="row"
        spacing={2}
        backgroundColor={
          theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background
        }
        alignContent="center"
        ml="40px"
      >
        <ArrowBackIosOutlinedIcon
          onClick={() => dispatch(UpdateSidebarType("CONTACT"))}
        />
        <Typography fontWeight="bold" fontSize="0.9rem">
          Shared Messages
        </Typography>
      </Stack>
      <Stack direction="column">
        <Tabs
          sx={{ px: 2, pt: 2 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab tabIndex={0} label="Media" />
          <Tab tabIndex={1} label="Link" />
          <Tab tabIndex={2} label="Docs" />
        </Tabs>
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={value === 1 ? 1 : 3}
        >
          {(() => {
            switch (value) {
              case 0:
                return (
                  <Grid container spacing={2}>
                    {[0, 1, 2, 3, 4, 5, 6].map((item, index) => (
                      <Grid key={index} item xs={4}>
                        <img
                          src={faker.image.url()}
                          alt={faker.name.fullName()}
                          width="60px"
                          height="60px"
                        />
                      </Grid>
                    ))}
                  </Grid>
                );
              case 1:
                return SHARED_LINKS.map((item, index) => (
                  <LinkMsg key={index} {...item} />
                ));

              case 2:
                return SHARED_DOCS.map((item, index) => (
                  <DocMsg key={index} {...item} />
                ));
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
};
export default SharedMessages;
