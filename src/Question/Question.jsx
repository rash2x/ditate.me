import { makeStyles, Snackbar } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
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

  const handleSnackbarClose = useCallback(() => {
    setIsFailed(false);
  }, [setIsFailed]);

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setIsSubmitted(true);
    }
  }, [setIsSubmitted]);

  return (
    <div className={classes.root}>
      {isSubmitted ? <Success /> : <Form />}

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
