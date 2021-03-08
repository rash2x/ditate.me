import React from 'react';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 0.5),
  },
  logoIcon: {
    display: 'flex',
    fontSize: 24,
    textDecoration: 'none',
  },
  logoName: {
    fontSize: 20,
    textDecoration: 'none',
    color: '#fff',

    '& > span': {
      color: theme.palette.primary.main,
    }
  },
}));

const Header = () => {
  const classes = styles();
  return (
    <header className={classes.header}>
      <a href="/" className={classes.logoIcon}>👁👈🗿</a>
      <a href="/" className={classes.logoName}>
        ditate<span>.me</span>
      </a>
    </header>
  );
};

export default Header;
