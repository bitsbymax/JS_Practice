import React from 'react';
import {Link, NavLink} from "react-router-dom";

export const MainNavigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="navbar-item">
          <img src="../../public/logo192.png" alt="logo"/>
        </Link>
        <NavLink
          to="/"
          exact
          className="navbar-item"
          activeClassName="is-active"
        >
          Home
        </NavLink>
        <NavLink
          to="/todos"
          className="navbar-item"
          activeClassName="is-active"
        >
          Todos
        </NavLink>
        <NavLink
          to="/about"
          className="navbar-item"
          activeClassName="is-active"
        >
          About us
        </NavLink>
      </div>
    </nav>
  );
};

