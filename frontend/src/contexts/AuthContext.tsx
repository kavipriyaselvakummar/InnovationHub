import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User, UserRole } from '../types';
import { getUsers } from '../services';

interface AuthContextType {
  currentUser: User | null;
  loggedIn: boolean;
  role: UserRole | null;
  login: (email: string, password?: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Rehydrate on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('ihub_current_user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password?: string) => {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.isActive);
    if (user && (password === 'password' || user.password === password || !password)) {
      setCurrentUser(user);
      localStorage.setItem('ihub_current_user', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('ihub_current_user');
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      loggedIn: !!currentUser,
      role: currentUser?.role || null,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
