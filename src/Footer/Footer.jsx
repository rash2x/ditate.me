import { makeStyles } from '@material-ui/core';
import React from 'react';

const styles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4, 0),
    fontSize: 14,
    color: '#fff',
  },
  copyright: {
    fontWeight: '500',
  },
}));

const Footer = () => {
  const classes = styles();
  return (

  );
};

export default Footer;
