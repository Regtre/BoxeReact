import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography } from "@mui/material";
import { Grid, Paper } from "@mui/material";

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

export default function Stuff() {
  const styles = useStyle();
  return (
    <Paper>
      <Container className={styles.container} maxWidth="md">
        <Grid className={styles.content} container alignContent="center">
          <Grid item>
            <Typography variant="h1">Nos activités</Typography>
            <Typography>
              a remplir
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
