import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="w-36 sm:w-40 cursor-pointer group">
      <div className="rounded-lg overflow-hidden shadow-md group-hover:scale-105 transition">
        <img
          src={movie.image}
          alt={movie.movieName}
          className="w-full h-52 object-cover"
        />
      </div>
      <div className="mt-2 text-center">
        <p className="text-sm text-indigo-300 font-semibold">Episode {movie.episode}</p>
        <h4 className="text-white text-sm font-medium truncate">{movie.movieName}</h4>
      </div>
    </Link>
  );
}

export default MovieCard;
