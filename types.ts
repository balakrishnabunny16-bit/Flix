
export interface Movie {
  id: string;
  title: string;
  description: string;
  posterPath: string;
  backdropPath: string;
  releaseDate: string;
  rating: number;
  duration: string;
  genres: string[];
  cast: string[];
  type: 'movie' | 'tv';
  videoUrl: string;
  trending?: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
  watchlist: string[]; // Array of movie IDs
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
