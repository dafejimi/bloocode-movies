"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TrendingMoviesSection from "./TrendingMoviesSection";
import WelcomeSection from "./WelcomeSection";
import React, { useState, useEffect } from "react";
import { Movie } from '../../types/types';
import { Img, Text } from "../../components";

export default function WdefaultPage() {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    // This ensures localStorage is only accessed on the client side
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handleSearchResults = (movies: Movie[]) => {
    setSearchResults(movies);
  };

  const toggleFavorite = (movieId: number) => {
    setFavorites(prevFavorites => {
      const newFavorites = prevFavorites.includes(movieId)
        ? prevFavorites.filter(id => id !== movieId)
        : [...prevFavorites, movieId];
      
      // Only set localStorage on client side
      if (typeof window !== 'undefined') {
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
      }
      return newFavorites;
    });
  };

  return (
    <div className="w-full overflow-x-scroll bg-white-a700">
      <div className="w-auto">
        <div className="bg-blue_gray-900">
          <Header onSearchResults={handleSearchResults} />
          <WelcomeSection />
          
          {searchResults.length > 0 ? (
            <div className="container-xs flex flex-col gap-5 px-2.5 md:px-5">
              <div className="text-white text-2xl font-bold mb-4">
                Search Results
              </div>
              <div className="grid grid-cols-3 justify-center gap-[30px] md:grid-cols-2 sm:grid-cols-1">
                {searchResults.map((movie) => (
                  <div key={movie.id} className="relative">
                    <Img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      width={262}
                      height={386}
                      alt={movie.title}
                      className="h-[386px] w-full rounded object-cover md:h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white">
                      <div className="text-sm">{movie.title}</div>
                      <div className="flex justify-between">
                        <div className="text-xs">
                          {new Date(movie.release_date).getFullYear()} | 
                          Rating: {movie.vote_average.toFixed(1)}
                        </div>
                        <button 
                          onClick={() => toggleFavorite(movie.id)}
                          className={`px-2 py-1 rounded ${
                            favorites.includes(movie.id) 
                              ? 'bg-red-500 text-white' 
                              : 'bg-green-500 text-white'
                          }`}
                        >
                          {favorites.includes(movie.id) ? 'Remove' : 'Favorite'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <TrendingMoviesSection />
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}