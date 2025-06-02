import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addFavorite } from "../app/favoriteSlice";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleAddToFavorites = () => {
    console.log("====================================");
    console.log(movie);
    console.log("====================================");
    dispatch(addFavorite(movie));
    alert("Added to Favorites!");
  };

  const fetchMovieDetails = async () => {
    const url = `https://moviesminidatabase.p.rapidapi.com/movie/id/${imdbID}/`;
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
      setMovie(result.results);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
    console.log("====================================");
    console.log(movie);
    console.log("====================================");
    setLoading(false);
  }, [imdbID]);

  if (loading) {
    return <div className="text-center text-2xl mt-10">Loading...</div>;
  }
  if (!movie) {
    return <div className="text-center text-2xl mt-10">Movie not found</div>;
  }

  return (
    <div className="p-6 m-2 max-w-4xl mx-auto min-h-screen bg-gradient-to-br from-indigo-400 via-purple-800 to-pink-500 text-white rounded-lg">
      <Link to="/" className="text-yellow-300 underline mb-4 inline-block ">
        Back to Home
      </Link>
      <div className="flex flex-xol md:flex-row gap-6">
        <img
          src={movie?.image_url}
          alt={movie.title}
          className="w-48 rounded shadow"
        />

        <div className="text-3xl font-bold">
          {movie.title || ""}({movie.year})
        </div>

        <p className="mt-1 text-yellow-400 italic">
          {movie.gen?.map((g) => g.genre).join(", ") || "N/A"}
        </p>
        <p className="mt-2">
          <strong>Rating:</strong>
          {movie.rating}/10
        </p>
        <p className="mt-4">
          <strong>Plot:</strong>
          {movie.plot}{" "}
        </p>
      </div>
      <div className="rounded-lg bg-white p-4 mt-6 shadow-lg">
        {movie.trailer && (
          <iframe
            width="100%"
            height="315"
            src={movie.trailer}
            allowFullScreen
          ></iframe>
        )}
      </div>
      <button
        className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300"
        onClick={handleAddToFavorites}
      >
        ❤️ Add to Favorites
      </button>
    </div>
  );
};

export default MovieDetail;
