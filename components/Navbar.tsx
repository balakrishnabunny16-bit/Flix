
import React, { useState, useEffect } from 'react';
import { useApp } from '../store/AppContext';

interface NavbarProps {
  onAuthClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAuthClick }) => {
  const { user, logout } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 flex items-center justify-between px-4 md:px-12 py-4 ${isScrolled ? 'bg-[#141414]' : 'bg-transparent bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="flex items-center space-x-4 md:space-x-12">
        <a href="#/" className="text-[#E50914] text-2xl md:text-3xl font-black tracking-tighter italic">FLIXSTREAM</a>
        
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <a href="#/" className="hover:text-gray-300 transition">Home</a>
          <a href="#/tv-shows" className="hover:text-gray-300 transition">TV Shows</a>
          <a href="#/movies" className="hover:text-gray-300 transition">Movies</a>
          <a href="#/new-and-popular" className="hover:text-gray-300 transition">New & Popular</a>
          <a href="#/watchlist" className="hover:text-gray-300 transition">My List</a>
          {user?.email === 'admin@flix.com' && <a href="#/admin" className="text-yellow-500 hover:text-yellow-400">Admin</a>}
        </div>
      </div>

      <div className="flex items-center space-x-4 md:space-x-6">
        <a href="#/search" className="cursor-pointer hover:text-gray-400 transition">
          <i className="fa-solid fa-magnifying-glass text-xl"></i>
        </a>
        
        {user ? (
          <div className="flex items-center space-x-4">
            <i className="fa-solid fa-bell text-xl cursor-pointer"></i>
            <div className="relative group">
              <img src={user.avatar} alt="Profile" className="w-8 h-8 rounded cursor-pointer border border-transparent hover:border-white transition" />
              <div className="absolute right-0 top-full mt-2 w-48 bg-black/95 border border-gray-800 p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                <p className="text-sm font-bold mb-4">{user.name}</p>
                <div className="border-t border-gray-700 pt-4 space-y-3 text-sm text-gray-400">
                  <p className="hover:underline cursor-pointer">Account</p>
                  <p className="hover:underline cursor-pointer">Help Center</p>
                  <p className="hover:underline cursor-pointer" onClick={logout}>Sign out of FlixStream</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button 
            onClick={onAuthClick}
            className="bg-[#E50914] text-white px-4 py-1.5 rounded text-sm font-bold hover:bg-[#b20710] transition"
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
