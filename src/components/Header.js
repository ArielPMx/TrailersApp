import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <ul>
      <li>
          <NavLink className="navlink" to="/Trailer">
            Trailers
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/agregar">
            Agregar
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/lista">
            Lista
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/Login">
            login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
