
import React, { useState } from 'react';
import { Movie } from '../types';
import { useApp } from '../store/AppContext';

interface MovieDetailsProps {
  movie: Movie;
  onClose: () => void;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, onClose }) => {
  const { isInWatchlist, addToWatchlist, removeFromWatchlist, user } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleWatchlist = () => {
    if (!user) return alert('Please sign in first');
    if (isInWatchlist(movie.id)) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie.id);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] bg-black/60 flex justify-center overflow-y-auto pt-10 px-4 md:px-0 scroll-smooth">
      <div className="bg-[#181818] w-full max-w-4xl h-fit rounded-xl overflow-hidden relative shadow-2xl mb-10">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition text-2xl"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Header / Trailer Section */}
        <div className="relative aspect-video">
          {isPlaying ? (
            <div className="w-full h-full bg-black">
              <video 
                src={movie.videoUrl || 'https://www.w3schools.com/html/mov_bbb.mp4'} 
                controls 
                autoPlay 
                className="w-full h-full"
              />
            </div>
          ) : (
            <>
              <img src={movie.backdropPath} alt={movie.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{movie.title}</h2>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="flex items-center space-x-2 bg-white text-black px-8 py-2.5 rounded hover:bg-white/80 transition font-bold text-lg"
                  >
                    <i className="fa-solid fa-play"></i>
                    <span>Play</span>
                  </button>
                  <button 
                    onClick={toggleWatchlist}
                    className="flex items-center justify-center w-12 h-12 bg-gray-500/40 text-white rounded-full border-2 border-gray-400/50 hover:border-white transition group"
                  >
                    <i className={`fa-solid ${isInWatchlist(movie.id) ? 'fa-check' : 'fa-plus'}`}></i>
                  </button>
                  <button className="flex items-center justify-center w-12 h-12 bg-gray-500/40 text-white rounded-full border-2 border-gray-400/50 hover:border-white transition">
                    <i className="fa-regular fa-thumbs-up"></i>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 text-sm">
              <span className="text-green-500 font-bold">{Math.round(movie.rating * 10)}% Match</span>
              <span className="text-gray-400">{movie.releaseDate.split('-')[0]}</span>
              <span className="border border-gray-500 px-2 text-[10px] rounded">HD</span>
              <span className="text-gray-400 font-medium">{movie.duration}</span>
            </div>
            <p className="text-lg leading-relaxed">{movie.description}</p>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <span className="text-gray-500">Cast: </span>
              {movie.cast.map((c, i) => (
                <span key={c} className="hover:underline cursor-pointer">{c}{i < movie.cast.length - 1 ? ', ' : ''}</span>
              ))}
            </div>
            <div>
              <span className="text-gray-500">Genres: </span>
              {movie.genres.map((g, i) => (
                <span key={g} className="hover:underline cursor-pointer">{g}{i < movie.genres.length - 1 ? ', ' : ''}</span>
              ))}
            </div>
            <div>
              <span className="text-gray-500">Type: </span>
              <span className="capitalize">{movie.type}</span>
            </div>
          </div>
        </div>

        {/* Episodes / Similar Section (Mock) */}
        <div className="p-8 bg-[#181818]">
          <h3 className="text-2xl font-bold mb-6">More Like This</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-[#2f2f2f] rounded overflow-hidden group cursor-pointer">
                <img src={`https://picsum.photos/seed/similar${i}/400/225`} alt="Similar" className="w-full h-32 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-gray-400 text-xs">2023</span>
                    <button className="text-white border border-gray-500 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-3">A similar thrilling experience you might enjoy if you liked this title.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
