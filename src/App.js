import React from 'react';

import { Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/Homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';

import Header from './components/Header/header.component.jsx';




function App() {
  return (
    <div>
      <header/>
      <switch>
      <Route exact path='/' component = { HomePage } />
      <Route path='/shop' component = { ShopPage } />
      </switch>
    </div>
  );
  
}

export default App;
