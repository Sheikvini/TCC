import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/home/home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/index.js';
import Loginadm from './pages/login-adm';
import Cadastro from './pages/cadastro-cliente';
import Tintasinternas from './pages/tintasinternas';
import Tintasexternas from './pages/tintasexternas';
import Espacografite from './pages/espacografite';
import Pinceis from './pages/pinceis';
import Pagamento from './pages/pagamento';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/login' element={<Login />}  />
      <Route path='/login-adm' element={<Loginadm />} />
      <Route path='/login-cadastro' element={<Cadastro />} />
      <Route path='/tintasinternas' element={<Tintasinternas />} />
      <Route path='/tintasexternas' element={<Tintasexternas />} />
      <Route path='/espacografite' element={<Espacografite />} />
      <Route path='/pinceis' element={<Pinceis/>} />
      <Route path='/pagamento' element={<Pagamento/>} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);