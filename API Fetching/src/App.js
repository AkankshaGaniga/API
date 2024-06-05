import React from 'react';
import ExcuseGenerator from './component/API';
import Navbar from './component/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ExcuseGenerator />
    </div>
  );
}

export default App;
