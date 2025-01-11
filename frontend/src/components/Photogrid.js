import React from 'react';
import "../styles/photogrid.css";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, GridList, Grid, Card, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

// 图片导入
import img_1 from "../utils/FOOD.jpg";
import img_2 from "../utils/view.jpg";
import img_3 from "../utils/culture.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
   
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    margin: '10px 0',
  },
  gridImage: {
    width: '100%',
    height: '100%',
  },
  Card: {
    height: '100%',
    backgroundColor: '#FFC0CB',
  },
  tilebar: {
    '&:hover': {
      backgroundColor: '#BFBD31',
      cursor: 'pointer',
    },
  },
}));

const Photogrid = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  // 跳转函数
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={classes.root}>
      <Grid container direction="column" alignItems="center">
        {/* 标题 */}
        <Typography variant="h2" className={classes.title}>
          The wonders of Penang
        </Typography>
        <Typography variant="h6" className={classes.title}>
          We are committed to providing authentic content for guests around Penang
        </Typography>
      </Grid>

      {/* 图片网格 */}
      <GridList cellHeight={350} style={{ marginTop: '2%', width: '80%' }} cols={3}>
        <GridListTile cols={1}>
          <Card className={classes.Card}>
            <img src={img_1} className={classes.gridImage} alt="Food" />
            <GridListTileBar
              className={classes.tilebar}
              title="FOOD"
              subtitle="Penang Assam Laksa, Char Kway Teow, Nyonya Kuih, Hokkien Mee, Nasi Lemak"
              actionIcon={
                <IconButton onClick={() => handleNavigate('/foodpage')}>FOOD</IconButton>
              }
            />
          </Card>
        </GridListTile>

        <GridListTile cols={1}>
          <Card className={classes.Card}>
            <img src={img_2} className={classes.gridImage} alt="Scenery" />
            <GridListTileBar
              className={classes.tilebar}
              title="SCENERY"
              subtitle="Penang Bridge, Penang Hill, Kek Lok Si Temple, Entopia Butterfly Farm, Batu Ferringhi Beach"
              actionIcon={
                <IconButton onClick={() => handleNavigate('/viewpage')}>SCENERY</IconButton>
              }
            />
          </Card>
        </GridListTile>

        <GridListTile cols={1}>
          <Card className={classes.Card}>
            <img src={img_3} className={classes.gridImage} alt="Culture" />
            <GridListTileBar
              className={classes.tilebar}
              title="CULTURE"
              subtitle="George Town, Peranakan Culture"
              actionIcon={
                <IconButton onClick={() => handleNavigate('/culturepage')}>CULTURE</IconButton>
              }
            />
          </Card>
        </GridListTile>
      </GridList>
    </div>
  );
};

export default Photogrid;
