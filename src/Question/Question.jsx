import { makeStyles } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import Form from './Form';
import Success from './Success';

const styles = makeStyles(theme => ({
  root: {}
}));

const Question = () => {
  const classes = styles();

  const [isSubmitted, setIsSubmitted] = useState(false)

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = useCallback((event, message) => {
    event.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        'message': message
      })
    }).then((response) => {
      setIsSubmitted(true);
    }).catch(error => alert(error))
  }, [setIsSubmitted]);

  return (
    <div className={classes.root}>
      {isSubmitted ? <Success /> : <Form onSubmit={handleSubmit} />}
    </div>
  );
};

export default Question;
