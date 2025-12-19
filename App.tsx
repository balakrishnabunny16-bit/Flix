
import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './store/AppContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import Admin from './pages/Admin';
import Search from './pages/Search';
import AuthModal from './components/AuthModal';
import MovieDetails from './components/MovieDetails';
import { Movie } from './types';

const AppContent: React.FC = () => {
  const { user } = useApp();
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
  const [showAuth, setShowAuth] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderRoute = () => {
    // If not logged in and not at a public route (though all are semi-private here)
    if (!user && currentPath !== '#/') {
      window.location.hash = '#/';
    }

    switch (currentPath) {
      case '#/':
        return <Home onSelectMovie={setSelectedMovie} />;
      case '#/watchlist':
        return <Watchlist onSelectMovie={setSelectedMovie} />;
      case '#/admin':
        return <Admin />;
      case '#/search':
        return <Search onSelectMovie={setSelectedMovie} />;
      default:
        return <Home onSelectMovie={setSelectedMovie} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navbar onAuthClick={() => setShowAuth(true)} />
      
      <main className="pb-20">
        {renderRoute()}
      </main>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
      {selectedMovie && <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}

      <footer className="py-12 px-8 md:px-20 bg-[#141414] text-gray-500 text-sm border-t border-gray-800">
        <div className="flex space-x-6 mb-8">
           <i className="fa-brands fa-facebook-f hover:text-white cursor-pointer transition text-xl"></i>
           <i className="fa-brands fa-instagram hover:text-white cursor-pointer transition text-xl"></i>
           <i className="fa-brands fa-twitter hover:text-white cursor-pointer transition text-xl"></i>
           <i className="fa-brands fa-youtube hover:text-white cursor-pointer transition text-xl"></i>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="space-y-2">
            <p className="hover:underline cursor-pointer">Audio and Subtitles</p>
            <p className="hover:underline cursor-pointer">Media Center</p>
            <p className="hover:underline cursor-pointer">Privacy</p>
            <p className="hover:underline cursor-pointer">Contact Us</p>
          </div>
          <div className="space-y-2">
            <p className="hover:underline cursor-pointer">Audio Description</p>
            <p className="hover:underline cursor-pointer">Investor Relations</p>
            <p className="hover:underline cursor-pointer">Legal Notices</p>
          </div>
          <div className="space-y-2">
            <p className="hover:underline cursor-pointer">Help Center</p>
            <p className="hover:underline cursor-pointer">Jobs</p>
            <p className="hover:underline cursor-pointer">Cookie Preferences</p>
          </div>
          <div className="space-y-2">
            <p className="hover:underline cursor-pointer">Gift Cards</p>
            <p className="hover:underline cursor-pointer">Terms of Use</p>
            <p className="hover:underline cursor-pointer">Corporate Information</p>
          </div>
        </div>
        <div className="border border-gray-500 px-2 py-1 inline-block mb-4">Service Code</div>
        <p>&copy; 1997-2024 FlixStream, Inc.</p>
      </footer>
    </div>
  );
};

const App: React.FC = () => (
  <AppProvider>
    <AppContent />
  </AppProvider>
);

export default App;
