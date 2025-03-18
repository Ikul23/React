import React from 'react';
import Message from './Message';
import CommentsList from './CommentsList';
import TemperatureConverter from './TemperatureConverter';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text="Привет, это мое первое сообщение в React!" />
        <Message text="Это второе сообщение." />
        <CommentsList />
        <TemperatureConverter />
        <TodoList />
      </header>
    </div>
  );
}

export default App;