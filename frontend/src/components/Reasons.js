import React from 'react'
// import { Typography,GridList,Box,Card,GridListTile,GridListTileBar,IconButton,Button} from '@material-ui/core';
import {Grid,Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
    
    container:{
        height:'50vh'
    }
    
    
}))


 const Reasons = () => {
     const classes=useStyles();
    return (
        <Container className={classes.container}>
            <Grid container xs={12} lg={12}>
                <Grid container items lg={12}></Grid>
                <Grid container items lg={12}></Grid>

            </Grid>
        </Container>
    )
}


export default Reasons;