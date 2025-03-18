import React from 'react';
import Message from './Message';
import CommentsList from './CommentsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text="Привет, это мое первое сообщение в React!" />
        <Message text="Это второе сообщение." />
        <CommentsList />
      </header>
    </div>
  );
}

export default App;