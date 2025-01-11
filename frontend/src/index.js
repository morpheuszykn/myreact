import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

// 设置 Axios 的全局基础 URL
axios.defaults.baseURL = 'http://localhost:5000'; 

ReactDOM.render(
  
    <App />
 ,
  document.getElementById('root')
);

