import { useState } from 'react';
import GoBackToHome from '../components/GoBacktoHome';

export const useTheme = () => {
  const [theme, setTheme] = useState('light'); //_______ basically save in state

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
}

export const UseThemeExample = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        height: '100vh',
        transition: '0.3s ease-in',
        backgroundColor: theme === 'light' ? 'white' : 'black'
      }}
    >
      <button type="button" onClick={toggleTheme}>Toggle Theme</button>
      <GoBackToHome />
    </div>
  );
}