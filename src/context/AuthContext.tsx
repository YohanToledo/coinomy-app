import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    localStorage.removeItem("coinomy_token");
    setIsAuthenticated(false);
  };

  const parseJwt = (token: string) => {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  };

  const token = localStorage.getItem("coinomy_token");

  useEffect(() => {
    if (token) {
      const decoded = parseJwt(token);
      localStorage.setItem("userInfo", JSON.stringify(decoded));
      const expiredToken = Date.now() / 1000 > decoded.exp;

      if (expiredToken) {
        setIsAuthenticated(false);
        navigate("/");
      }

      setIsAuthenticated(Boolean(token && !expiredToken));
    }

    if (token && window.location.href.slice(-5) === "login") {
      navigate("/app/home");
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
