import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/home/home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/index.js';
import Loginadm from './pages/login-adm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/login' element={<Login />}  />
      <Route path='/login-adm' element={<Loginadm />} />''
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);