
import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Photogrid from './components/Photogrid';
import PerfectVacation from './components/PerfectVacation';
import Explore from './components/Explore';
import Reasons from './components/Reasons';
import Footer from './components/Footer';
import Tour from './components/Tour';
import FoodPage from './components/FoodPage';
import ViewPage from './components/ViewPage';
import CulturePage from './components/CulturePage';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import Tour1 from './components/Tour1';
import Vacation from './components/vacation'
import ReviewPage from './components/ReviewPage'
import axios from 'axios';

// 设置 Axios 的全局基础 URL
axios.defaults.baseURL = 'http://localhost:5000'; 
// 创建 Material-UI 主题
let theme = createMuiTheme({
  typography: { fontFamily: 'Nunito Sans' },
  palette: {
    primary: {
      main: '#121C20',
    },
  },
});
theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* 主页面路由 */}
          <Route
            path="/"
            element={
              <div className="App">
                <Banner />
                <Photogrid />
                <Reasons />
                <PerfectVacation />
                <Explore />
                <Tour />
                <Footer />
              </div>
            }
          />

          {/* 子页面路由 */}
          <Route path="/foodpage" element={<FoodPage />} />
          <Route path="/viewpage" element={<ViewPage />} />
          <Route path="/culturepage" element={<CulturePage />} />
          <Route path="/Tour1" element={<Tour1 />} />
          <Route path="/vacation" elenent={<Vacation/>}/>
          <Route path="/ReviewPage" elenent={<ReviewPage/>}/>
          <Route path="/reviews" element={<ReviewPage />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
