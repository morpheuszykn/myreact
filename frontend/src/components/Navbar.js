import React from 'react';


// import { Typography,GridList,Grid,Box,Container,Card,GridListTile,GridListTileBar,IconButton,Button,ToolBar} from '@material-ui/core';
import {AppBar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({

appBar:{
    height:'10vh',
    backgroundColor:'black',
    opacity:'0.5',
  
},



}))

const Navbar = () => {

    const classes=useStyles();
    return (
        <AppBar className={classes.appBar}></AppBar>
    )
}

export default Navbar;