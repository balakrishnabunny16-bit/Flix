
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Movie } from '../types';
import { MOCK_MOVIES } from '../constants';

interface AppContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  watchlist: Movie[];
  addToWatchlist: (movieId: string) => void;
  removeFromWatchlist: (movieId: string) => void;
  isInWatchlist: (movieId: string) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Initialize from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('flix_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string) => {
    const newUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      avatar: 'https://picsum.photos/seed/user1/100/100',
      watchlist: []
    };
    setUser(newUser);
    localStorage.setItem('flix_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('flix_user');
  };

  const watchlist = MOCK_MOVIES.filter(m => user?.watchlist.includes(m.id));

  const addToWatchlist = (movieId: string) => {
    if (!user) return;
    const updatedUser = { ...user, watchlist: [...user.watchlist, movieId] };
    setUser(updatedUser);
    localStorage.setItem('flix_user', JSON.stringify(updatedUser));
  };

  const removeFromWatchlist = (movieId: string) => {
    if (!user) return;
    const updatedUser = { ...user, watchlist: user.watchlist.filter(id => id !== movieId) };
    setUser(updatedUser);
    localStorage.setItem('flix_user', JSON.stringify(updatedUser));
  };

  const isInWatchlist = (movieId: string) => {
    return user?.watchlist.includes(movieId) || false;
  };

  return (
    <AppContext.Provider value={{ 
      user, 
      login, 
      logout, 
      watchlist, 
      addToWatchlist, 
      removeFromWatchlist, 
      isInWatchlist 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
