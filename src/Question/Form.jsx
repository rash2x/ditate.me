import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useCallback, useState } from 'react';

const styles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    margin: 'auto',
    flex: '0 0 auto',
  },
  text: {
    fontWeight: '500',
    fontSize: '20px',
    color: '#fff',
    lineHeight: '28px',
    textAlign: 'center',
    margin: '0 0 25px 0',
  },
  colored: {
    color: theme.palette.primary.main,
  },
  link: {
    color: '#FFF59D',
    cursor: 'pointer',
  },
  textarea: {
    border: `1px solid ${theme.palette.primary.light}`,
    boxSizing: 'border-box',
    borderRadius: '16px',
    minHeight: '240px',
    color: '#fff',
    padding: '20px',
    outline: 'none',
    resize: 'none',
    '&::placeholder': {
      color: '#fff',
    },
  },
  notchedOutline: {
    border: 'none',
  },
  button: {
    maxWidth: '180px',
    color: '#000',
    background: theme.palette.primary.main,
    textTransform: 'Capitalize',
    margin: '20px auto 0',
    '&:hover': {
      background: theme.palette.primary.light,
    },
  },
  '@media (max-width: 768px)': {
    text: {
      fontSize: '18px',
      margin: '0 0 10px 0',
    },
  },
  '@media (max-width: 480px)': {
    wrapper: {
      padding: '0 20px',
      marginTop: '40px',
      marginBottom: '80px',
    },
    text: {
      fontSize: '14px',
    },
    textarea: {
      minHeight: '170px',
    },
    button: {
      margin: '0 auto',
    },
  },
}));

const Form = () => {
  const classes = styles();

  const [message, setMessage] = useState('');

  const handleMessageChange = useCallback((event, value) => {
    setMessage(value);
  }, [setMessage])

  return (
    <div className={classes.wrapper}>
      <p className={classes.text}>
        <span className={classes.colored}>Задай любой вопрос</span>, мы разберем его на следующих
        подкастах. Ближайший выпуск 13.03
        <a className={classes.link}> про активную медитацию Шодхан ICON</a>
      </p>
      <form className={classes.form}>
        <TextField
          fullWidth
          multiline
          variant="outlined"
          placeholder="Напиши свой вопрос"
          onChange={handleMessageChange}
          value={message}
          InputProps={{
            classes: {
              input: classes.textarea,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
      </form>
      <Button className={classes.button} type="submit" size="medium" variant="contained">
        Отправить
      </Button>
    </div>
  );
};

export default Form;
