import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/use-fetch";

import "./_products.scss";
import List from "../../UI/List/List";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(100);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  // custom hook
  const { data, error, isLoading } = useFetch(
    `/sub-categories?filters[categories][id][$eq]=${catId}`
  );

  // useSelector
  const images = useSelector((state) => state.allImages.productsImg);

  // functions
  const CategChangeHandler = (event) => {
    const value = event.target.value;
    const isChcked = event.target.checked;

    setSelectedSubCats(
      isChcked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <Fragment>
      <div className="product-container container-fluid">
        <div className="top row mb-4">
          <img src={images.landingProImg} alt="landing-products-img" />
        </div>
        <div className="center row mb-2">
          <nav className="navbar navbar-expand-lg bg-primary bg-opacity-10">
            <div className="container-fluid">
              <h2 className="navbar-brand">Categories</h2>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav categ-navbar">
                  <li className="nav-item dropdown ms-3">
                    <div className="btn-group">
                      <button
                        className="btn btn-outline dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Product Categories
                      </button>
                      <ul className="dropdown-menu">
                        {error ? (
                          "..."
                        ) : isLoading ? (
                          <div className="d-flex justify-content-center align-items-center">
                            <div
                              className="spinner-border m-5 text-primary"
                              role="status"
                            >
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          </div>
                        ) : (
                          data.map((item) => (
                            <li key={item.id}>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={item.id}
                                  value={item.id}
                                  onChange={CategChangeHandler}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={item.id}
                                >
                                  {item.attributes.title}
                                </label>
                              </div>
                            </li>
                          ))
                        )}
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <div className="btn-group">
                      <button
                        className="btn btn-outline dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sort by
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              checked
                              name="price"
                              id="asc"
                              value="asc"
                              onChange={(e) => setSort("asc")}
                            />
                            <label className="form-check-label" htmlFor="asc">
                              Lowest price
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="price"
                              id="desc"
                              value="desc"
                              onChange={(e) => setSort("desc")}
                            />
                            <label className="form-check-label" htmlFor="desc">
                              Highest price
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <label
                      htmlFor="customRange1"
                      className="form-label d-flex justify-content-center align-items-center"
                    >
                      Filter by price
                    </label>
                    <div className="filter-input d-flex justify-content-center align-items-center">
                      <span>12</span>
                      <input
                        type="range"
                        className="form-range"
                        min="12"
                        max="1000"
                        id="customRange1"
                        onChange={(e) => setMaxPrice(e.target.value)}
                        style={{ width: "150px" }}
                      />
                      <span>{maxPrice}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </Fragment>
  );
};

export default Products;
