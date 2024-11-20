"use client";
import Link from "next/link";
import { Text, Img } from "../../components";
import Footer from "../../components/Footer";
import MovieProfile from "../../components/MovieProfile";
import React, { useState, useEffect, Suspense } from "react";
import { Movie } from '../../types/types';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [favoriteMovies, setFavoriteMovies] = useState<any[]>([]);

  const bearer_token = process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN;

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      const moviePromises = favorites.map(async (movieId) => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${bearer_token}`
          }
        };

        try {
          const response = await fetch(url, options);
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const movieData = await response.json();
          
          return {
            mainImage: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`,
            franchiseTitle: movieData.title,
            statOne: movieData.vote_average.toFixed(1),
            statTwo: movieData.vote_count,
            authorName: new Date(movieData.release_date).getFullYear(),
            descriptionText: movieData.overview,
            id: movieData.id
          };
        } catch (error) {
          console.error('Error fetching movie:', error);
          return null;
        }
      });

      const movies = await Promise.all(moviePromises);
      setFavoriteMovies(movies.filter(movie => movie !== null));
    };

    if (favorites.length > 0) {
      fetchFavoriteMovies();
    } else {
      setFavoriteMovies([]);
    }
  }, [favorites]);

  const toggleFavorite = (movieId: number) => {
    setFavorites(prevFavorites => {
      const newFavorites = prevFavorites.filter(id => id !== movieId);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <div className="w-full overflow-x-scroll bg-white-a700">
      <div className="flex w-auto flex-col items-center justify-center bg-blue_gray-900">
        <header className="self-stretch rounded border border-solid border-gray-900 bg-gray-900_01">
          <div className="relative h-[88px] md:h-auto">
            <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:px-5">
              <div className="flex w-full items-center justify-between gap-3.5 md:w-full sm:flex-col">
                <Link href="/">
                  <Img
                    src="img_link.svg"
                    width={138}
                    height={82}
                    alt="Logo Image"
                    className="h-[82px] w-[28%] object-contain sm:w-full"
                  />
                </Link>
                <Link 
                  href="/favorites"
                  className="text-gray-300 hover:text-green-500 transition-colors duration-300 text-lg font-medium"
                >
                  Favorites
                </Link>
              </div>
            </div>
          </div>
        </header>

        <div className="container-xs mt-[18px] flex flex-col items-start gap-[38px] md:px-5">
          <Text
            size="text3xl"
            as="p"
            className="font-hairline ml-3.5 text-[36px] text-white-a700 md:ml-0 md:text-[34px] sm:text-[32px]"
          >
            Favorites List
          </Text>
          
          <div className="ml-[30px] flex flex-col gap-[120px] self-stretch md:ml-0 md:gap-[90px] sm:gap-[60px]">
            <div>
              <div className="flex flex-col gap-[74px] md:gap-[55px] sm:gap-[37px]">
                <div className="mr-[374px] flex flex-col gap-[82px] md:mr-0">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {favoriteMovies.map((movie, index) => (
                      <div key={movie.id} className="relative">
                        <MovieProfile {...movie} />
                        <button 
                          onClick={() => toggleFavorite(movie.id)}
                          className="absolute top-0 right-0 mt-2 mr-2 px-3 py-1 rounded text-xs bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer className="mt-[204px] self-stretch" />
      </div>
    </div>
  );
}