import React from 'react';
import ConfettiCanvas from 'react-confetti-canvas';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  container: {
    margin: 'auto',
    flex: '0 0 auto',
  },
  canvas: {
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
    textAlign: 'center',
    marginBottom: '20px',
  },
  text: {
    fontWeight: '500',
    fontSize: '20px',
    color: '#fff',
    textAlign: 'center',
    margin: 0,
  },
  '@media (max-width: 768px)': {
    text: {
      fontSize: '18px',
    },
  },
  '@media (max-width: 480px)': {
    wrapper: {
      padding: '0 20px',
    },
    text: {
      fontSize: '19px',
    },
  },
}));

const Success = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <div className={classes.canvas}>
        <ConfettiCanvas />
      </div>
      <div className={classes.wrapper}>
        <span className={classes.title}>Успешно!</span>
        <p className={classes.text}>Мы получили твой вопрос, мы затронем его на подкасте.</p>
      </div>
    </div>
  );
};

export default Success;
