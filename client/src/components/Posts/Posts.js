import REact from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import  { useSelector } from 'react-redux';

import useStyles from './styles';


const Posts = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>

        </Grid>
    )
}

export default Posts;
