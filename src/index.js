import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login  from "./login";
import Adminlogin from './adminlogin';
import Signin from './signin';
import App from './App';
import RepayLoan from './repayloan';
import RequestLoan from './requestloan';
import Inbox from './inbox';
import UpdateSavingsPage from './updatesavings';
import CheckStats from './checkstats';
import Admindash from './admindash'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>     
      <Route path="dashboard" element={<App/>}/>
      <Route path="/" element={<Login/>} />
      <Route path='Adminlogin' element={<Adminlogin/>} />
      <Route path= 'signin' element={<Signin/>} />
      <Route path='repayloan' element={<RepayLoan/>}/>
      <Route path='requestloan' element={<RequestLoan/>}/>
      <Route path= 'inbox' element={<Inbox/>}/>
      <Route path='updatesavings' element={<UpdateSavingsPage/>}/>
      <Route path= 'checkstats' element={<CheckStats/>}/>
      <Route path= 'admindash' element={<Admindash/>}/>

    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
