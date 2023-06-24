import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./_products.scss";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";

import useFetch from "../../../hooks/use-fetch";

import { addToCart } from "../../../store/slices/cartSlice";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState("img");
  const dispatch = useDispatch();

  const id = useParams().id;

  const { data, error, isLoading } = useFetch(`/products/${id}?populate=*`); //////////////

  const mainImg =
    data?.attributes && data?.attributes[selectedImg]?.data?.attributes?.url;

  return (
    <div className="container-fluid product">
      {isLoading ? (
        <div className="d-flex justify-content-center w-100 text-primary my-5">
          <div
            className="spinner-border fs-3"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={data?.attributes?.img?.data?.attributes?.url}
                alt="pro1"
                onClick={() => setSelectedImg("img")}
              />
              <img
                src={data?.attributes?.img2?.data?.attributes?.url}
                alt="pro2"
                onClick={() => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img src={mainImg} alt="selcImg" />
            </div>
          </div>
          <div className="right">
            <h2>{data?.attributes?.title}</h2>
            <h4>${data?.attributes?.price.toFixed(2)}</h4>
            <p>{data?.attributes?.desc}</p>

            {/* /////////////////////////// */}
            <form onSubmit={(e) => e.preventDefault()}>
              <button
                className="btn btn-outline-primary"
                type="submit"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      quantity: 1,
                    })
                  )
                }
              >
                <span>
                  <AddShoppingCartIcon />
                </span>
                add to cart
              </button>
            </form>
            <div className="link">
              <div className="item">
                <FavoriteBorderIcon />
                add to wishlist
              </div>
              <div className="item">
                <BalanceIcon />
                add to compare
              </div>
            </div>
            <div className="info">
              <span>vendor: polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Men, Top</span>
            </div>
            <hr />
            <div className="details">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
