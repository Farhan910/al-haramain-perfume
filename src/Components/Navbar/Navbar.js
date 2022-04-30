import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="d-flex navbar-container sticky-top ">
        <div className="ms-5 ">
          <h2 className="nav-name">Hello</h2>
          
        </div>
        <div className="ms-auto me-5 mt-4 ">
          <Link className=" links" to="/">
            Home
          </Link>
          <Link className=" links ms-3" to="/products">
            Products
          </Link>
          <Link className=" links ms-3" to="/blogs">
            Blogs
          </Link>
          <Link className=" links ms-3" to="/about">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
