import React from 'react';
import './App.css';
import Calculadora from './features/Calculadora/Calculadora';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Calculadora />
      </div>
    );
  }
}

export default App;