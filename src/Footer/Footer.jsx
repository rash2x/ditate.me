import { makeStyles } from '@material-ui/core';
import React from 'react';

const styles = makeStyles({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0',
    flex: '0 0 auto',
  },
  copyright: {
    fontWeight: '500',
    fontSize: '14px',
    color: '#fff',
  },
  hash: {
    display: 'flex',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '14px',
    color: '#fff',
  },
  hashBold: {
    fontWeight: '700',
  },
  icon: {
    width: '35px',
  },
  '@media (max-width: 480px)': {
    footer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    copyright: {
      marginBottom: '10px',
    },
  },
});

const Footer = () => {
  const classes = styles();
  return (
    <footer className={classes.footer}>
      <span className={classes.copyright}>2021 &copy; Можно все</span>
      <div className={classes.hash}>
        <strong className={classes.hashBold}>#Минибудды</strong>
        отвечают
      </div>
    </footer>
  );
};

export default Footer;
