import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;

