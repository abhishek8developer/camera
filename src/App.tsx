import React from 'react'
import logo from './logo.svg';
import LiveFeed from './Camera'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Infinity Coders Home Camera
      </header>
      <LiveFeed />
    </div>
  );
}

export default App;
