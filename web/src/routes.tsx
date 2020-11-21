import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {//cada página é uma rota
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />{/*exact = pra não haver duplicação de rota raiz*/ }
      <Route component={CreatePoint} path="/create-point" />
    </BrowserRouter>
  )
}

export default Routes;