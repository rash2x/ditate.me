import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import Media from 'react-media';

const styles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    margin: 'auto',
    flex: '1 0 auto',
  },
  text: {
    fontWeight: '500',
    fontSize: '20px',
    color: '#fff',
    lineHeight: '28px',
    textAlign: 'center',
    margin: '0 0 40px 0',
  },
  text768: {
    fontWeight: '500',
    fontSize: '16px',
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
    color: '#fff',
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

  const [messege, setMessege] = useState('');

  return (
    <div className={classes.wrapper}>
      <Media query="(max-width: 768px)">
        {matches =>
          matches ? (
            <p className={(classes.text, classes.text768)}>
              <span className={classes.colored}>Задай любой вопрос</span>, мы разберем его на
              следующих подкастах. Ближайший выпуск 13.03
              <a className={classes.link}> про активную медитацию Шодхан ICON</a>
            </p>
          ) : (
            <p className={classes.text}>
              <span className={classes.colored}>Задай любой вопрос</span>, мы разберем его на
              следующих подкастах. Ближайший выпуск 13.03
              <a className={classes.link}> про активную медитацию Шодхан ICON</a>
            </p>
          )
        }
      </Media>
      <form className={classes.form}>
        <TextField
          fullWidth
          id="outlined-multiline-static"
          multiline
          placeholder="Напиши свой вопрос"
          onChange={e => setMessege(e.target.value)}
          InputProps={{ classes: { input: classes.textarea } }}
        />
      </form>
      <Button className={classes.button} type="submit" size="medium" variant="contained">
        Отправить
      </Button>
    </div>
  );
};

export default Form;
