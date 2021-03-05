import { makeStyles } from '@material-ui/core';
import React from 'react';

const styles = makeStyles({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0',
  },
  copyright: {
    fontWeight: '500',
    fontSize: '14px',
    color: '#fff',
  },
  hash: {
    fontWeight: '500',
    fontSize: '14px',
    color: '#fff',
  },
  hashBold: {
    fontWeight: '700',
  },
});

const Footer = () => {
  const classes = styles();
  return (
    <footer className={classes.footer}>
      <span className={classes.copyright}>2021 &copy; Можно все</span>
      <span className={classes.hash}>
        <span className={classes.hashBold}>#Минибудды</span> отвечают ICON
      </span>
    </footer>
  );
};

export default Footer;
