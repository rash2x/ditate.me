import { makeStyles, Snackbar } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import Form from './Form';
import Success from './Success';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flex: 1
  },
  anchorOriginBottomCenter: {
    bottom: theme.spacing(12)
  }
}));

const Question = () => {
  const classes = styles();

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isFailed, setIsFailed] = useState(false)

  const handleSubmit = useCallback((data, event) => {
    event.preventDefault();

    function encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
    }

    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data)
    }).then(() => {
      setIsSubmitted(true);
    }).catch((error) => {
      setIsFailed(true);
    })

  }, [setIsSubmitted, setIsFailed]);

  const handleSnackbarClose = useCallback(() => {
    setIsFailed(false);
  }, [setIsFailed]);

  return (
    <div className={classes.root}>
      {isSubmitted ? <Success /> : <Form onSubmit={handleSubmit} />}

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={isFailed}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Не получилось отправить вопрос 😭"
        classes={{
          anchorOriginBottomCenter: classes.anchorOriginBottomCenter
        }}
      />
    </div>
  );
};

export default Question;