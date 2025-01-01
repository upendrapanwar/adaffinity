import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/home-page';
import { Layout } from './pages/layout';

function App() {
  return (
    
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
