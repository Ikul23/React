import React from 'react';
import { createRoot } from 'react-dom/client'; // Используем createRoot
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './index.css';

// Находим корневой элемент
const container = document.getElementById('root');

// Создаем корневой рендер
const root = createRoot(container);

// Рендерим приложение
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);