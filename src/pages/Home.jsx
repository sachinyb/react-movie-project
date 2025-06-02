import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchMovies = async () => {
    try {
      //inside try block we put code to fetch data from API
      const url =
        "https://moviesminidatabase.p.rapidapi.com/movie/order/byPopularity/";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "ed3b22a3e0msh32b96fce8344b8fp195154jsn87edee7f84fd",
          "x-rapidapi-host": "moviesminidatabase.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      const result = await response.json();
      setMovies(result.results);
      console.log(result.results);
    } catch (error) {
      //inside catch block we put code to handle error
      console.error("Error fetching movies:", error);
    }
  };

  const fetchSearchResults = async (text) => {
    const url = `https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/${text}/`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ed3b22a3e0msh32b96fce8344b8fp195154jsn87edee7f84fd",
        "x-rapidapi-host": "moviesminidatabase.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSearchResults(result.results);
      console.log(result.results);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.trim()) {
        fetchSearchResults(query);
      } else {
        setSearchResults([]);
      }
    }, 1000); // Debounce the search input
    //here 1000 is the time in milliseconds to wait before making the API call
    // This prevents too many API calls while the user is typing
    return () => clearTimeout(timeout);
  }, [query]);

  
// -----------------------------------------------
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Popular Movies</h1>
        <p className="text-gray-600 mb-6 text-center">
          Explore the most popular movies right now.
        </p>
        <input
          type="text"
          className="border border-gray-600 p-2 rounded w-full "
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {searchResults.length > 0 && (
        <ul className="w-full">
          {searchResults.map((movie) => (
            <li key={movie.imdb_id} className="border p-4 rounded-lg mb-2">
              <Link
                to={`/movie/${movie.imdb_id}`}
                className="text-blue-500 hover:underline"
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {movies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {movies.map((movie) => (
            <div key={movie.imdb_id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-bold">{movie.title}</h2>
              <p>Year: {movie.year}</p>
              <p>Rating: {movie.rating}</p>

              <Link
                to={`/movie/${movie.imdb_id}`}
                className="text-blue-500 hover:underline"
              >
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                  Visit
                </button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-2xl m-4">Loading...</h1>
      )}
    </div>
  );
};

export default Home;
