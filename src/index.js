import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login  from "./login";
import Adminlogin from './adminlogin';
import Signin from './signin';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>     
      <Route path="dashboard" element={<App/>}/>
      <Route path="/" element={<Login/>} />
      <Route path='Adminlogin' element={<Adminlogin/>} />
      <Route path= 'signin' element={<Signin/>} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
