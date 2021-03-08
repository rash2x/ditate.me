import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

const styles = makeStyles(theme => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    maxWidth: 600
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
    textAlign: 'center',
    padding: theme.spacing(0, 1, 5),
    margin: 0,

    '& > span': {
      color: theme.palette.primary.light
    },

    '& a': {
      color: '#fff',
      textDecoration: 'none',

      '&:hover': {
        opacity: 0.5
      }
    },

    [theme.breakpoints.up('md')]: {
      fontSize: 20
    },
  },
  textarea: {
    borderRadius: 16,
  },
  notchedOutline: {
    border: 'none',
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const Form = ({ onSubmit, isFetching }) => {
  const classes = styles();
  const { register, handleSubmit, setValue, errors } = useForm();

  const handleMessageChange = useCallback((event) => {
    setValue('message', event.target.value);
  }, [setValue]);

  const messageHasError = errors.hasOwnProperty('message');
  const messageErrorText = messageHasError ? errors.message.type === 'required' ? 'Без вопроса - нет ответа 😛' : 'Без вопроса - нет ответа 😛 (10 символов минимум)' : false;

  return (
    <div className={classes.container}>
      <p className={classes.text}>
        <span>Задай любой вопрос</span>, мы разберем его на следующих подкастах. Ближайший выпуск 13.03 <span> про активную медитацию Шодхан 🐆</span> с <a href="https://www.instagram.com/rich_tsvetkov/" target="_blank">Романом Цветковым</a>
      </p>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)} data-netlify="true">
        <input type="hidden" name="form-name" value="question" ref={register()} />
        <TextField
          fullWidth
          multiline
          rows={6}
          error={messageHasError}
          helperText={messageErrorText}
          inputRef={register({ required: true, minLength: 10 })}
          name="message"
          variant="outlined"
          placeholder="Чтобы ты хотел узнать про медитацию?"
          onChange={handleMessageChange}
          className={classes.textarea}
        />
        <Button className={classes.button} type="submit" size="medium" variant="contained" color="primary" disabled={isFetching}>
          Отправить
        </Button>
      </form>
    </div>
  );
};

export default Form;
