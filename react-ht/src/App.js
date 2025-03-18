import React from 'react';
import Message from './Message';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text="Привет, это мое первое сообщение в React!" />
        <Message text="Это второе сообщение." />
      </header>
    </div>
  );
}

export default App;