import React from 'react';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Асинхронная загрузка задач</h1>
        <TaskList />
      </header>
    </div>
  );
}

export default App;