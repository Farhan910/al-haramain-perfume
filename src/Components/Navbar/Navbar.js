import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiDelicatePerfume } from "react-icons/gi";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const handleSignOut = () => {
    auth.signOut();
  };
  const [user] = useAuthState(auth);

  return (
    <div>
      <div className="d-flex navbar-container sticky-top ">
        <div className=" nav-name nav-logo mt-3">
          <a href="">
            <h2>
              <GiDelicatePerfume className=" " />{" "}
              <span className="nav-name-text">AL HARAMAIN </span>
            </h2>
          </a>
        </div>

        <div className="ms-3 mt-4">
          <Link className=" links ms-3 " to="/additem">
            Add Item
          </Link>
          <Link className=" links ms-3" to="/myitem">
            My Item
          </Link>
          <Link className=" links ms-3" to="/manageitems">
            Manage Items
          </Link>
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

          {user ? (
            <Link onClick={handleSignOut} className=" links ms-3" to="#">
              Logout
            </Link>
          ) : (
            <>
              <Link className=" links ms-3" to="/login">
                Login
              </Link>
              <Link className=" links ms-3" to="/signup">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
