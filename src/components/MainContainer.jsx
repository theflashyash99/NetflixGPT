import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  // subscribing the store to get the data useselector and subscribe the store and  get the movies reducer and get the nowplaying using optional chainning
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  // 2. return the code if we encounter the null in store. this will solve the next error

  const mainMovies = movies[0];

  // 1. this will throw error as data is not there yet. it's null to fix this will set condition ^.

  // extracting the values from the mainMovies by view it in the  and send it as props in VideoTitle // Destructuring.
  const { original_title, overview, id } = mainMovies;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
