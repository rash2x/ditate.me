import React from 'react';
import ConfettiCanvas from 'react-confetti-canvas';
import { makeStyles, Typography } from '@material-ui/core';

const styles = makeStyles(theme => ({
  container: {
    margin: 'auto',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
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
    fontSize: 32,
    color: theme.palette.primary.main,
    marginBottom: '20px',
  },
  text: {
    fontWeight: '500',
    color: '#fff',
    margin: 0,
  },
  icon: {
    fontSize: 80
  },
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
        <p className={classes.text}>Мы получили твой вопрос, скоро ты получишь ответ на него.</p>
      </div>
    </div>
  );
};

export default Success;
