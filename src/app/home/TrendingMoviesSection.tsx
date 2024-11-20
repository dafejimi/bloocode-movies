"use client";

import React, { useState, useEffect } from 'react';
import { Movie, MovieResponse } from '../../types/types';
import Image from 'next/image';
import Link from 'next/link';

export default function TrendingMoviesSection() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const bearer_token = process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN;

  // Fetch movies when the component mounts
  useEffect(() => {
    const fetchMovies = async () => {
      console.log(bearer_token);
      const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${bearer_token}`
        }
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: MovieResponse = await response.json();
        setMovies(data.results);
        console.log(movies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  // Use useEffect to load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);  // Run only once when the component is first loaded

  // Toggle favorite state and update localStorage immediately
  const toggleFavorite = (movieId: number) => {
    setFavorites(prevFavorites => {
      const newFavorites = prevFavorites.includes(movieId)
        ? prevFavorites.filter(id => id !== movieId)
        : [...prevFavorites, movieId];

      // Update localStorage with the new favorites list
      if (typeof window !== 'undefined') {
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
      }

      return newFavorites;
    });
  };

  // Remove extra items to make the movie count divisible by 3
  const moviesToDisplay = movies.slice(0, Math.floor(movies.length / 3) * 3);

  return (
    <div className="pb-[30px] mt-[82px] flex flex-col items-center">
      <div className="container-xs flex flex-col gap-5 px-2.5 md:px-5">
        <div className="flex items-center justify-center">
          <h2 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-3">
            Popular Movies
          </h2>
        </div>

        <div className="grid grid-cols-3 justify-center gap-[30px] md:grid-cols-2 sm:grid-cols-1">
          {moviesToDisplay && moviesToDisplay.map((movie) => (
            <div key={movie.id} className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-[2px] rounded-lg shadow-xl w-full max-w-sm">
                <div className="bg-gray-800 rounded-lg overflow-hidden w-full">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    width={262}
                    height={386}
                    alt={movie.title}
                    className="w-full h-[386px] object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <Link href={`/details/${movie.id.toString()}`} className="hover:text-white">
                          <div className="font-semibold text-sm text-white mb-1">{movie.title}</div>
                        </Link>
                        <div className="text-xs text-gray-400">
                          {new Date(movie.release_date).getFullYear()} | Rating: {movie.vote_average.toFixed(1)}
                        </div>
                      </div>
                      <button
                        onClick={() => toggleFavorite(movie.id)}
                        className={`px-2 py-1 rounded text-xs transition-colors duration-200 ${
                          favorites.includes(movie.id) 
                            ? 'bg-red-600 hover:bg-red-700' 
                            : 'bg-green-600 hover:bg-green-700'
                        } text-white`}
                      >
                        {favorites.includes(movie.id) ? 'Remove' : 'Favorite'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>    
          ))}
        </div>
      </div>
    </div>
  );
}
