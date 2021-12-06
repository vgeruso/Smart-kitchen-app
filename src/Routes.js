import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './views/Home';

const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/cadastro", element: (<p>OK</p>) }
  ]);

  return routes;
}

export default Routes;