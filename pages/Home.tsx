
import React from 'react';
import Hero from '../components/Hero';
import Row from '../components/Row';
import { MOCK_MOVIES } from '../constants';
import { Movie } from '../types';

interface HomeProps {
  onSelectMovie: (movie: Movie) => void;
}

const Home: React.FC<HomeProps> = ({ onSelectMovie }) => {
  // Use Stranger Things 4 as the hero because of its iconic red background imagery
  const featuredMovie = MOCK_MOVIES.find(m => m.id === 'st4') || MOCK_MOVIES[0];
  const trendingMovies = MOCK_MOVIES.filter(m => m.trending);
  const strangerThingsCollection = MOCK_MOVIES.filter(m => m.title.includes('Stranger Things'));
  const actionMovies = MOCK_MOVIES.filter(m => m.genres.includes('Action'));
  const sciFiMovies = MOCK_MOVIES.filter(m => m.genres.includes('Sci-Fi'));
  const documentaries = MOCK_MOVIES.filter(m => m.genres.includes('Documentary'));

  return (
    <div>
      <Hero 
        movie={featuredMovie} 
        onPlay={() => onSelectMovie(featuredMovie)}
        onInfo={() => onSelectMovie(featuredMovie)}
      />
      
      <div className="-mt-16 md:-mt-32 relative z-20">
        <Row title="Trending Now" movies={trendingMovies} onSelectMovie={onSelectMovie} />
        <Row title="The Stranger Things Collection" movies={strangerThingsCollection} onSelectMovie={onSelectMovie} />
        <Row title="Action Packed" movies={actionMovies} onSelectMovie={onSelectMovie} />
        <Row title="Sci-Fi & Fantasy" movies={sciFiMovies} onSelectMovie={onSelectMovie} />
        {documentaries.length > 0 && <Row title="Documentaries" movies={documentaries} onSelectMovie={onSelectMovie} />}
        <Row title="TV Shows" movies={MOCK_MOVIES.filter(m => m.type === 'tv')} onSelectMovie={onSelectMovie} />
        <Row title="International Hits" movies={[...MOCK_MOVIES].reverse()} onSelectMovie={onSelectMovie} />
      </div>
    </div>
  );
};

export default Home;
