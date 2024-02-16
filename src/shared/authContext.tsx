import React, { createContext, useState, useContext, FC } from 'react';

interface AuthContextType {
    authenticated: boolean;
    login: () => void;
    logout: () => void;
}
interface AuthProviderProps {
    children: React.ReactNode;
  }
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };
  
  
  export const AuthProvider: FC <AuthProviderProps>= ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
  
    const login = () => {
      setAuthenticated(true);
    };
  
    const logout = () => {
      setAuthenticated(false);
    };
  
    const contextValue: AuthContextType = {
      authenticated,
      login,
      logout,
    };
  
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
  };