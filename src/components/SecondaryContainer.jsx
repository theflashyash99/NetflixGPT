import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black sm:mt-20 md:mt-20 ">
    <div className="  md:-mt-85   pl-4 md:pl-12 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
