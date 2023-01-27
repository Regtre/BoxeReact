import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import imgSite from "../medias/logo/LOGOBCH_Static.png";
import { makeStyles } from "@mui/styles";
import Box from "@mui/system/Box";

const pages = [
  { name: "Accueil", link: "/" },
  { name: "Planning/tarifs", link: "/planning-tarifs" },
  { name: "Blog", link: "/blog" },
  { name: "Nos Activités", link: "/nos-activites" },
  { name: "Nous contacter", link: "/contact-us" },
];

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
  },
  avatar: {
    marginRight: "auto",
  },
}));

export default function Navbar() {
  const styles = useStyles();

  const [anchorElNav, setAnchorElNav] = useState(false);

  const handleToggleNavMenu = () => {
    setAnchorElNav(!anchorElNav);
  };

  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Avatar className={styles.avatar} alt="site logo" src={imgSite} />
          <Box sx={{ display: { sm: "none", md: "block", xs: "none" } }}>
            {pages.map((page, index) => (
              <Link to={page.link} key={index}>
                <Button
                  variant={page.name === "Nous contacter" ? "outlined" : "text"}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: { md: "none", sm: "block" } }}>
            <IconButton onClick={() => handleToggleNavMenu()}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <SwipeableDrawer
        onClose={() => setAnchorElNav(false)}
        onOpen={() => setAnchorElNav(true)}
        open={anchorElNav}
        anchor="right"
      >
        <IconButton onClick={() => handleToggleNavMenu()}>
          <ChevronLeft />
        </IconButton>
        <Divider />
        <List>
          {pages.map((page, index) => (
            <ListItem key={index}>
              <Link to={page.link} key={index}>
                <Button
                  variant={page.name === "Nous contacter" ? "outlined" : "text"}
                  onClick={() => handleToggleNavMenu()}
                >
                  {page.name}
                </Button>
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
