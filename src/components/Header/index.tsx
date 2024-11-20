"use client";

import { CloseSVG } from "../Input/close";
import { Text, Input, Img } from "../index";
import React, { useState } from "react";
import { Movie, MovieResponse } from '../../types/types';
import Link from "next/link";

interface Props {
  className?: string;
  onSearchResults?: (movies: Movie[]) => void;
}

export default function Header({ onSearchResults, ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchBarValue.trim()) return;

    setIsLoading(true);
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchBarValue)}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer YOUR_TMDB_TOKEN'
      }
    };

    try {
      const response = await fetch(url, options);
      const data: MovieResponse = await response.json();
      onSearchResults?.(data.results);
    } catch (error) {
      console.error('Search error:', error);
      onSearchResults?.([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center border-gray-900 border border-solid bg-gray-900_01 rounded`}
    >
      <div className="container-xs flex justify-center md:px-5">
        <div className="flex w-full items-center justify-between gap-5 md:flex-col">
          <div className="flex w-[44%] items-center justify-center gap-3.5 md:w-full">
            <Img
              src="img_link.svg"
              width={138}
              height={82}
              alt="Logo Image"
              className="h-[82px] w-[28%] object-contain"
            />
            <Link 
              href="/favorites"
              className="text-gray-300 hover:text-green-500 transition-colors duration-300 text-lg font-medium"
            >
              Favorites
            </Link>
          </div>
          <div className="flex w-[32%] items-start justify-center gap-[26px] md:w-full sm:flex-col">
            <Input
              shape="round"
              name="Search Input"
              placeholder={`Search Movies`}
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e.target.value)}
              suffix={
                searchBarValue?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue("")} />
                ) : null
              }
              className="font-hairline self-center rounded px-[18px]"
            />
            <button 
              onClick={handleSearch} 
              disabled={isLoading}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}