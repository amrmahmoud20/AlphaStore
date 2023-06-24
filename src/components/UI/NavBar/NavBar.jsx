import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./_navBar.scss";
import Cart from "../Cart/Cart";

const Accounts = () => (
  <div
    className="offcanvas offcanvas-top profile-offcanvas"
    tabIndex="-1"
    id="offcanvasTop"
    aria-labelledby="offcanvasTopLabel"
  >
    <div className="offcanvas-header d-flex justify-content-center">
      <h5 className="offcanvas-title fs-4" id="offcanvasTopLabel">
        Profile
      </h5>
    </div>
    <div className="offcanvas-body d-flex flex-column">
      <a className="btn btn-primary fw-semibold" href="/Login">
        Login
      </a>
      <a className="btn btn-primary my-3 fw-semibold" href="/Signup">
        Register
      </a>
    </div>
  </div>
);

const NavBar = () => {
  const navImg = useSelector((state) => state.allImages.navBarImg.navImg);
  const products = useSelector((state) => state.cart.products);

  return (
    <Fragment>
      <nav className="navbar main-navbar navbar-expand-lg bg-body-tertiary w-100">
        <div className="container-fluid w-100">
          <Link className="navbar-brand w-25" to="/">
            Alphastore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <ul className="navbar-nav collapse-icon w-25">
            <li className="nav-item collapse-cartIcon">
              <div className="cartIcon">
                <button
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <ShoppingCartOutlinedIcon />
                </button>
                <span>{products.length}</span>
              </div>
            </li>
          </ul>

          <div
            className="collapse navbar-collapse w-50"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center gap-3 text-uppercase fw-bold text-dark">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  HomePage
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Stores
                </Link>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn btn-outline dropdown-toggle fw-bold text-uppercase"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="products/1">
                        Women
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="products/2">
                        Men
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="products/3">
                        Children
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <img src={navImg} alt="nav-img" />
                      <KeyboardArrowDownIcon />
                    </li>
                    <li>
                      <span>USD</span>
                      <KeyboardArrowDownIcon />
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item icons">
                <FavoriteBorderIcon />
                <SearchIcon />
                <button
                  className="person"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                >
                  <PersonOutlineIcon />
                </button>
                <div className="cartIcon">
                  <button
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <ShoppingCartOutlinedIcon />
                  </button>
                  <span>{products.length}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Cart />
      <Accounts />
    </Fragment>
  );
};

export default NavBar;
