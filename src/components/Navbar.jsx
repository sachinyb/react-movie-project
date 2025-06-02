import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const favorites = useSelector((redux) => redux.favorites);

  return (
    <div 
    
    >
      <nav className="flex gap-4 bg-blue-400 text-white p-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "font-bold text-yellow-700" : ""}>Home</NavLink>
        <NavLink
        to='/favorites'
        >Favorites ❤️{favorites.length}</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;