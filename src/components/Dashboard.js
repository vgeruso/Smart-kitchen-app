import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Card,
  Divider,
  Typography,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '40px'
  },
  cardTitle: {
    padding: '10px'
  },
  gridContainer: {
    padding: '20px',
    justifyContent: 'center'
  },
  info: {
    justifyContent: 'center'
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
    >
      <Container maxWidth="sm" className={classes.container}>
        <Card>
          <Grid
            container
            spacing={3}
            maxWidth="sm"
            className={classes.gridContainer}
          >
            <Typography
              variant='h6'
              className={classes.cardTitle}
            >
              Informações de sua cozinha
            </Typography>
          </Grid>
          <Divider />
          <Grid
            container
            spacing={3}
            maxWidth="sm"
            className={classes.gridContainer}
          >
            <Grid item xs={12} sm={3} md={3} className={classes.info}>
              <Typography>Temperatura da panela: </Typography>
            </Grid>
            <Grid item xs={12} sm={3} md={3} className={classes.info}>
              <Typography>Tempo de cozimento: </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            maxWidth="sm"
            className={classes.gridContainer}
          >
            <Grid item xs={12} sm={3} md={3} className={classes.info}>
              <Typography>Peso do Botijão: </Typography>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default Dashboard;