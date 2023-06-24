import { configureStore } from "@reduxjs/toolkit";

// import reducers
import allImagesReducer from "./slices/allImgesSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    allImages: allImagesReducer,
    cart: cartReducer,
  },
});

export default store;
