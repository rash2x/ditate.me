import { Button, InputBase, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const styles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    margin: '120px auto 220px',
  },
  text: {
    fontWeight: '500',
    fontSize: '20px',
    color: '#fff',
    lineHeight: '28px',
    textAlign: 'center',
    margin: '0 0 40px 0',
  },
  colored: {
    color: '#FFF59D',
  },
  link: {
    color: '#FFF59D',
    cursor: 'pointer',
  },
  textarea: {
    border: '1px solid #FFF9C4',
    boxSizing: 'border-box',
    borderRadius: '16px',
    minHeight: '240px',
    padding: '20px',
    outline: 'none',
    resize: 'none',
    '&::placeholder': {
      color: '#fff',
    },
  },
  button: {
    maxWidth: '180px',
    color: '#000',
    background: '#FFF59D',
    textTransform: 'Capitalize',
    margin: '20px auto 0',
    '&:hover': {
      background: '#FFF9C4',
    },
  },
}));

const Form = () => {
  const classes = styles();
  return (
    <div className={classes.wrapper}>
      <p className={classes.text}>
        <span className={classes.colored}>Задай любой вопрос</span>, мы разберем его на следующих
        подкастах. Ближайший выпуск 13.03
        <a className={classes.link}> про активную медитацию Шодхан ICON</a>
      </p>
      <form className={classes.form}>
        {/* <TextField
          fullWidth
          id="outlined-multiline-static"
          multiline
          placeholder="Напиши свой вопрос"
          InputProps={{ classes: { input: classes.textarea } }}
        /> */}
        <InputBase
          className={classes.margin}
          placeholder="Напиши свой вопрос"
          fullWidth
          multiline
          className={classes.textarea}
        />
      </form>
      <Button className={classes.button} size="medium" variant="contained">
        Отправить
      </Button>
    </div>
  );
};

export default Form;
