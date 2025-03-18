import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Message from './Message';
import CommentsList from './CommentsList';
import TemperatureConverter from './TemperatureConverter'; 
import TodoList from './TodoList';
import ThemeToggle from './ThemeToggle';
import './App.css';

function App() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <Router>
      <div className={`App ${isDarkTheme ? 'dark' : ''}`}>
        <header className="App-header">
          {/* Навигационное меню */}
          <nav>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'inline', marginRight: '20px' }}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                  Главная
                </Link>
              </li>
              <li style={{ display: 'inline' }}>
                <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
                  О нас
                </Link>
              </li>
            </ul>
          </nav>

          {/* Переключатель темы */}
          <ThemeToggle />

          {/* Маршруты */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Message text="Привет, это мое первое сообщение в React!" />
                  <Message text="Это второе сообщение." />
                  <CommentsList />
                  <TemperatureConverter /> {/* Добавлен TemperatureConverter */}
                  <TodoList />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;