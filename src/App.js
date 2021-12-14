import React from 'react';
import './App.css';
import Calculadora from './features/Calculadora/Calculadora';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Calculadora />
      </div>
    );
  }
}