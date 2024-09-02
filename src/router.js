import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Room from './pages/room';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Room />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
