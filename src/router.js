import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/home';
import Pessoas from './pages/public/pessoas'
import PerfilPessoa from './pages/public/pessoas/perfil_pessoa';
import Calendario from './pages/public/calendario';
import Timeline from './pages/private/timeline';
import Tarefas from './pages/public/tarefas/index';
import Grupos from './pages/public/grupos';
import Eventos from './pages/public/eventos';
import Room from './pages/room';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Room />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/pessoas" element={< Pessoas/>} />
      <Route path="/perfil_pessoa" element={< PerfilPessoa/>} />
      <Route path='/calendario' element={<Calendario />} />
      <Route path="/tarefas" element={<Tarefas />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/grupos" element={<Grupos/>} />
      <Route path="/eventos" element={<Eventos />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
