import React from 'react';
import { Typography,Grid,Box,IconButton} from '@material-ui/core';
// import {GridList,Container,Card,GridListTile,GridListTileBar,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import img_1 from '../utils/penang2.jpg'
import img_2 from '../utils/logo512.png';

import FacebookIcon from '@material-ui/icons/Facebook';
import  TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles=makeStyles(theme=>({

container:{
    height:"55vh",

    backgroundImage:`url(${img_1})`,
   
    zIndex:'0',
    [theme.breakpoints.down('sm')]: {
        height: '40vh', // 小屏幕时高度变小
      },
},


topContainer:{

 height:'55vh',
 position:'relative',
 bottom:'0',
 zIndex:'300',
//  opacity:'0.1'
[theme.breakpoints.down('sm')]:{
    height:'40vh'
}


},
innerContainer:{
    opacity:'1',
    color:'white',
    display:'block',
    height:'44vh'
},
logo:{
  width:'60%',
  height:'50%',
  marginTop:'15%',

  opacity:'1',
  zIndex:'100',
  border:'0',
  
  marginLeft:'30%',
  [theme.breakpoints.down('sm')]:
{
    width: '80%', 
      height: '60%',
      marginLeft: '10%',
}
},
text_header:{
    color:'white',
    marginTop:'30%',
    marginLeft:'2%',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        marginLeft: '1%',
      },
},
text:{
    color:'white',
    marginTop:'2%',
    marginLeft:'2%',
    [theme.breakpoints.down('sm')]: {
        color:'blue',
        fontSize: '14px', 
        marginLeft: '1%',
      },

    '&:hover':{
        color:'#BFBD31',
        cursor:'pointer'
    }
},
contact_header:{
    marginTop:'20%',marginLeft:'5%'
},

contact_text:{
    marginLeft:'5%',
    color:'white',
    marginTop:'2%',
},
footer_box:{
    borderTop:'solid 1% #BFBD31',
    height:'10vh',
},
icons_box:{
    display:'flex'
},
icons:{
    color:'black',
    backgroundColor:'white',
    borderRadius:'50%',
    width:'20%',
    height:'10%',
    margin:'30% 2%',

    '&:hover':{
        backgroundColor:'#BFBD31',
        
    }

}


}))
 const Footer = () => {
     const classes=useStyles();
    return (
     
        <div className={classes.container} >
        <div className={classes.overlay}>

        <Grid container  className={classes.topContainer}>
       <Grid container items lg={12} xs={12} sm={12} md={12} >
        <Grid container items className={classes.innerContainer} lg={3} xs={3} sm={3} md={3}>
         <img src={img_2} alt='' className={classes.logo}>

         </img>
         
        </Grid>

        <Grid container items lg={2} xs={2} sm={2} md={2} className={classes.innerContainer}>
<Typography variant='h4' className={classes.text_header}>Information</Typography>
<Typography variant='h6' className={classes.text}>Adventure</Typography>
<Typography variant='h6' className={classes.text}>Book now</Typography>
<Typography variant='h6' className={classes.text}>About</Typography>
<Typography variant='h6' className={classes.text}>Blogs</Typography>
</Grid>

<Grid container items lg={2} xs={2} sm={2} md={2} className={classes.innerContainer}>
<Typography variant='h4' className={classes.text_header}>Quick Links</Typography>
<Typography variant='h6' className={classes.text}>Tours </Typography>
<Typography variant='h6' className={classes.text}>Support</Typography>
<Typography variant='h6' className={classes.text}>Privacy</Typography>
<Typography variant='h6' className={classes.text}>Affiliates</Typography>
            
</Grid>


<Grid container items lg={2} xs={2} sm={2} md={2} className={classes.innerContainer}>
<Box className={classes.icons_box}>
 <IconButton className={classes.icons}><FacebookIcon></FacebookIcon></IconButton>
 <IconButton className={classes.icons}><TwitterIcon></TwitterIcon></IconButton>
 <IconButton className={classes.icons}><InstagramIcon></InstagramIcon></IconButton>


</Box>
            
</Grid>



<Grid container items>
      
</Grid>           
</Grid>
       </Grid>
        </div>



        </div>
            

        )
}

export default Footer;