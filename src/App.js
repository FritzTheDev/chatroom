import React, { Component } from 'react';
import Chatroom from './components/chatroom.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App center">
        <Chatroom/>
      </div>
    );
  }
}

export default App;
