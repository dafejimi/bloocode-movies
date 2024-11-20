"use client";

import { Text, ChipView, Img } from "../../../components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import React from "react";
import { useState, useEffect } from 'react';

// Detailed TypeScript interfaces matching the API response
interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface MovieCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  budget: number;
  revenue: number;
  runtime: number;
  tagline: string;
  status: string;
  homepage: string;
  imdb_id: string;
  genres: Genre[];
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  spoken_languages: SpokenLanguage[];
  belongs_to_collection: MovieCollection;
}

export default function WdefaultOnePage() {
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [chipOptions, setChipOptions] = useState(() => [
    { value: 1, label: `English` },
    { value: 2, label: `français` },
    { value: 3, label: `italiano` },
    { value: 4, label: `język polski` },
    { value: 5, label: `Português - Brasil` },
    { value: 6, label: `українська мова` },
    { value: 7, label: `русский язык` },
    { value: 8, label: `臺灣國語` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = useState<number[]>([]);
  const bearer_token = process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN;

  useEffect(() => {
    // Extract movie_id from URL path
    const path = window.location.pathname;
    const movie_id = path.split('/').pop();

    const fetchMovieDetails = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${bearer_token}`
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setMovieDetails(data);
        console.log(movieDetails?.belongs_to_collection?.poster_path)
      } catch (err) {
        console.error(err);
      }
    };

    if (movie_id) {
      fetchMovieDetails();
    }
  }, []);

  return (
    <div className="w-full overflow-x-scroll bg-white-a700">
      <div className="flex w-auto flex-col gap-[34px] bg-blue_gray-900">
        <Header />
        <div className="relative mb-1 h-[1672px]">
          <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto h-max md:px-5">
            <div className="mt-4">
              <div className="flex items-start gap-6 px-3.5 md:flex-col">
                <Img
                  src={`https://image.tmdb.org/t/p/w500${movieDetails?.belongs_to_collection?.poster_path}`}
                  width={262}
                  height={386}
                  alt="Movie Image"
                  className="mb-[212px] h-[386px] w-[24%] rounded object-contain md:w-full"
                />
                <div className="flex flex-1 flex-col gap-2 md:self-stretch">
                  <div className="ml-1 flex md:ml-0">
                    <Text
                      size="text3xl"
                      as="p"
                      className="font-hairline text-[36px] text-white-a700 md:text-[34px] sm:text-[32px]"
                    >
                      {movieDetails?.title}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <div className="ml-1 flex md:ml-0">
                        <Text as="p" className="font-hairline text-[15px] text-white-a700">
                          {movieDetails?.overview}
                        </Text>
                      </div>
                      <div className="ml-1 mt-[18px] h-px bg-gray-800 md:ml-0" />
                      <div className="ml-1 mt-4 flex md:ml-0">
                        <Text as="p" className="font-hairline text-[15px] text-white-a700">
                          Aliases
                        </Text>
                      </div>
                      <div className="mt-1.5 flex px-1">
                        <Text
                          size="textxs"
                          as="p"
                          className="font-hairline w-[8%] text-[12.9px] leading-[19px] text-white-a700"
                        >
                          {movieDetails?.title}
                        </Text>
                      </div>
                    </div>
                    <ChipView
                      options={chipOptions}
                      setOptions={setChipOptions}
                      values={selectedChipOptions}
                      setValues={setSelectedChipOptions}
                      className="mx-1 flex flex-wrap gap-x-1.5 gap-y-2 md:mx-0"
                    >
                      {(option) => (
                        <React.Fragment key={option.index}>
                          {option.isSelected ? (
                            <div
                              onClick={option.toggle}
                              className="font-hairline flex h-[24px] min-w-[60px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded bg-green-300 px-3 text-center text-[12px] text-gray-900_01"
                            >
                              <span>{option.label}</span>
                            </div>
                          ) : (
                            <div
                              onClick={option.toggle}
                              className="font-hairline flex h-[24px] min-w-[60px] cursor-pointer flex-row items-center justify-center rounded bg-gray-900_01 px-3 text-center text-[12px] text-green-300"
                            >
                              <span>{option.label}</span>
                            </div>
                          )}
                        </React.Fragment>
                      )}
                    </ChipView>
                  </div>
                </div>
              </div>
              <div className="relative mr-[26px] mt-[-118px] flex flex-col gap-[18px] md:mr-0">
                <div className="ml-3 md:ml-0">
                  <div className="flex">
                    <Text as="p" className="font-hairline text-[15px] text-green-300">
                      General
                    </Text>
                  </div>
                </div>
                <div>
                  <div className="mb-[512px]">
                    <div className="flex flex-wrap justify-between gap-5 rounded-tl rounded-tr border border-solid border-blue_gray-700 bg-blue_gray-800 px-4 py-2">
                      <Text as="p" className="font-hairline text-[15px] uppercase text-white-a700">
                        TheTVDB.com Movie ID
                      </Text>
                      <Text as="p" className="font-hairline text-[15px] text-white-a700">
                        {movieDetails?.id}
                      </Text>
                    </div>
                    <div className="flex flex-wrap justify-between gap-5 border border-solid border-blue_gray-700 bg-blue_gray-800 px-4 py-2">
                      <Text as="p" className="font-hairline text-[15px] uppercase text-white-a700">
                        Release Date
                      </Text>
                      <Text as="p" className="font-hairline text-[15px] text-white-a700">
                        {movieDetails?.release_date}
                      </Text>
                    </div>
                    <div className="flex flex-wrap justify-between gap-5 border border-solid border-blue_gray-700 bg-blue_gray-800 px-4 py-2">
                      <Text as="p" className="font-hairline text-[15px] uppercase text-white-a700">
                        Budget
                      </Text>
                      <Text as="p" className="font-hairline text-[15px] text-white-a700">
                        {`$ ${movieDetails?.budget}`}
                      </Text>
                    </div>
                    <div className="flex flex-wrap justify-between gap-5 border border-solid border-blue_gray-700 bg-blue_gray-800 px-4 py-2">
                      <Text as="p" className="font-hairline text-[15px] uppercase text-white-a700">
                        Revenue
                      </Text>
                      <Text as="p" className="font-hairline text-[15px] text-white-a700">
                        {`$ ${movieDetails?.revenue}`}
                      </Text>
                    </div>
                    <div className="flex flex-wrap justify-between gap-5 border border-solid border-blue_gray-700 bg-blue_gray-800 px-4 py-2">
                      <Text as="p" className="font-hairline text-[15px] uppercase text-white-a700">
                        Runtime
                      </Text>
                      <Text as="p" className="font-hairline text-[15px] text-white-a700">
                        {`${movieDetails?.runtime} minutes`}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="absolute bottom-0 left-0 right-0 m-auto flex-1" />
        </div>
      </div>
    </div>
  );
}