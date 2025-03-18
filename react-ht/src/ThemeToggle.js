import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <div>
      <button
        onClick={() => dispatch(toggleTheme())}
        style={{
          padding: '10px 20px',
          backgroundColor: isDarkTheme ? '#333' : '#f0f0f0',
          color: isDarkTheme ? '#fff' : '#333',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {isDarkTheme ? 'Светлая тема' : 'Темная тема'}
      </button>
    </div>
  );
};

export default ThemeToggle;