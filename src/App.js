import React, { Component } from 'react';
import View from './components/View';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <View width="20%">Items 1</View>
        <View width="80%">Items 2</View>
      </div>
    );
  }
}

export default App;
