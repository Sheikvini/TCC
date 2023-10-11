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
import Homej from './pages/jogo/home'
import Game from './pages/jogo/game';
import Hard from './pages/jogo/hard';
import Easy from './pages/jogo/easy';
import Normal from './pages/jogo/normal';
import Card from './components/card';
import Congratulations from './pages/jogo/congratulations';
import Carrinho from './pages/carrinho/carrinho';
import Telaadm from './pages/telaadm';

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
      <Route path='/homej' element={<Homej/>} />
      <Route path='/homej/jogo-da-memória' element={<Game />} />
      <Route path='/hard' element={<Hard />} />
      <Route path='/easy' element={<Easy/>} />
      <Route path='/normal' element={<Normal/>} />
      <Route path='/teste' element={<Card/>} />        
      <Route path='/congratulations' element={<Congratulations />} />
      <Route path='/carrinho' element={<Carrinho />} />
      <Route path='/telaadm' element={<Telaadm />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);