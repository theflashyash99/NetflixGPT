import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    // extracting Trailer type through the Type and make sure that the "Trailer" string value is correct.
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // if the filter data is not available then use the json.results 1st elements clip.

    // gives 2 trailer
    // case one of using dynamic key of trailer
    // setTrailerId(trailer.key)
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
