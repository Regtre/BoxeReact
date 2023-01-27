import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, AlertTitle, Button, Grid } from "@mui/material";
import emailjs, { init } from "@emailjs/browser";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PlaceIcon from "@mui/icons-material/Place";
import Paper from "@mui/material/Paper";


init("user_rKCZ1G6ibY2Miq63WP1AJ");

export default function ContacteUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [send, setSend] = useState(false);
  const minMessage = 15;

  const handleSuccessMessage = () => {
    return (
      <Box sx={{ width: "90%" }}>
        <Alert severity="success">
          <AlertTitle>Reussite</AlertTitle>
          Le message a bien été envoyé !
        </Alert>
      </Box>
    );
  };

  const isMail = () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return email.match(regex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isMail() && message) {
      sendFeedback("service_nlrbijr", "template_vi1sv7m", {
        name,
        email,
        title,
        message,
      });
    } else {
      console.log("erreur");
    }

    setSend(true);
  };

  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables)
      .then((res) => {
        console.log("success !");
        setName("");
        setEmail("");
        setTitle("");
        setMessage("");
        handleSuccessMessage(); //Envoie un message de reussite
      })
      .catch((err) => console.log("FAIL !")); //A voir
  };

  const NousContacter = () => {
    return (
      <Grid item>
        <h1>NOUS CONTACTER</h1>
        <Box sx={{ textAlign: "center" }}>
          <MailOutlineIcon color="primary" />
          <p>boxe.hemois@gmail.com</p>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <PlaceIcon color="primary" />
          <p>Boxing Club hemois</p>
          <p> 50 Rue des 3 Baudets</p>
          <p> 59510 Hem</p>
        </Box>
      </Grid>
    );
  };

  const successFinished = () => {
    return (
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Le message a bien été envoyé —{" "}
        <strong>Passez une bonne journée !</strong>
      </Alert>
    );
  };

  const Formulaire = () => {
    return (
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1.5, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            error={send && name.length === 0}
            helperText={send && name.length === 0 ? "A remplir" : ""}
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
            label="Nom *"
            multiline
          />
        </div>
        <div>
          <TextField
            error={send && !isMail()}
            helperText={send && !isMail() ? "Email incorrect" : ""}
            type="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            label="Email *"
            multiline
          />
        </div>
        <div>
          <TextField
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            label="Sujet"
            multiline
          />
        </div>
        <div>
          <TextField
            error={send && message.length <= minMessage}
            helperText={
              message.length <= minMessage
                ? `Il manque ${
                    minMessage - message.length
                  } lettres pour l'envoie`
                : ""
            }
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            label="Message *"
            multiline
            fullWidth
            rows={15}
          />
        </div>
        <Button color="primary" onClick={(e) => handleSubmit(e)}>
          Envoyer
        </Button>
      </Box>
    );
  };

  const map = () => {
  }

  return (
    <>
      <Paper>
        <Grid container justifyContent="center" alignItems="center">
          {send ?  successFinished() : Formulaire() }
          {map()}
          <NousContacter />
        </Grid>
      </Paper>
    </>
  );
}
