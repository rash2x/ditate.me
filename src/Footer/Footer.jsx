import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import {ReactComponent as YouTubePlayIcon} from '../assets/icons8-youtube-play.svg';
import {ReactComponent as InstagramIcon} from '../assets/icons8-instagram.svg';

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
    display: 'flex',

    '& > a': {
      display: 'flex',

      [theme.breakpoints.up('md')]: {
        marginLeft: 16,
      },
    },

    '& svg': {
      width: 28,
      height: 28,
      marginRight: 8
    },

    [theme.breakpoints.up('md')]: {
      marginTop: 0
    },
  }
}));

const Footer = () => {
  const classes = styles();
  return (
    <footer className={classes.footer}>
      <div className={classes.copyright}>2021 &copy; <strong>#Минибудды</strong> отвечают 👌</div>
      <div className={classes.social}>
        <Button href="https://www.youtube.com/channel/UCsh-ikLkVMI-gtpKWJn0XAA" component="a" target="/blank">
          <YouTubePlayIcon />
          YouTube
        </Button>
        <Button href="https://www.instagram.com/rash2x/" component="a" target="/blank">
          <InstagramIcon />
          Instagram
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
