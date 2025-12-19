
import React, { useRef, useState } from 'react';
import { Movie } from '../types';

interface RowProps {
  title: string;
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

const Row: React.FC<RowProps> = ({ title, movies, onSelectMovie }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth + 100 
        : scrollLeft + clientWidth - 100;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const onScroll = () => {
    if (rowRef.current) {
      setShowLeftArrow(rowRef.current.scrollLeft > 0);
    }
  };

  return (
    <div className="px-4 md:px-12 my-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-white hover:text-gray-300 transition cursor-pointer inline-flex items-center group">
        {title} 
        <i className="fa-solid fa-chevron-right text-xs ml-2 opacity-0 group-hover:opacity-100 transition duration-300"></i>
      </h2>
      
      <div className="relative group/row">
        {showLeftArrow && (
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 bottom-0 z-40 bg-black/50 w-10 md:w-16 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-300"
          >
            <i className="fa-solid fa-chevron-left text-2xl"></i>
          </button>
        )}

        <div 
          ref={rowRef}
          onScroll={onScroll}
          className="flex space-x-2 overflow-x-auto hide-scrollbar scroll-smooth"
        >
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              onClick={() => onSelectMovie(movie)}
              className="flex-none w-[160px] md:w-[240px] lg:w-[280px] aspect-[16/9] bg-gray-800 rounded overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:z-30 shadow-lg"
            >
              <img 
                src={movie.backdropPath} 
                alt={movie.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition"></div>
              <div className="absolute bottom-2 left-2 right-2 truncate text-sm font-bold drop-shadow-md">
                {movie.title}
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-40 bg-black/50 w-10 md:w-16 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-300"
        >
          <i className="fa-solid fa-chevron-right text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Row;
