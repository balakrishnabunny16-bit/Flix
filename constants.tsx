
import { Movie } from './types';

export const MOCK_MOVIES: Movie[] = [
  {
    id: 'st4',
    title: 'Stranger Things 4',
    description: "It's been six months since the Battle of Starcourt, which brought terror and destruction to Hawkins. Struggling with the aftermath, our group of friends are separated for the first time – and navigating the complexities of high school hasn't made things any easier.",
    posterPath: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=400&auto=format&fit=crop',
    backdropPath: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1920&auto=format&fit=crop',
    releaseDate: '2022-05-27',
    rating: 9.4,
    duration: '9 Episodes',
    genres: ['Sci-Fi', 'Horror', 'Drama'],
    cast: ['Millie Bobby Brown', 'Finn Wolfhard', 'Sadie Sink'],
    type: 'tv',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    trending: true
  },
  {
    id: 'st1',
    title: 'Stranger Things',
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    posterPath: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=400&auto=format&fit=crop',
    backdropPath: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=1920&auto=format&fit=crop',
    releaseDate: '2016-07-15',
    rating: 9.2,
    duration: '4 Seasons',
    genres: ['Sci-Fi', 'Horror', 'Drama'],
    cast: ['Millie Bobby Brown', 'Winona Ryder', 'David Harbour'],
    type: 'tv',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    trending: true
  },
  {
    id: 'st_bts',
    title: 'Beyond Stranger Things',
    description: 'Hitch a ride to Hawkins as the cast, creators and celebrity fans discuss the plot twists, character arcs and the 1980s influences of Season 2.',
    posterPath: 'https://picsum.photos/seed/stbts-poster/400/600',
    backdropPath: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1920&auto=format&fit=crop',
    releaseDate: '2017-10-27',
    rating: 8.5,
    duration: '1 Season',
    genres: ['Documentary', 'Talk Show'],
    cast: ['Jim Rash', 'The Duffer Brothers'],
    type: 'tv',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    trending: false
  },
  {
    id: '1',
    title: 'The Cosmic Paradox',
    description: 'When a theoretical physicist discovers a tear in the fabric of space-time, he must travel through a black hole to save humanity from a temporal loop.',
    posterPath: 'https://picsum.photos/seed/movie1/400/600',
    backdropPath: 'https://picsum.photos/seed/movie1bg/1920/1080',
    releaseDate: '2024-05-15',
    rating: 8.9,
    duration: '2h 15m',
    genres: ['Sci-Fi', 'Thriller'],
    cast: ['Cillian Murphy', 'Jessica Chastain'],
    type: 'movie',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    trending: true
  },
  {
    id: 'bb1',
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
    posterPath: 'https://picsum.photos/seed/bb-poster/400/600',
    backdropPath: 'https://picsum.photos/seed/bb-bg/1920/1080',
    releaseDate: '2008-01-20',
    rating: 9.5,
    duration: '5 Seasons',
    genres: ['Crime', 'Drama', 'Thriller'],
    cast: ['Bryan Cranston', 'Aaron Paul'],
    type: 'tv',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    trending: true
  },
  {
    id: 'inc1',
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    posterPath: 'https://picsum.photos/seed/inc-poster/400/600',
    backdropPath: 'https://picsum.photos/seed/inc-bg/1920/1080',
    releaseDate: '2010-07-16',
    rating: 8.8,
    duration: '2h 28m',
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'],
    type: 'movie',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    trending: false
  },
  {
    id: 'tlou1',
    title: 'The Last of Us',
    description: 'After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity\'s last hope.',
    posterPath: 'https://picsum.photos/seed/tlou-poster/400/600',
    backdropPath: 'https://picsum.photos/seed/tlou-bg/1920/1080',
    releaseDate: '2023-01-15',
    rating: 8.9,
    duration: '1 Season',
    genres: ['Action', 'Drama', 'Horror'],
    cast: ['Pedro Pascal', 'Bella Ramsey'],
    type: 'tv',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    trending: true
  }
];

export const GENRES = ['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Thriller', 'Horror', 'Romance', 'Documentary', 'Crime', 'History'];
