import React from 'react';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0',
  },
  list: {
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  link: {
    fontWeight: '600',
    fontSize: '24px',
    textDecoration: 'none',
    color: '#fff',
  },

  /* Color */
  colored: {
    color: '#FFF59D',
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
        <li className="svg"></li>
        <li className="svg"></li>
        <li className="svg"></li>
      </ul>
      <a href="#" className={classes.link}>
        ditate <span className={classes.colored}>.me</span>
      </a>
    </header>
  );
};

export default Header;
