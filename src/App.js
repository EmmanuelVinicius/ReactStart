import React, { Component } from 'react';

import Header from './components/Header/header';
import Routes from './routes'
import Footer from './components/Footer/footer';

import './styles.css';


const App = () => (
  <div className="App">
    <Header />
    <Routes />
    <Footer />
  </div>
);

export default App;
