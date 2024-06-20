//Store of Our RTK
// slice means like in  a class , Class is the Store and the Students of That class are slices,and har STudents ko alag alag kaam h

import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import CategorySlice from "./Slices/CategorySlice";
import SerachSlice from "./Slices/SerachSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SerachSlice,
  },
});

export default Store;
