import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux"; //jaise humne addTocart reducer ko use krne k liye dispatch m dalna pda waise hi useSelector cart ko bulane m matlab us item ko select krne m help krta h . Mainly helps in selctg the store

//The useSelector hook allows access to the state stored in a Redux store, while the useDispatch hook enables dispatching of actions to the store

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart); // we select state and state.cart meas we select the cart inside our store and state.cart.cart menas w eselect the cart which is inside the store's cart' cartSlice // means we selct cart which is inside cartslice. If in Our CartSlice if name is alpha then we write state.cart.alpha
  // console.log(cartItems);
  const totalQty = cartItems.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      {/* cart section full */}
      <div
        className={`fixed right-0 top-0 z-50 w-full lg:w-[20vw] p-5 h-full bg-white mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500`} // means if activecart==false translate -x -0 else translate-x-full
      >
        {/* upeer cart section */}
        <div className="flex justify-between items-center my-3">
          <span className="font-bold text-xl text-gray-800">MY ORDERS</span>

          <IoMdClose
            onClick={() => setActiveCart(!activeCart)} //means humara cart open h to activecart==true means cart open h & jaise hi hum cut par click krenge we set its state to !activecart means if activeCart == true(cart open h) set it to false kr diya so cart page closed ho gya
            className="border-2 border-gray-600 text-gray-600 font-bold text-2xl hover:text-white hover:bg-red-300 hover:border-none transition-all ease-linear rounded-md p-1 cursor-pointer"
          />
        </div>

        {/* cart items Styling Setion*/}
        {/* <ItemCard /> */}

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            YOUR CART IS EMPTY
          </h2>
        )}

        {/* Decription nd CheckOut Cart Section */}
        <div className="bottom-0 absolute flex flex-col gap-2 items-start ">
          <h3 className="text-gray-800 font-semibold">Items : {totalQty}</h3>
          <h3 className="text-gray-800 font-semibold">
            Total Amount : {totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />

          <button
            onClick={() => navigate("/success")}
            className="px-3 py-2 text-center text-sm w-[90vw] lg:w-[18vw] font-bold bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white mb-5"
          >
            Checkout
          </button>
        </div>
      </div>

      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
};

export default Cart;
