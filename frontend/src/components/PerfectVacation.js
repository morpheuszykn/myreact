import React from 'react'
import "../styles/perfectvacation.css";
import { makeStyles } from '@material-ui/core/styles';
// import { GridList,Box,Card,GridListTile,GridListTileBar,IconButton} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import {Typography,Grid,Container,Button} from '@material-ui/core';

import img_1 from '../utils/penang3.jpg'
import img_2 from '../utils/penang4.jpg'
import img_3 from '../utils/penang5.jpg'

const useStyles=makeStyles(theme=>({


wrapper:{
    height:'80vh',
    [theme.breakpoints.down('sm')]: {
        height: 'auto', //adaptive
      },
    
}
,
gridImage:{
width:'100%',
height:'100%',
objectFit: 'cover',
},

gridContainer:{
    marginTop:'6%',height:'70vh',marginLeft:'0%',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column', // change arrangement
        height: 'auto',
      },
},
gridContainer_2:{
    marginTop:'2%',height:'70vh',marginLeft:'5%',
    [theme.breakpoints.down('sm')]: {
        marginLeft: '0%',
        textAlign: 'center', 
        height: 'auto',
      },
},
text:{
color:'white',
[theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem', //text small
  },
}
,
underline:{backgroundColor:'#707531',
width:"50%",
height:'4%'
// legth:"100%"
},
button:{
    backgroundColor:'#707531',
    borderRadius:'25px',
    width:'40%',
    color:'white',
    "&:hover":{
        backgroundColor:"#BFBD31"
    },
    [theme.breakpoints.down('sm')]: {
        width: '70%', // button width
        fontSize: '0.9rem',
      },

}


}))

const PerfectVacation = () => {
    const classes=useStyles();
    const navigate=useNavigate();
    const handleNavigate=(path)=>{
        navigate(path);
    };

    return (
        <Container className={`perfectvacation ${classes.wrapper}`} disableGutters='true'>
            
          <Grid container lg={12} className={classes.gridContainer} >
          <Grid container lg={6} style={{width:'50%'}}>
          <Grid container items style={{height:'44%',paddingRight:'2%',margin:'auto'}}lg={7}><img src={img_1} className={classes.gridImage} alt=''/></Grid>
          <Grid container items lg={5}>
          <Grid container items style={{height:'44%',paddingBottom:'2%',margin:'auto',paddingLeft:'10%'}}  ><img src={img_3} className={classes.gridImage} alt=''/></Grid>
          <Grid container items style={{height:'44%',paddingTop:'2%',margin:'auto',paddingLeft:'10%'}} ><img src={img_2} className={classes.gridImage} alt=''/></Grid>
          </Grid>
          </Grid>


         <Grid container items lg={5} className={classes.gridContainer_2}>
         <Grid container items style={{height:'25%',display:'flex',flexDirection:'vertical'}}><Typography variant='h3' className={classes.text}> Explore the Beauty of Penang!</Typography>
         <div className={classes.underline}></div>
         </Grid>
         <Grid container items style={{height:'30%'}}><Typography variant='h5'className={classes.text}>Discover Penang's rich heritage in George Town, taste world-renowned dishes like Asam Laksa 
         and Char Kway Teow, or enjoy the breathtaking views from Penang Hill. Plan your perfect getaway today!</Typography></Grid>
         <Grid container items style={{height:'10%'}}><Button className={classes.button}onClick={()=>handleNavigate('/vacation')}><Typography variant="h5">PLAN YOU VISIT</Typography></Button></Grid>

         </Grid>
         
          </Grid>


        </Container>
    )
}

export default PerfectVacation;