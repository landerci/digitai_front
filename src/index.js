import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import Router from './router';
import theme from './styles/theme';
import './index.css';
import api from './services/api';
import tokenService from './services/TokenService';
import axios from 'axios';
import { AuthProvider } from './context/auth';

const root = createRoot(document.getElementById('root'));

api.interceptors.request.use(
  async (config) => {
    if(config.url != "/user/login"){
      let token = window.sessionStorage.getItem("hash");
      if (token){
            config.headers['Authorization'] = `Bearer ${token}`;
          }
    } 
          return config;
  })

  api.interceptors.response.use(response => {
    return response;
}, err => {
    return new Promise((resolve, reject) => {
        const originalReq = err.config;
        // Inverter o if
        if (err.response.status === 401 && err.config && !err.config._retry && !err.config.url.endsWith('login')) {
            originalReq._retry = true;
            let token = window.sessionStorage.getItem("hash");
            let res = tokenService.refresh({oldtoken: token})
                .then(res => {
                    console.clear()
                    // console.log(err.config.url);
                    if(res.data.access_token){
                        window.sessionStorage.setItem('hash', res.data.access_token);
                    }
                    originalReq.headers['Authorization'] = `Bearer ${res.data.access_token}`;
                    return axios(originalReq);
                }).catch((error) => console.log(error));
            resolve(res);
        }else{
            reject(err);
        }
    });
});

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider>
      <Router />
    </AuthProvider>
  </ThemeProvider>,
);
