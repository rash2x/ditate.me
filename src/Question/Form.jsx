import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { NetlifyForm } from 'react-netlify-forms';

const styles = makeStyles(theme => ({
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(0, 1)
  },
  text: {
    fontWeight: '500',
    color: '#fff',
    lineHeight: '28px',
    textAlign: 'center',
    padding: theme.spacing(0, 1, 5),
    margin: 0,

    '& > span': {
      color: theme.palette.primary.light
    }
  },
  textarea: {
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: 16,
    minHeight: 200,
    outline: 'none',
    resize: 'none',
  },
  notchedOutline: {
    border: 'none',
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const Form = ({ onSuccess, onFailure }) => {
  const classes = styles();

  const [message, setMessage] = useState('');

  const handleMessageChange = useCallback((event) => {
    setMessage(event.target.value);
  }, [setMessage]);

  return (
    <div className={classes.wrapper}>
      <p className={classes.text}>
        <span>Задай любой вопрос</span>, мы разберем его на следующих подкастах. Ближайший выпуск 13.03 <span> про активную медитацию Шодхан 🐆</span>
      </p>
      <NetlifyForm name="Questions"
                   action="?success"
                   onSuccess={onSuccess}
                   onFailure={onFailure}>
        <div className={classes.form}>
          <TextField
            fullWidth
            multiline
            name="message"
            variant="outlined"
            placeholder="Напиши свой вопрос"
            onChange={handleMessageChange}
            value={message}
            className={classes.textarea}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
          />
          <Button className={classes.button} type="submit" size="medium" variant="contained" color="primary">
            Отправить
          </Button>
        </div>
      </NetlifyForm>
    </div>
  );
};

export default Form;
