import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, IconButton, Toolbar } from "@material-ui/core";
import { ExitToApp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 20,
    color: '#fff',
  },
  bar: {
    padding: '5px 20px',
    marginBottom: '15px',
    fontWeight: 'bold',
    backgroundColor: '#F3933A',
  },
}));

const Header = ({ auth }) => {
  const classes = useStyles();

  const handleLogout = () => {
    localStorage.removeItem('@app:loggedUser');
    window.location.reload();
  }

  return (
    <AppBar position="static" className={classes.bar}>
      <Toolbar>
        <Typography className={classes.title}>
          <RouterLink to="/" className={classes.link}>
            Cook Dashboard
          </RouterLink>
        </Typography>
        {auth && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleLogout}
            >
              <ExitToApp />
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;