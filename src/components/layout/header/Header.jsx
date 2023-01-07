import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

// icon
import RssFeedIcon from "@mui/icons-material/RssFeed";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
            weblog
          </Typography>
          <RssFeedIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
