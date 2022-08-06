import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Modals from './components/Modals';

const App = () => {
  return (
    <div className="app" data-testid="app">
      <Header />
      <Modals />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
