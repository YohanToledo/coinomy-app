import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type AuthContextType = {
  isAuthenticated: boolean;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  logout: () => { },
});

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('coinomy_token');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('coinomy_token');

    if (token) {
      setIsAuthenticated(true);
      if (window.location.href.slice(-5) === 'login') {
        console.log('redirect')
        navigate("/app/home")
      }
    }
  }, [navigate, setIsAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;