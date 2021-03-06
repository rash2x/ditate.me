import React from 'react';
import ConfettiCanvas from 'react-confetti-canvas';
import { makeStyles } from '@material-ui/core';

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
    maxWidth: '600px',
    textAlign: 'center',
  },
  clap: {
    width: '95px',
    margin: '0 auto',
    marginBottom: '20px',
  },
  title: {
    fontWeight: '600',
    fontSize: '40px',
    color: theme.palette.primary.main,
    marginBottom: '20px',
  },
  text: {
    fontWeight: '500',
    fontSize: '20px',
    color: '#fff',
    margin: 0,
  },
  icon: {
    fontSize: 80
  },
  '@media (max-width: 768px)': {
    text: {
      fontSize: '18px',
    },
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
        <span className={classes.title}>Успешно!</span>
        <p className={classes.text}>Мы получили твой вопрос, скоро ты получишь ответ на него.</p>
      </div>
    </div>
  );
};

export default Success;
