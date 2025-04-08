
//Create a global context provider for the app
import React, { createContext, useContext, useState } from 'react';

export type UserType = {
  name?: string,
  email?: string,
  age?: number,
}

// Define the shape of the context data
type GlobalContextType = {
  user?: UserType | null;
  theme?: string;
  setUser?: (user: UserType | null) => void; //---------> JUST DECLARARTIONS. so return voids
  logout?: () => void;
  login?: (user: UserType) => void;
  setTheme?: (theme: string) => void;
  toggleTheme?: () => void;
};

// Create the context with a default value
export const GlobalContext = createContext<GlobalContextType | undefined>({
  user: null
});




// Create a custom hook to use the context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
}




// Create a provider component
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null); //------> NOTE useContext uses useState
  const [theme, setTheme] = useState<string>('light');
  const login = (user: UserType) => { //----------> DEFINE HERE ALL the functions, useMemo and pass to provider
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = React.useMemo(() => ({ user, theme, setUser, login, logout, setTheme, toggleTheme }), [user, theme]);

  return (
    <GlobalContext value={contextValue}>
      {children}
    </GlobalContext>
  );
}
