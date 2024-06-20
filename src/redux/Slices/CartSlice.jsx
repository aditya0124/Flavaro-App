import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    //1st ACTIONS/function for adding items to cart
    addToCart: (state, action) => {
      //we find any existing item exist krta h kya jo cart m add ho rha h
      const existingItems = state.cart.find(
        (item) => item.id === action.payload.id
      );
      //Now if item.id===jo push ho rha h uski id k equal h then existingItems==true h else false
      if (existingItems) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
        //...item means mere items ka sab data rakho(like img,price,name) qty chodkar and increase qty by 1 and if this condition is going to be false return item
      } else {
        state.cart.push(action.payload); //Payload meamns jo data h use action ki help se state k cart m push kr diya
      }
    },
    removeFromCart: (state, action) => {
      // console.log("Removing item with id:", action.payload.id);
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      // console.log("Updated cart:", state.cart);
    }, //2nd ACTION/Function for removing item from cart
    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      ); // same which we do with existing item
    },
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      ); // same which  we do with existing item
    },
  },
});

//IN Slice we have three thing As
//1:- Name
//2:- initialState
//3:-Reducer({multiple action/Fn. are inside it })

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  CartSlice.actions;
export default CartSlice.reducer;
