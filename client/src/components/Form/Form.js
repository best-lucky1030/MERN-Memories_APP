import React, {useState, useEffect} from 'react';
import {Paper} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({currentId, setCurrentId}) => {

  const classes = useStyles();

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(e);
  };
  
  return (
    <Paper className={classes.Paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

      </form>
    </Paper>
  );
};

export default Form;
