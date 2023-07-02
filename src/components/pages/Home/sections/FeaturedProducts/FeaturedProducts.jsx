import React, { Fragment } from "react";
import Card from "../../../../UI/Card/Card";
import useFetch from "../../../../../hooks/use-fetch";
import IsLoading from "../../../../UI/Card/IsLoadingCard";

const FeaturedProducts = ({ type }) => {
  const { data, isLoading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <Fragment>
      <div className="featured-top container-fluid">
        <div className="row fratured-top-row">
          <div className="item col">
            <h1>{type} Products</h1>
          </div>
          <div className="item col">
            <p>
              Fugiat consectetur est ea mollit minim minim irure anim amet nisi
              sint laborum aliqua. Non fugiat nulla pariatur velit reprehenderit
              laborum quis sint exercitation qui. Aliqua pariatur est aliquip
              elit consectetur do amet eu. Laborum mollit sint commodo consequat
              occaecat ut tempor fugiat excepteur reprehenderit dolore.
            </p>
          </div>
        </div>
      </div>
      <div className="featured-bottom container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {error ? (
            "Something went wrong!"
          ) : isLoading ? (
            <IsLoading />
          ) : (
            data.map((item) => <Card item={item} key={item.id} />)
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default FeaturedProducts;
