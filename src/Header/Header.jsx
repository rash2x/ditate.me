import React from 'react';
import { makeStyles } from '@material-ui/core';
import Media from 'react-media';

const styles = makeStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0',
    flex: '0 0 auto',
  },
  list: {
    margin: 0,
    padding: 0,
    display: 'flex',
    listStyle: 'none',
  },
  link: {
    fontWeight: '600',
    fontSize: '24px',
    textDecoration: 'none',
    color: '#fff',
  },
  link768: {
    fontWeight: '600',
    fontSize: '18px',
    textDecoration: 'none',
    color: '#fff',
  },
  colored: {
    color: theme.palette.primary.main,
  },
  svg: {
    marginRight: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = styles();
  return (
    <header className={classes.header}>
      <ul className={classes.list}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <a href="#" className={classes.link}>
        ditate<span className={classes.colored}>.me</span>
      </a>
    </header>
  );
};

export default Header;
