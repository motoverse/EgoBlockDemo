import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        Stuff
      </div>
    </div>
  );
}

export default App;
