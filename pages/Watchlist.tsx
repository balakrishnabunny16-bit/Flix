
import React from 'react';
import { useApp } from '../store/AppContext';
import { Movie } from '../types';

interface WatchlistProps {
  onSelectMovie: (movie: Movie) => void;
}

const Watchlist: React.FC<WatchlistProps> = ({ onSelectMovie }) => {
  const { watchlist, user } = useApp();

  if (!user) {
    return (
      <div className="pt-40 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Please Sign In</h2>
        <p className="text-gray-400 max-w-md">You need to be logged in to manage your watchlist.</p>
        <button 
          onClick={() => window.location.hash = '#/'}
          className="mt-8 bg-white text-black px-8 py-2 rounded font-bold hover:bg-white/80"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 md:px-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">My List</h2>
      
      {watchlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <i className="fa-solid fa-heart-crack text-6xl mb-4 opacity-20"></i>
          <p className="text-xl">You haven't added anything to your list yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-2 gap-y-12">
          {watchlist.map((movie) => (
            <div 
              key={movie.id} 
              onClick={() => onSelectMovie(movie)}
              className="flex-none aspect-[16/9] bg-gray-800 rounded overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
            >
              <img src={movie.backdropPath} alt={movie.title} className="w-full h-full object-cover" />
              <div className="p-2 text-sm font-bold truncate">
                {movie.title}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
