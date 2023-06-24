import React from "react";
import Card from "../Card/Card";
import useFetch from "../../../hooks/use-fetch";
import IsLoadingCard from "../Card/IsLoadingCard";

const List = ({ maxPrice, sort, subCats, catId }) => {
  // Filtering the data
  const subCatFilters = subCats
    .map((item) => `&filters[sub_categories][id][$eq]=${item}`)
    .join("");
  const priceFilters = `&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`;

  const { data, isLoading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCatFilters}${priceFilters}`
  );

  return (
    <div className="container">
      <div>
        <div className="bottom row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-2">
          {error ? (
            "Something went wrong!"
          ) : isLoading ? (
            <IsLoadingCard />
          ) : (
            data.map((item) => <Card item={item} key={item.id} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
