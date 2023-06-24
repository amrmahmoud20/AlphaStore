import React, { Fragment } from "react";

import "./_home.scss";

import Slider from "./sections/Slider/Slider";
import FeaturedProducts from "./sections/FeaturedProducts/FeaturedProducts";
import Categories from "./sections/Categories/Categories";
import Contact from "./sections/HomeContact/HomeContact";

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </Fragment>
  );
};

export default Home;
