import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Root from "./components/pages/Partials/Root";
import Loading from "./components/UI/Loading/Loading";

// import Product from "./components/pages/Product/Product";
// import Products from "./components/pages/Products/Products";
// import Login from "./components/pages/LogIn/LogIn";
// import Register from "./components/pages/Resgister/Register";
// import MainCart from "./components/pages/Cart/MainCart";
// import Checkout from "./components/pages/Checkout/Checkout";

const Product = lazy(() => import("./components/pages/Product/Product"));
const Products = lazy(() => import("./components/pages/Products/Products"));
const Login = lazy(() => import("./components/pages/LogIn/LogIn"));
const Register = lazy(() => import("./components/pages/Resgister/Register"));
const MainCart = lazy(() => import("./components/pages/Cart/MainCart"));
const Checkout = lazy(() => import("./components/pages/Checkout/Checkout"));

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
        element: (
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },

      {
        path: "/signup",
        element: (
          <Suspense fallback={<Loading />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loading />}>
            <MainCart />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<Loading />}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
