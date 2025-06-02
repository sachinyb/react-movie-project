import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavorite } from "../app/favoriteSlice";

const Favorites = () => {
    const dispatch = useDispatch()
  const favorites = useSelector((redux) => redux.favorites);
  console.log("====================================");
  console.log(favorites);
  console.log("====================================");

  function handleDelete(movie){
    dispatch(removeFavorite(movie.imdb_id))
    console.log('====================================');
    console.log("deleted",favorites);
    console.log('====================================');
  }
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Favorite Movies 🎬
      </h1>
      {favorites.length === 0 ? (
  <div className="flex flex-col items-center justify-center h-64 bg-gray-100 rounded shadow">
    <h2 className="text-2xl font-semibold text-gray-700">No Favorites Yet 😢</h2>
    <p className="text-gray-500">Start adding some movies to your collection!</p>
  </div>
) : (
  <>
    {favorites.map((movie) => (
      <div
        key={movie.imdb_id}
        className="border p-4 m-3 rounded shadow bg-amber-100 text-black transition-all hover:scale-105 hover:shadow-lg"
      >
        <h2 className="text-xl font-bold text-center">
          {movie.title} ({movie.year})
        </h2>
        <div className="flex flex-col items-center">
          <img
            src={movie?.image_url}
            alt={movie.title}
            className="w-48 rounded shadow"
          />
          <Link to={`/movie/${movie.imdb_id}`}>
            <button className="p-2 bg-amber-500 rounded m-3 hover:bg-amber-600 transition">
              View Details
            </button>
          </Link>
          <button 
            onClick={() => handleDelete(movie)}
            className="p-2 bg-red-500 rounded m-3 hover:bg-red-600 transition"
          >
            Remove 🗑️
          </button>
        </div>
      </div>
    ))}
  </>
)}
    </div>
  );
};

export default Favorites;
