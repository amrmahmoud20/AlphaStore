import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const HomeContact = () => {
  return (
    <div
      className="home-contact container-fluid text-light"
      style={{ height: "10vh" }}
    >
      <div className="row d-flex justify-content-center bg-primary align-items-center h-100">
        <div className="top col-md-4 d-flex justify-content-end align-items-center fw-semibold text-uppercase">
          Be in touch with us:
        </div>
        <div className="center col-md-4">
          <form className="d-flex justify-content-center align-items-center w-100 h-100">
            <input
              type="email"
              className="form-control w-50"
              id="exampleFormControlInput1"
              placeholder="Enter your e-mail"
            />
            <button type="submit" className="btn btn-dark">
              Join US
            </button>
          </form>
        </div>
        <div className="bottom col-md-4 d-flex gap-2">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
