import React from 'react';
import ConfettiCanvas from 'react-confetti-canvas';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { ReactComponent as YouTubePlayIcon } from '../assets/icons8-youtube-play.svg';

const styles = makeStyles(theme => ({
  container: {
    margin: 'auto',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 500
  },
  canvas: {
    zIndex: -1,
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: '0',
    left: '0',

    '& > canvas': {
      width: '100% !important',
      height: '100% !important',
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: theme.spacing(0, 3),
  },
  clap: {
    width: '95px',
    margin: '0 auto',
    marginBottom: '20px',
  },
  title: {
    marginBottom: '20px',

    [theme.breakpoints.up('md')]: {
      fontSize: 40
    },
  },
  text: {
    fontWeight: '500',
    color: '#fff',
    margin: 0,

    [theme.breakpoints.up('md')]: {
      fontSize: 20
    },
  },
  icon: {
    fontSize: 80
  },
  youtubeButton: {
    color: '#EB3223',
    alignSelf: 'center',
    marginTop: theme.spacing(2),

    '& svg': {
      width: 28,
      height: 28,
      marginRight: theme.spacing(1)
    }
  }
}));

const Success = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <div className={classes.canvas}>
        <ConfettiCanvas paperCount={20} />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.icon}>👏</div>
        <Typography variant="h1" className={classes.title} color="primary">Успешно!</Typography>
        <p className={classes.text}>Мы получили твой вопрос, на ближайшем подкасте мы ответим на него 😉</p>
        <Button className={classes.youtubeButton}
                component="a"
                href="https://www.youtube.com/channel/UCsh-ikLkVMI-gtpKWJn0XAA"
                target="_blank">
          <YouTubePlayIcon />
          Смотри наши подкасты на YouTube
        </Button>
      </div>
    </div>
  );
};

export default Success;
