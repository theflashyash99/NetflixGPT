import React, { useRef } from "react";
import { lang } from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
// import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResults } from "../utils/GptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);

  const dispatch = useDispatch();

  // search movies in TMDB
  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const langKey = useSelector((store) => store.config.lang);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API Call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies , comma seperated like the example results given ahead. Example Results : Gadar, Sholey, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "developer", content: gptQuery },
        //! gptQuery as the search input with prompt so that we tell them that act as movie recommandation system.
        { role: "user", content: gptQuery },
      ],
    });

    if (!gptResults.choices) {
      //TODO : Write Error Handling
    }

    console.log(gptResults.choices[0].message.content);

    const gptMovies = gptResults.choices[0].message.content.split(",");
    // {[movie1,movie2.movie3....]}
    // to extract the movies from the fetched data and give it to the  searchMovies TMDB sot that it will give us the images and other data.

    // for each movie I will seaach TMDB API

    const promiseArray = gptMovies.map((movies) => searchMoviesTMDB(movies));
    // this will not return the results it will give us the array of Promises as the searchMoviesTMDB is an async and to get the data it will takes some time to solve and it will come one after another so we need to solve the array of promises first. By the help of //! Promise.all()
    // it will resolve the array of promises at once.

    const tmdbResult = await Promise.all(promiseArray);

    console.log(tmdbResult);

    dispatch(addGptMoviesResults( { movieName : gptMovies,  moviesResult : tmdbResult}));
  };

  return (
    <div className="pt-[60%] md:pt-[10%] flex justify-center">
      <form
        className="  w-full md:w-1/2 bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-white text-black col-span-9"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
          //! after the lang we don't use the . so that the [langkey] can be accessed otherwise it can't be access
        />
        <button
          className=" py-2 md:px-4 m-4 bg-red-700  text-white rounded-lg col-span-3" 
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
//now
