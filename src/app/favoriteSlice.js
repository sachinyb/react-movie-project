// favoriteSlice.js
import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [], // ✅ Must be an array
  reducers: {
    addFavorite: (state, action) => {
      const movie = action.payload;
      if (!state.find((m) => m.imdb_id === movie.imdb_id)) {//sanity 
        state.push(movie);
      }
    },
    removeFavorite: (state, action) =>
      state.filter((m) => m.imdb_id !== action.payload),
    
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
