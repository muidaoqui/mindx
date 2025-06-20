import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, onMovieSelect }) {
  return (
    <section className="mt-10">
      <h2 className="text-white text-2xl font-bold mb-4">New Release</h2>
      <div className="flex flex-wrap gap-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} onClick={onMovieSelect} />
        ))}
      </div>
    </section>
  );
}

export default MovieList;
