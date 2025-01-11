import React from 'react';
import "../styles/banner.css";
import Navbar from './Navbar'
import { Typography,Grid} from '@material-ui/core';
// import {GridList,Box,Container,Card,GridListTile,GridListTileBar,IconButton,Button}from '@material-ui/core';
import {makeStyles} from "@material-ui/styles"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const useStyles=makeStyles(them=>({

  banner_header: {
    fontSize: 'clamp(3rem, 8vw, 12rem)', // 根据屏幕宽度动态调整
    color: '#ADD8E6',
    fontWeight: '900',
    paddingTop: '10%',
    textAlign: 'center',
  },
  

text:{
    color:'#ffffff',
    textAlign:'center'
},
carouselText:{
color:'white',
fontWeight:'200'
}
// text_overlay:{
//     position:'relative',
//     zIndex:'3',
//     top:"0",
//     opacity:'1'

// }


}))


const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () => {
    const classes=useStyles();

    return (
        <div className="banner">
          
            <Navbar/>
     
            <Typography className={classes.banner_header}>PENANG</Typography>
            <Typography variant="h3" className={classes.text}>Discover the beauty of Penang with us</Typography>
          <Carousel responsive={responsive}
          className="carousel"
         
          dotListClass="custom-dot-list-style"
          autoPlaySpeed={1000}
          >
            <Grid ><Typography variant='h4'className={classes.carouselText}>Be yourself with new emotion</Typography></Grid>
            <Grid ><Typography variant='h6'className={classes.carouselText}>life</Typography></Grid>
            <Grid ><Typography variant='h6'className={classes.carouselText}>experience</Typography></Grid>
            <Grid ><Typography variant='h6'className={classes.carouselText}>beautiful</Typography></Grid> 
            <Grid ><Typography variant='h6'className={classes.carouselText}>happiness</Typography></Grid> 
          </Carousel>
            </div>
         
      
    )  
}

export default Banner;