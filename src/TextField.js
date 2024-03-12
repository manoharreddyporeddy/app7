import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});



export const Textfield = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [errortext,setErrortext] = useState('');

  const onChange = (e) =>{
    setTitle(e.target.value);
    if (title === ''){
      setErrortext('cannot be empty')
    }
  };

  return (
    <TextField
      onChange={onChange}
      variant="standard"
      label="new"
      className={classes.field}
      color="secondary"
      error={(errortext === '') ? true : false}
      errorText = {errortext}
    />
  );
};
