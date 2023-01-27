import React from "react";
import "react-slideshow-image/dist/styles.css";
import "../style/Home.css";
import { Slide } from "react-slideshow-image";
import { Grid, Paper } from "@mui/material";
import img1 from "../medias/home/home1.jpg";
import img2 from "../medias/home/home2.jpg";
import img3 from "../medias/home/home3.jpg";
import img4 from "../medias/home/home4.jpg";
import img5 from "../medias/home/home5.jpg";
import { makeStyles } from "@mui/styles";
import { Container, Typography } from "@mui/material";

const images = [img1, img2, img3, img4, img5];

const useStyle = makeStyles(() => ({
  section: {
    height: "50vh",
  },
  content: {
    height: "100%",
  },
  container: {
    height: "100%",
  },
}));

export default function Home() {
  const styles = useStyle();

  const Citation = () => {
    return (
      <Paper color="inherit" >
        <Container className={styles.container} maxWidth="md">
          <Grid className={styles.content} container alignContent="center">
            <Grid item>
              <Typography variant="h1">boxing club hemois</Typography>
              <Typography>
                " à vaincre sans péril, on triomphe sans gloire "
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    );
  };

  const BHC = () => {
    return (
      <Paper>
        <Container className={styles.container} maxWidth="md">
          <Grid className={styles.content} container alignContent="center">
            <Grid item>
              <Typography variant="h1">BHC : la boxe pour tous </Typography>
              <Typography>
                Le BOXING CLUB HEMOIS est une association loi 1901, destiné à la
                pratique de la boxe Anglaise. Nos entraineurs se feront un
                plaisir de vous guider à travers ce sport passionnant. Notre
                approche est basée sur le Respect, la Tolérance, le Fair-play,
                l'Humilité. Nos cours favorisent également le travail en équipe
                pour faciliter la pratique des techniques. La plupart de nos
                membres pratiquent la boxe par plaisir ou pour se mettre en
                forme. Nous avons également une équipe de compétiteur. Il y en a
                pour tous les niveaux, soyez les bienvenues!
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    );
  };

  const Slideshow = () => {
    const properties = {
      duration: 3000,
      canSwipe: false,
    };
    return (
      <div>
        <Slide {...properties}>
          {images.map((each, index) => (
            <div key={index} style={{ width: "100%" }}>
              <img
                style={{ objectFit: "cover", width: "100%" }}
                src={each}
                alt={index}
              />
              <figcaption>TEXTE A AJOUTER, ON VERRA PLUS TARD !</figcaption>
            </div>
          ))}
        </Slide>
      </div>
    );
  };

  return (
    <>
      {Slideshow()}
      {Citation()}
      {BHC()}
    </>
  );
}
