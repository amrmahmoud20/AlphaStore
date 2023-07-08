import React from "react";
import { Link } from "react-router-dom";

import "./_card.scss";

const Card = ({ item }) => {
  return (
    <div className="col">
      <div
        className={`card featured-card w-100 animate__animated animate__fadeIn`}
      >
        <Link to={`/product/${item?.id}`}>
          <div className="image">
            {item?.attributes?.isNew && <span>New Season</span>}
            <img
              src={item?.attributes?.img?.data?.attributes?.url}
              className="card-img-top main-img"
              alt="card-img"
            />
            <img
              src={item?.attributes?.img2?.data?.attributes?.url}
              className="card-img-top second-img"
              alt="card-img"
            />
          </div>
        </Link>
        <div className="card-body">
          <h2>{item?.attributes?.title}</h2>
          <div className="prices">
            <h3 className="sale">${item?.attributes?.price + 20}</h3>
            <h3>${item?.attributes?.price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
