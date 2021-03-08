import { makeStyles } from '@material-ui/core';
import React from 'react';

const styles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4, 0),
    fontSize: 14,
    color: '#fff',

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  copyright: {
    fontWeight: '500',
  },
  social: {
    marginTop: theme.spacing(1),

    [theme.breakpoints.up('md')]: {
      marginTop: 0
    },
  }
}));

const Footer = () => {
  const classes = styles();
  return (
    <footer className={classes.footer}>
      <span className={classes.copyright}>2021 &copy; <strong>#Минибудды</strong> отвечают 👌</span>
      <div className={classes.social}>
        Instagram Youtube
      </div>
    </footer>
  );
};

export default Footer;
