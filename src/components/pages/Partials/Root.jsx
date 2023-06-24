import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../UI/NavBar/NavBar";
import Footer from "../../UI/Footer/Footer";

const Root = () => {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Root;
