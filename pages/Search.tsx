
import React, { useState } from 'react';
import { MOCK_MOVIES } from '../constants';
import { Movie } from '../types';

interface SearchProps {
  onSelectMovie: (movie: Movie) => void;
}

const Search: React.FC<SearchProps> = ({ onSelectMovie }) => {
  const [query, setQuery] = useState('');
  
  const results = query.trim() === '' 
    ? [] 
    : MOCK_MOVIES.filter(m => 
        m.title.toLowerCase().includes(query.toLowerCase()) || 
        m.genres.some(g => g.toLowerCase().includes(query.toLowerCase())) ||
        m.cast.some(c => c.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <div className="pt-24 px-4 md:px-12">
      <div className="flex items-center bg-black/40 border border-gray-600 rounded p-4 mb-12 max-w-2xl mx-auto focus-within:border-white transition-colors">
        <i className="fa-solid fa-magnifying-glass text-gray-400 mr-4"></i>
        <input 
          autoFocus
          type="text" 
          placeholder="Titles, people, genres" 
          className="bg-transparent w-full outline-none text-xl"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button onClick={() => setQuery('')}>
            <i className="fa-solid fa-xmark text-gray-400 hover:text-white transition"></i>
          </button>
        )}
      </div>

      {query.trim() === '' ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-600">
          <p className="text-xl">Search for movies, TV shows, and more</p>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg">Your search for "{query}" did not have any matches.</p>
          <p className="mt-4">Suggestions:</p>
          <ul className="list-disc list-inside inline-block text-left mt-2 text-sm">
            <li>Try different keywords</li>
            <li>Looking for a movie or TV show?</li>
            <li>Try a genre, such as comedy, romance, sports, or drama</li>
          </ul>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-2 gap-y-12">
          {results.map((movie) => (
            <div 
              key={movie.id} 
              onClick={() => onSelectMovie(movie)}
              className="group cursor-pointer transform transition duration-300 hover:scale-105"
            >
              <div className="aspect-[16/9] bg-gray-800 rounded overflow-hidden mb-2">
                <img src={movie.backdropPath} alt={movie.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-sm font-bold truncate group-hover:text-red-500 transition-colors">
                {movie.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
