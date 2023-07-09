import React from "react";
import { NavLink } from "react-router-dom";

const Navbartwo = () => {
  return (
    <div className="bg-dark">
      <ul className="d-flex m-0 py-2 text-light fontsTitle flex-wrap">
        <li className="px-2 fw-bold">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="px-2 fw-bold">
          <NavLink to="/about">About us</NavLink>
        </li>
        <li className="px-2 fw-bold">
          <NavLink to="/Events">Events</NavLink>
        </li>
        <li className="px-2 fw-bold">
          <NavLink to="/Exhibitions">Exhibitions</NavLink>
        </li>
        <li className="px-2 fw-bold">
          <NavLink to="/Our-Artist">Our Artist</NavLink>
        </li>
        <li className="px-2 fw-bold">
          <NavLink to="/NEWS">NEWS</NavLink>
        </li>
        <li className="px-2 fw-bold">
          <NavLink to="/Media-Center">Media Center</NavLink>
        </li>
        <li className="px-2 fw-bold">
          <NavLink to="Contact-us">Contact us</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbartwo;
