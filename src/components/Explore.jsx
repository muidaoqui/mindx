import React from 'react';

function Explore({ movie }) {
  if (!movie) return null;

  return (
    <section className="mt-8">
      <h2 className="text-white text-2xl font-bold mb-2">Explore</h2>
      <p className="text-gray-400 text-sm mb-4">What are you gonna watch today ?</p>
      <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
        <img
          src={movie.image}
          alt={movie.movieName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
          <h3 className="text-white text-xl md:text-3xl font-bold mb-2">{movie.movieName}</h3>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl">{movie.description.slice(0, 200)}...</p>
        </div>
      </div>
    </section>
  );
}

export default Explore;
