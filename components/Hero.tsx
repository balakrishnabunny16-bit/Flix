
import React from 'react';
import { Movie } from '../types';

interface HeroProps {
  movie: Movie;
  onPlay: () => void;
  onInfo: () => void;
}

const Hero: React.FC<HeroProps> = ({ movie, onPlay, onInfo }) => {
  return (
    <div className="relative h-[65vh] md:h-[85vh] lg:h-[95vh] w-full">
      <div className="absolute inset-0">
        <img 
          src={movie.backdropPath} 
          alt={movie.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-vignette"></div>
        <div className="absolute inset-0 netflix-shadow"></div>
      </div>

      <div className="absolute bottom-[15%] md:bottom-[25%] left-4 md:left-12 max-w-2xl">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 drop-shadow-xl uppercase tracking-tighter">
          {movie.title}
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-gray-200 mb-8 drop-shadow-md line-clamp-3">
          {movie.description}
        </p>
        
        <div className="flex items-center space-x-3">
          <button 
            onClick={onPlay}
            className="flex items-center space-x-2 bg-white text-black px-6 md:px-10 py-2.5 rounded hover:bg-white/80 transition font-bold text-lg"
          >
            <i className="fa-solid fa-play"></i>
            <span>Play</span>
          </button>
          <button 
            onClick={onInfo}
            className="flex items-center space-x-2 bg-gray-500/60 text-white px-6 md:px-10 py-2.5 rounded hover:bg-gray-500/40 transition font-bold text-lg"
          >
            <i className="fa-solid fa-circle-info"></i>
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
