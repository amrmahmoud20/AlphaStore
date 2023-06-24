import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/pages/Products/Products";
import Product from "./components/pages/Product/Product";
import Home from "./components/pages/Home/Home";
import Root from "./components/pages/Partials/Root";
import Login from "./components/pages/LogIn/LogIn";
import Register from "./components/pages/Resgister/Register";
import MainCart from "./components/pages/Cart/MainCart";
import Checkout from "./components/pages/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <MainCart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
