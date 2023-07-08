import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import "./_products.scss";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";

import useFetch from "../../../hooks/use-fetch";

import {
  addToCart,
  decrememnt,
  increment,
} from "../../../store/slices/cartSlice";
import Loading from "../../UI/Loading/Loading";
import { MDBCol } from "mdb-react-ui-kit";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState("img");
  const products = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  const id = useParams().id;

  const { data, error, isLoading } = useFetch(`/products/${id}?populate=*`); //////////////

  const mainImg =
    data?.attributes && data?.attributes[selectedImg]?.data?.attributes?.url;

  const addToCartOnClickHandler = () => {
    dispatch(
      addToCart({
        id: data.id,
        title: data.attributes.title,
        desc: data.attributes.desc,
        price: data.attributes.price,
        img: data.attributes.img.data.attributes.url,
        quantity: 1,
      })
    );
    toast.success("Product Added!", {
      style: {
        border: "1px solid #2879fe",
        fontSize: "20px",
        padding: "20px",
        color: "#2879fe",
      },
      iconTheme: {
        primary: "#2879fe",
        secondary: "#FFFAEE",
      },
      position: "bottom-right",
    });
  };

  const existingProduct = products.find((product) => product.id === data.id);

  return (
    <>
      <div className="container-fluid product ">
        {isLoading ? (
          <Loading />
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
              <div className="right-top">
                <h2>{data?.attributes?.title}</h2>
                <h4>${data?.attributes?.price.toFixed(2)}</h4>
                <p>{data?.attributes?.desc}</p>

                <div className="btn-group">
                  <button
                    disabled={existingProduct ? true : false}
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={addToCartOnClickHandler}
                  >
                    <span>
                      <AddShoppingCartIcon />
                    </span>
                    add to cart
                  </button>
                </div>
                <MDBCol
                  md="1"
                  lg="1"
                  xl="1"
                  className="d-flex align-items-center justify-content-center  m-3"
                >
                  <div className="quantity d-flex justify-content-center align-items-center gap-1">
                    <button
                      className="btn"
                      onClick={() => dispatch(decrememnt(existingProduct))}
                    >
                      <i
                        className="fa-solid fa-minus fa-sm"
                        style={{ color: "#2879fe" }}
                      ></i>
                    </button>
                    <span>
                      {existingProduct ? existingProduct.quantity : 0}
                    </span>
                    <button
                      className="btn"
                      onClick={() => dispatch(increment(existingProduct))}
                    >
                      <i
                        className="fa-solid fa-plus fa-sm"
                        style={{ color: "#2879fe" }}
                      ></i>
                    </button>
                  </div>
                </MDBCol>

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
              </div>
              <div className="right-bottom">
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
            </div>
          </>
        )}
        <Toaster />
      </div>
    </>
  );
};

export default Product;
