import React from 'react';
import { Typography, Grid, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    
    width: '100%',
    height: 'auto'
  },
  text: {
    color: 'white',
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem', 
  },
},
  gridRow: {
    alignItems: 'center',
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column', // 小屏幕文字和视频纵向排列
      height: 'auto',
    },
  },
  underline: {
    backgroundColor: '#707531',
    width: '15%',
    height: '4%',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '-24.5%',
    [theme.breakpoints.down('sm')]: {
      width: '30%', // 小屏幕下宽度调整
    },
  },
  button: {
    backgroundColor: '#707531',
    borderRadius: '15px',
    width: '30%',
    height: '10%',
    color: 'white',
    '&:hover': {
      backgroundColor: '#BFBD31',
    },
    [theme.breakpoints.down('sm')]: {
      width: '60%', // 小屏幕按钮更宽
      height: 'auto',
    },
  },
}));

const Tour = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  // 跳转到评论页面
  const handleNavigate = (id, title) => {
    navigate('/reviews', {
      state: {
        id, // 景点的唯一标识符
        title, // 景点标题
      },
    });
  };

  return (
    <Container>
      <Grid container className={classes.container}>
        {/* 标题部分 */}
        <Grid container item>
          <Typography variant="h3" className={classes.text}>
            Related Videos
          </Typography>
          <div className={classes.underline}></div>
        </Grid>

        {/* 第一部分：左文字 + 右视频 */}
        <Grid container item lg={12} style={{ height: '90vh' }}>
          <Grid container item lg={6} className={classes.gridRow}>
            <Typography variant="h5" className={classes.text}>
              Colonial architecture, natural and cultural attractions, and some of the best street food in Asia. <br />
              Try The Unique Cuisine Of Penang
            </Typography>
            <Button
              className={classes.button}
              onClick={() => handleNavigate('unique-cuisine', 'Unique Cuisine Of Penang')}
            >
              <Typography>Learn More</Typography>
            </Button>
          </Grid>
          <Grid container item lg={6} style={{ height: '100%', marginTop: '5%' }}>
            <iframe
              width="90%"
              height="315"
              src="https://www.youtube.com/embed/SqoozK8twsc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
        </Grid>

        {/* 第二部分：左视频 + 右文字 */}
        <Grid container item className={classes.gridRow}>
          <Grid container item lg={6}>
            <iframe
              width="90%"
              height="315"
              src="https://www.youtube.com/embed/gQ7bxektkU8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
          <Grid container item lg={6}>
            <Typography variant="h5" className={classes.text}>
              Penang… Malaysia's most iconic island. <br />
              Ideas on the top things to do on Penang Island, plus plenty of travel tips, and an insight into this beautiful tropical island.
            </Typography>
            <Button
              className={classes.button}
              onClick={() => handleNavigate('penang-island', 'Penang Island Highlights')}
            >
              <Typography>Learn More</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tour;
