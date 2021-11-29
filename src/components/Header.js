import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <ul>
      <li>
          <NavLink className="navlink" to="/">
            Trailers
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="System">
            Agregar
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="chars">
            Lista
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
