import React, { useState } from 'react';
import Explore from '../components/Explore';
import MovieList from '../components/MovieList';
import movies from '../data/movies';

function Home() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Explore movie={selectedMovie} />
      <MovieList movies={movies} onMovieSelect={setSelectedMovie} />
    </div>
  );
}

export default Home;
