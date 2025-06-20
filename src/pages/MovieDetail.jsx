import React from 'react';
import { useParams } from 'react-router-dom';
import movies from '../data/movies';

function MovieDetail() {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === id);

    if (!movie) return <div className="p-10">Movie not found.</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">
                {movie.movieName} - Episode {movie.episode}
                </h2>

                <div className="bg-gray-800 w-full aspect-video rounded-xl flex items-center justify-center text-gray-400 text-3xl mb-6">
                ▶
                </div>

                <div className="flex gap-4 mb-6">
                <img src={movie.image} alt={movie.movieName} className="w-40 h-56 object-cover rounded-lg shadow" />
                <div className="text-sm space-y-1">
                    <p><span className="font-bold text-gray-300">Type:</span> TV</p>
                    <p><span className="font-bold text-gray-300">Status:</span> Ongoing</p>
                    <p><span className="font-bold text-gray-300">Studios:</span> Toei Animation</p>
                    <p><span className="font-bold text-gray-300">Duration:</span> 24 min</p>
                    <p><span className="font-bold text-gray-300">Genres:</span> Action, Adventure, Fantasy</p>
                </div>
                </div>

                <div>
                <h3 className="text-xl font-semibold mb-2">Synopsis :</h3>
                <p className="text-sm text-gray-300">{movie.description}</p>
                </div>
            </div>

            <div className="md:w-1/3">
                <h3 className="text-lg font-semibold mb-4">Popular Anime</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
                    {movies
                    .filter((m) => m.id !== id)
                    .slice(0, 6)
                    .map((m) => (
                        <div key={m.id} className="w-full">
                        <img
                            src={m.image}
                            alt={m.movieName}
                            className="w-full h-32 object-cover rounded-lg shadow"
                        />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
