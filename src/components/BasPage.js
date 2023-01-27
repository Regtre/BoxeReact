import React from "react";
import { Link } from "react-router-dom";
import { Link as Linkmui } from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const socialItems = [
  { icon: Facebook, url: "https://www.facebook.com/hemois.boxingclub/" },
];

const contactButton = {
  name: "Nous Contacter",
  lien: "/contact-us",
  cName: "contactB",
};

export default function BasPage() {
  return (
    <Box mt={3}>
      <Paper color="inherit">
        <Container maxWidth="md">
          <Box textAlign={"center"}>
            <div>
              {socialItems.map((item, index) => (
                <Linkmui href={item.url} target="_blank" key={index}>
                  <IconButton>
                    <item.icon />
                  </IconButton>
                </Linkmui>
              ))}
            </div>
            <div>
              <Typography>ENVIE D'ESSAYER LA BOXE</Typography>
            </div>
            <div>
              <Link to={contactButton.lien}>
                <Button>{contactButton.name}</Button>
              </Link>
            </div>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}
