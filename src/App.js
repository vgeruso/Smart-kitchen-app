import React from "react";
import {
  BrowserRouter as Router
} from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from "./Routes";

const App = () => {

  return (
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
